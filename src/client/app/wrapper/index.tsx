import { useWrapperContext } from "./wrapper";
import { UseCases, ViewModels } from "./types";
import { Register } from "@scenes/register";
import { CreateProject } from "@scenes/createProject";
import { UpdateProject } from "@scenes/updateProject";
import { DeleteProject } from "@scenes/deleteProject";

function Wrapper() {
  const { view, pushView } = useWrapperContext();

  const close = () => {
    pushView({ useCase: UseCases.None, data: null });
  };

  const modals = {
    [UseCases.Register]: (data: ViewModels[UseCases.Register]) => (
      <Register {...data} close={close} />
    ),
    [UseCases.CreateProject]: (data: ViewModels[UseCases.CreateProject]) => (
      <CreateProject {...data} close={close} />
    ),
    [UseCases.UpdateProject]: ({
      project,
    }: ViewModels[UseCases.UpdateProject]) => (
      <UpdateProject project={project} close={close} />
    ),
    [UseCases.DeleteProject]: ({
      projectId,
    }: ViewModels[UseCases.DeleteProject]) => (
      <DeleteProject projectId={projectId} close={close} />
    ),
  };

  return (
    <div>
      {view.useCase !== UseCases.None && (
        <div>{modals[view.useCase](view.data)}</div>
      )}
    </div>
  );
}

export { Wrapper };
