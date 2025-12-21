import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills></Skills>
            <Projects></Projects>
            <Certificates></Certificates>
            <Contact></Contact>
        </main>
    );
};

export default Home;