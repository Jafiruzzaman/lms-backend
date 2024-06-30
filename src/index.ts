import { app } from "./app";
import { config } from "./config/config";
import { ConnectDB } from "./db/database";

const startServer = async () => {
  try {
    ConnectDB()
      .then(() => {
        const port = config.port;
        app.listen(port, () => {
          console.log(
            `server is running at ${port}. Server Connected with database`
          );
        });
      })
      .catch((err) => {
        console.log(`something went wrong while listening server ${err}`);
      });
  } catch (error: any) {
    console.log(`something went wrong while start server ${error.message}`);
  }
};
startServer();