import Dexie from 'dexie';

// Declare db instance
// const db = new Dexie('TodoDB');
//
// db.init = function () {
//   this.version(1).stores({
//     users: "++id, &name",
//     todos: "++id, title, userId",
//   });
// }
//
// db.init();

// export { db };

class Db extends Dexie {
  constructor (name) {
    super(name);
    this.version(1).stores({
      users: "++id, &name",
      todos: "++id, title, userId",
    });
  }

  async reset () {
    return db.transaction('rw', db.users, db.todos, async () => {
      await Promise.all(db.tables.map(table => table.clear()));
    });
  }

}

const db = new Db('TodoDb');

export { db };



