const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const host = "127.0.0.1";
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes/authRoutes");
const { dbConnect } = require("./utils/db");
const committeeRouter = require("./routes/committeeRoutes");
const mentorRouter = require("./routes/mentorRoutes");
const boardMemberRouter = require("./routes/boardMemberRoutes");
const noticeRouter = require("./routes/noticeRoute");
const fileUpload = require("express-fileupload");
const exclusiveMembersRouter = require("./routes/exclusiveMemberRoutes");
const committeeRegistrationRouter = require("./routes/committeeRegistrationRoutes");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
dbConnect();
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use("/api", routes);
app.use("/api", committeeRouter);
app.use("/api", mentorRouter);
app.use("/api", boardMemberRouter);
app.use("/api", noticeRouter);
app.use("/api", exclusiveMembersRouter);
app.use("/api", committeeRegistrationRouter);

app.listen(port, host, () => {
  console.log(`Server is running at ${port}`);
});
