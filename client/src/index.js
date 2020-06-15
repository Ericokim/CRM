import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.css';
import 'admin-lte/dist/css/AdminLTE.css';
import App from "./App";

Sentry.init({
  dsn:
    "https://38a534035b284bfba3d9adf019d23932@o371138.ingest.sentry.io/5262559",
});

ReactDOM.render(<App />, document.getElementById("root"));
