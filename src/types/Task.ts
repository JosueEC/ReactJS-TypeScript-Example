import { TaskStatus } from "./enums"

export type Task = {
  title: string,
  description: string,
  status: TaskStatus
}