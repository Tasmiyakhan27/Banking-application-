import dotenv from 'dotenv';

dotenv.config(
    {
        path: './.env'
    }
);


const app = require(",/src/app.js");
const port= process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});