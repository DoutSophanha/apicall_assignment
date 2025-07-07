import { createAccount, loginAccount } from "../service/auth.js"


export const createAccountController = async (req,res)=>{
    try {
        const {email,password} = req.body
        const response = await createAccount(email,password)
        return res.status(response.status).json(response)
    } catch (error) {
        console.log(error)
    }
}
export const loginAccountController = async (req,res)=>{
    try {
        const {email,password} = req.body
        const response = await loginAccount(email,password)
        return res.status(response.status).json(response)
    } catch (error) {
        console.log(error)
    }
}