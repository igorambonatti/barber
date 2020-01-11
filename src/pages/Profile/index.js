import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import AvatarInput from './AvatarInput/index';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(signOut());
  }

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={profile}>
        <AvatarInput name="avatar_id" />
        <Input name={'name'} placeholder="Seu nome completo" />
        <Input name="email" placeholder="Seu endereço de email" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">Atualizar</button>
      </Form>
      <button onClick={handleSignOut} type="button">
        Sair
      </button>
    </Container>
  );
}
