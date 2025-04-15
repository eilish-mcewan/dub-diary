import db from '../connection'

export function getAllDubs() {
  return db('dubs').select()
}

export function addDubs(dub: {
  dub: string
}) {
  return db('dubs').insert(dub)
}

export function getDubById(id: number) {
  return db('dubs').where({ id }).first()
}