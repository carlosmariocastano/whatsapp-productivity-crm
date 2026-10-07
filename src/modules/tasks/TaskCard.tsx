import type { Task }
from "../../shared/types/task";

import { useTaskStore }
from "./taskStore";

interface Props {
  task: Task;
}

export default function TaskCard({
  task,
}: Props) {

  const toggleTask =
    useTaskStore(
      (state) =>
        state.toggleTask
    );

  const deleteTask =
    useTaskStore(
      (state) =>
        state.deleteTask
    );

  return (
    <div
      className="
      border
      rounded
      p-4
      mb-2"
    >

      <div
        className="
        flex
        justify-between"
      >

        <div>

          <h3
            className={
              task.completed
                ? "line-through"
                : ""
            }
          >
            {task.title}
          </h3>

          <p>
            {task.description}
          </p>

        </div>

        <input
          type="checkbox"
          checked={
            task.completed
          }
          onChange={() =>
            toggleTask(
              task.id
            )
          }
        />

      </div>

      <button
        className="mt-2"
        onClick={() =>
          deleteTask(
            task.id
          )
        }
      >
        Eliminar
      </button>

    </div>
  );
}