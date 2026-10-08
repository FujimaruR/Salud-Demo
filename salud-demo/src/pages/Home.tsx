import { ServicesSection } from '../components/services/Services';
import DemoContact from '../site/DemoContact';
import LocaleTools from '../site/LocaleTools';
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main><Hero /><ServicesSection /><DemoContact /></main><LocaleTools />
    </>
  );
}
