import { create } from "zustand";

interface AppState {
  sidePanelOpen: boolean;

  togglePanel: () => void;
}

export const useAppStore =
  create<AppState>((set) => ({
    sidePanelOpen: true,

    togglePanel: () =>
      set((state) => ({
        sidePanelOpen:
          !state.sidePanelOpen,
      })),
  }));