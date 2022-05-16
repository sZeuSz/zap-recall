import styled from 'styled-components'
import { Figure, Image, Legend } from "../Home/styles";

export default function Questions() {
    return (
        <Figure Questions={true}>
            <Image Questions={true} src='img/logo.png' alt="raiozinho que é a logo do zap-recall" />
            <FigCaption >ZapRecall</FigCaption>
        </Figure>
    )
}

const FigCaption = styled(Legend)`
    margin-left: 22px;
`;