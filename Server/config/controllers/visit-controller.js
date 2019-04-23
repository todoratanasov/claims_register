const Visit = require("../../models/Visit");
module.exports = {
    visitCreate:async(req,res)=>{
        let _id = req.params.id.substr(1);
        const visit=req.body
        Visit
        .create(visit)
        .then((createdVisit)=>{
            res.status(200).json({
                success:true,
                message:"Visit was added",
                data:createdVisit
            })
        })
        .catch((err)=>{
            console.log(`This is and error from adding a visit: ${err}`)
        })
    }
}