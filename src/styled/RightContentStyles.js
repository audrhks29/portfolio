import styled from 'styled-components';

export const RightContentContainer = styled.div`
  position:absolute;
  top:0;
  right:0;
  height: 100%;
  width: ${props => (props.stateProps ? '60%' : '0%')};
  transition: width 0.6s ease;
`

export const MenuContainer = styled.ul`
  width:100%;
  height:35px;
  line-height:35px;
  display: flex;
  flex-wrap:nowrap;
  align-self:center;
  margin:10px 0 0 10px;
  li{
    width:200px;
    cursor: pointer;
    text-align:center;
    border-radius: 10px 10px 0 0 ;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
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
    background-color: #000;
    color:white;
  }
`

export const ContentContainer = styled.div`
  border: 1px solid #000;
  padding:10px;
`
RightContentContainer.shouldForwardProp = (prop) => prop !== 'stateProps';