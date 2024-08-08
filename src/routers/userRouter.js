import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'Rota Get /user'})
  })

router.get('/', userById)
router.get('/List', userList)

router.post('/', (req, res) => {
    res.json({message: 'Rota Post /user'})
  })
  
router.put('/', (req, res) => {
    res.json({message: 'Rota Put /user'})
  })
  
router.patch('/', (req, res) => {
    res.json({message: 'Rota Patch /user'})
  })
  
router.delete('/', (req, res) => {
    res.json({message: 'Rota Delete /user'})
  })

  export default router