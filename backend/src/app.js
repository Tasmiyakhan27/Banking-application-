import express from 'express';
import NotFoundError from './middleware/404Handling';
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.send({msg: 'Hello World'});
});

app.use("",(req, res, next) => {
    next(new ApiError(404,'Not Found'));
});
app.use(NotFoundError);

module.exports = app;
export default app;