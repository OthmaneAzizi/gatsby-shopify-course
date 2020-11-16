import styled from 'styled-components';

export const FooterWrapper = styled.footer`
display : inline-block;
max-width : 1200px;
flexDirection : row;
margin : 0 auto;
padding : 10px 20px;
box-sizing : border-box;
flex-wrap : wrap;
text-align : center;
align-items : center;
justify-content:center;
`;

export const List = styled.ul`
  list-style: none;
  overflow-x: auto;
  margin-top : 70px;
  
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  display: inline-block;
  padding-right : 90px;
  height : 30px;
`;