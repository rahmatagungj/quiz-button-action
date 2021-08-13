import React from "react";

export interface playerActionsProps {
  playerOne: boolean;
  setPlayerOne: (playerOne: boolean) => void;
}

const initialValue = {
  playerOne: false,
  setPlayerOne: () => {},
};

export const playerActions =
  React.createContext<playerActionsProps>(initialValue);

const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [playerOne, setPlayerOne] = React.useState(false);
  return (
    <playerActions.Provider value={{ playerOne, setPlayerOne }}>
      {children}
    </playerActions.Provider>
  );
};

export default PlayerProvider;
