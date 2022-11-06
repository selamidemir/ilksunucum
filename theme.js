const header = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İlk Sunucum</title>
    <style>
        .footer {
            padding: 15px;
        }
    </style>
</head>
<body>
`;

const footer = `
    <hr />
    <div class="footer">2022 @ <a href="https://netbilio.com">Netbilio Teknoloji</a>
</body>
</html>
`;

const menu = `
        <div id="menu"><b>İlk Sunucum</b>  - 
        <a href="/">Anasayfa</a> | 
        <a href="/contact">İletişim</a> |
        <a href="/about">Hakkında</a>
        </div>
        <hr />
`;

module.exports = {
  header,
  footer,
  menu,
};
