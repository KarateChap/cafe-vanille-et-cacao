import Head from "next/head";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cafe Vanille et Cacao</title>
        <meta name="description" content="Cafe Vanille et Cacao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <About />
      <div className="bg-[url('/bg-cacao.png')] w-full bg-cover h-[20vh] md:h-[60vh] bg-no-repeat bg-bottom"></div>
      <div
        className="w-full h-[15vh] flex justify-center items-center text-xl text-center md:text-2xl bg-[#33221a] text-white p-5"
      >
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
      </div>
      <Featured />
      <Menu />
      <Footer />
    </div>
  );
}
