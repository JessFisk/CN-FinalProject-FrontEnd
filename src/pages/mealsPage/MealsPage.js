import { useState, useEffect } from "react";
import { getRecipies } from "../../utils/recipes";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MealsPage = (props) => {
    const [recipeCardData, setRecipeCardData] = useState({ recipes: [] });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRecipies();
            setRecipeCardData(data);
            console.log(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1> Time to Shop </h1>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                {
                    recipeCardData.recipes.map((recipe, index) => (
                        <Col key={index}>
                            <Card  style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={recipe.image} />
                                <Card.Body>
                                    <Card.Title>{recipe.title}</Card.Title>
                                    <Card.Text>
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
                        </Col>
                    ))
                }
            </Row>
        </div>
    )


}






export default MealsPage;

