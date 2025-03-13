// Create an object to store data about the current state of life
// The date field contains the current date in ISO format
const life = {
    date: new Date().toISOString(), // ISO format includes the date and time with milliseconds
  };
  
  // Define the lifeCheck function
  // This function sends a JSON response containing the "life" object
  export const lifeCheck = (req, res) => {
    res.json(life); // Sends the life object as the response in JSON format
  };
  