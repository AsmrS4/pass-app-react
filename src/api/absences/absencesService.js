export const fetchAbsencesJsonServer = async(queryParams) => {
    try {
        const response = await fetch(`http://localhost:3000/absences?`+ queryParams,{
            method: 'GET'
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}