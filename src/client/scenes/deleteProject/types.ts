import { Identifiable, Project } from "@core/dto";

interface Props {
  close(): void;
  project: Identifiable<Project>;
}

export type { Props };
