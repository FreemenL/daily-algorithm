const isValid = (str) => {
    const valid = true;
    // 栈结构
    const stack = [] ;
    // 映射关系
    const mapper = {
        "{":"}",
        "(":")",
        "[":"]"
    }
    // 遍历str
    for(let i in str){
        const current = str[i];
        if(['(', '[', '{'].indexOf(current)>-1){
            //如果当前字符为左半边括号时，则将其压入栈中
            stack.push(current);
        }else{
            const close = stack.pop();
            // 判断映射关系
            if(mapper[close]!=current){
                return false
            }
        }
    }
    // 左侧括号多余的情况
    if(stack.length>0)return false;

    return valid;
}

module.exports = isValid;