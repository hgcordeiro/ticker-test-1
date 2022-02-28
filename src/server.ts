import errorHandler from "errorhandler";
import app from "./app";

import readline from "readline";
import { moveMk1 } from "./moveMk1";
import { moveMk2 } from "./moveMk2";
import { moveMk3 } from "./moveMk3";

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}

const server = app.listen(app.get("port"), () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(
    "\n🚀  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("    Press CTRL-C to stop\n");
  rl.question("🚀 Input movement data (example: \"x,y,BFBFBFLRLRLLLR\"): ", data => {
    const [x, y, path] = data.split(",");
    
    const coordinates = {
      x: Number(x) || 0,
      y: Number(y) || 0,
    };

    const finalCoordinatesMk1 = moveMk1(coordinates, path || "");
    const finalCoordinatesMk2 = moveMk2(coordinates, path || "");
    const finalCoordinatesMk3 = moveMk3(coordinates, path || "");

    console.log("\n");
    
    console.log(`🚀 Final coordinates Mk1: (${finalCoordinatesMk1.x},${finalCoordinatesMk1.y})`, );
    console.log(`🚀 Final coordinates Mk2: (${finalCoordinatesMk2.x},${finalCoordinatesMk2.y})`, );
    console.log(`🚀 Final coordinates Mk3: (${finalCoordinatesMk3.x},${finalCoordinatesMk3.y})`, );
    console.log("\n\n");
    
    rl.close();
  });
  
});

export default server;
