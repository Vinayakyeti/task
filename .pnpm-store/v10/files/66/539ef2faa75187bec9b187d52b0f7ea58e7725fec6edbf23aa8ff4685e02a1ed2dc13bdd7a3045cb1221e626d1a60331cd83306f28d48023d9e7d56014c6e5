// @ts-strict-ignore
import { fileTypeFromFile } from 'file-type';
import fs from 'fs/promises';
import path from 'path';
const mimeTypeEstimate = {
    svg: 'image/svg+xml'
};
export const getFileByPath = async (filePath)=>{
    if (typeof filePath === 'string') {
        const data = await fs.readFile(filePath);
        const mimetype = fileTypeFromFile(filePath);
        const { size } = await fs.stat(filePath);
        const name = path.basename(filePath);
        const ext = path.extname(filePath).slice(1);
        const mime = (await mimetype)?.mime || mimeTypeEstimate[ext];
        return {
            name,
            data,
            mimetype: mime,
            size
        };
    }
    return undefined;
};

//# sourceMappingURL=getFileByPath.js.map