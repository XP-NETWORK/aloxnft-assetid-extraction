import {findAssetIds, readHtmlFile, saveIdsToFile} from './utils';

const collectionName: string = "abcg";

const html = readHtmlFile(collectionName);

const ids: string[] = findAssetIds(html);

const savedTo: string = saveIdsToFile(collectionName, ids);

console.log(`Found ${ids.length} unique assets. Saved to: ${savedTo}`);