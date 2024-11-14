export function addFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}

export function removeFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(fav => fav !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}
