import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section, VisuallyHiddenLink } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid fullHeight>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Contact />
      <VisuallyHiddenLink href="/fit">
        Why I&apos;m a fit for your team — experience and impact
      </VisuallyHiddenLink>
    </Layout>
  );
};

export default Home;
