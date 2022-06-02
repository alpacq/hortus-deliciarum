import React, { useState, useRef } from "react"
import { Title } from "../../atoms/Title/Title"
import { SendButton, StyledColumn, StyledForm, StyledInfo, StyledOrnament, StyledTextArea, Wrapper, StyledInput } from "./ContactForm.styles"
import OrnamentImg from "../../atoms/OrnamentImg/OrnamentImg"
import ornament from "../../../images/ozdkon.svg"
import ornamentGr from "../../../images/ozdkongr.svg"
import mobileOrnament from "../../../images/mobileOrnamentSand.svg"
import axios from "axios"

const ContactForm = ({ isGreen, title }) => {
  const mailInput = useRef(null)
  const textInput = useRef(null)
  const [isMailError, setIsMailError] = useState(false)
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
    if(mailInput.current.value === null || mailInput.current.value === "") {
      setIsMailError(true)
    }
    if(textInput.current.value === null || textInput.current.value === "") {
      setIsTextError(true)
    }
    if(!(mailInput.current.value === null || mailInput.current.value === "") && !(textInput.current.value === null || textInput.current.value === "")) {
      setIsClicked(true)
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

  const handleTextChange = e => {
    if(!(textInput.current.value === null || textInput.current.value === "")) {
      setIsTextError(false)
    }
  }

  return (
    <Wrapper>
      <Title isLong isGreen={isGreen}>{title}</Title>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledColumn>
          <StyledInput isGreen={isGreen} type="email" name="email" placeholder="*adres e-mail" ref={mailInput} onChange={handleMailChange} isError={isMailError} />
          {isMailError ? <StyledInfo isError>uzupełnij to pole</StyledInfo> : null}
          {isMailError ? <StyledInfo isMobile isError>uzupełnij to pole</StyledInfo> : null}
          <StyledInput isGreen={isGreen} type="text" name="phone" placeholder="telefon" />
          <StyledInput isLast isGreen={isGreen} type="text" name="theme" placeholder="temat" />
          <StyledInfo noMargin isGreen={isGreen}>*pola wymagane</StyledInfo>
        </StyledColumn>
        <StyledColumn>
           <StyledTextArea isLast isGreen={isGreen} name="message" placeholder="*o co chcesz nas zapytać?" ref={textInput} onChange={handleTextChange} isError={isTextError} />
           {isTextError ? <StyledInfo isError>uzupełnij to pole</StyledInfo> : null}
           {isTextError ? <StyledInfo isMobile isError>uzupełnij to pole</StyledInfo> : null}
           <StyledInfo isMobile isGreen={isGreen}>*pola wymagane</StyledInfo>
           <SendButton type="submit" isClicked={isClicked} isSent={isSent}>{isSent ? "wysłane" : "wyślij"}</SendButton>
        </StyledColumn>
      </StyledForm>
      <StyledOrnament src={isGreen ? ornamentGr : ornament} alt="" />
      <OrnamentImg imageUrl={mobileOrnament} hasMargin imageAlt="" isMobile />
    </Wrapper>
  )
}

export default ContactForm