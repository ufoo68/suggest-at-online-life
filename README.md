# suggest@online.life

[おうちハッカソン](https://connpass.com/event/174573/)にて作成したLINE Botです。以下のオンライン施設（アミューズメント）に関する情報を案内します。

- オンライン水族館
- オンライン神社
- オンライン温泉

施設の情報は[こちらのAPI](https://github.com/ufoo68/online-amusement-api)より収集しております。

## 使い方

現在これらのメニューがあります。

- オンライン水族館
- オンライン神社
- オンライン温泉
- 新しく投稿する

<img src="./assets/menu.jpg" width="200px">

「オンライン水族館」・「オンライン神社」・「オンライン温泉」を選択すると[フレックスメッセージ](https://developers.line.biz/ja/docs/messaging-api/using-flex-messages/)の形式でオンライン施設の一覧が表示されます。

<img src="./assets/flex.jpg" width="200px">

「新しく投稿する」を選択すると以下のようなフォームが現れます。

<img src="./assets/form.jpg" width="200px">

また、投稿したことを他のお友達にシェアすることができます。

<img src="./assets/dialog.jpg" width="200px">

## 友達登録

以下のQRコードをスキャンしてください。

![QR](./assets/QR.png)

もしくは以下のボタンより友達登録が可能です。

<a href="https://lin.ee/jffKuHOU"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" border="0"></a>