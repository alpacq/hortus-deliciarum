import styled from "styled-components"

export const Wrapper = styled.div`
  display: none;
  direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: clamp(0.566rem, 0.0043rem + 1.5603vw, 3rem);

  ${({ theme }) => theme.media.desktop} {
    display: flex;
  }
`

export const StyledLogo = styled.img`
  width: clamp(1.0556rem, 0.0069rem + 2.9131vw, 5.6rem);
  height: clamp(1.0556rem, 0.0069rem + 2.9131vw, 5.6rem);
`