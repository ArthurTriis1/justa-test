export const formatDate = (dateUnform: string) => {
    const formatedDate = `${dateUnform?.split("-")[2]}/${dateUnform?.split("-")[1]}/${dateUnform?.split("-")[0]}`
    return formatedDate;
}