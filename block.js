const mongoose=require('mongoose');
const mschema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        id:{
            type:String,
            required:true
        }
    }
);
const block=mongoose.model('block',mschema);
module.exports=block;