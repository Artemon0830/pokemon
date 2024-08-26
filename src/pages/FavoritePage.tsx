import React from 'react';
import { useAppSelector } from "../redux/hooks-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from './../css/FavoritesPage.module.css';

const FavoritesPage = () => {
    let favorites = useAppSelector(state => state.favoriteStore.favorites);
    let navigate = useNavigate();

    const addFavoriteMore = () => {
        navigate('/pokemon');
    }

    return (
        <div className={styles.favoritesContainer}>
            <button onClick={addFavoriteMore} className={styles.addButton}>Add More Favorites</button>
            {favorites.map((pokemon, index) => (
                <div key={index} className={styles.pokemonCard}>
                    <h2>{pokemon.name}</h2>
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FavoritesPage;