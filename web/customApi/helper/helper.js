export const statusCode = {
  SUCCESS: 200,
  BADREQUEST: 400,
  UNAUTHORIZED: 401,
  NOTFOUND: 404,
  CREATED: 201,
  SERVER_ERROR: 500,
};




export const responseMessage = ({
  response,
  statusCode,
  message,
  success,
}) => {
  let resultObj = {
    success: success,
    message: message,
    
  };
  return response.status(statusCode).send(resultObj);
};
