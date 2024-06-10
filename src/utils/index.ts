/**
 * Utility function to format date in 'YYYY-MM-DD' format.
 * @param date - Date object or date string
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string): string => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
