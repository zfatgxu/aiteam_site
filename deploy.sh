#!/bin/bash

# AI智算与数据科学学科团队网站部署脚本

echo "=========================================="
echo "开始部署 AI 团队网站"
echo "=========================================="

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 检查是否在项目根目录
if [ ! -d "frontend" ] || [ ! -d "backend" ]; then
    echo -e "${RED}错误: 请在项目根目录运行此脚本${NC}"
    exit 1
fi

# 1. 构建前端
echo -e "\n${GREEN}[1/5] 构建前端...${NC}"
cd frontend
npm install
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}前端构建失败${NC}"
    exit 1
fi
cd ..

# 2. 构建后端
echo -e "\n${GREEN}[2/5] 构建后端...${NC}"
cd backend
npm install
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}后端构建失败${NC}"
    exit 1
fi
cd ..

# 3. 创建日志目录
echo -e "\n${GREEN}[3/5] 创建日志目录...${NC}"
mkdir -p logs

# 4. 启动/重启后端服务
echo -e "\n${GREEN}[4/5] 启动后端服务...${NC}"
if pm2 list | grep -q "aicc-backend"; then
    echo "重启现有服务..."
    pm2 restart aicc-backend
else
    echo "启动新服务..."
    pm2 start ecosystem.config.js
fi
pm2 save

# 5. 显示服务状态
echo -e "\n${GREEN}[5/5] 服务状态:${NC}"
pm2 status

echo -e "\n=========================================="
echo -e "${GREEN}部署完成！${NC}"
echo "=========================================="
echo "前端文件位置: ./frontend/dist"
echo "后端服务状态: pm2 logs aicc-backend"
echo "访问地址: http://aicc.gxu.edu.cn"
echo "=========================================="
