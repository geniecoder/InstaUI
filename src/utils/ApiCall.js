import axios from 'axios';

export const GetApiRequest = (
    url
) => {
    console.log(`url:${url}`);
    const headerData = {
        "secret-key": "$2b$10$1MmFjMrj2G7u5SzD8aFNSeTnXOLOEB1OA30n5vzcwkkbtsgzDXOdu",
    }
    return axios.get(url, { headers: { "secret-key": "$2b$10$1MmFjMrj2G7u5SzD8aFNSeTnXOLOEB1OA30n5vzcwkkbtsgzDXOdu" } })
        .then((response) => {
            if (response.status) {
                return response.data;
            } else {
                console.log(`status: ${response.statusCode}`);
                return null;
            }
        })
        .catch((error) => {
            console.log(`error: ${error}`);
        });
}