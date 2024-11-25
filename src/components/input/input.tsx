import React from 'react';
import { InputProps } from 'design-system';
import { StyledInput } from './styles';
import { theme } from '../../../util/theme';

const Input: React.FC<InputProps> = ({

  
}) => {

 
  return (
    <StyledInput
      placeholder="Digite o seu nome:"
      value=''
      onChange={() => console.log("")}
      color={theme.colors.text}
      backgroundColor={theme.colors.background}
      border={`0.8px solid ${theme.colors.border}`}
      borderRadius={theme.borderRadius}
      width="520px"
      height="60px"
      margin={theme.spacing.medium}
      opacity="1"
      left="0px"
      borderColor=""
    />
  );
};

export default Input;
