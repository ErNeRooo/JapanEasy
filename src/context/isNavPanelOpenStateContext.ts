import { createContext } from "react";

const isNavPanelOpenContext = createContext<
  [boolean, (state: boolean) => void]
>([false, () => {}]);

export default isNavPanelOpenContext;
