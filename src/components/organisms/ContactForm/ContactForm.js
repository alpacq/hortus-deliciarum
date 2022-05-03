import React, { useState, useRef } from "react"
import { Title } from "../../atoms/Title/Title"
import { SendButton, StyledColumn, StyledForm, StyledInfo, StyledOrnament, StyledTextArea, Wrapper, StyledInput } from "./ContactForm.styles"
import ornament from "../../../images/ozdkon.svg"
import axios from "axios"

const ContactForm = ({ title }) => {
  const mailInput = useRef(null)
  const themeInput = useRef(null)
  const textInput = useRef(null)
  const [isMailError, setIsMailError] = useState(false)
  const [isThemeError, setIsThemeError] = useState(false)
  const [isTextError, setIsTextError] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })
    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()    
    const form = e.target
    console.log(mailInput.current.value)
    if(mailInput.current.value === null || mailInput.current.value === "") {
      setIsMailError(true)
    }
    if(themeInput.current.value === null || themeInput.current.value === "") {
      setIsThemeError(true)
    }
    if(textInput.current.value === null || textInput.current.value === "") {
      setIsTextError(true)
    }
    if(!(mailInput.current.value === null || mailInput.current.value === "") && !(themeInput.current.value === null || themeInput.current.value === "") && !(textInput.current.value === null || textInput.current.value === "")) {
      setIsClicked(true)
      console.log(form)
      setServerState({ submitting: true })
      axios({
        method: "post",
        url: `${process.env.GATSBY_FORM_URL}`,
        data: new FormData(form)
      }).then(r => {
        handleServerResponse(true, "Thanks!", form)
        setIsSent(true)
      }).catch(r => {
        handleServerResponse(false, r.response.data.error, form)
        setIsSent(false)
      })
    }
  }

  const handleMailChange = e => {
    if(!(mailInput.current.value === null || mailInput.current.value === "")) {
      setIsMailError(false)
    }
  }

  const handleThemeChange = e => {
    if(!(themeInput.current.value === null || themeInput.current.value === "")) {
      setIsThemeError(false)
    }
  }

  const handleTextChange = e => {
    if(!(textInput.current.value === null || textInput.current.value === "")) {
      setIsTextError(false)
    }
  }

  return (
    <Wrapper>
      <Title isLong>{title}</Title>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledColumn>
          <StyledInput type="email" name="email" placeholder="*adres e-mail" ref={mailInput} onChange={handleMailChange} isError={isMailError} />
          {isMailError ? <StyledInfo isError>uzupełnij to pole</StyledInfo> : null}
          <StyledInput type="text" name="phone" placeholder="telefon" />
          <StyledInput type="text" name="theme" placeholder="*temat" ref={themeInput} onChange={handleThemeChange} isError={isThemeError} />
          {isThemeError ? <StyledInfo isError>uzupełnij to pole</StyledInfo> : null}
          <StyledInfo>*pola wymagane</StyledInfo>
        </StyledColumn>
        <StyledColumn>
           <StyledTextArea name="message" placeholder="*o co chcesz nas zapytać?" ref={textInput} onChange={handleTextChange} isError={isTextError} />
           {isTextError ? <StyledInfo isError>uzupełnij to pole</StyledInfo> : null}
           <SendButton type="submit" isClicked={isClicked} isSent={isSent}>{isSent ? "wysłane" : "wyślij"}</SendButton>
        </StyledColumn>
      </StyledForm>
      <StyledOrnament src={ornament} alt="" />
    </Wrapper>
  )
}

export default ContactForm