import { readFileSync, createWriteStream } from 'fs';

export function findAssetIds(html: string): string[] {

    const pattern = /https:\/\/algoxnft\.com\/asset\/(\d*)\"/gm
    // Find the pattern in the html
    const found = html.match(pattern);
    let idArray: string[] = [];

    for (let match of found!) {
        // Remove the extra charachters:
        match = match.replace('https://algoxnft.com/asset/', "").replace('"', '');
        // Add to an array
        idArray.push(match);
    }

    // Remove repetitions
    const ids = new Set(idArray);
    // Convert to an Array
    const idsArray = Array.from(ids);
    // Return
    return idsArray;

}

export function readHtmlFile(fileName: string): string {
    return readFileSync(`./lib/${fileName}.html`, "utf-8");
}

export function saveIdsToFile(fileName: string, arr: string[]): string {
    // Build the target file name
    const saveToFileName = `./${fileName}.txt`;
    // Open a stream for writing
    const file = createWriteStream(saveToFileName);
    // Error handeling
    file.on('error', err => {
        console.error(err);
    })
    // Write each line of the array
    arr.forEach(item => {
        file.write(`${item},\n`)
    });
    // Close the file
    file.end();
    // Return the file name
    return saveToFileName;
}