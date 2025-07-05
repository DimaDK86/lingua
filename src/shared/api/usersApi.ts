// src/services/usersApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Определяем тип User прямо здесь
type User = {
  id: number
  name: string
  email: string
  language: string
  registrationDate: string
  activeCourses: number
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    // Получение всех пользователей
    getUsers: builder.query<User[], void>({
      query: () => 'users',
    }),
    
    // Получение конкретного пользователя по ID
    getUser: builder.query<User, number>({
      query: (id) => `users/${id}`,
    }),
  }),
})

// Экспортируем только хуки для запросов
export const { 
  useGetUsersQuery, 
  useGetUserQuery 
} = usersApi