import { create } from "zustand";

type GameConfigProp = {
  gameID?: string;
  masterPin: number;
  hint?: string;
  masterMindName: string;
};

type AppStore = {
  config: GameConfigProp;
  setGameConfig: (gameConfig: GameConfigProp) => void;
  // setHint: (hint: string) => void;
  // getConfig: (id: number) => GameConfigProp | undefined;
  // resetGame: (id: number) => void;
};

export const useAppStore = create<AppStore>()((set, get) => ({
  config: {
    gameID: "",
    masterPin: 0,
    hint: "",
    masterMindName: "",
  },
  setGameConfig: ({
    masterMindName,
    masterPin,
    hint = "",
    gameID = "game123",
  }: GameConfigProp) =>
    set(() => ({
      config: {
        gameID,
        masterMindName,
        masterPin,
        hint,
      },
    })),
}));
