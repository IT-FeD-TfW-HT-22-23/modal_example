import Layout from "./Layout";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Cards from "./Cards";

const Page = () => {
  return (
    <>
      <Header />
      <Layout>
        <Intro />
        <Cards />
        <About />
        <Contact />
      </Layout>
    </>
  );
};

export default Page;
