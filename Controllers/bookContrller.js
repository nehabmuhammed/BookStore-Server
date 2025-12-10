const bookModel = require("../models/bookModell");

exports.addBookController = async (req, res) => {
  console.log(req.user);
let imageArray = []

    req.files.forEach((each) => {
        imageArray.push(each.filename)
    })


  try {
     
    let {
      tittle,
      Author,
      noOfPages,
      imgURL,
      price,
      language,
      discountPrice,
      abstract,
      publisher,
      ISBN,
      category,
      uploadedImages
    } = req.body;
    let userMail = req.user;

     

    if (
      tittle &&
      Author &&
      noOfPages &&
      imgURL &&
      price &&
      abstract &&
      publisher &&
      language &&
      ISBN &&
      category &&
      imageArray
    ) {
      let existingBook = await bookModel.findOne({ tittle: tittle });
      if (existingBook) {
        res.status(409).json({ message: "Book with this tittle already add" });
      } else {
        let newbook = new bookModel({
          tittle,
          Author,
          noOfPages,
          imgURL,
          price,
          language,
          discountPrice,
          abstract,
          publisher,
          ISBN,
          category,
          uploadedImages:imageArray,
          userMail,
        });

        await newbook.save();
        res.status(201).json({ message: "Successfullt Added", newbook });
      }
    } else {
      res.status(400).json({ message: "Enter the fields" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somethig went wrong" });
  }
};
