import Layout from "./Layout";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Cards from "./Cards";
import Footer from "./Footer";
import Uncontrolled from "../forms/Uncontrolled";
import Controlled from "../forms/Controlled";
import ContactForm from "./ContactForm";

const Page = () => {
  return (
    <>
      <Header />
      <Layout>
        <Intro />
        <Cards />
        <About />
        <Contact>
          <ContactForm />
        </Contact>
      </Layout>
      <Footer />
    </>
  );
};

export default Page;
