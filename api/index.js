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
      <style>
        body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
        }
        h1 {
          margin: 0 0 20px 0;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div style="max-width: 600px; text-align: center; padding: 20px;">
        <h1>安全跳转提示</h1>
        <div style="margin-bottom: 20px; color: #666; font-size: 14px;">
          <svg style="vertical-align: middle; margin-right: 5px;" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z" fill="#4CAF50"/>
          </svg>
          即将跳转到官方认证网站：<span style="color: #4CAF50;">ggxh.nephen.cn</span>
        </div>
        <a href="${redirectUrl}" style="display: inline-block; padding: 12px 24px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 500; box-shadow: 0 2px 5px rgba(0,0,0,0.1); transition: all 0.3s ease;">
          安全跳转
        </a>
        <div style="margin-top: 30px; color: #999; font-size: 12px;">
          ©2025 版权所有 | 粤ICP备2022125614号
        </div>
      </div>
    </body>
    </html>
  `;

  res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').send(htmlContent);
};
