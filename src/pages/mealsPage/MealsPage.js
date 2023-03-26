import { useState, useEffect } from "react";
import { getRecipies } from "../../utils/recipes";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { RecipeCard } from "../../components/recipes/Recipes";
import "./MealsPage.css";
import shoppingPageImg from "./nom-box.png";
import shoppingPageImgtwo from "./pexels-vlada-karpovich-6944050.jpg";

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
            <h1 id="mealPageTitle"> Choose your Recipes </h1>
            <Row>
                <Col className="shoppingRow">
                    <div className="shoppingBannerImg" style={{ backgroundImage: `url(${shoppingPageImg}),url(${shoppingPageImgtwo})` }}>
                        {/* <h1>Once you've started you can't stop...</h1> */}
                    </div>
                    <div>
                        <p>Choose from our fantastic recipes to build your perfect
                             Nom... Add to your online recipe book or add to your 
                             box, you choose. </p>
                    </div>
                </Col>
            </Row>
            <div className = "RecipeCardContainer">
                <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                    {
                        recipeCardData.recipes.map((recipe, index) => (
                            <Col key={index}>
                                <RecipeCard recipe={recipe} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    )


}


export default MealsPage;

