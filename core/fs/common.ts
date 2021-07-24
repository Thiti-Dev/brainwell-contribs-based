const { readdirSync } = require('fs');

export const getDirectories = (source: any): string[] =>
    readdirSync(source, { withFileTypes: true })
        .filter((dirent: { isDirectory: () => any }) => dirent.isDirectory())
        .map((dirent: { name: any }) => dirent.name);
