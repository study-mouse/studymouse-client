import React from 'react';
import styled from 'styled-components';
import { fontDefault } from '../constants/styles';
import * as styles from '../constants/styles';
import { useDispatch } from 'react-redux';
import { getUserInfoActionRequest } from '../actions';
import GoogleLogin from 'react-google-login';
import Axios from 'axios';

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // dispatch(getUserInfoActionRequest());
  };

  const responseGoogle = (response) => {
    console.log(response);
    Axios.post('http://192.168.219.111:8080/api/mouse/login', {
      name: response.profileObj.name,
      email: response.profileObj.email,
      picture: response.profileObj.imageUrl,
    }).then((response) => {
      console.log('response', response);
      if (response.status === 200) {
        history.push('/');
      }
    });
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
          <GoogleLogin
            clientId="490989436300-gsdo4tgdmcmfl753mm475dkca70pbtrp.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
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
