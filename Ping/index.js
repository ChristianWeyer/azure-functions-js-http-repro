module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  context.res = {
    body: "OK"
  };
};
