import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "admin-lte/bower_components/bootstrap/dist/css/bootstrap.css";
import "admin-lte/dist/css/AdminLTE.css";
import App from "./App";
import "pdfmake";
import "jszip";
import "jquery";
import "datatables.net-bs";
import "datatables.net-buttons-bs";
import "datatables.net-colreorder-bs";
import "datatables.net-responsive-bs";
import "datatables.net-rowreorder-bs";
import "datatables.net-bs/css/dataTables.bootstrap.css";
import "datatables.net-bs/css/dataTables.bootstrap.min.css";
import "datatables.net-bs/js/dataTables.bootstrap";
import "datatables.net-bs/js/dataTables.bootstrap.min.js";
import "datatables.net-buttons-bs/js/buttons.bootstrap";
import "datatables.net-buttons-bs/js/buttons.bootstrap.min.js";
import "datatables.net-buttons-bs/css/buttons.bootstrap.css";
import "datatables.net-buttons-bs/css/buttons.bootstrap.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/dataTables.buttons.min.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.print.js";

Sentry.init({
  dsn:
    "https://38a534035b284bfba3d9adf019d23932@o371138.ingest.sentry.io/5262559",
});

ReactDOM.render(<App />, document.getElementById("root"));
