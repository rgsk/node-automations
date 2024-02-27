import { Router } from "express";
import sendEmailWithGmailSmtp from "lib/sendEmailWithGmailSmtp";
const rootRouter = Router();
rootRouter.get("/", (req, res, next) => {
  try {
    res.json({ message: "Hello from emailer" });
  } catch (err) {
    next(err);
  }
});

rootRouter.post("/send-email", async (req, res, next) => {
  try {
    const { to, subject, html } = req.body;
    const info = await sendEmailWithGmailSmtp({ to, subject, html });
    res.json({ message: "email sent", info });
  } catch (err) {
    next(err);
  }
});

export default rootRouter;
