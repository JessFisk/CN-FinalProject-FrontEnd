import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css";



function RecipeModal(props) {
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
      </Modal.Body>
      <Modal.Footer> 
        <div className='modalFooterBox'>
          <Button className='modalFooterButton' variant="secondary">Favourite</Button>
          <Button className='modalFooterButton' variant="primary">Add to Basket</Button>
        </div>
        </Modal.Footer>
    </Modal>
  );
}


export default RecipeModal;

