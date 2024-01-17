import { Identifiable, Project, User } from "@core/dto";

interface Props {
  project: Identifiable<Project>;
  user: User;
}

export type { Props };
