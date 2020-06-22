import React from 'react';

import { Container } from './styles';

// nesta interface foi adicionada a propriedade className para que esse
// componente possa receber estilização de um componente superior
// através do styled-component
interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
