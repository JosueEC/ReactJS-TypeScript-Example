import { TaskStatus } from "./enums"

export interface Task {
  _id: string
  title: string;
  description?: string;
  status?: TaskStatus;
}

// TypeScript nos permite crear tipos a partir de interfaces
// y omitir propiedades que no queremos en el nuevo tipo, por
// ejemplo: '_id' | 'title' | ... y asi sucesivamente quitando las
// propiedades que no queremos.

// Esto es util cuando nuestras entradas de DTO tienen propiedades
// diferentes a nuestros DTO de salida
export type CreateTask = Omit<Task, '_id'>;

// De esta forma creamos un tipo a partir de otro, en el que indicamos
// que todos los campos del tipo son opcionales y no completamente
// requeridos
export type UpdateTask = Partial<CreateTask>;