
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const reesponse = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
        if (!reesponse.ok) {
            throw new Error(`HTTP error! status: ${reesponse.status}`);
        }
        const data: Todo = await reesponse.json();
    } catch (error: any) {
        console.error("Fetch error: ", error.message);
    }
}