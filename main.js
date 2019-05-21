window.jQuery = {}
window.jQuery.ajax = function({url,method,body,successFn,failFn,headers}){
    
    let request = new XMLHttpRequest()
    request.open(method,url)
    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader(key,value)
    }
    request.onreadystatechange  = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                successFn.call(undefined,request.responseText)
            }else if(request.status >= 400){
                failFn.call(undefined,request)
            }
        }
    }
    request.send(body)
}
function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url: "/xxx",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'frank': '18'
        }, 
        
        successFn: (x) =>{
            f1.call(undefined,x)
            f2.call(undefined,x) 
        },
        failFn: (x) =>{
            console.log(x)
            console.log(status)
            console.log(x.responseText)

        }
    })
})































/* myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()
    request.open('get','http://jack.com:8002/xxx')

    request.send()
    request.onreadystatechange = ()=>{
       if(request.readyState === 4){
          if(request.status >= 200 && request.status < 300){
              console.log('说明请求成功')
             console.log(typeof request.responseText)
             console.log(request.responseText)
             let string = request.responseText
             //把符合JSON语法的字符串
             //转换成JS对应的值
             let object = window.JSON.parse(string)
             console.log(typeof object)
             console.log(object)
             console.log('object.note')
             console.log(object.note)
          }else if(request.status >= 400){
              console.log('说明请求失败')
          }
       }
    }
}) */