/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { User } from "../models/user";
import { api } from "../services/api";
import { $WithChildren } from "../types";

interface AuthState {
  token: string;
  associate: User;
}

export interface AuthContextData {
  signed: boolean;
  loading: boolean;
  associate: User;
  token: string;
  signIn(enrollment: string, password: string): Promise<void>;
  signOut(): void;
  updateProfile(user: Partial<User>): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: $WithChildren) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("gcc-personal-online/token");
    const storedUser = localStorage.getItem("gcc-personal-online/user");

    if (storedUser && token) {
      const associate: User = JSON.parse(storedUser);
      (api as any).defaults.headers.Authorization = `Bearer ${token}`;
      return { token, associate };
    }

    return {} as AuthState;
  });

  const [loading, setLoading] = useState(false);

  const signIn = async (enrollment: string, password: string) => {
    try {
      setLoading(true);

      const response = await api.post("/personal/session", {
        code: enrollment,
        password,
      });

      setLoading(false);

      const { associate, token } = response.data as {
        associate: User;
        token: string;
      };

      localStorage.setItem("gcc-personal-online/token", token);
      localStorage.setItem(
        "gcc-personal-online/user",
        JSON.stringify(associate)
      );

      (api as any).defaults.headers.Authorization = `Bearer ${token}`;

      setData({ token, associate });
    } catch (error: any) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message || "Não foi possível efetuar o login"
      );
    }
  };

  const signOut = () => {
    localStorage.removeItem("gcc-personal-online/token");
    localStorage.removeItem("gcc-personal-online/user");
    delete (api as any).defaults.headers.Authorization;
    if (!data?.associate || !data?.token) return;
    toast.info("Logout efetuado com sucesso!");
    setData({} as AuthState);
  };

  const updateProfile = (user: Partial<User>) => {
    const newUserData = { ...data.associate, ...user };
    setData((oldData) => ({ ...oldData, associate: newUserData }));
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!data?.associate,
        loading,
        associate: data.associate,
        token: data.token,
        signIn,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
