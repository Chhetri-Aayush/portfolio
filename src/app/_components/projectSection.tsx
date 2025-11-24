import { projects } from "../_lib/projects";
import React from "react";

export function ProjectSection() {
  return (
    <>
      <div className="mt-16">
        <div className="h-0.5 bg-white"></div>
        <div className=" mt-4 flex flex-col gap-3 ">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div
                key={index}
                className=" flex flex-row justify-center items-center gap-3  "
              >
                <div className=" min-w-[50px] sm:min-w-[100px] font-bold ">
                  {project.name}
                </div>

                <div className=" text-left grow ">
                  <p>{project.description}</p>
                  <div className="mt-4 md:mt-2 ">
                    <span className="">Tech Stack:</span>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="font-bold pr-1 ">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-0.5 bg-white"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
