import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

const StateContext = createContext({
  userId: null as string | null,
  token: null as string | null,
  setUserId: (userId: string | null) => {},
  setToken: (token: string | null) => {},
});

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [userId, _setUserId] = useState<string | null>(
    localStorage.getItem("ID")
  );
  const [token, _setToken] = useState<string | null>(
    localStorage.getItem("ACCESS_TOKEN")
  );

  const setUserId = (userId: string | null) => {
    _setUserId(userId);
    if (userId) {
      localStorage.setItem("ID", userId);
    } else {
      localStorage.removeItem("ID");
    }
  };

  const setToken = (token: string | null) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        userId,
        token,
        setUserId,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
