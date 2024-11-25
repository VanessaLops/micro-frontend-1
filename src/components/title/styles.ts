import styled from 'styled-components';
import { TitleProps } from 'design-system';
import { theme } from '../../../util/theme'; 

export const StyledTitle = styled.h1<TitleProps>`
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.fontSize || theme.fontSizes.xlarge};
  font-weight: ${(props) => props.fontWeight || theme.fontWeights.regular};
  color: ${(props) => props.color || theme.colors.black};
  text-align: center;
  line-height: 29.57px;
  padding: ${(props) => props.padding || theme.spacing.medium};
  margin: ${(props) => props.margin || theme.spacing.large};
  border-radius: 8px;
  width: ${(props) => props.width || theme.layout.width};
  height: ${(props) => props.height || theme.layout.height};
  opacity: ${(props) => props.opacity || theme.layout.opacity};
  top: ${(props) => props.top || theme.layout.top};
  left: ${(props) => props.left || theme.layout.left};

`;
