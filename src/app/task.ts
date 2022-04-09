//manejo de la base de datos
export interface Task{
    id: number; //se crea un id porque podría no venir desde la base de datos
    text: string;
    day: string;
    reminder: boolean;
}