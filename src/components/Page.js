import Layout from "./Layout";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";

const Page = () => {
  return (
    <>
      <Header />
      <Layout>
        <h1 style={{ marginBottom: "80rem" }}>Page</h1>
        <About />
        <Contact />
      </Layout>
    </>
  );
};

export default Page;
