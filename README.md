# weex ouikit：
中台weex组件库，仅用于开发weex组件，如果是ocomp组件 请更将组件更新至[ocomponents](https://gitlab.oneitfarm.com/idg-public/ocomponents)仓库

## install
```bash
npm install
```
# run
```
npm run dev
open http://0.0.0.0:8080/
```
# build
```
npm run build
open http://0.0.0.0:8080/
```
# debug
```
npm run debug
open http://0.0.0.0:8080/
```

# native
weexpack platform add ios
weexpack run ios

## 使用说明

可以使用所有的 `weex-pack` 和 `weex` 相关命令，可见：

- [weex-pack](https://github.com/weexteam/weex-pack)
- [weex-toolkit](https://github.com/weexteam/weex-toolkit)

## 目录结构

```
├── yarn.lock
├── README.md
├── android.config.json
├── config.xml
├── hooks
│   └── README.md
├── ios.config.json
├── package.json
├── platforms     // 平台模版目录
├── plugins       // 插件下载目录
│   └── README.md
├── src           // 组件代码（vue文件）目录
│   └── index.js
├── demo       // demo目录
│   └── dist  // demo打包目录
│   └── src   // demo远吗目录
├── index.tpl
├── qrcode.tpl
└── webpack.config.js
```
