import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

const handler = (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => {
  console.log("Deploy successfull invoked");
  res.status(200).json({ success: true });
};

export default handler;
