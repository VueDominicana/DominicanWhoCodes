export function extractUsernameFromUrl(url) {
    url = url.trim()
    if (!url) {
        return;
    }

    const splitedUrl = url.split("/").filter(Boolean);
    const username = splitedUrl[splitedUrl.length - 1];

    return username;
}
