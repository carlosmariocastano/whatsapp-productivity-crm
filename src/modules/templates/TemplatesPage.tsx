import { useState } from "react";

import TemplateForm from "./TemplateForm";
import TemplateCard from "./TemplateCard";

import { useTemplateStore }
from "./templateStore";

export default function TemplatesPage() {

  const templates =
    useTemplateStore(
      (state) => state.templates
    );

  const [search, setSearch] =
    useState("");

  const filtered =
    templates.filter((t) =>
      t.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div>

      <h1
        className="
        text-2xl
        font-bold
        mb-4"
      >
        Templates
      </h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <div className="my-4">
        <TemplateForm />
      </div>

      <div>

        {filtered.map(
          (template) => (
            <TemplateCard
              key={template.id}
              template={template}
            />
          )
        )}

      </div>

    </div>
  );
}