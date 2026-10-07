import { useEffect, useState } from "react";

import { useTemplateStore } from "../templates/templateStore";

import { findTemplateByShortcut } from "../../shared/utils/templateUtils";
import { interpolate } from "../../shared/utils/interpolate";
import { extractVariables } from "../../shared/utils/extractVariables";

export default function QuickRepliesPage() {
  const templates = useTemplateStore(
    (state) => state.templates
  );

  const [shortcut, setShortcut] =
    useState("");

  const [result, setResult] =
    useState("");

  const [selectedTemplate, setSelectedTemplate] =
    useState("");

  const [variables, setVariables] =
    useState<Record<string, string>>(
      {}
    );

  const generateReply = () => {
    const template =
      findTemplateByShortcut(
        shortcut,
        templates
      );

    if (!template) {
      setSelectedTemplate("");
      setResult("Template no encontrada");
      return;
    }

    setSelectedTemplate(
      template.content
    );

    setVariables({});

    setResult(template.content);
  };

  useEffect(() => {
    if (!selectedTemplate) return;

    const message = interpolate(
      selectedTemplate,
      variables
    );

    setResult(message);
  }, [
    variables,
    selectedTemplate,
  ]);

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

      {selectedTemplate &&
        extractVariables(
          selectedTemplate
        ).map((variable) => (

          <input
            key={variable}
            className="
              border
              rounded
              p-2"
            placeholder={variable}
            value={
              variables[variable] || ""
            }
            onChange={(e) =>
				setVariables({
					...variables,
					e.target.value,
				})
			}
          />

      ))}

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