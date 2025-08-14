import { io } from "socket.io-client";

let socket: ReturnType<typeof io> | null = null;

export const initSocket = () => {
  if (!socket) {
    socket = io({
      path: "/api/socket",
    });
  }
  return socket;
};
