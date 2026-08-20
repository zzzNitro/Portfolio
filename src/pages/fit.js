import Experience from '../components/Experience/Experience';
import Impact from '../components/Impact/Impact';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';

const Fit = () => {
  return (
    <Layout>
      <Section>
        <SectionDivider></SectionDivider>
        <SectionTitle main>Why I&apos;m a Fit for Your Team</SectionTitle>
        <SectionText>
          The roles I&apos;ve held, what I shipped, and the measurable impact I made.
        </SectionText>
      </Section>
      <Experience />
      <Impact />
    </Layout>
  );
};

export default Fit;
