import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // for JSON bodies
app.use(express.urlencoded({ extended: true })); // for form submissions




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create routes here
app.get('/bfhl', (req,res)=> {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle POST from form
app.post('/bfhl', (req, res) => {
    let { numbers } = req.body;
  
    // Sanitize and parse the array
    let arr = numbers.split(',').map(num => num.trim());
  
    // Check if all values are numeric
    const isNumericArray = arr.every(item => !isNaN(item));
  
    if (!isNumericArray) {
      return res.json({
        user_id: "ayush_soni_01012000", // Example user_id
        is_success: false,
        message: "Array contains non-numeric values."
      });
    }
  
    // Convert strings to integers
    arr = arr.map(Number);
  
    // Separate even and odd
    const even_numbers = arr.filter(num => num % 2 === 0);
    const odd_numbers = arr.filter(num => num % 2 !== 0);
  
    res.json({
      user_id: "ayush_soni_01012000",
      is_success: true,
      odd_numbers,
      even_numbers
    });
  });

app.listen( PORT , ()=> {
    console.log(`Server listening on PORT ${PORT}`);
});