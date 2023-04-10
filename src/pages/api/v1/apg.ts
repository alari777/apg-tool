import { createHandler, Get } from 'next-api-decorators';
import { execSync } from 'child_process';

class FetchApgData {
  // GET /api/v1/apg
  @Get()
  async callApgTool(): Promise<any> {
    const output = execSync('apg', {
      encoding: 'utf8',
      maxBuffer: 250 * 1024 * 1024,
    }).toString();
    console.log('Output was:\n', output);
    return {
      data: output,
    };
  }
}

export default createHandler(FetchApgData);
