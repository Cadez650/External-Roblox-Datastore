  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser")
  const noblox = require('noblox.js')
  const firebase = require('firebase');

    async function setupNoblox() {
        try {
          await noblox.setCookie(`_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_01A0A836633EF404DC13BC1B09834FEF6E4936F1E8477B0BEBB218DB50D1A18D495C274B93FE901470581A6C04E9E8B27D29EC1E512EEEAFC32E293A5FF38FB834C354C686FDD0B1ECE3D431C32CCC8FD16708F8F770622266A115B70A5169D5F1EE3371B205B19A946E6533B943E37C2A4520A3EA9472F4FF43A94B56BBDCC971380FB08351E79CABD042522F0204F562BD581080AE182EFE1023AB4F90917D74AFF483C6C5BD4937932A7A8D991D6A57508C78FE14D010EB7A77D2D06BA16081C8946C82B7B3CFBA31620F1BAC4238989D7C3E3CB456013DE1A010B8CD01492B444D87E29BAA21D174D584A3E1B36AD1978EADC085DA516410BD772A12A35D7DD0C8376A359CF4BAA4744EDC170FD06679F8745480E6F4222EC8B39DFE5ED2A379F55422049EB23BB91D0E763B1C06A426D746308D19D5FB6437F7A95A23825710C0E4`)
          console.log("Logged in!");
        } catch(err) {
          throw err;
        }
    }

  app.use(bodyParser.json());

  setupNoblox()
  console.log("app started")

  app.post("/", function(req, res) {
    const groupId = req.body.GroupId;
    const UserId = req.body.UserId;
    const username = req.body.Username;
    const data = req.body.data;
    console.log(groupId);
    console.log(UserId);
  });

  app.listen(443);