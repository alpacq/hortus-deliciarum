import styled from "styled-components"

export const Wrapper = styled.div`
  width: 85%;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;

  ${({ theme }) => theme.media.desktop} {
    width: 88%;
    margin-top: 0;
    height: 100%;
    gap: 10vh;
    align-items: flex-start;
  }
`

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    gap: 6vh;
  }
`

export const StyledColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${({ theme }) => theme.media.desktop} {
    flex: 1;
  }
`
export const StyledInput = styled.input`
  width: 100%;
  height: 7vh;
  margin-bottom: ${({ isError }) => (isError ? "0" : "2vh")};
  padding: 0 1em;
  border-radius: 2px;
  background: ${({ theme, isGreen }) => (isGreen ? theme.colors.clickedBtn : theme.colors.inputBg)};
  font-weight: 500;
  font-family: "Montserrat" sans-serif;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.inputText)};
  justify-content: center;
  outline: none;
  border: none;
  box-shadow: ${({ theme, isError }) => (isError ? `0px 4px 10px ${theme.colors.wrongInput}` : "none")};

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.phText};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.phText};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.phText};
  }

  ${({ theme }) => theme.media.desktop} {
    margin-bottom: ${({ isError, isLast }) => (isError ? "0" : isLast ? "1vh" : "2vh")};
  }
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 38vh;
  padding: 1em;
  margin-bottom: ${({ isError, isLast }) => (isError ? "0" : isLast ? "1vh" : "2vh")};
  border-radius: 2px;
  font-family: inherit;
  background: ${({ theme, isGreen }) => (isGreen ? theme.colors.clickedBtn : theme.colors.inputBg)};
  font-weight: 500;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme, isGreen }) => (isGreen ? theme.colors.bgTextSand : theme.colors.inputText)};
  justify-content: center;
  outline: none;
  border: none;
  box-shadow: ${({ theme, isError }) => (isError ? `0px 4px 10px ${theme.colors.wrongInput}` : "none")};

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.phText};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.phText};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.phText};
  }

  ${({ theme }) => theme.media.desktop} {
    margin-bottom: ${({ isError }) => (isError ? "0" : "2vh")};
  }
`

export const StyledInfo = styled.p`
  display: ${({ isMobile }) => (isMobile ? "initial" : "none")};
  font-weight: 400;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme, isError, isGreen }) => (isError ? theme.colors.red : isGreen ? theme.colors.bgTextSand : theme.colors.textGreen)};
  opacity: ${({ isError }) => (isError ? "1" : "0.4")};
  margin: ${({ noMargin }) => (noMargin ? "0 0 0 0.5vh" : "0.5vh")};

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "initial")};
  }
`

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  width: 85vw;
  height: 7vh;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme, isSent }) => (isSent ? theme.colors.textGreen : theme.colors.bgTextSand)};
  background: ${({ theme, isSent, isClicked }) => (isSent ? theme.colors.sentBtn : isClicked ? theme.colors.clickedBtn : theme.colors.buttonGreen)};
  box-shadow: 0px 4px 4px ${({ theme, isSent }) => (isSent ? theme.colors.sentBtnShadow : theme.colors.textGreen)};
  border-radius: 2px;
  cursor: pointer;
  margin-top: 0.67em;
  border: none;

  ${({ theme }) => theme.media.desktop} {
    width: 14vw;
    text-decoration: none;
    text-transform: none;
    border-radius: 10px;
    align-self: flex-end;
  }
`

export const StyledOrnament = styled.img`
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;

  ${({ theme }) => theme.media.desktop} {
    display: initial;
  }
`