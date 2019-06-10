const baseUrl = "https://api.github.com/";

export async function fetchRepositories() {
    const res = await fetch(`${baseUrl}users/guchelkaben/repos`);
    if (res.ok) {
        return await res.json();
    }

    return Promise.reject({status: res.status});
}

export async function fetchRepoByName(name) {
    const res = await fetch(name);

    if (res.ok) {
        return await res.json();
    }

    return Promise.reject({status: res.status});
}

export async function fetchRepoLanguages(repo) {
    const res = await fetch(`${baseUrl}repos/guchelkaben/${repo}/languages`);

    if (res.ok) {
        return await res.json();
    }

    return Promise.reject({status: res.status});
}