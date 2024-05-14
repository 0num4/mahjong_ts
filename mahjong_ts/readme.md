python の mahjong ライブラリを chatgpt で移植する
https://chat.openai.com/share/62fca777-ba27-4d70-9752-9ff330ff58c0

# 初期化

https://zenn.dev/junki555/articles/c21e6e74ea6ffcf074f8

# linting

biome を使ってみる
https://biomejs.dev/guides/getting-started/

```
yarn add --dev --exact @biomejs/biome
```

初期化用のコマンドがある

```
yarn biome init
```

```
  "linter": {
    "enabled": false,
    "rules": {
      "all": false
    }
  },
```

全て無効化しても organizeImports だけは出る

```
./hand_calculating/yaku_list/yakuman/daichisei.ts organizeImports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Import statements could be sorted:

     1    │ - import·{·Yaku·}·from·"../../../yaku";
     2    │ - import·{·HONOR_INDICES·}·from·"../../../constants";
     3    │ - import·{·all·}·from·"../../../utils";
        1 │ + import·{·HONOR_INDICES·}·from·"../../../constants";
        2 │ + import·{·all·}·from·"../../../utils";
        3 │ + import·{·Yaku·}·from·"../../../yaku";
     4  4 │   export class Daichisei extends Yaku {
     5  5 │     tenhou_id: number;


The number of diagnostics exceeds the number allowed by Biome.
Diagnostics not shown: 7.
Checked 82 files in 20ms. No fixes needed.
Found 27 errors.
check ━━━
```
