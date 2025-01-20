const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json([
        {
          title: "Giornata al mare 🌊",
          content: "Oggi ho passato una splendida giornata al mare! Sole, relax e tanto divertimento. 🏖️",
          image: "https://example.com/mare.jpg",
          tags: ["mare", "estate", "relax", "viaggi"]
        },
        {
          title: "Il mio nuovo libro preferito 📚",
          content: "Ho appena finito di leggere 'Il nome del vento' di Patrick Rothfuss, ed è semplicemente stupendo! Consigliatissimo per gli amanti del fantasy.",
          image: "https://example.com/il-nome-del-vento.jpg",
          tags: ["libri", "fantasy", "lettura", "consigli"]
        },
        {
          title: "Allenamento del giorno 💪",
          content: "Oggi ho completato un allenamento intenso: corsa, squat e flessioni. Mi sento carico! 🏋️‍♂️",
          image: "https://example.com/allenamento.jpg",
          tags: ["fitness", "allenamento", "salute", "motivazione"]
        },
        {
          title: "Nuova ricetta sperimentata 🍝",
          content: "Oggi ho provato una nuova ricetta: pasta al pesto fatto in casa con pomodorini e pinoli. Deliziosa! 😋",
          image: "https://example.com/pasta.jpg",
          tags: ["cibo", "cucina", "ricette", "pesto"]
        },
        {
          title: "Tramonto mozzafiato 🌅",
          content: "Il tramonto di stasera era incredibile, non potevo non condividerlo con voi. Che ne pensate? ❤️",
          image: "https://example.com/tramonto.jpg",
          tags: ["tramonto", "natura", "fotografia", "relax"]
        }
      ]
      )
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})