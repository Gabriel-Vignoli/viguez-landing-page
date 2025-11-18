export default function AboutUs() {
  return (
    <section>
      <div className="w-full bg-primary flex items-center flex-col px-mobile md:px-tablet lg:px-laptop xl:px-desktop 2xl:px-big py-16">
        <p className="text-sm md:text-lg text-white font-sans mb-4 font-extralight tracking-[1rem] uppercase">
          Sobre Nós
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font- text-white mb-8 leading-tight font-sans text-center">
          Somos uma startup de tecnologia
          <br />
          <span className="font-extralight italic">focada em criar </span> soluções digitais que
          <br />
          geram resultados reais
          <br />
          qualidade
        </h1>
      </div>
    </section>
  );
}
