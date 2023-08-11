const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db.sqlite3');

const stmt = `
    CREATE TABLE IF NOT EXISTS "users" (
    "name"  TEXT,
    "email"  TEXT,
    "phone"  TEXT,
    "comment"  TEXT
    );
`;
db.run(stmt);

db.close();