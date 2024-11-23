const config = require('../configs/database');

let mysql      = require('mysql');
let pool       = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    getCatatanPupuk(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM catatan pupuk;', function (error, results) {
                if (error) throw error;
                
                // Check if results contains any data
                if (results.length > 0) {
                    res.render('CatatanPupuk', {
                        url: 'http://localhost:3000/',
                        catatanPupuk: results // Pass the contacts data to the view
                    });
                } else {
                    res.render('CatatanPupuk', {
                        url: 'http://localhost:3000/',
                        catatanPupuk: [] // Pass an empty array if no data
                    });
                }
            });
            connection.release();
        });
    },
    formCatatanPupuk(req,res){
        res.render("addCatatanPupuk",{
            url : 'http://localhost:3000/',
        });
    },
    saveCatatanPupuk(req, res) {
        let { namaPetani, lokasiLahan, luasLahan, jenisTanaman } = req.body;
        console.log(namaPetani, lokasiLahan, luasLahan, jenisTanaman); 
        if (namaPetani && lokasiLahan && luasLahan && jenisTanaman) {
            pool.getConnection(function (err, connection) {
                if (err) throw err;
                connection.query(
                    `INSERT INTO contacts (namaPetani, lokasiLahan, luasLahan, jenisTanaman) VALUES (?, ?, ?, ?);`,
                    [namaPetani, lokasiLahan, luasLahan, jenisTanaman], 
                    function (error, results) {
                        if (error) {
                            console.error(error);
                            res.send('Gagal menyimpan data');
                            return;
                        }
                        req.flash('color', 'success');
                        req.flash('status', 'Yes..');
                        req.flash('message', 'Data berhasil disimpan');
                        res.redirect('/CatatanPupuk');
                    }
                );
                connection.release();
            });
        } else {
            res.send('Data tidak lengkap');
        }
    },    
    editCatatanPupuk(req, res) {
        const { id } = req.params;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM contacts WHERE id = ?', [id], function (error, results) {
                if (error) throw error;
                if (results.length > 0) {
                    res.render('editCatatanPupuk', {
                        url: 'http://localhost:3000/',
                        catatanPupuk: results[0]
                    });
                } else {
                    res.redirect('/CatatanPupuk');
                }
            });
            connection.release();
        });
    },
    updateCatatanPupuk(req, res) {
        const { id } = req.params;
        const { namaPetani, lokasiLahan, luasLahan, jenisTanaman } = req.body;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                'UPDATE contacts SET namaPetani = ?, lokasiLahan = ?, luasLahan = ?, jenisTanaman = ? WHERE id = ?',
                [namaPetani, lokasiLahan, luasLahan, jenisTanaman, id],
                function (error, results) {
                    if (error) throw error;
                    res.redirect('/contact');
                }
            );
            connection.release();
        });
    },
    deleteCatatanPupuk(req, res) {
        const { id } = req.params;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('DELETE FROM contacts WHERE id = ?', [id], function (error, results) {
                if (error) throw error;
                res.redirect('/CatatanPupuk');
            });
            connection.release();
        });
    },
};

