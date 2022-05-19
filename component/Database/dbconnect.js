const mongoose = require("mongoose");

// global.mongoose = {
//   conn: null,
//   mongoose: null,
// };
// export async function dbconnect() {
//   if (global.mongoose && global.mongoose.conn) {
//     console.log("using existing connection ");
//     return global.mongoose.conn;
//   } else {
//     console.log("using new connection ");
//     const promise = mongoose
//       .connect("mongodb://localhost:27017/test")
//       .then((mongoose) => mongoose);
//     global.mongoose = {
//       conn: await promise,
//       mongoose: null,
//     };
//     return await promise;
//   }
// }
exports.dbconnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/nextUser")
    .then((data) => {
      console.log(`database connect ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`database err ${err}`);
    });
};
