# Collection Asset ID Extraction Tool

## Project structure:
```bash
.
├── Readme.md
├── abcg.txt
├── lib
│   └── abcg.html
└── src
    ├── index.ts
    └── utils.ts
```

For collection asset extraction from https://algoxnft.com/

Example collection: https://algoxnft.com/full-collection/cheap-berd-cash-grab

## To Run:
> `ts-node` must be globally installed!
1. Put a file with the page HTML to the `./lib/ folder
Example:
```bash
├── lib
│   └── abcg.html
```
2. Set `collectionName` to the file name in `./scr/index.ts` line #3

Example:
```ts
const collectionName: string = "abcg";
```

3. To start, run in console: 

```bash
ts-node ./src/index.ts
```

## Output

In the terminal you will get a message similar to this:

```bash
Found 1000 unique assets. Saved to: ./abcg.txt
```
Where `1000` is the number of found unique asset ids.

`./abcg.txt` is the file where the comma-separated asset ids were saved like this:

Example:

```bash
├── abcg.txt
```

Expected target file contents:

```txt
718584984,
718585072,
718585160,
etc. ...
```