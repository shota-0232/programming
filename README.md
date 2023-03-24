# programmingリポジトリの使用方法

## 初期設定
GitHubアカウント作成（右上のサインアップクリック）
https://github.co.jp/
参考サイト
https://qiita.com/ayatokura/items/9eabb7ae20752e6dc79d

Visual Studio Codeでプラグインをいれる
Git Graph
各ブランチの樹形図が見れる

## 概要
1. 各フォルダ内で新たに作業用フォルダを作成して作業する
現在テストで作成している「index.html」ファイルは削除してOK
  - ドットインストールでjsの基礎をする場合のフォルダ名
    - shota/dotinstall/js/basic
  - ウェブカツでphp初級の場合
    - shota/webukatu/php/beginner
  - youtubeの場合
    - shota/youtube/js/torazemi

2. ブランチの命名規則
  - 誰が作業したものかわかるようにするために以下のように作成する
    - 上記1で作成したフォルダ構成と同じように作成するとわかりやすくて良い
    - 例）名前-サイト-言語-内容
    - shota-dotinstall-js-basic

3. 作業手順
  1. 「main」ブランチにいることを確認し、そこから新規ブランチを作成
  2. 作業するフォルダを作成し勉強
  3. 作業完了後 or キリがいいところでコミット
  4. １つのレッスンが終わったところでpush
  5. GitHub上で「Pull requests」を作成しマージ
  6. 「main」ブランチに戻りマージした内容をローカルにも反映させる（pull）