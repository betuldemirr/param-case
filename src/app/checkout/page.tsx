"use client";
import React, {useEffect, useState} from 'react';
import {Alert, Button, Card, Col, DatePicker, Flex, Form, Input, InputNumber, List, Row, message} from 'antd';
import {useSelector} from 'react-redux';
import {selectSelectedPackages, selectTotalAmount} from "@/app/features/userSlice";
import {Package} from "@/app/models/Package";
import {CheckoutRequest} from "@/app/models/CheckoutRequest";
import {Dayjs} from 'dayjs';
import {fetchWithInterceptor} from "@/app/services/api";
import {getAgreement} from "@/app/services/checkout";
import {Agreement} from "@/app/models/Agreement";
import isNumeric from "antd/es/_util/isNumeric";


const CheckOut: React.FC = () => {
    const [error, setError] = useState('');
    const selectedPackages = useSelector(selectSelectedPackages);
    const selectedTotalAmount = useSelector(selectTotalAmount);
    const [agreement, setAgreement] = useState<Agreement>();
    const [cardHolderName, setCardHolderName] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
    const [expireDate, setExpireDate] = useState<Dayjs | null>(null);
    const [cvv, setCVV] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAgreement();
                setAgreement(response);
            } catch (error) {
                console.error('Error fetching agreement:', error);
            }
        };
        fetchData();
    }, []);

    const onPaymentButtonClick = async () => {
        const cardNumberAsString = cardNumber.join('');
        const cardNumberAsNumber = parseInt(cardNumberAsString, 10);

        if (!isValidCardHolderName(cardHolderName)) {
            setError('İsim Soyisim boş olamaz.');
            return;
        }

        if (!isValidCardNumber(cardNumberAsNumber)) {
            setError('Kart numarası 16 haneli olmalıdır.');
            return;
        }

        if (!isValidCVV(cvv)) {
            setError('CVV 3 haneli olmalıdır.');
            return;
        }

        const packageIds = selectedPackages.map((p: Package) => Number(p._id));

        const checkoutRequest: CheckoutRequest = {
            packageIds,
            cardHolderName: cardHolderName ?? '',
            cardNumber: cardNumberAsNumber ?? 0,
            expireDate: expireDate?.toISOString() ?? '',
            cvv: cvv?.toString() ?? '',
            totalAmount: selectedTotalAmount,
            currency: 'BMD',
        };

        try {
            const response = await fetchWithInterceptor('/api/payment', {
                method: 'POST',
                body: JSON.stringify(checkoutRequest),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            message.success('Ödeme başarılı!');
        } catch (error:any) {
            setError(error.message);
        }
    };

    const isValidCardHolderName = (cardHolderName: string | null): boolean => {
        return cardHolderName !== null && cardHolderName.toString().length > 0;
    };

    const isValidCardNumber = (cardNumber: number | null): boolean => {
        return cardNumber !== null && cardNumber.toString().length === 16;
    };

    const isValidCVV = (cvv: string): boolean => {
        return cvv !== null && cvv.toString().length === 3;
    };

    const onCardNumberChange = (index: number, value: string) => {
        if (/^\d*$/.test(value) && value.length <= 4) {
            const newCardNumber = [...cardNumber];
            newCardNumber[index] = value;
            setCardNumber(newCardNumber);
        }
    };

    const onCVVChange = (value:any) => {
        if (isNumeric(value) && value.length <= 3) {
            setCVV(value);
        }
    };

    return (
        <Row>
            <Col span={16}>
                {error && <Alert message={error} type="error" showIcon />}
                <Card title="Kart Bilgileri" bordered={true}>
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 20 }}
                        layout="vertical"
                        style={{ maxWidth: 600 }}
                    >
                        <Form.Item label="Kart Üzerindeki İsim Soyisim">
                            <Input
                                value={cardHolderName}
                                onChange={(e) => setCardHolderName(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item label="Kart Numarası">
                            <div>
                                {cardNumber.map((value, index) => (
                                    <InputNumber
                                        className={"mr-1"}
                                        key={index}
                                        value={value}
                                        onChange={(newValue) => onCardNumberChange(index, String(newValue))}
                                    />
                                ))}
                            </div>
                        </Form.Item>
                        <Form.Item label="Son Kul. Tar.">
                            <DatePicker
                                value={expireDate}
                                picker="month"
                                onChange={(date) => setExpireDate(date)}
                                    />
                        </Form.Item>
                        <Form.Item label="CVV/CVC">
                            <Input
                                style={{ width: '60px' }}
                                type="text"
                                value={cvv}
                                onChange={(e) => onCVVChange(e.target.value)}
                            />
                        </Form.Item>
                    </Form>
                </Card>
                <br/>
                <Card title="Sözleşme" bordered={true}>
                    {agreement?.content}
                </Card>
            </Col>
            <Col span={7} offset={1}>
                <Card title="Sepetteki Paketler" bordered = {true}>
                    <List
                        dataSource={selectedPackages}
                        renderItem={(item: Package, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.name}
                                    description={item.price + item.currency}
                                />
                            </List.Item>
                        )}
                    />
                    <Flex vertical gap="small" style={{ width: '100%' }}>
                        <Button onClick={() => onPaymentButtonClick()} type="primary">Ödeme Yap</Button>
                    </Flex>
                </Card>
            </Col>
        </Row>
    );
};

export default CheckOut;