import { execSync } from 'child_process';

export function createPasswords(params: string = ''): string[] {
  const output = execSync(`apg ${params}`, {
    encoding: 'utf8',
    maxBuffer: 250 * 1024 * 1024,
  })
    .toString()
    .trim();

  return output.split('\n');
}
