import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import "./Recipes.css";



export const RecipeCard = (props) => {
    const recipe = props.recipe;
    return (
        <Card className = "RecipeCards" style={{ width: '12rem', margin: '0 auto' }}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title className="recipeCardTitle">{recipe.title}</Card.Title>
                <Card.Text className="recipeCardBadges">
                    <Badge bg="secondary">
                        Ready in {recipe.readyInMinutes}mins
                    </Badge>{' '}
                    {recipe.vegetarian && (
                        <Badge bg="success">
                            Vegetarian
                        </Badge>
                    )}
                    {' '}
                    {recipe.vegan && (
                        <Badge bg="warning" text="dark">
                            Vegan
                        </Badge>
                    )}
                    {' '}
                    {recipe.glutenFree && (
                        <Badge bg="primary">
                            Gluten Free
                        </Badge>
                    )}
                    {' '}
                    {recipe.veryHealthy && (
                        <Badge bg="info">
                            Healthy Option
                        </Badge>
                    )}

                </Card.Text>
            </Card.Body>
        </Card>
    )

}