const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
      res.write('<html>');
      res.write('<head><title>Enter Username</title><head>');
      res.write(
        '<body><p>Enter Username: </p><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
      );
      res.write('</html>');
      return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
      const body = [];
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      });
      return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const user = parsedBody.split('=')[1];
        console.log(user);
      });
    }
    if (url === '/users')
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>User List</title><head>');
    res.write('<body><h1>List of users</h1></body>');
    res.write('<p>put users here</p>')
    res.write('</html>');
    res.end();
  };

  exports.handler = requestHandler;