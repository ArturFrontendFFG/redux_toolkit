import { useState } from "react";
import { useGetRecipesQuery } from "../store/api/api";
import Header from "./Header";
import { CreateRecipe } from "./create-recipe/CreateRecipe";
import RecipeItem from "./recipe-Item/RecipeItem";
import { User } from "./user";
import { Input } from "./widgets/Input";
import { Button } from "./widgets/Button";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryTerm, setQueryTerm] = useState(false);
  const userId = 1;
  const { isLoading, error, data } = useGetRecipesQuery(searchQuery, {
    // selectFromResult: ({data}) => ({data: data?.filter(item => item.id < 3)})

    //selectFromResult применяется чтобы изменять данные на клиентской части

    skip: !userId,

    // skip позваляет указывать проверку когда запрос не будет выполняться
  });

  const handleSearch = () => {
    setQueryTerm(searchQuery)
  };

  return (
    <section>
      <Header></Header>
      <User/>
      <CreateRecipe />
      <div style={{padding: '10px'}}>
        <p style={{marginBottom: '5px'}}>If you wanna find: </p>
        <Input
          style={{width: '100%'}}
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search term"
        ></Input>
        <Button>Search</Button>
      </div>
      <div>
        {isLoading ? (
          <>Loader...</>
        ) : error ? (
          <>Error</>
        ) : data ? (
          data.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe}></RecipeItem>
          ))
        ) : (
          "Not recipes"
        )}
      </div>
    </section>
  );
}

export default App;
