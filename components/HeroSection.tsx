import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-hero-section.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
          quality={75}
        />{" "}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-mobile md:px-tablet lg:px-laptop xl:px-desktop 2xl:px-big">
        <div className="max-w-4xl text-left">
          <p className="text-sm md:text-lg font-sans mb-4 font-light tracking-[0.6rem] uppercase">
            Suba de nível
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal mb-8 leading-tight font-sans">
            Transformamos
            <br />
            ideias em
            <br />
            Sistemas de
            <br />
            <span className="outline-primary underline underline-offset-8 decoration-primary decoration-4">
              qualidade
            </span>
          </h1>
          <Button size={"lg"} variant="outline">
            Nossos serviços
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
