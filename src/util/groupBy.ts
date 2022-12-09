// const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
//     list.reduce((previous, currentItem) => {
//         const group = getKey(currentItem);
//         if (!previous[group]) previous[group] = [];
//         previous[group].push(currentItem);
//         return previous;
//     }, {} as Record<K, T[]>);

// A little bit simplified version
export const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);
        return groups;
    }, {} as Record<K, T[]>);
