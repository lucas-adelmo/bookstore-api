function customError(message,status) {
    const error = Object.create(Error.prototype);
    error.message = message;
    error.status = status;
    
    error.sendResponse = function(res) {
        res.status(status).send({
            message,
            status
        });
    };
    
    return error;
}
  
export default customError;

// The same code can be rewrite using classes (sugar sintax in JavaScript):

// class CustomError extends Error{
//     constructor(message = "Server Error", status = 500){
//         super();
//         this.message = message;
//         this.status = status;
//     }

//     sendResponse (res){
//         res.status(this.status).send({
//             message: this.message,
//             status: this.status
//         });
//     }

// }

// export default CustomError;