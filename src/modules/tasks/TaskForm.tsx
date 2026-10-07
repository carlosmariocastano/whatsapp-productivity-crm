import { useState } from "react";
import { v4 as uuid } from "uuid";

import { useTaskStore } from "./taskStore";

export default function TaskForm() {
  const addTask =
    useTaskStore(
      (state) => state.addTask
    );

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const save = () => {
    if (!title) return;

    addTask({
      id: uuid(),

      title,

      description,

      completed: false,

      createdAt:
        new Date().toISOString(),
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col gap-2">

      <input
        placeholder="Título"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
      />

      <button
        onClick={save}
      >
        Crear Tarea
      </button>

    </div>
  );
}