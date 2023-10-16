import { useState } from "react";
import { Input } from "../widgets/Input";
import styled from "styled-components";
import { Button } from "../widgets/Button";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";
export const CreateRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    strMeal: "",
    strMealThumb: "",
  });

  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    createRecipe(recipe).then(() => setRecipe({ ...recipe, strMeal: "", strMealThumb: "" }));
  };
  return (
    <Form action="#" autoComplete="off" onSubmit={handleSubmit}>
      <p>Create new recipe:</p>
      <label htmlFor="text">
        <Input
          type="text"
          placeholder="Name"
          id="text"
          value={recipe.strMeal}
          onChange={(e) => setRecipe({ ...recipe, strMeal: e.target.value })}
        />
      </label>
      <label htmlFor="image">
        <Input
          value={recipe.strMealThumb}
          type="text"
          placeholder="Image"
          id="image"
          onChange={(e) =>
            setRecipe({ ...recipe, strMealThumb: e.target.value })
          }
        />
      </label>
      <Button type="submit">Create recipe</Button>
    </Form>
  );
};

const Form = styled.form`
  padding: 10px;
  display: grid;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;
