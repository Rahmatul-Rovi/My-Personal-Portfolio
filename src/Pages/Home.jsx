import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "../Components/Footer";
import Education from "./Education";

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Certificates></Certificates>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    );
};

export default Home;