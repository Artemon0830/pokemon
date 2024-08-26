// src/router/router.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorLayout from "../layout/ErrorLayout";
import HomePage from "../pages/HomePage";
import PokemonsPage from "../pages/PokemonsPage";
import PokemonPage from "../pages/PokemonPage";
import SearchPage from "../pages/SearchPage";
import FormPage from "../pages/FormPage";
import React from "react";
import FavoritesPage from "../pages/FavoritePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/pokemon', element: <PokemonsPage /> },
            { path: '/pokemon/:name', element: <PokemonPage /> },
            { path: '/pokemon/:name/form/:form', element: <FormPage /> },
            { path: '/my-favorites', element: <FavoritesPage /> },
            { path: '/search', element: <SearchPage /> },
        ]
    }
]);