// <!-- page script -->

$(function () {
  $("#example1").DataTable({
    processing: true,
    retrieve: true,
    dom: "lBfrtip",
    buttons: [{ extend: "csvHtml5", text: "Export to CSV" }],
    tableTools: {
      aButtons: [
        {
          sExtends: "xls",
          sTitle: "File Name.csv",
          sFileName: "File     Name.csv",
          sButtonText: "Export to CSV",
          oSelectorOpts: { filter: "applied", order: "current" },
        },
      ],
    },
  });
  $("#example2").DataTable({
    retrieve: true,
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: true,
    info: true,
    autoWidth: false,
  });
});

// var table = $("#example1").DataTable({
//   processing: true,
//   retrieve: true,
//   dom: "lBfrtip",
//   buttons: ["copy", "csv", "print"],
// });

// table.buttons().container().appendTo($(".col-sm-6", table.table().container()));
