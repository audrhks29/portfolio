import styled from 'styled-components';
import { pathColor } from './themeColorStyles';

export const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image:url("/images/wallpaper.jpg");
  background-size:cover;
  padding:10px;
  font-size:14px;
  .polder_box{
    width: 110px;
    padding: 10px;
    img{
      width: 100%;
    }
    p{
      text-align:center;
      letter-spacing:0.5px;
    }
  }
  .polder_box:hover{
    background-color:${pathColor};
  }
`