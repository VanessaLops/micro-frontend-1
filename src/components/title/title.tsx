import React from 'react';
import { TitleProps } from 'design-system';
import { StyledTitle } from './styles';
import { theme } from '../../../util/theme';

const Title: React.FC<TitleProps> = ({
  children,
  level = 2,
  color,
  fontSize,
  fontWeight,
  background,
  width,
  height,
  opacity,
  top,
  left,
  padding,
  margin,

}) => {
  return (
    <StyledTitle
      level={level}
      color={color || theme.colors.black}
      fontSize={fontSize || theme.fontSizes.xlarge}
      fontWeight={fontWeight || theme.fontWeights.regular}
      background={background || theme.colors.background}
      padding={padding || theme.spacing.medium}
      margin={margin || theme.spacing.small}
      width={width || theme.layout.width}
      height={height || theme.layout.height}
      opacity={opacity || theme.layout.opacity}
      top={top || theme.layout.top}
      left={left || theme.layout.left}

    >
      {children}
    </StyledTitle>
  );
};

export default Title;
