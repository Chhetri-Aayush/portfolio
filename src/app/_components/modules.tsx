import Link from "next/link";
import "../globals.css";

export function Modules() {
  return (
    <>
      <div className=" font-base  mt-5 flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <Link href="/projects" className="underline">
            Projects
          </Link>
          <div className="w-2 h-0.5 bg-foreground"></div>
          <p>Things that i have built </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Link href="/experience" className="underline">
            Experience
          </Link>
          <div className="w-2 h-0.5 bg-foreground"></div>
          <p>Work experience</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Link href="/blog" className="underline">
            Blog
          </Link>
          <div className="w-2 h-0.5 bg-foreground"></div>
          <p>Things that i write about </p>
        </div>
      </div>
    </>
  );
}
