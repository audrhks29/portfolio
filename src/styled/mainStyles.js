import styled from 'styled-components';

export const MainContainer = styled.div`
  height: ${(props) => props.heightProp}px;
  position: relative;
  overflow: hidden;
`
MainContainer.shouldForwardProp = (prop) => prop !== 'heightProp';
