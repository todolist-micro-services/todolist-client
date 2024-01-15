import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, List, Project, User } from "@core/dto";

interface ViewModels {
  [UseCases.None]: null;
  [UseCases.Register]: NonNullable<unknown>;
  [UseCases.CreateProject]: NonNullable<unknown>;
  [UseCases.UpdateProject]: { project: Identifiable<Project> };
  [UseCases.DeleteProject]: { project: Identifiable<Project> };
  [UseCases.CreateList]: { user: User; project: Identifiable<Project> };
  [UseCases.DeleteList]: { list: Identifiable<List> };
  [UseCases.UpdateList]: { list: Identifiable<List> };
}

export { UseCases };
export type { ViewModels };
