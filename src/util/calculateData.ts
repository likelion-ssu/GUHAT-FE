export const calculateData = (endDate: string): string => {
    const endTime: any = new Date(endDate);
    const nowTime: any = new Date();
    const diff = endTime - nowTime;
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    return diffDay;
};
