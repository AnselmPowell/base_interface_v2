import { neon } from '@neondatabase/serverless';

let sql;

if (process.env.POSTGRES_URL) {
  sql = neon(process.env.POSTGRES_URL);
} else {
  sql =  () => {
    console.log('Database query skipped on build');
    return Promise.resolve([]);
  };
}

export default sql;