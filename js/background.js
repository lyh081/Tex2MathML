chrome.contextMenus.create({
    'type':'normal',
    'title':'Tex2Word',
    'contexts':['selection'],
    'id':'cn',
    'onclick':toWord
});

function toWord(info) {
    input = info.selectionText.trim()
    MathJax.texReset();
    mml = MathJax.tex2mml(input);
    if(mml.includes("merror")){
        let message = mml.split("<mtext>")[1].split("</mtext>")[0]
        alert( "错误:{" + message +"}, 请检查所选Tex公式");
    }else{
        copyText(mml);
        alert("已经复制到剪贴板,请到Word中粘贴");
    }
}

function copyText(value) {
    // 创建元素用于复制
    const aux = document.createElement('input')
    // 获取复制内容
    const content = value
    // 设置元素内容
    aux.setAttribute('value', content)
    // 将元素插入页面进行调用
    document.body.appendChild(aux)
    // 复制内容
    aux.select()
    // 将内容复制到剪贴板
    document.execCommand('Copy')
    // 删除创建元素
    document.body.removeChild(aux)
}