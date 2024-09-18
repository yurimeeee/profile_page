import Main from '@components/feature/main/Main';
import About from '@components/feature/about/About';
import Skills from '@components/feature/skills/Skills';
import Archiving from '@components/feature/archiving/Archiving';
import Projects from '@components/feature/projects/Projects';
import Contact from '@components/feature/contact/Contact';

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Contact />
    </>
  );
}
