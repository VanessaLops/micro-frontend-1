import styled from 'styled-components';
import { ButtonProps } from 'design-system';
import { theme } from '../../../util/theme';

export const StyledButton = styled.button<ButtonProps>`
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.fontSize || theme.fontSizes.medium};
  font-weight: ${(props) => props.fontWeight || theme.fontWeights.regular};
  color: ${(props) => props.color || theme.colors.white};
  background-color: ${(props) => props.backgroundColor || theme.colors.primary};
  padding: ${(props) => props.padding || theme.spacing.medium};
  width: ${(props) => props.width || '521px'};
  height: ${(props) => props.height || '60px'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  border: none;
  margin: ${(props) => props.margin || theme.spacing.small};
  opacity: ${(props) => props.opacity || '1'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.variant === 'primary' ? theme.colors.black : theme.colors.primary};
  }

  &:disabled {
    background-color: ${theme.colors.text};
  }
`;
