import React from 'react';
import { ButtonProps } from 'design-system';
import { StyledButton } from './styles';
import { theme } from '../../../util/theme';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  color,
  fontSize,
  fontWeight,
  backgroundColor,
  padding,
  width,
  height,
  borderRadius,
  margin,
  opacity,
  onClick}) => {


  return (
    <StyledButton
      onClick= {onClick}
      variant={variant}
      disabled={disabled}
      color={color || theme.colors.white}
      fontSize={fontSize || theme.fontSizes.medium}
      fontWeight={fontWeight || theme.fontWeights.regular}
      backgroundColor={backgroundColor || (variant === 'primary' ? theme.colors.primary : theme.colors.secondary)}
      padding={padding || theme.spacing.medium}
      width={width || '521px'}
      height={height || '60px'}
      borderRadius={borderRadius || '4px'}
      margin={margin || theme.spacing.small}
      opacity={opacity || '1'}
    >
      Entrar
    </StyledButton>
  );
};

export default Button;
