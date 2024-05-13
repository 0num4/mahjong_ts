[![Mahjong lib](https://github.com/MahjongRepository/mahjong/actions/workflows/lint_and_test.yml/badge.svg)](https://github.com/MahjongRepository/mahjong/actions/workflows/lint_and_test.yml)

This library can calculate hand cost (han, fu with details, yaku, and scores) for riichi mahjong (Japanese version).

Also calculating of shanten is supported.

The code was validated on tenhou.net phoenix replays in total on **11,120,125 hands**.

So, we can say that our hand calculator works the same way that tenhou.net hand calculation.

# How to install

```bash
pip install mahjong
```

# Supported rules and usage examples

You can find usage examples and information about all supported rules variations in the [wiki](https://github.com/MahjongRepository/mahjong/wiki)

# How to use

```

❯ git branch
* feat/add-test
  feat/migrate-test-folder
  feat/migrate-typescript
  main

cd mahjong_ts
bun run main.ts
```

# リポジトリの説明

このリポジトリは/mahjong と/mahjong_ts の 2 つのフォルダから構成されています。
/mahjong は Python で書かれた麻雀の役判定ライブラリです。(fork of https://github.com/MahjongRepository/mahjong)
/mahjong_ts は/mahjong を TypeScript に移植したものです。

# how to fork from original repository

my mainstream branch is `main` , and original repository's mainstream branch is `master`.
なので開発する時は main からブランチを切って開発することになる。upsteam が更新されていたら下記のようにして sync してから開発する。

```

cd mahjong

mahjong on  main [$] via 🐍 v3.11.3 on ☁️
❯ git remote -v
origin https://github.com/0num4/mahjong_ts.git (fetch)
origin https://github.com/0num4/mahjong_ts.git (push)
originOld https://github.com/MahjongRepository/mahjong.git (fetch)
originOld https://github.com/MahjongRepository/mahjong.git (push)

mahjong on  main [$] via 🐍 v3.11.3 on ☁️
❯ git fetch originOld

mahjong on  main [$] via 🐍 v3.11.3 on ☁️
❯ git merge originOld/master

```

# poetry について(3 ヶ月前に開発していたものなのなのと windows で動かしていたっぽい)

```shell
poetry add black isort flake8 dlint flake8-print flake8-simplify flake8-bugbear
```

setuptools を使っている

よくわからんけど pyproject.toml あたりをガチャガチャやったら動いた
`packages = [{include = "mahjong"}]`

```
Administrator in mahjong_ts on  feat/pydantic-types [!] is 📦 v0.1.0 via 🐍 v3.10.6 (mahjong-ts-py3.10)
❯ python.bat .\doc\examples.py
```

# CI status

## Typescript

[![tslint](https://github.com/0num4/mahjong_ts/actions/workflows/eslint.yml/badge.svg)](https://github.com/0num4/mahjong_ts/actions/workflows/eslint.yml)

- eslint
- biome
- test(vitest とか？)
- document

## Python

- mypy
- flake8
- black
- isort
- ruff
- pytest
- pyright
- matrix-test
- document
