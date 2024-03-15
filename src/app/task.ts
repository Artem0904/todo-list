export interface ITask {
    id: number;
    description: string;
    status: boolean;
    date?: Date;    
}

export const TASKS: ITask[] = [
    { id: 101, description: "Hit the gym", status: true, date: new Date(2024, 4, 7) },
    { id: 200, description: "Go to the shop", status: false },
    { id: 201, description: "Clean the room", status: false, date: new Date(2024, 5, 10) },
    { id: 899, description: "Feed the cat", status: true, date: new Date(2024, 0, 1) },
    { id: 777, description: "Run 1 km", status: true }
]