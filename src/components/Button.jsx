import styled from "styled-components";

export default styled.button`

color: #fff !important;
text-transform: uppercase;
background: #960f0c;
padding: 10px;
margin: 5px;
border-radius: 5px;
display: inline-block;
border: none;

&:hover{
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
}
`;
