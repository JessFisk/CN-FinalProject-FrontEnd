
export const getRecipies = async () => {
    try {
        const response = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
        if(!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Fetch request failed');
    }
}




