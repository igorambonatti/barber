import React from 'react';

import { Link } from 'react-router-dom';

import Notifications from '../Notifications/index';
import logo from '~/assets/logo-icon.svg';

import { Container, Content, Profile } from './styles';

import { useSelector } from 'react-redux';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="goBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Igor Ambonatti"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
