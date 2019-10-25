# lara_vue_components_comm
超实用的Vue组件通信方式大汇总实例代码

本文所示的例子，都采用快速原型开发，如果需要可参考以下步骤：
 1. 使用如下命令安装 vue-cli3
```javascript
npm install @vue/cli -g
```
或者
```javascript
yarn global add @vue/cli
```
 2. 使用如下命令安装一个额外的全局插件，这样就可以使用 vue serve 和 vue build 命令独立运行单个 * .vue 文件：

```javascript
npm install -g @vue/cli-service-global
```
或者
```javascript
yarn global add @vue/cli-service-global 
```
3. 新建 *.vue 文件
4. 在 *.vue 文件所在目录下运行如下命令：
```javascript
# App.vue
vue serve
# 指定入口文件
vue serve component.vue
```
