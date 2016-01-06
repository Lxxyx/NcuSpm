var qiniu = require('qiniu');
var fs = require('fs');
qiniu.conf.ACCESS_KEY = 'JG2EofH3JxDgOFwTApawkspvU0Q6p2GPjMHNaaLp';
qiniu.conf.SECRET_KEY = 'a4juRRC2dn7VDuanIBXfoqsgBz6d5d4mR8B7DT5m';

var bucketName = "ncuspm";

function uptoken(bucketname) {
    var putPolicy = new qiniu.rs.PutPolicy(bucketname);
    //putPolicy.callbackUrl = callbackUrl;
    //putPolicy.callbackBody = callbackBody;
    //putPolicy.returnUrl = returnUrl;
    //putPolicy.returnBody = returnBody;
    //putPolicy.asyncOps = asyncOps;
    //putPolicy.expires = expires;

    return putPolicy.token();
}

function uploadFile(localFile, key, uptoken) {
    var extra = new qiniu.io.PutExtra();
    //extra.params = params;
    //extra.mimeType = mimeType;
    //extra.crc32 = crc32;
    //extra.checkCrc = checkCrc;

    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if (!err) {
            // 上传成功， 处理返回值
            // console.log(ret.key, ret.hash);
            console.log("Upload "+key+" ==> Success!");
                // ret.key & ret.hash
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
            // http://developer.qiniu.com/docs/v6/api/reference/codes.html
        }
    });
}

var client = new qiniu.rs.Client();
var token = uptoken(bucketName);
var basePath = './../public/webpack_js/';

fs.readdir('./../public/webpack_js/', function(err, data) {
    for (i in data) {
        client.remove(bucketName, data[i], function(err, ret) {
            if (err) {
                console.log(err);
            } else {
            	console.log("Remove ==> Success!");
            }
        });
    }
    setTimeout(function() {
        for (x in data) {
            var fileName = data[x];
            var filePath = basePath + data[x];
            uploadFile(filePath, fileName, token);
        }
    },4000);
});
