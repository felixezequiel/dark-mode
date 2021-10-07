import { SweetAlertResult } from "sweetalert2";

type FunctionMessage = () => Promise<SweetAlertResult>

export interface ChildrenProps {
  children: JSX.Element
}

export declare interface BasicAuthTypes {
  username: string,
  password: string
}

export interface MessagesTypes {
  invalidUser: FunctionMessage,
  userAutenticate: FunctionMessage
}