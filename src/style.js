import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 30px;
  line-height: 41px;
  letter-spacing: 0.02em;
  color: #300e09;
`;

export const Form = styled.form`
  gap: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  margin-bottom: 5px;
  letter-spacing: 0.2em;
`;

export const Input = styled.input`
  height: 52px;
  padding: 0 10px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #343434;
`;

export const Button = styled.button`
  height: 52px;
  width: 155px;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  background-color: #343434;
  text-transform: uppercase;

  &:hover {
    background-color: #2e2c2c;
  }
`;

export const Sucess = styled.p`
  color: green;
`;

export const Error = styled.p`
  color: red;
`;
