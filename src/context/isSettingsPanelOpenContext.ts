import { createContext } from "react";

interface isSettingsPanelOpenContextType {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const isSettingsPanelOpenContext =
  createContext<isSettingsPanelOpenContextType>({
    isOpen: false,
    setIsOpen: () => {},
  });

export default isSettingsPanelOpenContext;
