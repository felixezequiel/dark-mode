import Swal from "sweetalert2";
import { MessagesTypes } from "../types/global";

export const messages: MessagesTypes = {
  invalidUser: () => Swal.fire('Usuario invalido', '', 'error'),
  userAutenticate: () => Swal.fire('Usuario autenticado', '', 'success')
}