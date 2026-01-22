# AI Team - 智能团队协作平台

基于 Vue3 + NestJS 的现代化网站项目

## 项目结构

```
├── frontend/          # Vue3 前端应用
└── backend/           # NestJS 后端 API
```

## 快速开始

### 前端启动

```bash
cd frontend
npm install
npm run dev
```

前端将运行在 http://localhost:3000

### 后端启动

```bash
cd backend
npm install
npm run start:dev
```

后端 API 将运行在 http://localhost:3001

## 技术栈

### 前端
- Vue 3 - 渐进式 JavaScript 框架
- Vue Router - 官方路由管理器
- Vite - 下一代前端构建工具
- Axios - HTTP 客户端

### 后端
- NestJS - 渐进式 Node.js 框架
- TypeScript - JavaScript 的超集
- Express - Web 应用框架

## 功能特性

- 响应式设计，支持移动端
- 现代化 UI 界面
- 前后端分离架构
- RESTful API 设计
- 组件化开发

## 开发说明

前端代理配置已设置，`/api` 请求会自动转发到后端服务器。
