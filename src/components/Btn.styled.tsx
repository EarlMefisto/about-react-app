import styled, { css } from 'styled-components';
import { MyAnimation } from '../animations/Animations.style';

type StyleBtnArticle1PropsType = {
  color?: string
  fontSize?: string
  primary?: boolean
  outlined?: boolean
  active?: boolean
}

export const StyleBtnArticle1 = styled.button<StyleBtnArticle1PropsType>`
  border: none;
  /* background-color: #ffc0cb; */
  /* background-color: ${props => props.color || "#ffc0cb"}; */
  padding: 10px 20px;
  border-radius: 5px;
  /* color: aliceblue; */
  /* font-size: 1rem; */
  font-size: ${props => props.fontSize || '2rem'}
  font-weight;

  &:hover {
    background-color: purple;
  }
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }

  ${props => props.outlined && css<StyleBtnArticle1PropsType> `
    border: 2px solid ${props => props.color || "#ffc0cb"};
    color: ${props => props.color || "#ffc0cb"};
    background-color: transparent;
  &:hover {
    border-color:  purple;
    color: purple;
    background-color: transparent;
  }

  ${props => props.active && css<StyleBtnArticle1PropsType>`
    box-shadow: 5px 5px 5px 5px gray;
  `}

  `}

  ${props => props.primary && css<StyleBtnArticle1PropsType>`
    background-color: ${props => props.color || "#ffc0cb"};
    color: aliceblue;
  `}

  

`

export const StyleBtnArticle2 = styled(StyleBtnArticle1)`
  background-color: blue;
`

export const StyleBoxArticle1 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyleBoxArticle2 = styled(StyleBoxArticle1)`
  
`

export const StyleLinkAccordion = styled.div`
button { 
  cursor: pointer;
}

`