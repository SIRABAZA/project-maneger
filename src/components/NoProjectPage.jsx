import Button from "./Button";
import noPorjectImage from "../assets/no-projects.png";
export default function NoProject({ onAddProject }) {
  return (
    <div className="text-center mt-24 w-2/3">
      <img
        src={noPorjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>

      <p className="mt-8">
        <Button onClick={onAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
