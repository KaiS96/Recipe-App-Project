import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const handleChangeCuisine = ({ target }) => {
    setCuisine(target.value);
  };

  const handleChangePhoto = ({ target }) => {
    setPhoto(target.value);
  };

  const handleChangeIngredients = ({ target }) => {
    setIngredients(target.value);
  };

  const handleChangePreparation = ({ target }) => {
    setPreparation(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };

    createRecipe(newRecipe);

    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  //<input name="name">
  //<input name="cuisine">
  //<input name="photo">
  //<textarea name="ingredients">
  //<textarea name="preparation">
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                required
                onChange={handleChangeName}
              />
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                type="text"
                placeholder="Cuisine"
                required
                onChange={handleChangeCuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                type="url"
                placeholder="URL"
                required
                onChange={handleChangePhoto}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
                required
                onChange={handleChangeIngredients}
              />
              <p></p>
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                required
                onChange={handleChangePreparation}
              />
              <p></p>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;