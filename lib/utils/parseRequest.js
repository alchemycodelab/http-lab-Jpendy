module.exports = rawRequest => {
  const [method, path, , , body] = rawRequest.split(' ');

  const parsedBody = body.split('\n');
  
  if(parsedBody) {
    return {
      method,
      path,
      body: parsedBody[2]
    };
  }  else 
    return {
      method,
      path
    };
  
};

