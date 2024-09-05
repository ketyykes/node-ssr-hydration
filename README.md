# SSR Hydration 專案說明

本專案包含 React 和 Vue 的伺服器端渲染 (Server-Side Rendering, SSR) 範例，並使用 Node.js 及 Express 來達成應用程式的 SSR。

## 系統需求
- Node.js: 建議使用 v20.9.0
- pnpm: 建議使用 8.15.1 以上

---

## 1. React 部分

#### 技術棧 (Tech Stack)
- React
- Express
- ReactDOMServer
- ESBuild

### 文件結構

```
node-react-ssr/
├── build/
│   └── server.js           # 編譯後的伺服器端程式
├── dist/
│   └── bundle.js           # 編譯後的客戶端程式
├── package.json
├── pnpm-lock.yaml
├── public/
│   └── index.html          # 客戶端入口 HTML
├── server/
│   └── server.jsx          # 伺服器端程式碼
└── src/
    ├── App.jsx             # React 應用的主組件
    └── index.js            # 客戶端入口文件
```

### 主要功能
- 使用 `ReactDOMServer` 進行伺服器端渲染。
- 客戶端使用 `hydrate` 方式達成 SSR 後的快速交互。

### 啟動方式

1. 安裝依賴項：
   ```bash
   pnpm install
   ```
2. 構建應用：
   ```bash
   pnpm run build
   ```
3. 啟動伺服器：
   ```bash
   pnpm run start
   ```

---

## 2. Vue 部分

### 技術棧 (Tech Stack)
- Vue 3
- Express
- Vue Server Renderer

### 文件結構

```
node-vue-ssr/
├── app.js               # Vue 應用的主組件
├── client.js            # 客戶端入口文件
├── package.json
├── pnpm-lock.yaml
└── server.js            # 伺服器端程式碼
```

### 主要功能
- 使用 `@vue/server-renderer` 進行伺服器端渲染。
- 客戶端使用 `createSSRApp` 來保持應用的交互性。

### 啟動方式

1. 安裝依賴項：
   ```bash
   pnpm install
   ```
2. 啟動伺服器：
   ```bash
   pnpm run start
   ```

---

請確保您的環境符合上述系統需求，以確保應用程式順利執行。
