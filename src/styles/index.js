import styled , {css}  from 'styled-components';
const sharedStyles = css`
.detailInvest {
  padding : 12px 0;
};
.detailInvest p {
  padding : 0;
  margin : 0;
  font-size : 18px;
};
.subtitle {
  padding : 0;
  font-size : 18px;
  font-weight:600;
};
.p1 {
  margin : 0;
  padding : 0;
  font-weight : 700;
  font-size : 24px;
};
.label {
  margin : 0;
  padding : 12px 0;
  font-size : 16px;
};
.formField {
  display:flex;
  flex-direction:row;
  align-items:center;
  height:40px;
  padding:12px 0;
}
.investedBox{
  position:absolute;
  right:5px;
  top:5px;
  color:green;
}
`

let Content  = styled.div`
  position:relative;
  background-color : white;
  max-width:600px;
  border : 1px solid black;
  text-align:left;
  border-radius : 2px;
  z-index:3;
  padding : 1em;
  ${sharedStyles};
`
let Input = styled.input`
  text-align:right;
  color : ${props => props.excess ? 'red' : 'black'}
  font-size:20px;
  padding : 6px;
  flex:1;
`
let Button = styled.button`
  background-color : yellow;
  margin-left:5px;
  height:100%;
  width: 150px;
  font-size:18px;
`
let Main = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  z-index:2;
  .background {
    background: rgba(0, 0, 0, 0.8);
   position: fixed;
   z-index:1;
   display: block;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
 }
`
let Item  = styled.div`
  ${sharedStyles};
  position : relative;
  background-color : white;
  margin:20px auto;
  border : 1px solid #F5F5F5;
  text-align:left;
  padding : 1em;
  .itemBox {
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items:center;
  }


`
let ListStyled = styled.div`

h1 {
  text-align:center;
}
.list {
  max-width:800px;
  margin:auto;
};
.remainingTotal {
  font-size : 19px;
  text-align : center;
}

`
export {Content,Main,Button,Input,Item,ListStyled}
