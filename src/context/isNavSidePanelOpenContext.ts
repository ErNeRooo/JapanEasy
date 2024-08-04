import { createContext } from "react";

interface isNavSidePanelOpenContextType {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const isNavSidePanelOpenContext = createContext<isNavSidePanelOpenContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export default isNavSidePanelOpenContext;
