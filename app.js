const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const UserRouter= require('./routes/UserRouter')
const CommentRouter = require('./routes/CommentRouter')
const MealRouter = require('./routes/MealRouter')
const app = express()


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))



app.use('/users', UserRouter)
app.use('/comments', CommentRouter)
app.use('/meals', MealRouter)







app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))