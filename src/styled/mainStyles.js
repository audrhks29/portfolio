import styled from 'styled-components';
import { textColor } from './themeColorStyles';

// main.jsx
export const MainContainer = styled.div`
  height: ${(props) => props.heightProp}px;
  position: relative;
  overflow: hidden;
  color:${textColor}
`
MainContainer.shouldForwardProp = (prop) => prop !== 'heightProp';
