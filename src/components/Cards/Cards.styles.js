import styled from '@emotion/styled';
import { Grid } from '@material-ui/core';

export const Container = styled.div`
  margin: 50px 0;
`;

export const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 2em;
  overflow: hidden;
  position: absolute;
`;

export const StyledGrid = styled(Grid)`
  margin: 0 2% !important;

  border-bottom: ${props =>
    props.type === 'Infected'
      ? '10px solid rgba(0, 0, 255, 0.5)'
      : props.type === 'Recovered'
      ? '10px solid rgba(0, 255, 0, 0.5)'
      : '10px solid rgba(255, 0, 0, 0.5)'};

  @media only screen and (max-width: 770px) {
    margin: 2% 0 !important;
  }
`;
