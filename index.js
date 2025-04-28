module.exports.handler = async (event) => {
    // 获取 URL 查询参数
    const queryParams = event.queryStringParameters;
    const recommend = queryParams ? queryParams.recommend : null;

    // 构造目标跳转的 URL，传递相同的参数
    const redirectUrl = recommend ? `https://ggxh.nephen.cn/?recommend=${recommend}` : 'https://ggxh.nephen.cn/';

    // HTML 页面内容
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

    // 返回 HTML 页面
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        },
        body: htmlContent
    };
};
