// import { ProjectSection } from "./_components/projectSection";
// import { ToggleTheme } from "./_components/themeToggle";
// import { FooterSection } from "./_components/footerSection";
import { Modules } from "./_components/modules";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" mt-18 sm:mt-25 flex justify-between">
        <h1 className="text-3xl">Aayush Chhetri</h1>
        {/* <div> */}
        {/*   <ToggleTheme /> */}
        {/* <button>light</button> */}
        {/* </div> */}
      </div>

      <section>
        <div className="text-justify mt-6">
          {/* <p className=" text-2xl ">Hi, I’m Aayush Chhetri</p> */}
          {/* <br /> */}
          <p className="text-base leading-snug">
            I’m a Full-Stack Developer who loves turning ideas into fast,
            reliable, and scalable digital experiences. I specialize in building
            modern web applications from end to end from clean, responsive
            interfaces on the front-end to secure, high-performance APIs and
            databases on the back-end. I enjoy solving real problems with clean
            architecture, readable code, and thoughtful UI/UX.
          </p>
          <br />
          <p className="text-base leading-snug">
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
        {/* <ProjectSection /> */}
        <Modules />
      </section>
      <div className="mt-3 w-full h-0.5 bg-black"></div>
      <section>
        {/* if in future if there is footer section then just make a new section and then use this  */}
        {/* <FooterSection /> */}
        <div className="text-justify mt-3">
          <p className="text-base leading-snug">
            You can read my{" "}
            <span className="underline px-0.5">
              <Link href="https://github.com/Chhetri-Aayush" target="_blank">
                code
              </Link>
            </span>
            ,
            <span className="underline px-0.5">
              <Link href="https://x.com/Aayush_Chhetri_" target="_blank">
                connect with me
              </Link>
            </span>
            , or feel free to
            <span className="underline px-0.5">
              <Link href="mailto:aayush.chhetri.81@gmail.com" target="_blank">
                reach out
              </Link>
            </span>
            .
          </p>
        </div>
      </section>
    </>
  );
}
