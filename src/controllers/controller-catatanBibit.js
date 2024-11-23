const config = require('../configs/database');

let mysql      = require('mysql');
let pool       = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    getCatatanBibit(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM catatan Bibit;', function (error, results) {
                if (error) throw error;
                
                // Check if results contains any data
                if (results.length > 0) {
                    res.render('CatatanBibit', {
                        url: 'http://localhost:3000/',
                        catatanBibit: results // Pass the Catatan Bibit data to the view
                    });
                } else {
                    res.render('CatatanBibit', {
                        url: 'http://localhost:3000/',
                        catatanBibit: [] // Pass an empty array if no data
                    });
                }
            });
            connection.release();
        });
    },
    formCatatanBibit(req,res){
        res.render("addCatatanBibit",{
            url : 'http://localhost:3000/',
        });
    },
    saveCatatanBibit(req, res) {
        let { namaPetani, lokasiLahan, luasLahan, jenisTanaman } = req.body;
        console.log(namaPetani, lokasiLahan, luasLahan, jenisTanaman); 
        if (namaPetani && lokasiLahan && luasLahan && jenisTanaman) {
            pool.getConnection(function (err, connection) {
                if (err) throw err;
                connection.query(
                    `INSERT INTO Catatan Bibit (namaPetani, lokasiLahan, luasLahan, jenisTanaman) VALUES (?, ?, ?, ?);`,
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
                        res.redirect('/CatatanBibit');
                    }
                );
                connection.release();
            });
        } else {
            res.send('Data tidak lengkap');
        }
    },    
    editCatatanBibit(req, res) {
        const { id } = req.params;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM Catatan Bibit WHERE id = ?', [id], function (error, results) {
                if (error) throw error;
                if (results.length > 0) {
                    res.render('editCatatanBibit', {
                        url: 'http://localhost:3000/',
                        catatanBibit: results[0]
                    });
                } else {
                    res.redirect('/CatatanBibit');
                }
            });
            connection.release();
        });
    },
    updateCatatanBibit(req, res) {
        const { id } = req.params;
        const { namaPetani, lokasiLahan, luasLahan, jenisTanaman } = req.body;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                'UPDATE Catatan Bibit SET namaPetani = ?, lokasiLahan = ?, luasLahan = ?, jenisTanaman = ? WHERE id = ?',
                [namaPetani, lokasiLahan, luasLahan, jenisTanaman, id],
                function (error, results) {
                    if (error) throw error;
                    res.redirect('/contact');
                }
            );
            connection.release();
        });
    },
    deleteCatatanBibit(req, res) {
        const { id } = req.params;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('DELETE FROM Catatan Bibit WHERE id = ?', [id], function (error, results) {
                if (error) throw error;
                res.redirect('/CatatanBibit');
            });
            connection.release();
        });
    },
};

