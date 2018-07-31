var mongoose = require('mongoose');
var schema = mongoose.Schema;

var User = new schema ({
	"name":{
		type:String,
		required:true
	},
	"email":{
		type:String,
		required:true
	},
	"phone":{
		type:Number,
		required:false
	},
	"password":{
		type:String,
		required:true
	}
});


var UserSchema = module.exports = mongoose.model('user',User);

module.exports.insertUser =async function(condition){
	return new Promise((resolve, reject) =>{
		UserSchema.create(condition).then((res)=>{
			resolve(res);
		}).catch((err) =>{
			reject(err);
		});
	})
}

// module.exports.findUser = function(condition, cb){
// 	UserSchema.findOne(condition, function(err,data){
// 		if(err){
// 			cb(err);
// 		}
// 		else{
// 			cb(null, data);
// 		}
// 	})

// }


module.exports.findUser = async function(condition){
	return new Promise((resolve, reject) =>{
		UserSchema.findOne(condition).then((res) =>{
			 resolve(res)
		}).catch((err)=>{
			reject(err);
		})
	})
}
