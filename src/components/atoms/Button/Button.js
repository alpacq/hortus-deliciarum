import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;;
  text-decoration: none;
  width: 23vw;
  height: 9vh;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.bgTextSand};
  background: ${({ theme }) => theme.colors.buttonGreen};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-self: ${({ isRight }) => (isRight ? "flex-end" : "flex-start")};
  cursor: pointer;
`