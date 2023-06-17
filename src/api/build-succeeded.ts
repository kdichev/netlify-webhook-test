import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  console.log("Build succeeded invoked");
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000); // 10 seconds
  });
  res.status(200).json({ success: true });
};

export default handler;
