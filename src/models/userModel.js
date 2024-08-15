import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,           
        }
    });
    return users
} 
//    return [
//        {
//            id: 1,
//            name: "Gilliard",
//            email: "gilliard@gmail.com"
//        },
//        {
//            id: 2,
//            name: "Maria",
//            email: "maria@gmail.com"
//       }
//    ]
//}

export const create = () => {

}