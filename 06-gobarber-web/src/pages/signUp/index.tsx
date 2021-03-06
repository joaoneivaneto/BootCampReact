import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationError';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';

import { Background, Container, Content } from './styles';

const SignUp: React.FC = function () {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatorio'),
        email: Yup.string()
          .required('E-mail Obrigatorio')
          .email('Digite um email valido'),
        password: Yup.string()
          .required('senha obrigatoria')
          .min(6, 'no minimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Votar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
