export interface EstadoBooleano {
    /**
     * Obtiene el nombre del estado.
     * @returns El nombre del estado (por ejemplo, "Verdad" o "Falso").
     */
    getName(): string;

    /**
     * Obtiene el valor booleano del estado.
     * @returns El valor booleano del estado (true o false).
     */
    getEstado(): boolean;
}