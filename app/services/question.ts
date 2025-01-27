import { preamble } from "~/utils/preamble";

const API_KEY = import.meta.env.VITE_API_KEY_COHERE;

export const postQuestionAI = async (question : string) => {
    try {
        const response = await fetch("https://api.cohere.com/v2/chat", {
            method: "POST",
            body: JSON.stringify({
                model : "command-r-plus-08-2024",
                messages: [
                    {
                        role: "system",
                        content: preamble,
                    },
                    {
                        role: "user",
                        content: question,
                    }
                ]
            }),
            headers:{
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            }
        })
        if(!response.ok) {
            throw new Error("Error al enviar la pregunta, inténtalo nuevamente.")
        }

        return await response.json()

    } catch (error: any) {
        console.error(error)
        throw new Error("Internal server error" + error.message)
    }
}