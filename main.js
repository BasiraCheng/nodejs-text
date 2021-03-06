window.jQuery = {}
window.jQuery.ajax = function({url,method,body,headers}){
    return new Promise(function(resolve,reject){//成功调第一个，失败调第二个
        let request = new XMLHttpRequest()
        request.open(method,url)
        for(let key in headers){
            let value = headers[key]
            request.setRequestHeader(key,value)
        }
        request.onreadystatechange  = ()=>{
            if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
                    resolve.call(undefined,request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined,request)
                }
            }
        }
        request.send(body)
    })
}

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url: "https://basiracheng.github.io/nodejs-text",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'frank': '18'
        }
    }).then(
        (text)=>{console.log(text)},
        (request)=>{console.log(request)}
    )
})
