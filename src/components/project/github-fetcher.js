const baseUrl = "https://api.github.com/";

export async function fetchRepositories() {
    const res = await fetch(`${baseUrl}users/guchelkaben/repos`);

    return await res.json();
}