import { useState, createContext } from "react";

const FavoritesContext = createContext([])

function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([])

    function toggleFavorite(category, uid, name) {
        setFavorites(prev => {
            if (prev.some(e => e.name === name && e.uid === uid)) {
                return prev.filter(e => !(e.name === name && e.uid === uid))
            }
            else {
                return [...prev, { category, uid, name }]

            }
        })
    }

    function favoriteExists(uid, name) {
        return favorites.some(e => e.name === name && e.uid === uid)
    }

    function deleteFavorite(uid, name) {
        setFavorites(prev => prev.filter(e => e.uid !== uid && e.name !== name))
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, deleteFavorite, favoriteExists }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext, FavoritesProvider }