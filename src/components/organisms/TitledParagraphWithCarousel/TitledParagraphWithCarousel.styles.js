import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
  }
`
export const TextWrapper = styled.div`
  width: 88%;
`

export const SliderWrapper = styled.div`
  flex: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`