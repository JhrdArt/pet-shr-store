const baseUrl = "http://localhost:4000"

export const updatePaymentIntent = async (paymentIntentId: string, currency:string) =>{
    const response = await fetch(`${baseUrl}/payment-intents/${paymentIntentId}`, {
        body: JSON.stringify({paymentIntentId, currency}),
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(!response.ok){
        throw new Error(`Error update data: ${response.statusText}`)
    }
   
    return await response.json()
}
export const createPaymentIntent = async (currency: string) =>{
    const {ok, json, statusText} = await fetch(`${baseUrl}/payment-intents`, {
        body: JSON.stringify({currency}),
        method: "POST"
    });
    if(!ok){
        throw new Error(`Error posting data: ${statusText}`)
    }

    return await json();
}