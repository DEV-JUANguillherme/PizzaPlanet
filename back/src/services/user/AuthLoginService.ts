import prismaClient from "../../prisma";

interface AuthResquest{
    email: string,
    password: string
}
class AuthUserService{
    async execute({email, password}: AuthResquest){
        
    }
}

export {AuthUserService};