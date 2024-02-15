export function formatedDate(date, option) {
    const formatedDate = date.toLocaleDateString("uk-UA", option);
    return formatedDate
}

export function formatedTime(date, option) {
    const formatedTime = date.toLocaleTimeString([], option);
    return formatedTime
}