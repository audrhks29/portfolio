import styled from 'styled-components';
import { bgColor, conBgColor, liHoverColor, liOnColor, pathColor, textColor } from './themeColorStyles';

export const RightContentContainer = styled.div`
  position:absolute;
  top:0;
  right:0;
  height: 100%;
  width: ${props => (props.stateProps ? '60%' : '0%')};
  transition: width 0.6s ease;
  background-color: ${bgColor};
`

export const MenuContainer = styled.ul`
  width:100%;
  height:35px;
  line-height:35px;
  display: flex;
  align-self:center;
  margin:10px 0 0 10px;
  color:${textColor};
  li{
    background-color:${bgColor};
    width:200px;
    cursor: pointer;
    text-align:center;
    border-radius: 10px 10px 0 0 ;
    display:flex;
    align-items:center;
    padding:0 10px;
    img{
      height:25px;
    }
    span{
      margin-left:10px;
    }
  }
  li.on{
    background-color: ${liOnColor};
  }
  li:hover{
    background-color: ${liHoverColor};
  }
`

export const PathContainer = styled.div`
  color:${textColor};
  width:100%;
  height:45px;
  background-color: ${liOnColor};
  border-top: 1px solid ${conBgColor};
  display: flex;
  position: relative;
  .icon_box{
    display: flex;
    width:200px;
    height:100%;
    align-items:center;
    justify-content:space-around;
    li{
      cursor:pointer;
      width:32px;
      height:32px;
      text-align:center;
      position: relative;
      i{
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%) translateY(1px);
      }
    }
    li:hover{
      background-color: ${pathColor};
    }
  }
  .path_box{
    width: calc(100% - 200px);
    height:45px;
    display:flex;
    position:absolute;
    top:50%;
    left:200px;
    transform:translateY(-50%);
    align-items:center;
    .path_box_inner{
      background-color: ${pathColor};
      width: 100%;
      height:32px;
      line-height:32px;
      padding:0 10px;
      display:flex;
      li{
        margin-right:10px;
      }
    }
  }
`

export const ContentContainer = styled.div`
  padding:10px;
  background-color: ${conBgColor};
  .section{
    img{
      width:100px;
    }
  }
`
RightContentContainer.shouldForwardProp = (prop) => prop !== 'stateProps';