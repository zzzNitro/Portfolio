import styled from 'styled-components';
import { Card } from '../../styles/GlobalComponents';

export const Img = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
justify-items: center;
padding: 3rem;
column-gap: 2rem;
row-gap: 3rem;

/* a lone trailing card (odd count) spans both columns and centers itself,
   instead of sitting pinned to column 1 with an empty cell beside it */
& > *:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

@media ${(props) => props.theme.breakpoints.sm} {
  grid-template-columns: 1fr;
  padding: 2rem;
  padding-bottom: 0;
  row-gap: 2rem;
}
`
export const BlogCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
`;
export const TitleContent = styled.div`
  text-align: left;
  z-index: 20;
  width: 100%;
  padding: 24px 24px 0;
`;


export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #fff;
  font-size: ${(props) => props.title ? '4rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 32px;
  height: 3px;
  margin: 12px 0;
  border: 0;
  background: ${props => props.theme.colors.accent1};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 24px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
  line-height: 24px;
  text-align: left;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0 24px 24px;
  margin-top: auto;
  display: flex;
  gap: 12px;
`;

export const ExternalLinks = styled.a`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.4rem;
  padding: 0.7rem 1.4rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  transition: 0.3s ease;
  &:hover{
    border-color: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.accent1};
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px 24px 0;
`
export const Tag = styled.li`
  padding: 0.4rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 500;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`