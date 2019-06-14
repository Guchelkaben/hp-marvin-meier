export function capitalizeFirstLetter(name) {
    if (name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
    return name;
}