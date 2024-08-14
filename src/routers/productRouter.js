import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'Rota Get /product'})
  })
router.post('/', (req, res) => {
    res.json({message: 'Rota Post /product'})
  })
router.put('/', (req, res) => {
    res.json({message: 'Rota Put /product'})
  })
router.patch('/', (req, res) => {
    res.json({message: 'Rota Patch /product'})
  })
router.delete('/', (req, res) => {
    res.json({message: 'Rota Delete /product'})
  })

  export default router