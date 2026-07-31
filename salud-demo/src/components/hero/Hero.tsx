import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import FloatingReviews from "./FloatingReview";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden"
    >
      <HeroBackground />

      <div className="container relative z-20 grid min-h-screen items-center gap-20 pt-32 pb-16 lg:grid-cols-[1.2fr_.8fr]">

        <HeroContent />

        <FloatingReviews />

      </div>

      <ScrollIndicator />
    </section>
  );
}