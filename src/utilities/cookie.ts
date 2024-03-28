function getCookie(cookieName: string) {
    const cookies = document.cookie; 
    const cookieArray = cookies.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i];
        const cookiePair = cookie.split('=');
        if (cookieName == cookiePair[0].trim()) {
            return cookiePair[1];
        }
    }
    return null;
}

export { getCookie };
