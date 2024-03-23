
import userModel from "../model/user.schema.js"

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { sign } = jwt;

export async function signup(req, res) {
    try {
        let { uname,email,pass,cpass} = req.body;
        
        let hashedPass = await bcrypt.hash(pass, 12);
        await userModel.create({
            uname,
            email,
            pass: hashedPass,
            cpass
        });
        return res.status(201).json({
            msg: "Registration successful!"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error occured!"
        })
    }
}


export async function login(req,res) {
    try {
        let { uname, pass } = req.body;
        if(!uname || !pass) {
            return res.status(400).json({
                msg: "Username or password cannot be empty!"
            })
        }
        let user = await userModel.findOne({ uname});
        if(!user) {
            return res.status(400).json({
                msg: "Invalid username or password!"
            })
        }
        let isMatch = await bcrypt.compare(pass, user.pass);
        if(isMatch) {
            let token = sign({
                uname: user.uname,
                userId: user._id,
                type: user.type
            }, process.env.SECRET_KEY,{
                expiresIn: "48h"
            });
            return res.status(200).json({
                msg: "Login successful!",
                type: user.type,
                token
            })
        }
        return res.status(400).json({
            msg: "Invalid username or password!"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error occured!"
        })
    }
}


export async function getUsername(req, res){
    let{uname} = req.user;
    console.log(uname);
    let profile = await userModel.find({uname});
    res.json(profile);

}