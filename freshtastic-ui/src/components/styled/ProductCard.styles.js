import styled from "styled-components";

export const Container = styled.div`
  position: relative; 
  width:auto; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 30px;
`;


export const CardContent = styled.div`
  position: relative; 
  top: -140px; 
  padding: 10px 15px; 
  color: rgb(17, 17, 17); 
  text-align: center; 
  opacity: 0; 
  transition: all 0.3s ease-in-out 0s; 
  
  h3 {
    margin-top: 0px;
  }

`;

export const Card = styled.div`
  position: relative; 
  max-width: 300px; 
  height: 215px; 
  background-color: rgb(255, 255, 255); 
  margin: 30px 10px; padding: 20px 15px; 
  display: flex; flex-direction: column; 
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 20px; 
  transition: all 0.3s ease-in-out 0s; 
  border-radius: 15px;
  :hover {
    height : 320px; 
  };

  :hover ${CardContent} {
    margin-top: 30px; 
    visibility: visible; 
    opacity: 1; 
    transition-delay: 0.2s;
  }
`;

export const CardImgContainer = styled.div`
  position: relative; 
  width: 260px; 
  height: 260px; 
  top: -40%; 
  left: 8px; 
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 20px; 
  z-index: 1;
  border-radius: 15px;

  img {
    max-width: 100%; 
    border-radius: 15px;
  }
`;