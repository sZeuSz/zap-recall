import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Button() {

    const navigate = useNavigate();

    return (
        <Container>
            <Bnt onClick={() => navigate('questions')}>Iniciar Recall</Bnt>
        </Container>
    )
}

const Bnt = styled.button`
    max-width: 570px;
    width: 95%;
    height: 90px;
    border: 1px solid #D70900;
    color: #D70900;
    font-size: 18px;
    background-color: #ffffff;
    margin-top: 100px;
    
    @media(max-width: 600px){
        height: 54px;
        margin-top: 100px;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`