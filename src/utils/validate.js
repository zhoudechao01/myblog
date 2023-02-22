// 专门存放校验规则的js文件
export function usernameRule(rule, value, callback) {
  let username = /^[a-zA-Z0-9]{4,10}$/
  if (value === "") {
    callback(new Error("请输入用户名"))
  }
  else if (!username.test(value)) {
    callback(new Error("用户名必须为4-10位的字符串"))
  }
  else {
    callback()
  }
}

export function passwordRule(rule, value, callback) {
  let password = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
  if (value === "") {
    callback(new Error("请输入用户名"))
  }
  else if (!password.test(value)) {
    callback(new Error("6-12位密码且必须包含数字,字母大小写,特殊字符"))
  }
  else {
    callback()
  }
}