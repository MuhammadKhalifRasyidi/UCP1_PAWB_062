const router = require('express').Router();
const CatatanPupukController = require('../controllers').catatanPupuk;
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogin, CatatanPupukController.getCatatanPupuk);
router.get('/catatanPupuk/add', verifyUser.isLogin, CatatanPupukController.formCatatanPupuk);
router.post('/catatanPupuk/save', verifyUser.isLogin, CatatanPupukController.saveCatatanPupuk);
router.get('/catatanPupuk/edit/:id', verifyUser.isLogin, CatatanPupukController.editCatatanPupuk);
router.post('/catatanPupuk/update/:id', verifyUser.isLogin, CatatanPupukController.updateCatatanPupuk);
router.get('/catatanPupuk/delete/:id', verifyUser.isLogin, CatatanPupukController.deleteCatatanPupuk);

module.exports = router;