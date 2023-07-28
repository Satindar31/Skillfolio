import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


/**
 * Retrieves all posts for a given email.
 *
 * @param {string} email - The email for which to retrieve the posts.
 * @return {Promise<Array>} - A promise that resolves to an array of posts.
 */
export default async function getAllPosts(email?: string) {
    const data = await prisma.resume.findMany({
        where: {
            email: email
        }
    })

    return data
}