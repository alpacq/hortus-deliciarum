import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 85vw;
  align-items: ${({ isFinal }) => (isFinal ? "flex-start" : "center")};
  justify-content: space-between;
  white-space: pre-line;
  align-self: ${({ isFinal }) => (isFinal ? "start" : "center")};
  z-index: 99 !important;

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
    flex: 60%;
    max-width: 88vw;
    align-items: ${({ isCarousel }) => (isCarousel ? "center" : "flex-start")};
    justify-content: ${({ isCarousel }) => (isCarousel ? "center" : "space-between")};
  }
`

export const TelephoneParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Cormorant Garamond';
  font-weight: 600;
  line-height: clamp(2.4rem, 2.0308rem + 1.0256vw, 4rem);
  color: ${({ theme }) => theme.colors.textGreen};
  text-align: left;
`