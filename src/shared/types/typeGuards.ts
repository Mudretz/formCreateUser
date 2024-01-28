export const isString = (text: unknown): text is string => {
    if (typeof text === "string") return true;
    return false;
};
