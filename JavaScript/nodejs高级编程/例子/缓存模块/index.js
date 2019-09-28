const module1 = require('./module')
const module2 = require('./module')
// 导入两次，但第二次不会打印
// module initializing...
// module initialized
// 而是直接调用缓存的导出export