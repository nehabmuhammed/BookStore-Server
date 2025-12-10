const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callBack) => {
        callBack(null,'./uploads')
    },
    filename:(req,file,callBack) =>{
        let date = Date.now()
        callBack(null,`Bookstore-${date}-${file.originalname}`)
    }
})

const fileFilter = (req,file,callBack) => {
    if(file.mimetype == "image/png" || file.mimetype == "image/jpeg"|| file.mimetype == "image.jpg"){
        callBack(null,true)
    }else{
        callBack(null,false)
    }
}

const multerConfig = multer({storage,fileFilter})

module.exports = multerConfig
