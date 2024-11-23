const { get } = require("http");
const { password } = require("../configs/database");

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
                password: req.session.password
            });
        } else {
            // Jika belum login, arahkan ke halaman login
            res.redirect('/login');
        }
    }
}