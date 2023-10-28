import styled from 'styled-components';
import { liColor, conBgColor, liHoverColor, liOnColor, pathColor, textColor, pathHoverColor } from './themeColorStyles';

// RightContent.jsx
export const RightContentContainer = styled.div`
  position:absolute;
  top:0;
  right:0;
  height: 100%;
  width: ${props => (props.stateProps ? '60%' : '0%')};
  transition: width 0.6s ease;
  background-color: ${conBgColor};
`

// Menu.jsx
export const MenuContainer = styled.ul`
  width:100%;
  height:35px;
  line-height:35px;
  display: flex;
  align-self:center;
  margin:10px 0 0 10px;
  color:${textColor};
  font-size:14px;
  li{
    background-color:${liColor};
    width:200px;
    cursor: pointer;
    text-align:center;
    border-radius: 10px 10px 0 0 ;
    display:flex;
    padding:0 10px;
    .text_box{
      height: 100%;
      display:flex;
      vertical-align:middle;
      align-items:center;
      width:100%;
      img{
      height:25px;
      vertical-align:middle;
      }
      span{
        /* display: block; */
        margin-left:10px;
      }
    }
    .close_box{
      margin-left:auto;
      i{
        padding:3px;
      }
      i:hover{
        background-color: ${pathColor};
      }
    }
    
  }
  li.on, li.on:hover{
    background-color: ${liOnColor};
  }
  li:hover{
    background-color: ${liHoverColor};
  }
`

// Path.jsx
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
    span{
      font-size:14px;
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
      line-height:30px;
      padding:0 10px;
      display:flex;
      li{
        margin-right:10px;
        i{
          vertical-align: middle;
        }
      }
      .can_hover{
        cursor: pointer;
        padding : 0 5px;
      }
      .can_hover:hover{
        background-color: ${pathHoverColor};
      }
    }
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  padding:20px;
  background-color: ${conBgColor};
  .section{
    img{
      width:100px;
    }
  }
`
RightContentContainer.shouldForwardProp = (prop) => prop !== 'stateProps';

// Home.jsx
export const HomeContainer = styled.div`
  ul{
    display: flex;
    width: 100%;
    li{
      display: flex;
      flex-direction:column;
      text-align:center;
      margin-right:20px;
      width:20%;
    }
    li:hover{
      background-color: ${pathColor};
    }
  }
`