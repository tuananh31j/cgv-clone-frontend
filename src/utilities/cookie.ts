function checkCookieExist(cookieName: string) {
    const cookies = document.cookie; // Lấy chuỗi cookie
    const cookieArray = cookies.split(';'); // Tách chuỗi cookie thành một mảng dựa trên dấu chấm phẩy
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i];
        const cookiePair = cookie.split('='); // Tách tên và giá trị của cookie
        if (cookieName == cookiePair[0].trim()) {
            return true; // Nếu tên cookie trùng khớp, trả về true
        }
    }
    return false; // Nếu không tìm thấy cookie, trả về false
}

export { checkCookieExist };
