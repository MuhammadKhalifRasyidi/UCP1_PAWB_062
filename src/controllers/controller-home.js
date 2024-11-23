const { get } = require("http");

module.exports ={
    home(req,res){
        res.render("home",{
            url: 'http://localhost:3000/',
            userName: req.session.username,
        });
    },
    getHome(req, res) {
        if (req.session.loggedin) {
            // Render halaman home dengan data pengguna
            res.render('home', {
                username: req.session.username,
                userid: req.session.userid
            });
        } else {
            // Jika belum login, arahkan ke halaman login
            res.redirect('/login');
        }
    }
}