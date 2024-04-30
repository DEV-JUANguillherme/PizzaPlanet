import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthLoginService";

class AuthLoginController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body

        const authLoginService = new AuthUserService()

        const auth = await authLoginService.execute({
            email,
            password
        })
        return res.json(auth)
    }
}

export {AuthLoginController};