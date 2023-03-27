import { useState, useEffect } from "react";
import { getRecipies } from "../../utils/recipes";
// import Card from "react-bootstrap/Card";
// import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { RecipeCard } from "../../components/recipes/Recipes";
import "./MealsPage.css";
import shoppingPageImg from "./nom-box.png";
import shoppingPageImgtwo from "./pexels-vlada-karpovich-6944050.jpg";
import { Navigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


const MealsPage = (props) => {

    const [recipeCardData, setRecipeCardData] = useState({ recipes: [] });

    useEffect(() => {
        const fetchData = async () => {
            //Adding props.user here makes it so the API doesnt load unless user is logged in
            if (props.user) {
                const data = await getRecipies();
                setRecipeCardData(data);
                console.log(data);
            }

        }
        fetchData();
    },[]);


    //Navigate to login page if user is not logged in 
if (!props.user){
    return <Navigate to = "/login" replace/>
}

    return (
        props.user && (
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
                <div className="RecipeCardContainer">
                    <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                        {
                            recipeCardData.recipes.map((recipe, index) => (
                                <Col key={index}>
                                    <RecipeCard recipe={recipe} user= {props.user} />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
        )
    )


}


export default MealsPage;

