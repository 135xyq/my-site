// 格式化时间

/**
 * 时间字符串  2022-04-15T13:33:12.000Z
 * 2022-04-15 21:33:12
 * @param {*} dateStr
 */
export default function(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    const day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
    const hour = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
    const minutes = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
    const seconds = date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
}
