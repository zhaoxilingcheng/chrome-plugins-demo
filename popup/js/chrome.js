$(function () {
    let url_str = location.search.split("=")[1];
    let decode_url = decodeURIComponent(url_str)
    let parse_url = escape(decode_url)
    // 将谷歌浏览器url 已参数形式传输到目标url中
    // let url = "http://127.0.0.1:8080/index.html?url=" + parse_url;
    let url = decode_url
    // 这里随便写入一个地址
    console.log(url);
    // 写入iframe src
    $("#iframe_test").attr("src", url)

});