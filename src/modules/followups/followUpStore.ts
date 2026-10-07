import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { FollowUp } from "../../shared/types/followUp";

interface FollowUpState {
  followUps: FollowUp[];

  addFollowUp: (
    followUp: FollowUp
  ) => void;

  completeFollowUp: (
    id: string
  ) => void;
}

export const useFollowUpStore =
  create<FollowUpState>()(
    persist(
      (set) => ({
        followUps: [],

        addFollowUp: (followUp) =>
          set((state) => ({
            followUps: [
              ...state.followUps,
              followUp,
            ],
          })),

        completeFollowUp: (id) =>
          set((state) => ({
            followUps:
              state.followUps.map((f) =>
                f.id === id
                  ? {
                      ...f,
                      completed: true,
                    }
                  : f
              ),
          })),
      }),
      {
        name: "followups-storage",
      }
    )
  );