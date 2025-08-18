import { Server as IOServer } from "socket.io";
import { Server as HTTPServer } from "http";
import type { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types/next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (!res.socket.server.io) {
    const httpServer: HTTPServer = res.socket.server as any;
    const io = new IOServer(httpServer, {
      path: "/api/socket",
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      socket.on("sendMessage", (msg) => {
        io.emit("newMessage", msg);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
  }

  res.end();
}
