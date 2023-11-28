import styled from 'styled-components';
import { liColor, conBgColor, liHoverColor, liOnColor, pathColor, textColor, pathHoverColor, borderColor, polderBorderColor, proPopupBgColor, galleryBgColor, skeletonGradient } from './themeColorStyles';

// Polder.jsx
export const PolderContainer = styled.div`
  width:80%;
  transition: width 0.6s ease;
  background-color:${liColor};
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: 1px solid ${polderBorderColor};
  border-radius:10px;
  overflow:hidden;
  .popup_close_box{
    position:absolute;
    top:0;
    right:0;
    padding:4px 10px;
    cursor: pointer;
  }
  .popup_close_box:hover{
    background-color: #C42B1C;
  }
  
`

// Menu.jsx
export const MenuContainer = styled.ul`
  width:100%;
  height:100%;
  line-height:35px;
  display: flex;
  align-self:center;
  padding:10px 0 0 10px;
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
      width:220px;
      height:252px;
      padding:20px;
      .img_box{
        width:180px;
        height:180px;
        img{
          width:100%;
          height: 100%;
        }
      }
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
  height:800px;
  overflow: auto;
  background-color: ${conBgColor};
  border-radius:0 0 10px 10px;
  h3{
    font-size:30px;
    width:100%;
    font-weight:700;
    padding-bottom:20px;
    border-bottom: 1px solid ${borderColor};
  }
  .section{
    display: flex; 
    flex-wrap: wrap;
    padding:20px 0;
    border-bottom: 1px solid ${borderColor};
    .title_box{
      width:100%;
      h4{
        font-size:24px;
        margin-bottom:10px;
        font-weight:700;
      }
    }
  }
  .section:last-child{
    border:none;
  }

  // AboutMe.jsx 
  .about_me_content{
    .image_box{
      width:280px;
      height:360px;
      margin-right:40px;
      animation: ${skeletonGradient} 1.8s infinite ease-in-out;
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
      .skill_image{
        width:30px;
        height:30px;
        margin-right:10px;
        img{
          width:100%;
          height:100%;
        }
      }
      .skill_name{
        width:200px;
        font-weight:600;
      }
      .graph_box{
        width:700px;
        height:100%;
        display:flex;
        align-items:center;
        .graph_inner_box{
          height:20px;
          animation:stack 1s 1;
          background-image: linear-gradient(90deg, #999 , #000);
          box-shadow : 3px 3px 5px 4px #333 ;
          border: 1px solid #ccc;
        }
      }
    }
    @keyframes stack{
      0%{ width: 0; opacity:0;}
      100%{  opacity:1;}
    }
    .flex_box{
        display: flex;
        .learningName{
          text-align:center;
        }
      img{
        width:150px;
        padding:20px;
      }
    }
  }

  // project.jsx & flex_box class
  .project_content, .flex_box{
    ul{
      display:flex;
      flex-wrap:wrap;
      .projectList{
        width:220px;
        padding:20px;
        display: flex;
        flex-direction: column;
        justify-content:flex-end;
        align-items:center;
        cursor: pointer;
        .projectImage{
          img{
            max-width:100%;
            max-height:220px;
          }
        }
        .projectName{
          text-align:center;
        }
      }
      .projectList:hover,.learningList:hover{
        background-color: ${pathColor};
      }
    }
  }
`

// ProjectPopup.jsx
export const ProjectPopupContainer = styled.div`
  width: 50%;
  height: 850px;
  position: absolute;
  background: ${proPopupBgColor};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${polderBorderColor};
  border-radius: 10px;
  color:${textColor};
  overflow: hidden;
  .top_box{
    display: flex;
    align-items:center;
    .gallery_icon{
      font-size:20px;
      padding:10px;
      margin-right:10px;
      background: ${galleryBgColor};
    }
    .projectPopup_close_box{
      position:absolute;
      top:0;
      right:0;
      padding:4px 10px;
      cursor: pointer;
    }
    .projectPopup_close_box:hover{
      background-color: #C42B1C;
    }
  }
  .popup_desc{
    margin:20px 0;
    .image_box{
      display:flex;
      flex-direction:column;
      align-items: center;
      height: 520px;
      img{
        max-width:90%;
        max-height:100%;
      }
    }
    .link_box{
      margin-top:20px;
      text-align:center;
      font-size:18px;
      height:96px;
      span{
        font-size:16px;
      }
      a{
        color:${textColor};
      }
      i{
        vertical-align:middle;
        margin-left:10px;
      }
    }
  }
  .slide_image_box{
    max-width:90%;
    display:flex;
    justify-content:center;
    width:100%;
    margin:auto;
    padding:10px;
    background-color: #2e2e2e;
    .slide_image_list{
      width:85px;
      height:85px;
      padding:5px;
      margin:0 5px;
      display:flex;
      align-items:center;
      background-color: #393939;
      border-radius:10px;
      cursor: pointer;
      img{
        margin:0 auto;
        max-width:100%;
        max-height:100%;
      }
    }
    .slide_image_list:hover{
      background-color: #454545;
    }
    .slide_image_list.on{
      border:1px solid #DB9FE5;
      background-color: #393939;
    }
  }
  
`