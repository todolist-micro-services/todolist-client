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
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
};

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
        <Modal onClose={() => close()} open={true}>
          <Box sx={style}>{modals[view.useCase](view.data)}</Box>
        </Modal>
      )}
    </div>
  );
}

export { Wrapper };
