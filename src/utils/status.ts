export default function getStatus(completed: boolean): { color: string, textColor: string, text: string } {
    if (completed) {
        return { color: 'mt-4 px-4 py-2 bg-green-500 text-white rounded', textColor: 'border p-4 cursor-pointer rounded text-green-500', text: 'Done' };
    } else {
        return { color: 'mt-4 px-4 py-2 bg-primary text-white rounded', textColor: 'border p-4 cursor-pointer rouunded', text: 'Incomplete' };
    }
}
