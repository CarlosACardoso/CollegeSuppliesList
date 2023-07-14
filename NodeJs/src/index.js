const express = require('express')
const cors = require('cors');
const app = express()
const router = express.Router()

const items = [
    {
      id: 1,
      image: '',
      name: "Espelho Goldran n5",
      brand: "Dental Especial",
      quantity: 1,
      optional: "Necessário",
      isCompleted: false,
    },
    {
      id: 2,
      image: '',
      name: "Resina Z100 - 3M",
      brand: "Dental Alto Astral",
      quantity: 4,
      optional: "Necessário",
      isCompleted: false,
    },
    {
      id: 3,
      image: '',
      name: "Luva Cirúrgica mega legalaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaa",
      brand: "Dental Fundamental",
      quantity: 1,
      optional: "Opcional",
      isCompleted: true,
    }
]

router.get('/suppliesList' , (request, response) => {
    response.send(items)
})

app.use(cors());
app.use(router)

app.listen(3000, () => console.log('Server started at port 3000'))
