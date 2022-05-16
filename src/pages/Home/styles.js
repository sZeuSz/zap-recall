import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
`;

export const Figure = styled.figure`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${({Questions}) => Questions ? '42px' : '0px'};
    @media(max-width: 600px){
        flex-direction: ${({Questions}) => Questions ? 'none' : 'column'};
    }
`;

export const Image = styled.img`
    width: ${({Questions}) => Questions ? '52px' : '86px'};;
    height: ${({Questions}) => Questions ? '60' : '100px'};;
`;

export const Legend = styled.h1`
    font-size: 64px;
    line-height: 79.47px;
    letter-spacing: -1,2%;
    color: #ffffff;
    margin-left: 22px;
    @media(max-width: 600px) {
        font-size: 36px;
        margin-left: 0px;
    }
`;
