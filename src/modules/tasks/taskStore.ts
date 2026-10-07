import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Task } from "../../shared/types/task";

interface TaskState {
  tasks: Task[];

  addTask: (task: Task) => void;

  deleteTask: (id: string) => void;

  toggleTask: (id: string) => void;
}

export const useTaskStore =
  create<TaskState>()(
    persist(
      (set) => ({
        tasks: [],

        addTask: (task) =>
          set((state) => ({
            tasks: [
              ...state.tasks,
              task,
            ],
          })),

        deleteTask: (id) =>
          set((state) => ({
            tasks:
              state.tasks.filter(
                (task) => task.id !== id
              ),
          })),

        toggleTask: (id) =>
          set((state) => ({
            tasks:
              state.tasks.map((task) =>
                task.id === id
                  ? {
                      ...task,
                      completed:
                        !task.completed,
                    }
                  : task
              ),
          })),
      }),
      {
        name: "tasks-storage",
      }
    )
  );