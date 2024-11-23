const router = require('express').Router();
const CatatanBibitController = require('../controllers').catatanBibit
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogin, CatatanBibitController.getcatatanBibit);
router.get('/catatanBibit/add', verifyUser.isLogin, CatatanBibitController.formcatatanBibit);
router.post('/catatanBibit/save', verifyUser.isLogin, CatatanBibitController.savecatatanBibit);
router.get('/catatanBibit/edit/:id', verifyUser.isLogin, CatatanBibitController.editcatatanBibit);
router.post('/catatanBibit/update/:id', verifyUser.isLogin, CatatanBibitController.updatecatatanBibit);
router.get('/catatanBibit/delete/:id', verifyUser.isLogin, CatatanBibitController.deletecatatanBibit);

module.exports = router;