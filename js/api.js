export async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

export async function fetchPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const data = await response.json();
    return data;
}

export async function fetchAlbums(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
    const data = await response.json();
    return data;
}

export async function fetchTodos(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    const data = await response.json();
    return data;
}
