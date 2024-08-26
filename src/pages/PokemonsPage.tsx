
import React, { useEffect } from 'react';
import PokemonsComponent from "../components/PokemonsComponent";
import { useAppDispatch, useAppSelector } from "../redux/hooks-redux";
import { pokemonAction, setCurrentPage } from "../redux/slice/pokemonSlice";
import styles from './../css/Pagination.module.css'

const PokemonList: React.FC = () => {
    let dispatch = useAppDispatch();
    let { pokemons, totalPages, currentPage, limit, next, previous } = useAppSelector(state => state.pokemonStore);

    useEffect(() => {
        const offset = (currentPage - 1) * limit;
        dispatch(pokemonAction.loadPokemons({ limit, offset }));
    }, [dispatch, currentPage, limit]);

    const Previous = () => {
        if (previous) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    const Next = () => {
        if (next) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    return (
        <div>
            <h1>Pokemon List</h1>
            <PokemonsComponent pokemons={pokemons} />
            <div className={styles.paginationContainer}>
                <button onClick={Previous} disabled={currentPage === 1} className={styles.paginationButton}>
                    Previous
                </button>
                <span className={styles.paginationInfo}>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={Next} disabled={currentPage === totalPages} className={styles.paginationButton}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PokemonList;