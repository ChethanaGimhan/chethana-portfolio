import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
    </main>
  );
}
