import styled from 'styled-components';
import { textColor } from './themeColorStyles';

// main.jsx
export const MainContainer = styled.div`
  width: 100%;
  height: ${(props) => props.heightProp}px;
  position: relative;
  color:${textColor};
`
MainContainer.shouldForwardProp = (prop) => prop !== 'heightProp';
