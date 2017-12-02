import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  try {
    callback(null, success("Message from your environment is: " + process.env.MESSAGE));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}