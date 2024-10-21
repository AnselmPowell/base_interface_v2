import config from '@/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(config.databaseUrl);

export default sql;