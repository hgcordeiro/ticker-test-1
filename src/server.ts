import errorHandler from "errorhandler";
import app from "./app";
import { moveMk1 } from "./moveMk1";
import readline from "readline";

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}

const server = app.listen(app.get("port"), () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(
    "🚀  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
  rl.question("\n\nInput Mk1 data (example: \"x,y,BFBFBFLRLRLLLR\"): ", data => {
    const [x, y, path] = data.split(",");
    
    const coordinates = {
      x: Number(x) || 0,
      y: Number(y) || 0,
    };

    const finalCoordinates = moveMk1(coordinates, path || "");
    console.log(`🚀 Final coordinates: (${finalCoordinates.x},${finalCoordinates.y})`, );
    rl.close();
  });
  
});

export default server;
