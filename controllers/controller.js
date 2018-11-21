module.exports = (app) => {


  app.get('/', (req, res) => {
    res.render('home', {location: 'Home'});
  })

  app.get('/about', (req, res) => {
    res.render('about', {location: 'About'})
  })

  app.get('/projects', (req, res) => {
    res.render('projects', {location: 'Our Projects'})
  })

  app.get('/email', (req, res) => {
    res.render('email', {location: 'Request Project'})
  })


  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  })

}
