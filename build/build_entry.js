require('shelljs/global')
const path = require('path')
const fs = require('fs-extra')

const srcPath = path.resolve(__dirname, '../src/views')
const entryPath = path.resolve(__dirname, '../entry/')
const FILE_TYPE = '.vue'
let ENTRY_CONTENT = null

const getEntryFileContent = entryPath => {
  let content
  if (ENTRY_CONTENT) {
    content = ENTRY_CONTENT
  } else {
    content = fs.readFileSync(path.resolve(__dirname, '../src/appWeex.js'), 'utf8')
    ENTRY_CONTENT = content
  }
  content = String.prototype.replace.call(content, /{{ ENTRY }}/, `'${entryPath}${FILE_TYPE}'`)
  return content
}

module.exports = () => {
  // 删除原目录
  rm('-rf', entryPath)
  // 写入每个文件的入口文件
  fs.readdirSync(srcPath).forEach(file => {
    const fullpath = path.resolve(srcPath, file)
    const extname = path.extname(fullpath)
    const name = path.basename(file, extname)
    if (fs.statSync(fullpath).isFile() && extname === FILE_TYPE) {
      fs.outputFileSync(path.resolve(entryPath, name + '.js'), getEntryFileContent('../src/views/' + name))
    }
  })
  const entry = {}
    // 单独打包src/views下的每个js文件
  fs.readdirSync(entryPath).forEach(file => {
    const name = path.basename(file, path.extname(path.resolve(entryPath, file)))
    console.log(name)
    entry[name] = path.resolve(entryPath, name + '.js')
  })
  return entry
}
