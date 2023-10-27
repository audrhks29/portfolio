import styled from 'styled-components';

export const LeftContentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => (props.stateProps ? '40%' : '100%')};
  background-color: #cccccc; 
  transition: width 0.6s ease;
  button{
    display:block;
  }
`
LeftContentContainer.shouldForwardProp = (prop) => prop !== 'stateProps';

export const TextAniContainer = styled.div`
.jt {
  position: relative;
  font-size: 90px;
  font-family: 'Staatliches', sans-serif;
  font-display: swap;
  text-shadow: 0 0 10px tomato;
  color:black;
}

.jt__row {
  display: block;
}
.jt__row:nth-child(1) {
  clip-path: polygon(-10% 75%, 110% 75%, 110% 110%, -10% 110%);
}
.jt__row:nth-child(2) {
  clip-path: polygon(-10% 50%, 110% 50%, 110% 75.3%, -10% 75.3%);
}
.jt__row:nth-child(3) {
  clip-path: polygon(-10% 25%, 110% 25%, 110% 50.3%, -10% 50.3%);
}
.jt__row:nth-child(4) {
  clip-path: polygon(-10% 0%, 110% 0%, 110% 25.3%, -10% 25.3%);
}

.jt__row.jt__row--sibling {
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  width:800px;
}

.jt__text {
  display: block;
  transform-origin: bottom left;
  animation: moveIn 3s 0s cubic-bezier(.36,0,.06,1) forwards; 
}
.jt__row:nth-child(1) .jt__text {
  transform: translateY(-0.1em);
}
.jt__row:nth-child(2) .jt__text {
  transform: translateY(-0.3em) scaleY(1.1);
}
.jt__row:nth-child(3) .jt__text {
  transform: translateY(-0.5em) scaleY(1.2) ;
}
.jt__row:nth-child(4) .jt__text {
  transform: translateY(-0.7em) scaleY(1.3) ;
}
.jt__row:nth-child(5) .jt__text {
  transform: translateY(-0.9em) scaleY(1.4) ;
}
.jt__row:nth-child(6) .jt__text {
  transform: translateY(-1.1em) scaleY(1.5) ;
}

@keyframes moveIn {
  50%, 100% { 
    transform: translateY(0em)
  }
  0%   { 
  opacity: 0; 
  color:black;
  filter: blur(10px);
  
  }
  100% { 
  opacity: 1; 
  color:white;
  filter: blur(0px);
  }
}

.debug .jt__row:nth-child(even) {
  color: black;
  background: white;
}
.debug .jt__row:nth-child(odd) {
  color: white;
  background: black;
}
`