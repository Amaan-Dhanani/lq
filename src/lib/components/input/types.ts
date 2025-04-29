import type { ClassValue, HTMLInputAttributes } from "svelte/elements";

export type tInputProps = HTMLInputAttributes & {
    // Classes:

    // --- Default Classes:
    inputClass?: ClassValue,
    
    // Extra Props Here:
    label?: string,

};