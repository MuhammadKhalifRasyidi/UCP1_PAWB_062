const router = require('express').Router();
const homeController = require('../controllers').home;
const verifyUser = require('../configs/verify');
const controllerCatatanPupuk = require('../controllers/controller-catatanPupuk');
const controllerCatatanBibit = require('../controllers/controller-catatanBibit');


router.get('/', verifyUser.isLogin, homeController.home);
router.get('/home', verifyUser.isLogin, homeController.getHome);
router.get('/catatanPupuk', verifyUser.isLogin, controllerCatatanPupuk.getCatatanPupuk);
router.get('/catatanBibit', verifyUser.isLogin, controllerCatatanBibit.getCatatanBibit);

module.exports = router;