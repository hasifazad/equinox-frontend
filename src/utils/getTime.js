export default function getTime(isoString) {

    // Parse the string into a Date object
    const date = new Date(isoString);

    // Extract date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    // Extract time components
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Combine components into a readable format
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate; // Output: 2024-06-27 08:01:26


}