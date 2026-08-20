import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section, VisuallyHiddenLink } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <VisuallyHiddenLink href="/fit">
        Why I&apos;m a fit for your team — experience and impact
      </VisuallyHiddenLink>
    </Layout>
  );
};

export default Home;
