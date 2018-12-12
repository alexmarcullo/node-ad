const faker = require('faker');
const express = require('express');
const app = express();
const config = require('./config');
const passport = require('passport');
const BearerStrategy = require('passport-azure-ad').BearerStrategy;

const authenticationStrategy = new BearerStrategy(config.credentials, (token, done) => {
    return done(null, 'currentUser', token);
});
passport.use(authenticationStrategy);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get('/', passport.authenticate('oauth-bearer', { session : false}), (req, res) => {
    let persons = new Array();
    
    for(var x = 0; x < 50; x++)
        persons.push( 
            {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                age: faker.random.number({min: 20, max: 55}),
                avatar: faker.image.avatar()
            });

    res.status(200).send(persons);
});

app.listen(3000, () => {console.log('Listen on port 3000 ....')});
