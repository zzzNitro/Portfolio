import styled from 'styled-components'
import { Card } from '../../styles/GlobalComponents'

export const RoleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  @media ${props => props.theme.breakpoints.sm} {
    gap: 16px;
    margin-bottom: 24px;
  }
`

export const RoleCard = styled(Card)`
  padding: 32px;
  @media ${props => props.theme.breakpoints.md} {
    padding: 24px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 16px;
  }
`

export const RoleHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const RoleTitle = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #FFFFFF;
  margin-bottom: 4px;
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const RoleDates = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
`

export const RoleHighlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
  li {
    list-style: disc;
    font-size: 16px;
    line-height: 26px;
    color: rgba(255, 255, 255, 0.75);
    @media ${props => props.theme.breakpoints.sm} {
      font-size: 14px;
      line-height: 22px;
    }
  }
`
