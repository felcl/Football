import { ReactNode } from 'react';
import styled from 'styled-components';
const HomeCom = styled.div.attrs({className: 'flexCenter'})`
  height: 2000px;
`
export default function Home():ReactNode {
  return (
    <HomeCom>HOME</HomeCom>
  )
}