const mongoose = require("mongoose");
const {Schema} =mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}//copy from main to this line from mongoosejs.com

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
  let user1 = new User({
    username: "Spiderman",
    addresses: [{
      location: "69th Road, Forest Hills",
      city: "New York "
    }]
  });

  user1.addresses.push({location: "224 Park Drive", city: "Gotham City"});
  let result = await user1.save();
  console.log(result);
}

addUsers();