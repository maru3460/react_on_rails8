# README

[Rails 8 で React を動かしてアセットパイプラインを勉強する](https://www.youtube.com/watch?v=J2jLG7FtUu4&t=1s)を見て手を動かす

## 実行環境

wsl ubuntu  
ruby 3.3.5  
rails 8.0.2  
node 22.15.0  
yarn 1.22.22

## コマンドなど

```shell
rails new -j esbuild -c tailwind react_tailwind
gem install foreman
bin/dev
bin/rails assets:precompile
bin/rails assets:clobber
bin/rails g controller statics show
bin/rails routes -g static
bin/dev # -> http://127.0.0.1:3000/statics/react
yarn add --dev typescript @types/react @types/react-dom
yarn install
npx tsc --init
```

## 注意点・変更点・なんか動画と違う点

- tailswind が v3 から v4 になっていて tailwind.config.js がない([参考](https://techracho.bpsinc.jp/hachi8833/2025_03_31/148957))
- yarn を入れていない場合
  - yarn.lock が生成されない
  - package.json に dependencies の項目がない
- package.json の dependencies に autoprefixer と postcss がない
- bin/dev で foreman がないと実行できない
  - Gemfile に書くとバグる可能性があるとのこと([参考](https://github.com/ddollar/foreman/wiki/Don't-Bundle-Foreman))
- ts 好きなので ts 入れてみた
- 画像は[さわらつき](https://github.com/SAWARATSUKI/KawaiiLogos)さんの画像を使用
- ts の画像の import の型: [参考](https://qiita.com/tetradice/items/b89a5dd41fcebf96379e)
