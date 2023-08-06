[![Mahjong lib](https://github.com/MahjongRepository/mahjong/actions/workflows/pythonapp.yml/badge.svg)](https://github.com/MahjongRepository/mahjong/actions/workflows/pythonapp.yml)

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

# poetry

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
