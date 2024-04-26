import prismaClient from "../../prisma";

interface UserRequest{
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  async execute({name, email, password}: UserRequest){

    if(!email){
      throw new Error("email incorrect")
    }

    const userAlreadyExist = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(userAlreadyExist){
      throw new Error("User already exists")
    }

    const user = await prismaClient.user.create({
      data:{
        name:name,
        email:email,
        password:password
      }
    })


    return user
  }
}

export { CreateUserService }