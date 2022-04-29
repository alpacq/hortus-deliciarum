import React from "react"
import { Title } from "../../atoms/Title/Title"
import { SendButton, StyledColumn, StyledForm, StyledInfo, StyledOrnament, StyledTextArea, Wrapper, StyledInput } from "./ContactForm.styles"
import ornament from "../../../images/ozdkon.svg"

const ContactForm = ({ title }) => {


  return (
    <Wrapper>
      <Title isLong>{title}</Title>
      <StyledForm method="post" action="">
        <StyledColumn>
          <StyledInput type="email" name="email" placeholder="*adres e-mail" required />
          <StyledInput type="text" name="phone" placeholder="telefon" />
          <StyledInput type="text" name="theme" placeholder="*temat" required />
          <StyledInfo>*pola wymagane</StyledInfo>
        </StyledColumn>
        <StyledColumn>
           <StyledTextArea name="message" placeholder="*o co chcesz nas zapytać?" required />
           <SendButton>wyślij</SendButton>
        </StyledColumn>
      </StyledForm>
      <StyledOrnament src={ornament} alt="" />
    </Wrapper>
  )
}

export default ContactForm