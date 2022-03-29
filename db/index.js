import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("myShips.db")

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS myShips (
          id INTEGER PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          variant TEXT NOT NULL,
          picture TEXT NOT NULL,
          type TEXT NOT NULL,
          cp INTEGER NOT NULL,
          maxActive INTEGER NOT NULL,
          row TEXT NOT NULL
          )`,
        [],
        () => resolve(),
        (_, err) => reject(err)
      )
    })
  })

  return promise
}

export const insertShip = (name, variant, picture, type, cp, maxActive, row) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO myShips (name, variant, picture, type, cp, maxActive, row) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, variant, picture, type, cp, maxActive, row],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
  return promise
}

export const loadShips = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM myShips",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
  return promise
}

export const deleteAllShips = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "DELETE FROM myShips",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
  return promise
}