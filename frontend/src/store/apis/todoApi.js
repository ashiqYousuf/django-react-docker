import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log(process.env.REACT_APP_BASE_URL)

const todoApi = createApi({
    reducerPath: 'todo',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
    }),
    endpoints(builder) {
        return {
            editItem: builder.mutation({
                invalidatesTags: ['Items'],
                query: ({data , id}) => {
                    return {
                        url: `update/${id}/`,
                        method: 'PUT',
                        body: data,
                        headers: {
                            'Content-type': 'application/json',
                        }
                    }
                }
            }),
            addItem: builder.mutation({
                invalidatesTags: ['Items'],
                query: (data) => {
                    return {
                        url: 'create/',
                        method: 'POST',
                        body: data,
                        headers: {
                            'Content-type': 'application/json',
                        }
                    }
                }
            }),
            deleteItem: builder.mutation({
                invalidatesTags: ['Items'],
                query: (id) => {
                    return {
                        url: `delete/${id}/`,
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json',
                        }
                    }
                }
            }),
            fetchItems: builder.query({
                providesTags: ['Items'],
                query: (page=1) => {
                    return {
                        url: `list/?page=${page}`,
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json'
                        }
                    }
                }
            })
        }
    }
});

export { todoApi };
export const { useFetchItemsQuery , useDeleteItemMutation , useAddItemMutation , useEditItemMutation } = todoApi;
