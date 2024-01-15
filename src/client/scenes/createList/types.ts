import { Identifiable, Project, User } from "@core/dto";

interface Props {
  user: User;
  project: Identifiable<Project>;
  close(): void;
}

export type { Props };
