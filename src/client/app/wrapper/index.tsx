import { useWrapperContext } from "./wrapper";
import { UseCases, ViewModels } from "./types";
import { Register } from "@scenes/register";
import { CreateProject } from "@scenes/createProject";
import { UpdateProject } from "@scenes/updateProject";
import { DeleteProject } from "@scenes/deleteProject";
import { useResetStatus } from "@core/reducer/status.ts";
import { useAppDispatch } from "@core/utils";

function Wrapper() {
  const { view, pushView } = useWrapperContext();
  const dispatch = useAppDispatch();

  const close = () => {
    pushView({ useCase: UseCases.None, data: null });
    useResetStatus(view.useCase, dispatch);
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
      project,
    }: ViewModels[UseCases.DeleteProject]) => (
      <DeleteProject project={project} close={close} />
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
