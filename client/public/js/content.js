// <!-- page script -->

// $(function () {
//   $("#example1").DataTable({
//     processing: true,
//     retrieve: true,
//     dom: "lBfrtip",
//     buttons: [
//   {
//     extend: "csv",
//     exportOptions: {
//       columns: [0, 1, 2, 3, 4],
//     },
//   },
// ],
//   });
//   $("#example2").DataTable({
//     retrieve: true,
//     paging: true,
//     lengthChange: false,
//     searching: false,
//     ordering: true,
//     info: true,
//     autoWidth: false,
//   });
// });

// var table = $("#example1").DataTable({
//   processing: true,
//   retrieve: true,
//   dom: "lBfrtip",
//   buttons: [
//     {
//       extend: "csv",
//       exportOptions: {
//         columns: [0, 1, 2, 3, 4],
//       },
//     },
//   ],
// });

// table.buttons().container().appendTo($(".col-xs-6", table.table().container()));

$(function () {
  $("#example1").DataTable({
    processing: true,
    retrieve: true,
    buttons: [
      {
        extend: "csv",
        exportOptions: {
          columns: [0, 1, 2, 3, 4],
        },
      },
    ],
  });
  $("#example2").DataTable({
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: true,
    info: true,
    autoWidth: false,
  });
});
