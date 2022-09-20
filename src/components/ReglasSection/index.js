import React from 'react'
import { ReglasContainer, ReglasWrapper, ReglasRow, TextWrapper, TopLine, Heading, Subtitulo } from './ReglasElements'

const ReglasSection = ({lightBg, id, topLine, lightText, headLine, darkText, regla1, regla2, regla3}) => {
  return (
    <>
    <ReglasContainer lightBg={lightBg} id={id}>
        <ReglasWrapper id='reglas'>
            <ReglasRow>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitulo darkText={darkText}>{regla1}</Subtitulo>
                    <Subtitulo darkText={darkText}>{regla2}</Subtitulo>
                    <Subtitulo darkText={darkText}>{regla3}</Subtitulo>
                </TextWrapper>
            </ReglasRow>
        </ReglasWrapper>
    </ReglasContainer>
    </>
  )
}

export default ReglasSection
