import styled from 'styled-components';
import { shade } from 'polished';
import signinbackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
  img {
    margin-top: 40px;
  }
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin: 24px;
    }

    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #302e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
        text-decoration-line: underline;
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 2px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
      text-decoration-line: underline;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signinbackground}) no-repeat center;
  background-size: cover;
`;
