import * as fs from 'fs';
export function leerMejoresUni(path: string): string{
    const resultado = fs.readFileSync(
        path,
        'utf-8'
    );
    return resultado;
}