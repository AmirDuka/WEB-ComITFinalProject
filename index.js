const express = require('express');
const app = express()
const port = 3000
const port = process.env.PORT || 3000
// to use pug
app.set('view engine', 'pug');

app.use(express.static("public"));

app.get('', (req, res) => {
    res.render('index',{});
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)

})