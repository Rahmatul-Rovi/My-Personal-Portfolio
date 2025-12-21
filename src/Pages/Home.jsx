import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills></Skills>
            <Projects></Projects>
            <Certificates></Certificates>
        </main>
    );
};

export default Home;