import { writable } from "svelte/store";

export const appRoutes = {
    HOME: '/',
    LOGIN: '/login',
    EXPERIENCE: '/experience',
    SKILLS: '/skills',
    ABOUT: '/about',
    CONTACT: '/contact',
    PROJECT: '/project',
    UNKNOW: '*',
}

export const urlHistory = writable("");
export const slider = writable("transform: translateX(0px);");