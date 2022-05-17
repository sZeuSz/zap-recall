import styled from 'styled-components';
import {BsPlay} from 'react-icons/bs';
import { useState } from 'react';

export default function Question({question, index}) {
    
    const [selected, setSelected] = useState('default');
    const [change, setChange] = useState(true);

    return (
        <Container selected={selected}>
            {selected === 'default'
                ?
                <ContainerDefault> Pergunta {index} <IconPlay onClick={() => setSelected('question')} /></ContainerDefault>
                :
                <>
                    {change && <ContainerQuestion>
                        {question.question}
                        <IconRefresh src="img/setinha.png" alt="icone que representa o recall" onClick={() => setChange(false)}/>
                    </ContainerQuestion>}
                    {!change && <ContainerAnswer>
                        {question.answer}
                        <Answers>
                            <AsnswerMessage color='#FF3030'>
                                Não lembrei :(
                            </AsnswerMessage>
                            <AsnswerMessage color='#FF922E'>
                                Quase não lembrei!
                            </AsnswerMessage>
                            <AsnswerMessage color='#2FBE34'>
                                Zap! ^^
                            </AsnswerMessage>
                        </Answers>
                    </ContainerAnswer>}
                    </>
                }
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    max-width: 570px;
    width: 95%;
    min-height: ${({selected}) => selected === "default" ? '91px' : '300px'};
    height: auto;
    background-color: ${({selected}) => selected === "default" ? '#ffffff' : '#FFFFD4'};
    margin: 30px auto;
    display: flex;
    align-items: ${({selected}) => selected === "default" ? 'center' : 'start'};;


    @media(max-width: 600px) {
        min-height: ${({selected}) => selected === "default" ? '65px' : '200px'};
    }
`;
const IconPlay = styled(BsPlay)`
    width: 25px;
    height: 25px;
`;

const ContainerDefault = styled.div`
    width: 90%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin: 0 auto;
`;  

const ContainerQuestion = styled.div`
    width: 90%;
    height: 100%;
    margin: 20px;
`;

const ContainerAnswer = styled.div`
    width: 90%;
    height: 100%;
    margin: 20px;
`;

const IconRefresh = styled.img`
    position: absolute;
    bottom: 0;
    right: 15px;
    width: 30px;
    height: 30px;
`;

const AsnswerMessage = styled.div`
    width: 30%;
    height: 80px;
    color: #ffffff;
    background-color: ${({ color }) => color};
    border-radius: 5px;
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0px 12px;
    font-size: 12px;
    font-weight: 400;
    @media(max-width: 600px) {
        height: 45px;
    }
`;

const Answers = styled.div`
    position: absolute;
    left: 0px;
    bottom: 10px;
    width: 100%;
    display:flex;
    justify-content: space-between;
`;