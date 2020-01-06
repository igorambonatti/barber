import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { updateProfileRequest } from "~/store/modules/user/actions";
import { Container } from "./styles";

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={profile}>
        <Input name={"name"} placeholder="Seu nome completo" />
        <Input name="email" placeholder="Seu endereço de email" />
        <hr />
        <Input name="oldPassword" placeholder="Sua senha atual" />
        <Input name="Password" placeholder="Nova senha" />
        <Input name="confirmPassword" placeholder="Confirmação de senha" />
        <button type="submit">Atualizar</button>
      </Form>
      <button type="button">Sair</button>
    </Container>
  );
}
