import { projects } from "../_lib/projects";

export function ProjectSection() {
  return (
    <>
      <div className="mt-5">
        <div>
          <h2>What I’ve Built</h2>
        </div>

        <div className=" mt-4 flex flex-col gap-3 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" flex flex-row justify-center items-center gap-3  border-2 border-black "
            >
              <div className="">{project.name}</div>
              <div className="font-bold text-left grow">
                <p>{project.description}</p>
                <div className="mt-4 md:mt-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i}> {tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
