import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json()); // to parse json body

// Create routes here
app.get('/bfhl', (req,res)=> {
    return res.send("Jai ho");
});

app.post('/bfhl', (req,res)=> {
    
    const {user_id, data} = req.body;

    //Validate input is Array or not 
    if( !Array.isArray(data)) {
        return res.status(400).json({
            user_id : user_id || "ayush_soni_01012003",
            is_success : false,
            message : "Input should be an array",
        });
    }

    const numbers = [];
    const even_numbers = [];
    const odd_numbers = [];

    // Process elements 
    for( let item of data) {
        const num = Number(item);

        if(isNaN(num)) {
            return res.status(400).json({
                user_id : user_id || "ayush_soni_01012003",
                is_success : false,
                message : "Array must contain only numeric values",
            });
        }

        numbers.push(num);
        if(num % 2 == 0){
            even_numbers.push(num);
        } else {
            odd_numbers.push(num);
        }
    }

    return res.status(200).json({
        user_id : user_id || "ayush_soni_01012003",
        is_success : true,
        even_numbers,
        odd_numbers,
    });
});

app.listen( PORT , ()=> {
    console.log(`Server listening on PORT ${PORT}`);
});