const router = require('express').Router();
const CatatanBibitController = require('../controllers').catatanBibit
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogin, CatatanBibitController.getCatatanBibit);
router.get('/catatanBibit/add', verifyUser.isLogin, CatatanBibitController.formCatatanBibit);
router.post('/catatanBibit/save', verifyUser.isLogin, CatatanBibitController.saveCatatanBibit);
router.get('/catatanBibit/edit/:id', verifyUser.isLogin, CatatanBibitController.editCatatanBibit);
router.post('/catatanBibit/update/:id', verifyUser.isLogin, CatatanBibitController.updateCatatanBibit);
router.get('/catatanBibit/delete/:id', verifyUser.isLogin, CatatanBibitController.deleteCatatanBibit);

module.exports = router;