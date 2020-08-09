export const extractYear = (dateUnform: string) => {
    const year = `${dateUnform?.split("-")[0]}`
    return year;
}