import { TaskStatus } from "./enums"

export interface Task {
  title: string;
  description?: string;
  status?: TaskStatus;
}