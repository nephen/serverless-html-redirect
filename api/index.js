// api/index.js
module.exports = async (req, res) => {
  const queryParams = req.query;
  const recommend = queryParams.recommend || '';
  const token = queryParams.token || '';
  const redirectUrl = recommend ? 
    `https://ggxh.nephen.cn/?recommend=${recommend}${token ? `&token=${token}` : ''}` : 
    `https://ggxh.nephen.cn/${token ? `?token=${token}` : ''}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="zh">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>页面跳转</title>
    </head>
    <body>
      <h1>点击下面的按钮跳转到新页面</h1>
      <a href="${redirectUrl}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; font-size: 16px;">一键跳转</a>
    </body>
    </html>
  `;

  res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').send(htmlContent);
};
