import { UseCases } from "@core/reducer/types.ts";

interface ViewModels {
  [UseCases.None]: null;
  [UseCases.Register]: NonNullable<unknown>;
}

export { UseCases };
export type { ViewModels };
