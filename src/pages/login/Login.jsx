import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../components/navbar/Navbar.styled';
import { FlexColumn } from '../../styles/Containers.styles';
import { Button, Form, Input } from '../../styles/Inputs.styles';
import { PageCenter } from '../../styles/PageCenter.styles';
import bgImg from '../../img/bgImg.jpg';
const Login = ({ handleLogin }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        handleLogin(password, userName, setPassword, setUserName);
        e.preventDefault();
    };

    const navigate = useNavigate();

    return (
        <PageCenter bgImg={bgImg}>
            <Form>
                <FlexColumn>
                    <Logo>Explorateur de Saveur</Logo>
                    <Input
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        value={userName}
                        required
                        placeholder="USERNAME"
                    />
                    <Input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        type="password"
                        required
                        placeholder="PASSWORD"
                    />
                    <Button
                        onClick={(e) => {
                            handleSubmit(e);
                            navigate('/');
                        }}
                        type="submit">
                        Login
                    </Button>
                </FlexColumn>
            </Form>
        </PageCenter>
    );
};

export default Login;
