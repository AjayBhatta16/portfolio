export function getProjects() {
    return fetch('/project-list.json')
        .then(response => response.json())
}