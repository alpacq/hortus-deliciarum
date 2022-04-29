import React, { useState, useContext } from "react"

export const TextContext = React.createContext({
  linkText: "",
  setFooterLinkText: () => {}
})

export const FooterLinkTextProvider = ({ children }) => {
  const [linkText, setLinkText] = useState("strona główna")
  
  const setFooterLinkText = (text) => {
    setLinkText(text)
  }

  return <TextContext.Provider value={{ linkText, setFooterLinkText }}>{children}</TextContext.Provider>
}

export const useFooterText = () => {
  const footerText = useContext(TextContext)

  return footerText
}