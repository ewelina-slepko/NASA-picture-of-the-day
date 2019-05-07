import styled from "styled-components";

export default styled.button`

background: none;
color: #ccc;
width: 240px;
height: 70px;
border: 1px solid #960f0c;
font-size: 18px;
border-radius: 4px;
transition: .6s;
overflow: hidden;

&:focus{
    outline: none;
}

&:before{
    content: '';
    display: block;
    position: absolute;
    background: rgb(255,255,255,.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: .5s;
    filter: blur(30px);
    transform: translateX(-130px) skewX(-15deg);
    }

&:after{
    content: '';
    display: block;
    position: absolute;
    background: rgba(255,255,255,.2);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter:blur(30px);
    transform: translate(-100px) scaleX(-15deg);
}

&:hover{
    background: #960f0c;
    coursor: pointer;
}

&:hover:after{
    transform: translate(300px) skewX(-15deg);
    opacity: .6;
    transition: .7s;
}

// 


`;
