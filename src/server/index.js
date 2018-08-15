import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../App";
import path from "path";
import fs from "fs";
import Loadable from "react-loadable";
import manifest from "../../build/asset-manifest.json";

// initialize the application and create the routes
const PORT = process.env.PORT || 3006;
const app = express();

app.use("/static", express.static("./build/static"));

app.get("*", (req, res) => {
  let modules = [];
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <App />
      </Loadable.Capture>
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const extractAssets = (manifest, chunks) =>
    Object.keys(manifest)
      .filter(c => chunks.indexOf(c.replace(".js", "")) > -1)
      .map(a => manifest[a]);

  const extraChunks = extractAssets(manifest, modules).map(
    c => `<script type="text/javascript" src="/${c}"></script>`
  );

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    const mainScript = data.match(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
    )[0];

    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace(/<script.*>.*<\/script>/gi, "")
        .replace("</body>", extraChunks + mainScript + "</body>")
    );
  });
});

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
  });
});
