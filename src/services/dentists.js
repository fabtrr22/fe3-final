
export const getAllDentists = ()=> {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json());
}

export const getDentistById = (id)=> {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json());
}