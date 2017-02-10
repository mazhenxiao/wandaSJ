/**
 * Created by mazhenxiao on 2017/2/8.
 */
require("es6-loader");
module.exports = {
    entry:["js/main.js"],
    output:{
        "path":"../dist/js",
        "filename":"[name].min.js"
    },
    module:{
        "loaders":[
            {"test":/\.js/ig,loaders:["es6-loader"]}
        ]
    },
    resolve:{
        root:"F:/wanda_xianchangjiancha_pc/"
    }

}