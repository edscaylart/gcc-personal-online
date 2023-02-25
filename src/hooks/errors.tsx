import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./auth";

interface ErrorContextData {
  emitError(error: any, defaultMessage?: string): void;
}

const ErrorContext = createContext<ErrorContextData>({} as ErrorContextData);

export const ErrorProvider: React.FC = ({ children }) => {
  const { signOut } = useAuth();

  const emitError = (
    error: any,
    defaultMessage = "Algo deu errado, tente novamente!"
  ) => {
    let backendMessage = "";
    if (error?.response?.data?.message) {
      backendMessage = error?.response?.data?.message;
      if (backendMessage === "Token JWT inválido") {
        signOut();
      }
    }

    toast.error(backendMessage || defaultMessage);
  };

  return (
    <ErrorContext.Provider
      value={{
        emitError,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export function useError(): ErrorContextData {
  const context = useContext(ErrorContext);
  return context;
}
