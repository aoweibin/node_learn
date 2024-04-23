// ! 异步测试
const fs = require("fs");
const path = require("path");
const should = require("should");

describe("异步测试", () => {
    it("done 方案", done => {
        fs.readFile(path.join(__dirname, "../public/hello.txt"), "utf-8", (error, data) => {
            should.not.exist(error);
            data.should.equal("Hello World!");
            done();
        });
    });

    afterEach(() => { 
        console.log("---end---");
    })
});