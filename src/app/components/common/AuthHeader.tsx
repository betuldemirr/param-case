"use client";

import React from 'react';
import {User} from "@/app/models/User";
import { Layout, Menu, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

interface HeaderProps {
    user: User | null;
}
const { Header } = Layout;

const AuthHeader: React.FC = () => {
    const user = useSelector(selectUser);

    return (
        <Header className="header">
            <div style={{ float: 'right', color: 'white' }}>
                {user ? (
                    <p><UserOutlined />
                        {user.email}
                    </p>
                ) : (
                    <Button type="primary" href="/login">
                        Giriş Yap
                    </Button>
                )}
            </div>
        </Header>
    );
};

export default AuthHeader;