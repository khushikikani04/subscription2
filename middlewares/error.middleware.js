const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };

        error.message = err.message;

        console.error(err);

        //Mongoose bad objectId
        if (err.name === 'CassrError'){
            const message = 'Resource not found';
            error = new Error(message);
            error.statuscode = 404;
       }

        //Mongoose duplicate key
        if (err.code === 11000) {
            const message = 'Duplicate field value entered';
            error = new Error(message);
            error.statuscode = 400;
       }

        //Mongoose validation error
        if (err.name === 'validateError') {
            const message = Object.values(err.erros).map(val => val.message);
            error = new Error(message.join(', '));
        }

            res.status(error.statuscode || 500).json({ success: false, error: error.message || 'server Error'});
        } catch(error) {
            next(error);
        }
};

export default errorMiddleware