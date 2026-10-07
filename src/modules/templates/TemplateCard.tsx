import type { Template } from "../../shared/types/template";
import { useTemplateStore } from "./templateStore";

interface Props {
  template: Template;
}

export default function TemplateCard({
  template,
}: Props) {

  const deleteTemplate =
    useTemplateStore(
      (state) =>
        state.deleteTemplate
    );

  const toggleFavorite =
    useTemplateStore(
      (state) =>
        state.toggleFavorite
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

        <h3>
          {template.name}
        </h3>

        <button
          onClick={() =>
            toggleFavorite(
              template.id
            )
          }
        >
          {template.favorite
            ? "⭐"
            : "☆"}
        </button>

      </div>

      <div>
        {template.shortcut}
      </div>

      <p>
        {template.content}
      </p>

      <button
        onClick={() =>
          deleteTemplate(
            template.id
          )
        }
      >
        Delete
      </button>

    </div>
  );
}