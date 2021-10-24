import prismaClient from "../prisma"



class GetLastMessagesService {
    async execute() {
        
        const messages = await prismaClient.message.findMany({
            orderBy:{
                created_at: "desc"
            },
            include:{
                user: true,
            },
        });

        // SELECT * FROM MESSAGE ORDER BY CREATED_AT DESC

        return messages;

    }
}


export { GetLastMessagesService }