// import recipeData from './recipeData.json';

export const getRecipies = async () => {
    try {
        const response = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`)
        if(!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        // const data = recipeData;
        return data;
    } catch (error) {
        throw new Error('Fetch request failed');
    }
}

