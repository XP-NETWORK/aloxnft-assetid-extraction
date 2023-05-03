# Collection Asset ID Extraction Tool

## Project stricture:
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

## TO Run:
1. ts-node must be globally installed
2. Put a file with the page HTML to the `./lib/ folder
Example:
```bash
├── lib
│   └── abcg.html
```
3. Set `collectionName` to the file name in `./scr/index.ts` line #3

Example:
```ts
const collectionName: string = "abcg";
```

4. To start run in console: 

```bash
ts-node ./src/index.ts
```

## Output

You will get a `.txt` file with the coma-separated asset IDs.

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