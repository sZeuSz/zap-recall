import { Header, Figure, Image, Legend } from './styles'
import Button from "../../components/Button";

export default function Home() {
    
    return (
        <>
            <Header>
                <Figure>
                    <Image src='img/logo.png' alt="raiozinho que é a logo do zap-recall" />
                    <Legend>ZapRecall</Legend>
                </Figure>
                <Button />
            </Header>
        </>
    )
}