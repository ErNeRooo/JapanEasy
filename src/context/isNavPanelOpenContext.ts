import { createContext } from "react";

interface isNavPanelOpenContextType {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const isNavPanelOpenContext = createContext<isNavPanelOpenContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export default isNavPanelOpenContext;
