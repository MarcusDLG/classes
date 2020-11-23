const os = require("os");
const getInfo = () => {
  console.log(
    os.platform(),
    ",",
    os.homedir(),
    ",",
    os.hostname(),
    ",",
    os.totalmem(),
    ",",
    os.freemem()
  );
  console.log(Object.keys(os));
};
getInfo();
