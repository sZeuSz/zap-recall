import styled from 'styled-components';
import decks from "../data/data";
import Question from './Question';

export default function ListRecalls() {

    return (
        <>
            {decks.zeno.map((question, index) => <Question question={question} index={index + 1} key={index} />)}
        </>
    )
}
