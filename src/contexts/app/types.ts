import { Dispatch, ReactNode } from "react";

export type DataType = {
  background: string | null;
};

export type ActionType = {
  type: Actions;
  payload: any;
};

export type ContextType = {
  state: DataType;
  dispatch: Dispatch<ActionType>;
};

export type ProviderType = {
  children: ReactNode;
};

export enum Actions {
  SET_BACKGROUND,
}