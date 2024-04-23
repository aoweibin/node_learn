// ! 测试覆盖率
const lib = require("../src/cover");
const should = require("should");

describe("cover", () => {
    describe("parseAsync", () => {
        it("parseAsync should ok", function (done) {
            // * 设置超时时间
            this.timeout(3000);
            lib.parseAsync('{"name": "JacksonTian"}', (err, data) => {
                should.not.exist(err);
                data.name.should.be.equal("JacksonTian");
                done();
            });
        });
    });

    describe("parseAsyncPro", () => { 
        it("parseAsync should ok", async () => {
            const result = await lib.parseAsyncPro('{"name": "JacksonTian"}');
            result.name.should.be.equal("JacksonTian");
        });
    })
});
