import { Router } from 'express'
import * as db from '../db/functions/wins'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const wins = await db.getAllDubs()

    res.json({ wins })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req,res) => {
  const {dub} = req.body
  try {
    const [id] = await db.addDubs({dub})    
    const latestDub = await db.getDubById(id)
    res.status(201).json(latestDub)
  } catch (error) {
    res.status(500)
  }
})

export default router