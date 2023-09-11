
export const getTaskCardTheme = (days: number) => {
    if (days > 6) {
        return 'bg-green-600 border-emerald-900 text-emerald-900' ;
    } else if (days > 2) {
        return 'bg-blue-500 border-indigo-900 text-indigo-900' ;
    } else if (days > 0) {
        return 'bg-yellow-500 border-amber-900 text-amber-900' ;
    } else {
        return 'bg-rose-400 border-red-900 text-red-900' ;
    }
};