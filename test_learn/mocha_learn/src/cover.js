module.exports.parseAsync = (input, cb) => {
  setTimeout(() => {
    let result;
    try {
      result = JSON.parse(input);
    } catch (error) {
      cb(error);
    }

    cb(null, result);
  },1000);
};

module.exports.parseAsyncPro = (input) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result;
            try {
                result = JSON.parse(input);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    });
}