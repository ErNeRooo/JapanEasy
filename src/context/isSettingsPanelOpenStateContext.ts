import { createContext } from "react";

const isSettingsPanelOpenStateContext = createContext<
  [boolean, (state: boolean) => void]
>([false, () => {}]);

export default isSettingsPanelOpenStateContext;
