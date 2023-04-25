const User = require('../models/user');

const createbmwandlowerfive = async(req,res)=>{
    try {
    const user = await User.find({
      income: { $lt: 5 },
      car: { $in: ["BMW","Mercury"] },
    });
   return res.json(user);
  } catch (err) {
    console.error(err);
   return res.status(500).send("Server Error");
  }
}

const createmaleandgreaterten = async(req,res)=>{
  try{
    const user = await User.find({
      phone_price: { $gt:100000 },
      gender: { $in:"Male"},
    })
     return res.json(user);
  }catch(error){
  console.error(err);
   return res.status(500).send("Server Error");
  }
}

const lastname = async(req,res)=>{
  try{
   const user = await User.find({
      
     last_name: { $regex: '^M', $options: 'i' },
      quote: { $exists: true, $gt: 15 },
      email: { $regex: /M$/i },
      
   })
    return res.json(user);
  }catch(err){
   console.error(err);
   return res.status(500).send("Server Error");
  }
}


const carbrand = async(req,res)=>{
  try{
    const user = await User.find({
      
        
      car:{$in: ["BMW","Mercury",'Audi']},
       email: {$not: /\d/ }
        
      
    })
   return res.json(user);
  }
  catch(error){
   console.error(error);
   return res.status(500).send("Server Error");
  }
}

const avg = async(req,res)=>{
  try{
   const user = await User.aggregate([
    { $group: { _id: '$city', count: { $sum: 1 }, avgincome: { $avg: { $toDecimal: {$substr:["$income",1,3]}} } } },
    { $sort: { count: -1 } },
    { $limit: 10 }
   ]

   );

   return res.json(user);
  }catch(error){
   console.error(error);
   return res.status(500).send("Server Error");
  }
}
module.exports = {createbmwandlowerfive,createmaleandgreaterten,lastname,carbrand,avg};