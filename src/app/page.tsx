import { ProjectSection } from "./_components/projectSection";
import { ToggleTheme } from "./_components/themeToggle";
import { FooterSection } from "./_components/footerSection";

export default function Home() {
  return (
    <>
      <div className="mt-7 border-black border-2 flex justify-between">
        <h1 className="text-3xl">Welcome</h1>
        <div>
          <ToggleTheme />
          {/* <button>light</button> */}
        </div>
      </div>

      <section>
        <div className="text-justify mt-6">
          <p className=" text-2xl  md:text-3xl">Hi, I’m Aayush Chhetri</p>
          <br />
          <p>
            I’m a Full-Stack Developer who loves turning ideas into fast,
            reliable, and scalable digital experiences. I specialize in building
            modern web applications from end to end from clean, responsive
            interfaces on the front-end to secure, high-performance APIs and
            databases on the back-end. I enjoy solving real problems with clean
            architecture, readable code, and thoughtful UI/UX.
          </p>
          <br />
          <p>
            I’m always learning, improving, and experimenting with new
            technologies not just to stay updated, but to build things that
            truly feel great to use. Whether it’s designing a full system from
            scratch or refining an existing one, I focus on writing maintainable
            code, optimizing performance, and delivering products that make a
            measurable impact.
          </p>
        </div>
      </section>

      <section>
        <ProjectSection />
      </section>
      <div className="mt-3 w-full h-0.5 bg-black"></div>
      <section>
        <FooterSection />
      </section>
    </>
  );
}
