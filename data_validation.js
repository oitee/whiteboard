var inputData = {
  barcode: "abc1234",
  quantity: 0,
  price: { amount: 22.0, currency: "GBP" },
  images: [
    {
      url: "https://bit.ly/3m4JGhF",
      format: "jpg",
    },
    {
      url: "Htt",
      format: "gif",
    },
    {
      url: "HH",
    },
  ],
};

function validateBarcode(barcode){
    return isString(barcode)
}

function validateQuantity(quantity){
    return isNonNegNumber(quantity)
}

function validateImages(images){
    return isArray(images) && images.length > 0 && images.every(imageValidation)
}

function isArray(arr){
  return Boolean(arr) && Object.prototype.toString.call(arr) === "[object Array]"
}

function imageValidation(image) {
  
  return isValidUrl(image.url) && isString(image.format);
}

function isValidUrl(url){
  if (isString(url)) {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
  return true;
}

function validatePrice(price) {
    if (typeof price !== "object") {
    return false;
  }
  if (!isNonNegNumber(price.amount)) {
    return false;
  }
  return isString(price.currency);
}

function isNonNegNumber(n){
  return (typeof n) === "number" && n >= 0
}

function isString(str){
  return str && typeof str === "string" &&
    str.length > 0
}

const VALIDATORS = {
  barcode: validateBarcode,
  quantity: validateQuantity,
  price: validatePrice,
  images: validateImages,
};

function validate(dt) {
  let em = [];

  for (let key in VALIDATORS) {
    if (!VALIDATORS[key](dt[key])) {
      em.push(key);
    }
  }
  for(let key in dt){
    if(!VALIDATORS[key]){
      em.push(key)
    }
  }
  //   if (!dt.barcode) {
  //     em.push("Missing barcode");
  //   }
  //   if (!dt.price) {
  //     em.push("Missing price");
  //   } else {
  //     if (!dt.price.currency) {
  //       em.push("Missing currency");
  //     }
  //     if (!dt.price.amount) {
  //       em.push("Missing ammount");
  //     }
  //   }
  //   if (!dt.quantity) {
  //     em.push("Missing quantity");
  //   }
  //   if (!dt.images) {
  //     em.push("Missing images");
  //   } else {
  //     for (let a = 0; a < dt.images.length; a++) {
  //       if (dt.images[a].format === "gif" || dt.images[a].format === "png") {
  //         em.push(`Invalid format for image ${a + 1}`);
  //       }
  //     }
  //   }

  return em;
}

// console.log(validate(inputData));
// console.log(validate({}));
// console.log(validate({barcode: "12345"}));
// console.log(validate({price: "Rs123"}));
// console.log(validate({
//     barcode: "abc1234",
//     quantity: -1,
//     price: { amount: -22.0, currency: "GBP" },
//     images: [
//       {
//         url: "https://bit.ly/3m4JGhF",
//         format: "jpg",
//       },
//       {
//         url: "Htt",
//         format: "gif",
//       },
//     ],
//   }))

//   console.log(validate({
//     barcode: "abc1234",
//     quantity: 1,
//     price: { amount: 22.0, currency: "GBP" },
//     images: [
//       {
//         url: "https://bit.ly/3m4JGhF",
//         format: "jpg",
//       },
//       {
//         url: "https://otee.dev",
//         format: "gif",
//       },
//     ],
//   }))

console.log(validate({
  barcode: "abc1234",
  quantity: 0,
  price: { amount: 22.0, currency: "GBP" },
  images: [],
}))

console.log(validate({
  barcode: "abc1234",
  quantity: 0,
  price: { amount: 22.0, currency: "GBP" },
  images: [
    {
      url: "https://bit.ly/3m4JGhF",
      format: "jpg",
    },
  ],
  funky: 1234
}))