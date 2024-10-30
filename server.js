const express=require('express');
const mongoose=require('mongoose');
const block=require('./block');
const app=express();
app.use(express.json());
app.get('/',async(req,res)=>{
    const info=await block.find({});
    res.status(200);
    res.send(info);
});
app.post('/',async(req,res)=>{
    const inf=await block.create(req.body);
    res.status(200).json();


});
app.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const a=await block.findByIdAndUpdate(id,req.body);
    res.status(200).json();
    
});
app.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    const a=await block.findByIdAndDelete(id);
    res.status(200).json();
})
mongoose.connect()
.then(app.listen(7000,()=>{
  console.log('Listening');
}));
