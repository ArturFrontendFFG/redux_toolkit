import React from "react";
import styled from "styled-components";
import { Button } from "../widgets/Button";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

const RecipeItem = ({ recipe }) => {
  const { favorites } = useFavorites();

  const { toogleFavorites } = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  const handleClick = (e) => {
    e.preventDefault();
    toogleFavorites(recipe);
  };
  return (
    <Card>
      <Image src={recipe.strMealThumb} alt="" />
      <h3>{recipe.strMeal}</h3>
      <Button onClick={handleClick}>
        {!!isExists ? "Remove From" : "Add to"} favorite
      </Button>
    </Card>
  );
};

const Image = styled.img`
max-width: 250px;
height: 250px;
border-radius: 15px;
`
const Card = styled.div`
  background: #393939;
  padding: 10px;
  margin: 15px;
  border-radius: 10px;
`;

export default RecipeItem;
