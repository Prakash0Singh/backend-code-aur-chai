// const asyncHandler=(fn)=>{async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code||500).json({
//             success:false,
//             error:error.message
//         })
//     }
// }}

const asyncHandler=(requestHandlaer)=>{
    return (req,res,next)=>{
        Promise
        .resolve(requestHandlaer(req,res,next))
        .catch((err)=>next(err))
    }
}

export { asyncHandler }

