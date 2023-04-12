import { createHandler, Get, Query } from 'next-api-decorators';
import { execSync } from 'child_process';
import { createPasswords } from './helpers/createPasswords';

class FetchApgData {
  // GET /api/v1/apg
  @Get()
  async callApgTool(
    @Query('params') params: string
  ): Promise<{ data: string[] }> {
    const apgPasswords = createPasswords(params);
    return {
      data: apgPasswords,
    };
  }
}

export default createHandler(FetchApgData);
