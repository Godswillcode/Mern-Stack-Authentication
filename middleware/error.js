const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next) => {
     let error = { ...err };

     error.message = err.message;

     console.log(err);

     if(err.code === 11000) {
         const message = `Duplicate Field Value Enter`
         error = new ErrorResponse(message, 400)
     }
}