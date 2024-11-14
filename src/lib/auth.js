// src/lib/auth.js
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { writable } from 'svelte/store';

// Store pour suivre l'état de l'utilisateur
export const user = writable(null);

// Inscription
export async function signup(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        user.set(userCredential.user);
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        throw error;
    }
}

// Connexion
export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        user.set(userCredential.user);
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        throw error;
    }
}

// Déconnexion
export async function logout() {
    try {
        await signOut(auth);
        user.set(null);
    } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
        throw error;
    }
}
