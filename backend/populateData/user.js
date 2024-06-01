import User from "../database/User.js";
import connectDatabase from "../database/connectDatabase.js";
import bcryptjs from 'bcryptjs';

const {hashSync} = bcryptjs;
export async function addOneUser() {
    try{
        const db = await connectDatabase();
        const email = 'johndoe@example.com'
        const password = hashSync('password')
        const user = new User({
            email, password
        });

        await user.save();

        console.log('User created successfully');
    }catch(err){
        console.log(err);
    }
}
addOneUser()