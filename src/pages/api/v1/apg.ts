import { createHandler, Get, Query } from 'next-api-decorators';
import { execSync } from 'child_process';

class FetchApgData {
  // GET /api/v1/apg
  @Get()
  async callApgTool(
    @Query('params') params: string
  ): Promise<{ data: string[] }> {
    // console.log(params);
    const output = execSync(`apg ${params}`, {
      encoding: 'utf8',
      maxBuffer: 250 * 1024 * 1024,
    })
      .toString()
      .trim();

    console.log('Output was:\n', output);

    const apgPasswords = output.split('\n');

    return {
      data: apgPasswords,
    };
  }
}

export default createHandler(FetchApgData);
