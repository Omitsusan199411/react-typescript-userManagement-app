import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode
} from "react";

import { User } from "../types/api/User";

// 交差型
type LoginUser = User & { isAdmin: boolean };

// 合併型
export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    // Route.tsx以下のコンポーネントでは全てvalueの値を扱える
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
