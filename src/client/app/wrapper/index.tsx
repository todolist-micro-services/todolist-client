import { useWrapperContext } from "./wrapper";
import { UseCases, ViewModels } from "./types";
import { CreateProject } from "@scenes/createProject";
import { UpdateProject } from "@scenes/updateProject";
import { DeleteProject } from "@scenes/deleteProject";
import { useResetStatus } from "@core/reducer/status.ts";
import { useAppDispatch } from "@core/utils";
import { CreateList } from "@scenes/createList";
import { UpdateList } from "@scenes/updateList";
import { DeleteList } from "@scenes/deleteList";
import { CreateTask } from "@scenes/createTask";
import { UpdateTask } from "@scenes/updateTask";
import { DeleteTask } from "@scenes/deleteTask";

function Wrapper() {
  const { view, pushView } = useWrapperContext();
  const dispatch = useAppDispatch();

  const close = () => {
    pushView({ useCase: UseCases.None, data: null });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useResetStatus(view.useCase, dispatch);
  };

  const modals = {
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
    [UseCases.CreateList]: ({
      user,
      project,
    }: ViewModels[UseCases.CreateList]) => (
      <CreateList user={user} project={project} close={close} />
    ),
    [UseCases.UpdateList]: ({ list }: ViewModels[UseCases.UpdateList]) => (
      <UpdateList list={list} close={close} />
    ),
    [UseCases.DeleteList]: ({ list }: ViewModels[UseCases.DeleteList]) => (
      <DeleteList list={list} close={close} />
    ),
    [UseCases.CreateTask]: ({
      list,
      user,
    }: ViewModels[UseCases.CreateTask]) => (
      <CreateTask user={user} list={list} close={close} />
    ),
    [UseCases.UpdateTask]: ({
      task,
      lists,
    }: ViewModels[UseCases.UpdateTask]) => (
      <UpdateTask task={task} lists={lists} close={close} />
    ),
    [UseCases.DeleteTask]: ({ task }: ViewModels[UseCases.DeleteTask]) => (
      <DeleteTask task={task} close={close} />
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
