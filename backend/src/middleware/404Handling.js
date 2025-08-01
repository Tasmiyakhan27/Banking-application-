import ApiError from "../utils/ApiError";

const NotFoundError=(req,res,next)=>{
    const error_obj={
        code:500,
        message:err.message || 'Not Found',
        stack:err.stack
    }

    if(err instanceof ApiError){
        error_obj.code = err.statusCode;
    }
    res.status(error_obj.code || 404).json(error_obj);


}

module.exports=NotFoundError;
