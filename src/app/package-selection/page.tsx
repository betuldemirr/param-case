"use client";

import React, { useEffect, useState } from 'react';
import { Package } from '../models/Package';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Checkbox, Col, Row, Space, Typography} from 'antd';
import {
    selectUser,
    selectSelectedPackages,
    selectPackage,
    deselectPackage,
    selectTotalAmount
} from '../features/userSlice';
import { getAllPackages } from '../services/packages';
import {useRouter} from 'next/navigation';
interface PackageSelectionProps {
    packages: Package[];
}

const PackageSelection: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const selectedPackages = useSelector(selectSelectedPackages);
    const totalBasketAmount = useSelector(selectTotalAmount);
    const [packages, setPackages] = useState<Package[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllPackages();

                setPackages(response);
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };

        fetchData();
    }, []);

    const onPackageSelection = (packageId: string) => {
        const selectedPackage = packages.find((p) => p._id === packageId);

        if (selectedPackage) {
            if (selectedPackages.includes(selectedPackage)) {
                dispatch(deselectPackage(packageId));
            } else {
                dispatch(selectPackage(selectedPackage));
            }
        }
    };

    const onRedirectToCheckOut = () => {
        console.log('Selected Packages:', selectedPackages);
        router.push('/checkout')
    };


    return (
        <div>
            <Row gutter={16}>
                {packages.map((p) => (
                    <Col className={'mb-3'} key={p._id} span={8}>
                        <Card bordered={false}>
                            <Row gutter={16}>
                                <Col span={6}>
                                    <img src={p.imagePath} alt="Package Image" width={120} height="100%" />
                                </Col>
                                <Col span={18}>
                                    <Row gutter={16} align="middle">
                                        <Col span={16}>
                                            <Typography.Title level={4} style={{ marginBottom: 0 }}>{p.name}</Typography.Title>
                                        </Col>
                                        <Col span={8} style={{ textAlign: 'right' }}>
                                            <Typography.Text style={{ fontSize: '1.2rem' }}>{p.price} {p.currency}</Typography.Text>
                                        </Col>
                                    </Row>
                                    <Space direction="vertical">
                                        <p>{p.details.join(', ')}</p>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Checkbox
                                                checked={selectedPackages.includes(p)}
                                                onChange={() => onPackageSelection(p._id)}
                                            >
                                                Select Package
                                            </Checkbox>
                                        </div>
                                    </Space>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                <Typography>Seçilen Paket Tutarı: <b>{totalBasketAmount} TL</b></Typography>
                <Button onClick={() => onRedirectToCheckOut()} type="primary">Devam Et</Button>
            </div>
        </div>
    );
};

export default PackageSelection;