import styled from 'styled-components';
import { InputProps } from 'design-system';
import { theme } from '../../../util/theme';

export const StyledInput = styled.input<InputProps>`
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.fontSize || theme.fontSizes.medium};
  font-weight: ${(props) => props.fontWeight || theme.fontWeights.regular};
  color: ${(props) => props.color || theme.colors.primary};
  text-align: left;
  line-height: 29.05px;
  background-color: ${(props) => props.backgroundColor || theme.colors.backgroundClean};
  border-radius: 8px;
  border: 1px solid ${(props) => props.borderColor || theme.colors.border}; 
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || '60px'};
  left: ${(props) => props.left || '0px'};
    &:focus {
    border-color: ${(props) => props.borderColor || theme.colors.borderClean};
    outline: none;
  }
   @media (max-width: 768px) {
    width: 300px;
      
  }
`;
