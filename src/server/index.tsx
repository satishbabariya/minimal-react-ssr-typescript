import * as Express from 'express';
import * as React from 'react';
import { renderToString  } from 'react-dom/server'

import App from '../shared/index'
const app = Express();

const html = ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
    </body>
    <script src="main.bundle.js" defer></script>
  </html>
`;

app.use(Express.static(__dirname + '/public')); 
app.get('*', (req: Express.Request, res: Express.Response) => {
 
    const body = renderToString(React.createElement(App));

    res.send(
      html({
        body
      })
    );
 
});

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});