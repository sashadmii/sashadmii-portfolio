import Navigation from '../components/navigation';
import About from '../components/about/About';
import Skills from '../components/skills';
import ProjectsList from '../components/projectsList';
import Contact from '../components/contact';
import Footer from '../components/footer';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <About />
      <Skills />
      <ProjectsList />
      <Contact />
      <Footer />
    </div>
  );
}
