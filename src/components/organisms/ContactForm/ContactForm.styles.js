import styled from "styled-components"

export const Wrapper = styled.div`
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10vh;
`

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6vh;
`

export const StyledColumn = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const StyledInput = styled.input`
  width: 100%;
  height: 7vh;
  margin-bottom: ${({ isError }) => (isError ? "0" : "2vh")};
  padding: 0 1em;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.inpuBg};
  font-weight: 500;
  font-family: "Montserrat" sans-serif;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.inputText};
  justify-content: center;
  outline: none;
  border: none;
  box-shadow: ${({ theme, isError }) => (isError ? `0px 4px 10px ${theme.colors.red}` : "none")};
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 38vh;
  padding: 1em;
  margin-bottom: ${({ isError }) => (isError ? "0" : "2vh")};
  border-radius: 10px;
  font-family: inherit;
  background: ${({ theme }) => theme.colors.inputBg};
  font-weight: 500;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.inputText};
  justify-content: center;
  outline: none;
  border: none;
  box-shadow: ${({ theme, isError }) => (isError ? `0px 4px 10px ${theme.colors.red}` : "none")};
`

export const StyledInfo = styled.p`
  font-weight: 400;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme, isError }) => (isError ? theme.colors.red : theme.colors.textGreen)};
  opacity: ${({ isError }) => (isError ? "1" : "0.4")};
  margin: 0.5vh;
`

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 14vw;
  height: 7vh;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme, isSent }) => (isSent ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background: ${({ theme, isSent, isClicked }) => (isSent ? theme.colors.sentBtn : isClicked ? theme.colors.clickedBtn : theme.colors.buttonGreen)};
  box-shadow: 0px 4px 4px ${({ theme, isSent }) => (isSent ? theme.colors.sentBtnShadow : theme.colors.textGreen)};
  border-radius: 10px;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 0.67em;
  border: none;
`

export const StyledOrnament = styled.img`
  position: absolute;
  left: 0;
  bottom: -40px;
`