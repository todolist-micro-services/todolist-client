import { UseCases } from "@core/reducer/types.ts";
import { Id, Identifiable, Project } from "@core/dto";

interface ViewModels {
  [UseCases.None]: null;
  [UseCases.Register]: NonNullable<unknown>;
  [UseCases.CreateProject]: NonNullable<unknown>;
  [UseCases.UpdateProject]: { project: Identifiable<Project> };
  [UseCases.DeleteProject]: { projectId: Id };
}

export { UseCases };
export type { ViewModels };
