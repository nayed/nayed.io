import styled from 'styled-components'

const BGColorChooser = props => {
  if (props.BGColor) return props.BGColor
  else if (props.primary) return '#333'
  else return '#555'
}

export const Badge = styled.span`
  display: inline-block;
  padding: 0.5em 1.2em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 255px 25px 225px 25px/25px 225px 25px 255px;
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
  background-color: ${props => BGColorChooser(props)}
  border-radius: 7rem 8rem 8rem 8rem / 4rem 5rem 6rem 6rem;
  color: #fff;
  font-family: Neucha
  position: relative;
`
