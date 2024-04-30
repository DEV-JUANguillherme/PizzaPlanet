import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthResquest{
    email: string,
    password: string
}
class AuthUserService{
    async execute({email, password}: AuthResquest){
        // verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if (!user){
            throw new Error("User/password incorrect")
        }
        // verificar se a senha esta correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }

        // gerar token JWT
    }
}

export {AuthUserService};