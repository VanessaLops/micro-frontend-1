
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%; 
  background-color: #f7fafc;
  gap: 12px;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;
