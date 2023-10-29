import styled from 'styled-components';
import { liColor, conBgColor, liHoverColor, liOnColor, pathColor, textColor, pathHoverColor, borderColor } from './themeColorStyles';

// RightContent.jsx
export const RightContentContainer = styled.div`
  position:absolute;
  top:0;
  right:0;
  min-height:100%;
  width: ${props => (props.stateProps ? '60%' : '0%')};
  /* display:${props => (props.stateProps ? 'block' : 'none')}; */
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
  border-bottom:1px solid ${borderColor};
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

// Home.jsx
export const HomeContainer = styled.div`
  .polder{
    display: flex;
    width: 100%;
    li{
      display: flex;
      flex-direction:column;
      text-align:center;
      width:20%;
      padding:10px;
    }
    li:hover{
      background-color: ${pathColor};
    }
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  padding:20px;
  font-size:20px;
  h3{
    font-size:30px;
    width:100%;
    font-weight:700;
  }
  .section{
    display: flex; 
    flex-wrap: wrap;
    padding:25px 0;
    .title_box{
      width:100%;
      h4{
        font-size:24px;
        margin-bottom:10px;
      }
    }
  }

    // AboutMe.jsx 
  .about_me_content{
    .image_box{
      height:360px;
      margin-right:40px;
      img{
        height:100%;
      }
    }
    .my_info_table{
      tr{
        th,td{
          vertical-align:middle;
        }
        th{
          text-align:left;
          width:120px;
        }
      }
    }
    .certificate_table{
      tr{
        th,td{
          vertical-align:middle;
          text-align:center;
          height:50px;
          padding:0 10px;
          font-size:18px;
        }
      }
      th{
        font-weight:700;
      }
      td:nth-child(2){
        text-align:left;
      }
    }
  }

  // Skill.jsx 
  .skill_content{
    font-size:16px;
    .skill_list{
      display:flex;
      height:50px;
      align-items:center;
      .skill_name{
        width:200px;
      }
      .graph_box{
        width:700px;
        height:100%;
        display:flex;
        align-items:center;
        .graph_inner_box{
          background-color:#fff;
          height:20px;
          .skill_name{

          }
        }
      }
    }
    .flex_box{
      display:flex;
      img{
        width:200px;
      }
    }
  }

  // project.jsx
  .project_content{
    ul{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      .personalProject_list{
        width:30%;
        padding:10px;
        .projectImage{
          img{
            width:100%;
          }
        }
        .projectName{
          text-align:center;
        }
      }
      .personalProject_list:hover{
        background-color: ${pathColor};
      }
    }
  }
  
`
RightContentContainer.shouldForwardProp = (prop) => prop !== 'stateProps';