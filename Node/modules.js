const os = require("os");
const getInfo = () => {
  console.log(
    // os.networkInterfaces(),
    // ",",
    os.userInfo(),
    ",",
    os.totalmem(),
    ",",
    os.freemem()
  );
};
let asdfasdf = getInfo();
console.log(asdfasdf);
