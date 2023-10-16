import { api } from "./api";

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: recipe,
                url: '/recipe',
                method: 'POST'
            }),
            invalidatesTags: () => [{
                type: 'Recipe', //можно обновить еще что нибудь
            }]
        })
    })
})

export const {useCreateRecipeMutation} = recipeApi;