import { ProjectSection } from "../_components/projectSection";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className=" mt-18 sm:mt-25 ">
        <div>
          <h1 className="text-3xl">What I’ve Built</h1>
          <h4 className="text-sm">
            <Link href="/">By Aayush Chhetri</Link>
          </h4>
        </div>
        <ProjectSection />
      </div>
    </>
  );
}
