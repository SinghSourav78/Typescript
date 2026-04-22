import axios, {AxiosResponse} from 'axios';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const reesponse: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1'); 
        console.log("Todo: ",reesponse.data);
    } catch (error: any) {
        if(axios.isAxiosError(error)) {
            console.error("Axios error: ", error.message);
            if(error.response) {
                console.error("Status: ", error.response.status);
                console.error("Data: ", error.response.data);
            }
        }
    }
}