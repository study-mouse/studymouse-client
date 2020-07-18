import React from 'react';
import styled from 'styled-components';
import { fontDefault } from '../constants/styles';
import * as styles from '../constants/styles';

const LoginPage = ({ history }) => {
  const handleSubmit = () => {
    alert('Google login');
    history.push('/');
  };
  return (
    <Section>
      <Container>
        <TitleContainer>
          <TitleContent>Start Using</TitleContent>
          <TitleContent big>StudyMouse!</TitleContent>
          <TitleContent small>Make your own voca-list</TitleContent>
          <TitleContent small>
            And archive through memorizing the word
          </TitleContent>
        </TitleContainer>
        <GoogleLoginContainer>
          <GoogleLoginButton onClick={() => handleSubmit()}>
            <img
              alt="googlelogo"
              src={
                'https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1'
              }
              style={{ height: 20, marginRight: 10 }}
            />
            SignIn with Google
          </GoogleLoginButton>
        </GoogleLoginContainer>
        <img
          alt={'logingif'}
          src={require('../assets/login.gif')}
          style={{ width: '50%' }}
        />
      </Container>
    </Section>
  );
};

const GoogleLoginContainer = styled.div`
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const GoogleLoginButton = styled.button`
  cursor: pointer;
  background-color: #fff4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 4rem;
  padding: 20px 30px;
  border-radius: 30px;
  border: #fff solid 2px;
  font-size: 20px;
  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

const TitleContent = styled(fontDefault)`
  font-size: ${(props) => {
    if (props.big) {
      return '60px';
    } else if (props.small) {
      return '20px';
    } else {
      return '40px';
    }
  }};
  font-weight: 900;
`;

const TitleContainer = styled.div`
  color: ${styles.colors.white};
  margin-top: 10rem;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 5rem;
`;

export default LoginPage;
