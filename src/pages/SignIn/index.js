import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Content } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  //const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));

  }

  return (
    <Container>
      <Content>
        <h1>Seja Bem Vindo(a)</h1>

        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">Acessar</button>
        </Form>
      </Content>
    </Container>
  );
}
