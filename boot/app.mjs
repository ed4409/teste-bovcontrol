import AppProvider from "./providers/AppProvider.mjs";
import Application from "../config/app.mjs";
import Compression from "./middlewares/Compression.mjs";
import ExceptionHandler from "./exception/ExceptionHandler.mjs";
import QueryString from "./middlewares/QueryString.mjs";
import RouteProvider from "./providers/RouteProvider.mjs";
import cors from "cors";
import swaggerDocument from "../infra/documents/swagger.js";
import swaggerUi from "swagger-ui-express";

// Date.prototype.toJSON = function () {
//   this.setUTCHours(this.getUTCHours() - 3)
//   return this.toISOString()sabe me dizer
// }

async function registerProviders(app) {
  AppProvider.boot(app);
  RouteProvider.boot(app);
}

function boot(app) {
  return app.listen(Application.port, () => {
    console.log(`Aplicação inicializada na porta ${Application.port}.`);
  });
}

export default async (app) => {
  app.use(Compression());
  app.use(cors());
  app.use(QueryString);
  app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      swaggerOptions: {
        defaultModelsExpandDepth: -1,
        docExpansion: "none",
      },
    })
  );

  await registerProviders(app);

  const server = boot(app);
  ExceptionHandler.handle(app, server);
};
