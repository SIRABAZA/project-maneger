import Button from "./Button";
export default function SideBar({
  onAddProject,
  projectsData,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3  mt-8 bg-stone-900 px-8 py-16 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projectsData.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-400 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
