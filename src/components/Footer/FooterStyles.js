import styled from "styled-components"

export const FooterWrapper = styled.section`
  width: 100%;
  min-height: 50vh;
  margin-top: 4rem;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.background2};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${props => props.theme.breakpoints.sm} {
    min-height: 60vh;
  }
`

export const Top = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 2rem 48px 0;
  box-sizing: content-box;
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 0;
  }
`

export const Bottom = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 48px 2rem;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 2rem;
    flex-direction: column;
    gap: 8px;
  }
`

export const Copyright = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`

export const BackToTop = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 14px;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;
	&:hover {
		color: #fff;
		left: 6px;
	}
	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}
	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;
@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}
@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	
	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}
	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;
	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}
	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;
	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 0 0 28px;
	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}
	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;
	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`