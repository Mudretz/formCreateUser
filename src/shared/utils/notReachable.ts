export const notReachable = (_: never): never => {
    throw new Error(`Обработайте новый тип ${_}`);
};
