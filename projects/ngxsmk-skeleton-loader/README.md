# 🦴 ngxsmk-skeleton-loader

Angular **17+** standalone skeleton loader component & directive with SCSS animations (**shimmer, pulse, wave**). Lightweight, themeable, and designed for instant loading states.

[![npm version](https://img.shields.io/npm/v/ngxsmk-skeleton-loader.svg)](https://www.npmjs.com/package/ngxsmk-skeleton-loader)
[![downloads](https://img.shields.io/npm/dm/ngxsmk-skeleton-loader.svg)](https://www.npmjs.com/package/ngxsmk-skeleton-loader)
![angular version](https://img.shields.io/badge/angular-%5E17.0-red)
![license](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

* ⚡ **Standalone Angular component** — drop it anywhere, no NgModule needed
* 🎨 **SCSS theming** with CSS variables
* 🔄 **Animations**: shimmer, pulse, wave
* 🧩 **Component + structural directive** (`*ngxsmkSkeleton`)
* 📱 **Responsive** and mobile-friendly
* ♿ **Accessible** (role="presentation")
* ✅ **SSR-safe** (no direct DOM hacks)

---

## 📦 Installation

```bash
  npm install ngxsmk-skeleton-loader
```

Requires Angular **17+**.

---

## 🚀 Usage

### Component

```html
<ngxsmk-skeleton type="text" width="80%"></ngxsmk-skeleton>
<ngxsmk-skeleton type="circle" size="56"></ngxsmk-skeleton>
<ngxsmk-skeleton type="rect" width="100%" [height]="180"></ngxsmk-skeleton>
```

### Directive

```html
<ng-container *ngxsmkSkeleton="loading; type: 'text'; width: '70%'">
  <p>Loaded content appears here</p>
</ng-container>
```

---

## ⚙️ Inputs

| Input     | Type                                       | Default   | Description                 |
| --------- | ------------------------------------------ | --------- | --------------------------- |
| `type`    | `'text' \| 'rect' \| 'circle' \| ...`      | `text`    | Shape preset                |
| `width`   | `string \| number`                         | `100%`    | Width (string or px number) |
| `height`  | `string \| number`                         | `1rem`    | Height                      |
| `size`    | `string \| number`                         | –         | Shortcut for width+height   |
| `radius`  | `string \| number`                         | auto      | Border radius               |
| `animate` | `'shimmer' \| 'pulse' \| 'wave' \| 'none'` | `shimmer` | Animation style             |

---

## 🎨 Theming

Override CSS variables globally or per element:

```css
ngxsmk-skeleton {
  --ngx-skel-base: #e5e7eb;
  --ngx-skel-highlight: #ffffffb3;
}
```

---

## 🛠 Development

```bash
  ng build ngxsmk-skeleton-loader
```

Output in `dist/ngxsmk-skeleton-loader/`.

---

## 📦 Publish

```bash
  cd dist/ngxsmk-skeleton-loader
  npm publish --access public
```

---

## 🖼 Demo

Use the provided demo app:

```bash
  ng serve ngxsmk-skeleton-demo
```

Then open [http://localhost:4200](http://localhost:4200).

---

## 📄 License

[MIT](./LICENSE)

---

## 🌟 Community

If this saved you time, please ⭐ star the repo and share with fellow Angular devs!
