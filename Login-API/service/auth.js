import jwt from "jsonwebtoken"
import {genSaltSync, hashSync,compare} from "bcrypt"
import  {PrismaClient}  from "@prisma/client";
const prisma = new PrismaClient()
export const createAccount = async (email,password)=>{
    if(email== "" || password  ==""){
        return {
            status:200,
            message:"Please enter email or password"
        }
    }
    const existUser = await prisma.user.findFirst({
        where:{
            email:email
        }
    })
    if(existUser){
        return {
            status:200,
            message:"User is existed"
        }
    }
    const hashPassword = hashSync(password,genSaltSync(10))
    await prisma.user.create({
    data:{
        email: email,
        password:hashPassword
    }
   })
    return {
        status: 400,
        message:"Account has created"
    }
}

export const loginAccount = async (email,password)=>{
    const existUser = await prisma.user.findFirst({
        where:{
            email:email
        }
    })
    if(!existUser){
        return {
            status:200,
            message:"User is not exist. Please create an account"
        }
    }
    const isMatch = await compare(password, existUser.password);
    if (!isMatch) {
    return {
      status: 401,
      isSuccess: false,
      message: "Password or Email is incorrect",
    };
   }
    return {
        status:200,
        message:"login successfully"
    }
}