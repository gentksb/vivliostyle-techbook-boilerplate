# vivliostyle-techbook-boilerplate

ローカル環境への設定を必要とせず、技術同人誌を書き始めるための設定テンプレートです。

Template Repositoryとして提供していますので、このリポジトリをベースに著者自身の新規GitHubリポジトリを作成してください。

このテンプレートは以下を提供します。

- devcontainer定義（Codespaces対応）
- プルリクエストごとのGitHub Actionsによるプレビュー原稿生成
- Linterによる原稿の最低限の校正
- リアルタイム校正を提供するためのVScode拡張機能セット
- vivliostyleのビルド設定

Codespacesを編集環境として想定しています。ローカルのVScodeでRemote Container拡張機能を使った執筆も可能です。

## 原稿編集の始め方

1. [Codespaces の Preview に申し込む](https://github.com/features/codespaces)
2. 右上のCode（緑のボタン）からCodespacesを起動する
3. VScode（エディタ）がWEB上で起動するのを待つ
4. 推奨の拡張機能をインストールする（右下でOKボタン）
5. gitブランチを作成する（名前は何でもよい）
6. ブランチ作成後、プルリクエストを作成する
7. 自分の担当章になるMarkdownファイルを編集する

著者が1名の場合でも、プレビューPDF作成機能を活用するため執筆用ブランチを作成することを推奨します。

### 原稿ファイル

`./chapter/chapter{n}`以下のフォルダが原稿用フォルダです。

各ディレクトリ内で、原稿用の画像ファイルと本文の`.md`ファイルを管理すること。

## 原稿規約の守り方

### 保存時

Linterが走り、フォーマット規約に合わないMarkdownの構文対して警告が出ます。警告文を読んでWarningがなくなるまで修正することをお勧めします。

Linterには[Textlint](https://github.com/textlint/textlint)を利用しています。いくつかルールを適用済みになっていますので、Textlintのドキュメントを参考に、お好みに応じて変更してください。

### プルリクエスト上のコミット時

プルリクエストを作成すると、ブランチ内のHEADを利用してPDFが生成され、Artifactとしてアップロードされます。完成系のイメージ確認に利用してください。
※最新版以外は1時間後に削除されます。

なお、この際に生成されるPDFはフォントを埋め込まずサイズを落としているため、入稿には使えません。

## 入稿ファイルの作成方法

`npm run build`を実行する。

## Local commands

- `npm run lint`: 校正結果を表示する。
- `npm run preview-build`: プレビュー用PDFを`output/preview.pdf`として生成する。
- `npm run build`: 入稿用のPDF（PDF/X-1a形式）を`output/{vivliostyle.config.jsで指定したoutput名}`として生成する。

## その他、本のデザイン変更や表紙データの作成など

原稿PDFのビルド、CSS組版の仕組みは[vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js)を使い実現しています。

[vivliostyleのドキュメント](https://vivliostyle.org/ja/documents/)を参考にして、オリジナルの同人誌を作成しましょう。

## Known Issue

- `vivliostyle preview`コマンドはcodespaces上で使えません（GUIが利用できないため）
  - WSL2 GUI環境やMac環境で子のリポジトリをクローンした場合はpreviewを利用できます
