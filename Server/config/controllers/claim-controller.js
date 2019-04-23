const Claim=require("../../models/Claim");

module.exports={
    claimDetail:(req,res)=>{
        let _id = req.params.id.substr(1);
        Claim.findById({_id})
            .then((claim)=>{
                res.status(200).json({
                    success:true,
                    message:"Single claim returned",
                    data:claim
                })
            })
            .catch((err)=>{
                console.log(`This is an error from retreiving claim from db ${err}`)
            })
    },
    claimEdit:(req,res)=>{
        let _id = req.params.id.substr(1);
        Claim.findByIdAndUpdate({_id},{
            $set:{
                closed:req.body.closed,
                description:req.body.description
            }
        })
        .then((claim)=>{
            res.status(200).json({
                success:true,
                    message:"Claim was updated",
                    data:claim
            })
        }).catch((err)=>{
            console.log(`This is an error while updating claim: ${err}`)
        })
            
    }
}