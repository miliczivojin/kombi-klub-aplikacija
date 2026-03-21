export function skrolujDo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
