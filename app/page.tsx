import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

export default function HomePage () {
  return(
    <div>
      <Header></Header>
      <Hero></Hero>
      <h1>This is a home page</h1>
     <Footer></Footer>
    </div>
  );
}