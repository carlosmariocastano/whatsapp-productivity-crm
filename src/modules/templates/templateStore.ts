import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Template } from "../../shared/types/template";

interface TemplateState {
  templates: Template[];

  addTemplate: (template: Template) => void;

  deleteTemplate: (id: string) => void;

  toggleFavorite: (id: string) => void;
}

export const useTemplateStore = create<TemplateState>()(
  persist(
    (set) => ({
      templates: [],

      addTemplate: (template) =>
        set((state) => ({
          templates: [
            ...state.templates,
            template,
          ],
        })),

      deleteTemplate: (id) =>
        set((state) => ({
          templates: state.templates.filter(
            (t) => t.id !== id
          ),
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          templates: state.templates.map(
            (t) =>
              t.id === id
                ? {
                    ...t,
                    favorite: !t.favorite,
                  }
                : t
          ),
        })),
    }),
    {
      name: "templates-storage",
    }
  )
);