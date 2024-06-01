import  User  from "../database/User.js";
import jsonwebtoken from 'jsonwebtoken';
import {JWT_SECRET_KEY} from "../config/config.js";
import bcryptjs from 'bcryptjs';

const {compareSync} = bcryptjs
const { sign } = jsonwebtoken
function generateToken(user) {
    const { _id, name, email} = user;
    const expireMinutes = 60;
    return sign({
        _id, name, email,
        exp: Math.floor(Date.now() / 1000) + (expireMinutes * 60),
    }, JWT_SECRET_KEY);

}

export async function login(req, res) {
    try {

        const {
            email, password
        } = req.body;
        
        let user = await User.findOne({
            email, 
        })
        if (!user || !compareSync(password, user.password)) {
            return res.status(400).send({
                error: 'Invalid credentials'
            })
        }

        // Create JWT token
        const token = generateToken(user);
        delete user.password;

        return res.send({
            message: 'Login successful',
            data: {
                token
            }
        })

    } catch(err) {
        console.log(err);
        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
}