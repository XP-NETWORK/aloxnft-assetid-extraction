import {findAssetIds, readHtmlFile, saveIdsToFile} from './utils';

// For colelction asset is extraction from https://algoxnft.com/
// Example: https://algoxnft.com/full-collection/cheap-berd-cash-grab
// TO Run:
// 1. ts-node must be globally installed
// 2. Put a file with the page HTML to the `./lib/ folder
// 3. Set `collectionName` to the file name
// 4. To start run in console: `ts-node ./src/index.ts`

const collectionName: string = "abcg";

const html = readHtmlFile(collectionName);

const ids: string[] = findAssetIds(html);

const savedTo: string = saveIdsToFile(collectionName, ids);

console.log(`Found ${ids.length} unique assets. Saved to: ${savedTo}`);