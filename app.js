const express = require('express');
const passport = require('passport');
require('./config/passport'); // importar la configuración de Passport

const app = express();
app.use(passport.initialize());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/sessions', require('./routes/sessionRoutes'));


app.listen(8080, () => console.log('Server running on port 8080'));
