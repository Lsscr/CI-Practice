# CI-Practice 前端项目

这是一个基于 Vite + React + TypeScript 的前端项目，包含完整的 CI/CD 流程、测试框架和 Docker 部署配置。

## 功能特点

- 使用 Vite 构建工具，实现快速的开发和构建
- React 和 TypeScript 提供类型安全的组件开发体验
- Vitest 测试框架集成，支持单元测试和组件测试
- Docker 多阶段构建，优化容器镜像大小
- GitHub Actions 工作流，实现自动化测试、构建和部署

## 快速开始

### 开发环境

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 运行测试
pnpm test

# 运行测试（监视模式）
pnpm test:watch

# 运行测试（带覆盖率报告）
pnpm test:coverage

# 代码检查
pnpm lint

# 构建项目
pnpm build

# 预览构建结果
pnpm preview
```

### 使用 Docker

```bash
# 构建镜像
docker build -t ci-practice .

# 运行容器
docker run -p 8080:80 ci-practice
```

或者使用 docker-compose:

```bash
docker-compose up -d
```

然后访问 http://localhost:8080

## CI/CD 流程

本项目使用 GitHub Actions 实现 CI/CD 流程：

1. **测试阶段**: 运行单元测试和代码检查
2. **构建阶段**: 构建 Docker 镜像并推送到 GitHub Container Registry
3. **部署阶段**: 自动部署到生产环境（可根据实际需要配置）

## 项目结构

```
.
├── src/                # 源代码目录
│   ├── components/     # React 组件
│   ├── assets/         # 静态资源
│   └── ...
├── .github/            # GitHub Actions 配置
├── Dockerfile          # Docker 构建配置
├── nginx.conf          # Nginx 配置
└── ...
```

## 许可证

[MIT](LICENSE)
