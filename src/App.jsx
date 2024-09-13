import { useState } from "react";
import SideBar from "./components/SideBar";
import NoProject from "./components/NoProjectPage";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const [selected, setSelected] = useState(false);

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = <NoProject onAddProject={handleAddProject} />;

  function handleAddProject() {
    setIsClicked((prev) => !prev);
  }

  function handleCancel() {
    setIsClicked((prevClick) => !prevClick);
  }

  if (isClicked) {
    content = (
      <NewProject onAdd={handleDoneAddProject} onCancel={handleCancel} />
    );
  }

  function handleDoneAddProject(projectData) {
    setIsClicked((prevClick) => prevClick);
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setSelected((prev) => !prev);
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDelete() {
    setSelected((prevState) => !prevState);
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(taskText) {
    // setIsClicked((prevClick) => !prevClick);
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: taskText,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  if (selected) {
    content = (
      <SelectedProject
        onDelete={handleDelete}
        project={selectedProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          projectsData={projectState.projects}
          onAddProject={handleAddProject}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
