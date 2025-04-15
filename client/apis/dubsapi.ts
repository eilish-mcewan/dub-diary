import request from 'superagent'

export async function postDub(dub: string) {
  const response = await request
    .post('/api/v1/dubs')
    .send({ dub })

  return response.body
}

export async function getDubs() {
  const response = await request.get('/api/v1/dubs')
  return response.body.wins
}
