import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css";

function RecipeModal(props) {
  console.log("props.basket", props.basket)
  const recipe = props.recipe;
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {recipe.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> Serves: {recipe.servings}</p>
        <p> Ingredients:
          <ul>
            {recipe.extendedIngredients.map((i) =>
              <li>{i.name}</li>
            )}
          </ul>
        </p>
        <p> {recipe.instructions}</p>
        <p>£{recipe.pricePerServing.toFixed(2/10)/10}</p>
      </Modal.Body>
      <Modal.Footer> 
        <div className='modalFooterBox'>
          <Button className='modalFooterButton' variant="secondary">Favourite</Button>
          <Button className='modalFooterButton' variant="primary" onClick={() => 
          {props.updateBasket([...props.basket, recipe])
              }}>Add to Basket</Button>
        </div>
        </Modal.Footer>
    </Modal>
  );
}


export default RecipeModal;

