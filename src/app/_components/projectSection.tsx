import { projects } from "../_lib/projects";

export function ProjectSection() {
  return (
    <>
      <div className="mt-5">
        <div>
          <h2>What I’ve Built</h2>
        </div>

        <div className=" mt-4 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" flex flex-row mb-5  border-2 border-black "
            >
              <div>{project.name}</div>
              <div className="font-bold">
                <p>{project.description}</p>
                <div>
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
