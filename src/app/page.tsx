import About from '@components/feature/about/About';
import Archiving from '@components/feature/archiving/Archiving';
import Career from '@components/feature/career/Career';
import Contact from '@components/feature/contact/Contact';
import Main from '@components/feature/main/Main';
import Projects from '@components/feature/projects/Projects';
import Skills from '@components/feature/skills/Skills';

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Career />
      <Archiving />
      <Projects />
      <Contact />
    </>
  );
}
