// Import the dotenv package and configure it to load the environment variables from the .env file.
// Define your Pay function
require('dotenv').config();
console.log(process.env);
function Pay() {
    
    
    window.location.href =process.env.link
    
}
Pay()