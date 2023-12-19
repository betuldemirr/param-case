"use client";

import React, {useState} from 'react';
import {Alert, Button, Input} from 'antd';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useRouter} from 'next/navigation';
import {setAuthToken} from '../util/AuthUtils';
import {useDispatch} from 'react-redux';
import {setUser} from '../features/userSlice';

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const onLoginFormSubmit = async () => {
        try {
            setLoading(true);
            if (!email || !code) {
                throw new Error('Email and code are required');
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                throw new Error('Invalid email format');
            }
            const authResponse = await fetch('https://caseapi-fe.paramtech.com.tr/api/auth/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    code,
                }),
            });

            if (!authResponse.ok) {
                throw new Error('Credentials failed');
            }

            const data = await authResponse.json();
            dispatch(setUser(data.user));
            setAuthToken(data.token);
            router.push('/package-selection');
        } catch (error:any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
            <div className="flex items-center justify-center h-screen">
                <div className="w-96 p-8 bg-white rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    {error && <Alert message={error} type="error" showIcon />}
                    <div className="mb-4"></div>
                    <Input
                        placeholder="Enter your e-mail"
                        prefix={<UserOutlined />}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="mb-4"></div>
                    <Input
                        type = 'password'
                        placeholder="Enter your code"
                        prefix={<LockOutlined />}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <div className="mb-4"></div>
                    <Button type="primary" onClick={onLoginFormSubmit} loading={loading}>
                        Login
                    </Button>
                </div>
            </div>
    );
};

export default Login;