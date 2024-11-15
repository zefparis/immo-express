import { writable } from 'svelte/store';

// Store pour gérer l'état de l'utilisateur connecté
// Initialisation à null (aucun utilisateur connecté)
export const user = writable(null);

// Vous pouvez ajouter des méthodes utilitaires si besoin
// Par exemple :
/*
export const setUser = (userData) => {
    user.set(userData);
};

export const clearUser = () => {
    user.set(null);
};
*/

