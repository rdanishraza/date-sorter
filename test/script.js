// const dateSort = require("date-sorter");
// // import dateSort from "date-sorter";

// let arr = [
//   "03/15/2023",
//   "07/02/2022",
//   "11/29/2024",
//   "01/10/2025",
//   "09/18/2023",
// ];
// console.log(dateSort.sortDate(arr));

import("date-sorter")
  .then((dateSort) => {
    // Use dateSort here
    let arr = [
      "03/15/2023",
      "07/02/2022",
      "11/29/2024",
      "01/10/2025",
      "09/18/2023",
    ];
    console.log(dateSort.sortDate(arr));
  })
  .catch((error) => {
    console.error(error);
  });
