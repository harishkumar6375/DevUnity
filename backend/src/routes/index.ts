import discussionRoute from "./discussionRoute";
import userRoute from "./userRoute";
import roomRoute from "./roomRoute";

const routers = {
  room: roomRoute,
  user: userRoute,
  discussion: discussionRoute,
};
import { app } from "../app";

export const setupRoutes = () => {
  for (const key in routers) {
    app.use(`/api/v1/${key}`, routers[key as keyof typeof routers]);
  }
};
