import React, { useState } from 'react';
import { FormProps } from 'design-system';
import Title from '../title/title';
import Input from '../input/input';
import Button from '../buttom/buttom';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC<FormProps> = () => {
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // const handleButtonClick = () => {
  //   window.location.href = 'https://micro-frontend-2-theta.vercel.app';
  // };
  const handleButtonClick = () => {
    navigate('/micro-frontend-2'); 
  };

  
  return (
    <>
      <Title children="Olá, seja bem-vindo!" padding={'0px'} />
      <Input
        value={name}
        onChange={handleInputChange}
        placeholder="Digite o seu nome:"
        margin="0px 0" borderColor={''} />
      <Button
        variant="primary"
        disabled={false}
        onClick={handleButtonClick}
      />
    </>
  );
};

export default LoginForm;
