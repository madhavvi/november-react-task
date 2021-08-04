import { createContext } from "react";
import { IContextProps, IProfileContext } from "./models";

export const UserContext = createContext({} as IContextProps);

export const ProfileContext = createContext({} as IProfileContext);