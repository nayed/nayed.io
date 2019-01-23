import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 2px solid #333;
  border-radius: 5px 5px 5px 5px/25px 25px 25px 5px;
  border-color: #17a2b8;
  margin-right: 15px;
  margin-bottom: 16px;
  margin-left: 15px;

  @media (min-width: 576px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 80px 16px 80px;
  }
`
export const CardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 2px solid #333;
  border-color: inherit;
`

export const CardHeaderTop = styled.h3`
  margin-bottom: 0;
`

export const CardHeaderTitle = styled.span`
  color: #3f26bf;
`

export const CardHeaderDates = styled.span`
  float: right;
  color: #6b3fa0;
`

export const CardHeaderLocation = styled.h5`
  float: right;
  margin-bottom: 0;
`

export const CardBody = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`

export const CardBodyTitle = styled.h4`
  margin-bottom: 0.75rem;
`

export const CardBodyText = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 25px;
  font-size: 17px;

  li {
    font-family: Neucha;
  }
`
