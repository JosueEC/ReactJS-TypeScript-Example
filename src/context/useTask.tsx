import { useContext } from "react";
import { TaskContext } from "./TaskContext";

// Para hacer uso de algun contexto, una buena practica es crear
// un custom hook que acceda al contexto y nos lo devuelva, de lo
// contrario esto se tendria que hacer en cada ocacion que se
// quiera acceder al context
export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error('useTask must be used within a TaskProvider');

  return context;
}