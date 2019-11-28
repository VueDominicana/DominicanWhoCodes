export function extractUsernameFromUrl(url) {
    if (typeof url !== "string") {
        return url;
    }

    url = url.trim();
    if (!url) {
        return "";
    }

    url = new URL(url);
    if (url.pathname === "/") {
        return url.hostname;
    }

    const splitedUrl = url.pathname.split("/").filter(Boolean);
    return splitedUrl[splitedUrl.length - 1];
}
