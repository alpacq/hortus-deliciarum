import React, { useState } from "react"
import { Title } from "../../atoms/Title/Title"
import { SendButton, StyledColumn, StyledForm, StyledInfo, StyledOrnament, StyledTextArea, Wrapper, StyledInput } from "./ContactForm.styles"
import ornament from "../../../images/ozdkon.svg"
import axios from "axios"

const ContactForm = ({ title }) => {
  const [isSent, setIsSent] = useState(false)
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
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/6fc5bb77-641c-4b31-b19c-cbd82390bf2a",
      data: new FormData(form)
    }).then(r => {
      handleServerResponse(true, "Thanks!", form)
      setIsSent(true)
    }).catch(r => {
      handleServerResponse(false, r.response.data.error, form)
      setIsSent(false)
    })
  }

  return (
    <Wrapper>
      <Title isLong>{title}</Title>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledColumn>
          <StyledInput type="email" name="email" placeholder="*adres e-mail" required />
          <StyledInput type="text" name="phone" placeholder="telefon" />
          <StyledInput type="text" name="theme" placeholder="*temat" required />
          <StyledInfo>*pola wymagane</StyledInfo>
        </StyledColumn>
        <StyledColumn>
           <StyledTextArea name="message" placeholder="*o co chcesz nas zapytać?" required />
           <SendButton type="submit" isSent={isSent}>{isSent ? "wysłane" : "wyślij"}</SendButton>
        </StyledColumn>
      </StyledForm>
      <StyledOrnament src={ornament} alt="" />
    </Wrapper>
  )
}

export default ContactForm