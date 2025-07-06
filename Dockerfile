# 构建阶段
FROM node:20-alpine AS builder
WORKDIR /app

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 复制 package.json 和 pnpm-lock.yaml (如果存在)
COPY package.json pnpm-lock.yaml* ./

# 安装依赖
RUN pnpm install

# 复制项目文件
COPY . .

# 运行测试
RUN pnpm test

# 构建项目
RUN pnpm build

# 生产阶段
FROM nginx:stable-alpine AS production
WORKDIR /usr/share/nginx/html

# 删除默认的 nginx 静态资源
RUN rm -rf ./*

# 从构建阶段复制构建成果到当前工作目录
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"] 