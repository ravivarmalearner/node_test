try {
  console.log("Inside Test");
  throw "Test Failed From Manual Exception";
}
catch (e) {
  console.log("Inside Catch");
  console.log(e);
  return process.exit(-1);
}
