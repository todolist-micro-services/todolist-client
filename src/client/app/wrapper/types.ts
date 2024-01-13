import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, Project } from "@core/dto";

interface ViewModels {
  [UseCases.None]: null;
  [UseCases.Register]: NonNullable<unknown>;
  [UseCases.CreateProject]: NonNullable<unknown>;
  [UseCases.UpdateProject]: { project: Identifiable<Project> };
  [UseCases.DeleteProject]: { project: Identifiable<Project> };
}

export { UseCases };
export type { ViewModels };
