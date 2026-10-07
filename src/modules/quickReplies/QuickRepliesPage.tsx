import { useState } from "react";

import { useTemplateStore } from "../templates/templateStore";
import { findTemplateByShortcut } from "../../shared/utils/templateUtils";
import { interpolate } from "../../shared/utils/interpolate";

export default function QuickRepliesPage() {
  const templates = useTemplateStore(
    (state) => state.templates
  );

  const [contactName, setContactName] =
    useState("");

  const [shortcut, setShortcut] =
    useState("");

  const [result, setResult] =
    useState("");

  const generateReply = () => {
    const template =
      findTemplateByShortcut(
        shortcut,
        templates
      );

    if (!template) {
      setResult("Template no encontrada");
      return;
    }

    const message = interpolate(
      template.content,
      {
        nombre: contactName,
      }
    );

    setResult(message);
  };

  const copyReply = async () => {
    if (!result) return;

    await navigator.clipboard.writeText(
      result
    );

    alert("Mensaje copiado");
  };

  return (
    <div className="flex flex-col gap-4">

      <h1 className="text-2xl font-bold">
        Quick Replies
      </h1>

      <input
        className="
          border
          rounded
          p-2"
        placeholder="Nombre del contacto"
        value={contactName}
        onChange={(e) =>
          setContactName(
            e.target.value
          )
        }
      />

      <div className="flex gap-2">

        <input
          className="
            border
            rounded
            p-2
            flex-1"
          value={shortcut}
          placeholder="/hola"
          onChange={(e) =>
            setShortcut(
              e.target.value
            )
          }
        />

        <button
          className="
            bg-blue-600
            text-white
            px-4
            rounded"
          onClick={generateReply}
        >
          Buscar
        </button>

      </div>

      <textarea
        className="
          border
          rounded
          p-3"
        rows={10}
        value={result}
        readOnly
      />

      <button
        className="
          bg-green-600
          text-white
          p-2
          rounded"
        onClick={copyReply}
        disabled={!result}
      >
        Copiar respuesta
      </button>

    </div>
  );
}