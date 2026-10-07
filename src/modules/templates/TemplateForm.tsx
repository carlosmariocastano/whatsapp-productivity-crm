import { useState } from "react";
import { v4 as uuid } from "uuid";

import type { Template } from "../../shared/types/template";
import { useTemplateStore } from "./templateStore";

export default function TemplateForm() {

  const addTemplate =
    useTemplateStore(
      (state) => state.addTemplate
    );

  const [name, setName] =
    useState("");

  const [shortcut, setShortcut] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [content, setContent] =
    useState("");

  const submit = () => {

    const template: Template = {

      id: uuid(),

      name,

      shortcut,

      category,

      favorite: false,

      content,

      createdAt:
        new Date().toISOString()

    };

    addTemplate(template);

    setName("");
    setShortcut("");
    setCategory("");
    setContent("");

  };

  return (
    <div className="flex flex-col gap-3">

      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="/shortcut"
        value={shortcut}
        onChange={(e) =>
          setShortcut(e.target.value)
        }
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <textarea
        placeholder="Message"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <button
        onClick={submit}
      >
        Save Template
      </button>

    </div>
  );
}