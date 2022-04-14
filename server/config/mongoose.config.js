const mongoose = require('mongoose');
const ProductManagementDB = 'productManagementDB';
mongoose.connect(`mongodb://localhost/${ProductManagementDB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
    .then(()=>console.log('Established a connection to the database'))
    .catch(err=>console.log('Something went wrong when connecting to the database',err));