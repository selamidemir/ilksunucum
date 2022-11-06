const express = require("express");
const { header, footer, menu, form } = require("./theme");
const port = 3000;
const app = express();

// Uygulama kodları buraya gelecek
app.get("/", (req, res) => {
  const content = `
    <h1>ANA SAYFA</h1>
    <hr />
    <p>Sayfamıza hoşgeldiniz.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem, maiores ab omnis cumque adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet quas? Ad amet quia nulla?</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, quos non perferendis distinctio suscipit iure mollitia accusantium quia odit! Saepe facere consequuntur laboriosam ad! Magni!</p>
    `;

  const page = header + menu + content + footer;
  res.send(page);
});

app.get("/about", (req, res) => {
  const content = `
    <h1>BİZ KİMİZ</h1>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem, maiores ab omnis cumque adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet quas? Ad amet quia nulla?</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, quos non perferendis distinctio suscipit iure mollitia accusantium quia odit! Saepe facere consequuntur laboriosam ad! Magni!</p>
    `;

  const page = header + menu + content + footer;
  res.send(page);
});

app.get('/contact', (req, res) => {
    const content = `
    <h1>İLETİŞİM</h1>
    <hr />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim commodi est a rerum aliquam ut et qui dignissimos voluptas.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempore ipsam omnis blanditiis eaque necessitatibus sapiente. Id nostrum vitae nobis ut, repudiandae voluptatibus earum exercitationem placeat ipsa error ex quidem itaque voluptatem illum dolor? In?</p>
    `;

    const page = header + menu + content + footer;
    res.send(page);
});

app.get("*", (req, res) => {
  const content = `
    <h1>ARADIĞINIZ SAYFA BULUNAMADI</h1>
    <hr />
    <p>Aradığınız sayfa bulunamadı, yanlış bir sayfaya gelmiş olabilirsiniz. Lütfen anasayfa üzerinden devam ediniz.</p>
    `;

  const page = header + menu + content + footer;
  res.send(page);
});

app.listen(port, () => console.log("Uygulama başlatıldı."));
