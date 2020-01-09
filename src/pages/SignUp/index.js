import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('*Insira seu nome'),
    email: Yup.string()
      .email('*Insira um email válido')
      .required('*O email é obrigatório'),
    password: Yup.string().required('*A senha é obrigatória'),
  });

  return (
    <>
      <Link to="/">
        <img src={logo} alt="goBarber" />
      </Link>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu Nome Completo" />
        <Input name="email" placeholder="Insira seu email" />
        <Input name="password" type="password" placeholder="Crie sua senha" />
        <button type="submit">Cadastrar</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
