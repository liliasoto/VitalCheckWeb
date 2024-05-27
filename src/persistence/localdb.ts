import initSqlJs, { Database, SqlJsStatic } from 'sql.js';

interface Contact {
  id?: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
}

const initDatabase = async (): Promise<Database> => {
  const SQL: SqlJsStatic = await initSqlJs();
  const db = new SQL.Database();
  db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      apellido TEXT,
      email TEXT,
      rol TEXT
    );
  `);
  return db;
};

let dbInstance: Database | null = null;

const getDbInstance = async (): Promise<Database> => {
  if (!dbInstance) {
    dbInstance = await initDatabase();
  }
  return dbInstance;
};

export const addContact = async (contact: Contact): Promise<string> => {
  const db = await getDbInstance();
  try {
    console.log('Inserting contact:', contact);
    const stmt = db.prepare(`
      INSERT INTO contacts (nombre, apellido, email, rol)
      VALUES (?, ?, ?, ?)
    `);
    stmt.run([contact.nombre, contact.apellido, contact.email, contact.rol]);
    stmt.free();
    console.log('Contact added successfully');
    return 'Contact added successfully';
  } catch (error) {
    console.error('Error in addContact:', error);
    return 'Error adding contact';
  }
};

export const getContacts = async (): Promise<Contact[]> => {
  const db = await getDbInstance();
  const stmt = db.prepare(`SELECT * FROM contacts`);
  const result: Contact[] = [];
  while (stmt.step()) {
    const row = stmt.getAsObject() as unknown as Contact;
    result.push(row);
  }
  stmt.free();
  return result;
};
