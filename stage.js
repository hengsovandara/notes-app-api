import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  try {
    callback(null, success(process.env.MESSAGE));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}