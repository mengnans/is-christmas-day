export function isChristmasDay(): boolean {
    const todayDate = new Date();
    return todayDate.getMonth() === 11 && todayDate.getDate() === 25;
}