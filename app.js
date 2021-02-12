  const app = require('./src/config/server')
  const connection = require('./src/config/connection')
  const Produtos = require('./src/models/Produtos')

// SELECT
app.post("/", (req, res) => {
   

    res.json("resultado")
})
