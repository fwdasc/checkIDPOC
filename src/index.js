const express = require("express");
const app = express();
const fetch = require("node-fetch");

const url = "https://api.jochek.com/hk/verify";
const headers = {
  "Content-Type": "application/json",
  "x-api-key": "VqXLkyQYsM1a4uxoEEGkh4z7Kz0hFPBl8Udvm0fr"
};
app.use(express.json({ limit: 10000000000 }));
app.use(express.urlencoded({ extended: true }));

var body = {
  base64image: ""
};
app.use("/", express.static("public"));

app.post("/api/checkID", async (req, res) => {
  const data = {
    headers: headers,
    body: JSON.stringify(req.body),
    method: "POST"
  };

  const call = fetch(url, data);

  const data2 = await call.then((x) => x.json());

  res.send(data2);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
