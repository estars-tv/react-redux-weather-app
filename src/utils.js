function getDateTime(dateTime) {
    const date = new Date(dateTime * 1000),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hours = date.getHours(),
        minutes = `0${date.getMinutes()}`,
        seconds = `0${date.getSeconds()}`;

    return `${day}.${month}.${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
}

export default getDateTime;