"use server";

import axios from "axios";

import Header from "./components/Header";

import Home from "./components/sections/Home";
import Stats from "./components/sections/Stats";
import Clients from "./components/sections/Clients";
import AccredianEdge from "./components/sections/AccredianEdge";
import CAT from "./components/sections/CAT";
import Works from "./components/sections/Works";
import Faq from "./components/sections/Faq";
import Testimonials from "./components/sections/Testimonial";
import Footer from "./components/Footer";

async function getHomeData() {
  const response = await axios.get("/api/home");
  const data = response.data;
  return data;
}

const App = async () => {
  const data = await getHomeData();
  return (
    <div className="flex flex-col h-auto w-full">
      <Header />
      <Home hero={data.hero} />
      <Stats stats={data.stats} />
      <Clients clients={data.clients} />
      <AccredianEdge accredian={data.accredian} />
      <CAT cat={data.cat} />
      <Works works={data.works} />
      <Faq />
      <Testimonials testimonials={data.testimonials} />
      <Footer data={data.footer} />
    </div>
  );
};
export default App;
