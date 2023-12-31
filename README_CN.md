<img width="200px" src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/public/icon.png" align="left"/>

# Pot (派了个萌的翻译器)

> 🌈 一个跨平台的划词翻译软件 ([QQ 频道](https://pd.qq.com/s/akns94e1r))

![License](https://img.shields.io/github/license/pot-app/pot-desktop.svg)
![Tauri](https://img.shields.io/badge/Tauri-1.4.0-blue?logo=tauri)
![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?logo=javascript&logoColor=white)
![Rust](https://img.shields.io/badge/-Rust-orange?logo=rust&logoColor=white)
![Windows](https://img.shields.io/badge/-Windows-blue?logo=windows&logoColor=white)
![MacOS](https://img.shields.io/badge/-macOS-black?&logo=apple&logoColor=white)
![Linux](https://img.shields.io/badge/-Linux-yellow?logo=linux&logoColor=white)

<br/>
<hr/>
<div align="center">

<h3>中文 | <a href='./README.md'>English</a></h3>

<table>
<tr>
    <td> <img src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/1.png">
    <td> <img src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/2.png">
    <td> <img src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/3.png">
</table>

# 使用说明

<table>
<tr>
    <td>划词翻译
    <td>鼠标选中需要翻译的文本，按下设置的划词翻译快捷键即可
    <td> <img src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/eg1.gif"/>
<tr>
    <td>输入翻译
    <td>按下输入翻译快捷键呼出翻译窗口，输入待翻译文本后按下 <code>回车</code> 翻译
    <td><img src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/eg2.gif"/>
<tr>
    <td>插件调用
    <td>选中需要翻译的文本后点击插件图标翻译，详情见 <a href="#插件调用" target="_blank">插件调用</a>
    <td><img src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/eg3.gif"/>
<tr>
    <td>剪切板监听模式
    <td>在任意翻译面板上点击左上角图标启动剪切板监听默认，复制文字即可完成翻译
    <td><img src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/eg4.gif"/>
<tr>
    <td>截图 OCR
    <td>按下截图 OCR 快捷键后框选需要识别区域即可完成识别
    <td><img src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/eg5.gif"/>
<tr>
    <td>截图翻译
    <td>按下截图翻译快捷键后框选需要识别区域即可完成翻译
    <td><img src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/eg6.gif"/>
</table>

</div>

<div align="center">

# 特色功能

</div>

-   [x] 输入翻译
-   [x] 划词翻译
-   [x] 插件调用 ([详情](#插件调用))
-   [x] 剪切板监听模式
-   [x] 支持 OpenAI API
-   [x] 多 API 支持 ([支持接口](#支持接口))
-   [x] 多语言支持
-   [x] 到处到 Anki/欧路词典 (持续增加)
-   [x] 支持所有 PC 平台 (Windows, macOS, Linux)
-   [x] 支持 Wayland (在 KDE、Gnome 以及 Hyprland 上测试)
-   [x] 支持 OCR 文字识别 ([支持接口](#支持接口))
-   [x] 截图翻译

<div align="center">

# 支持接口

</div>

## 翻译

-   [x] [OpenAI](https://platform.openai.com/)
-   [x] [阿里翻译](https://www.aliyun.com/product/ai/alimt)
-   [x] [百度翻译](https://fanyi.baidu.com/)
-   [x] [彩云小译](https://fanyi.caiyunapp.com/)
-   [x] [腾讯翻译君](https://fanyi.qq.com/)
-   [x] [腾讯交互翻译](https://transmart.qq.com/)
-   [x] [火山翻译](https://translate.volcengine.com/)
-   [x] [小牛翻译](https://niutrans.com/)
-   [x] [Lingva](https://lingva.pot-app.com/)
-   [x] [Google](https://translate.google.com)
-   [x] [Bing](https://learn.microsoft.com/zh-cn/azure/cognitive-services/translator/)
-   [x] [Bing 词典](https://www.bing.com/dict)
-   [x] [DeepL](https://www.deepl.com/)
-   [x] [有道翻译](https://ai.youdao.com/)
-   [x] [剑桥词典](https://dictionary.cambridge.org/)
-   [x] [MoJi 辞书](https://www.mojidict.com/)
-   [x] [Yandex](https://translate.yandex.com/)
-   [x] [Tatoeba](https://tatoeba.org/)
-   [x] [PALM2](https://ai.google/discover/palm2/)
-   [ ] 持续增加...

## 文字识别

-   [x] 系统 OCR (离线)
    -   [x] [Windows.Media.OCR](https://learn.microsoft.com/en-us/uwp/api/windows.media.ocr.ocrengine?view=winrt-22621) on Windows
    -   [x] [Apple Vision Framework](https://developer.apple.com/documentation/vision/recognizing_text_in_images) on MacOS
    -   [x] [Tesseract OCR](https://github.com/tesseract-ocr) on Linux
-   [x] [Tesseract.js](https://tesseract.projectnaptha.com/) (离线)
-   [x] [PaddleOCR](https://github.com/xushengfeng/eSearch-OCR) (离线)
-   [x] [百度](https://ai.baidu.com/tech/ocr/general)
-   [x] [腾讯](https://cloud.tencent.com/product/ocr-catalog)
-   [x] [OCR Space](http://ocr.space/)
-   [x] [火山](https://www.volcengine.com/product/OCR)
-   [x] [迅飞](https://www.xfyun.cn/services/common-ocr)
-   [x] [腾讯图片翻译](https://cloud.tencent.com/document/product/551/17232)
-   [x] [百度图片翻译](https://fanyi-api.baidu.com/product/22)
-   [x] [Simple Latex](https://simpletex.cn/)
-   [ ] 持续增加...

<div align="center">

# 安装指南

</div>

## Windows

### 通过 Winget 安装

```powershell
winget install Pylogmon.pot
```

### 手动安装

1. 在 [Release](https://github.com/pot-app/pot-desktop/releases/latest) 页面下载最新 `exe` 安装包。
2. 双击安装包进行安装。

## MacOS

### 通过 Brew 安装

1. 添加我们的 tap:

```bash
brew tap pot-app/homebrew-tap
```

2. 安装 pot:

```bash
brew install --cask pot
```

3. 更新 pot

```bash
brew upgrade --cask pot
```

### 手动安装

1. 从 [Release](https://github.com/pot-app/pot-desktop/releases/latest) 页面下载最新的 `dmg` 安装包。（如果您使用的是 M1 芯片，请下载名为`pot_{version}_aarch64.dmg`的安装包，否则请下载名为`pot_{version}_x64.dmg`的安装包）
2. 双击下载的文件后将 pot 拖入 Applications 文件夹即可完成安装。

### 故障排除

-   由于开发者无法验证，“pot”无法打开。

    点击 取消 按钮，然后去 设置 -> 隐私与安全性 页面，点击 仍要打开 按钮，然后在弹出窗口里点击 打开 按钮即可，以后打开 pot 就再也不会有任何弹窗告警了

    如果在 隐私与安全性 中找不到以上选项，或启动时提示文件损坏。打开 Terminal.app，并输入以下命令，然后重启 pot 即可：

    ```bash
    sudo xattr -d com.apple.quarantine /Applications/pot.app
    ```

-   如果每次打开时都遇到辅助功能权限提示，或者无法进行划词翻译，请前往设置 -> 隐私与安全 -> 辅助功能，移除 “pot”，并重新添加 “pot”。

## Linux

### Debian/Ubuntu

1. 从 [Release](https://github.com/pot-app/pot-desktop/releases/latest) 页面下载最新的对应架构的 `deb` 安装包。

2. 使用 `apt-get` 进行安装

    ```bash
    sudo apt-get install ./pot_{version}_amd64.deb
    ```

### Arch/Manjaro

1. 在 [AUR](https://aur.archlinux.org/packages?O=0&K=pot-translation) 查看

使用 `AUR helper` 安装：

```bash
yay -S pot-translation # 或 pot-translation-bin

# paru -S pot-translation # 或 pot-translation-bin
```

2. 如果你使用 `archlinuxcn` 源，可以直接使用 pacman 安装

```bash
sudo pacman -S pot-translation-bin
```

<div align="center">

# 插件调用

</div>

## 使用说明

Pot 支持被其他软件调用。通过这种方式，借助其他软件的帮助，可以实现更方便地翻译。。

Pot 提供了两种外部调用的方式，你也可以通过喜欢的其他软件来调用它。

> 两种方式都需要 pot 保持后台运行

1. 通过命令行调用（不支持 MacOS）

```bash
pot popclip "hello world" # 第二个参数为需要翻译的文本
```

2. 通过 Http 请求调用

```bash
curl 'http://127.0.0.1:60828' -X POST -d "Hello world" # Body内容为需要翻译的文本
```

## 现有用法

### SnipDo (Windows)

1. 从 [Microsoft Store](https://apps.microsoft.com/store/detail/snipdo/9NPZ2TVKJVT7) 下载安装 SnipDo。
2. 从 [Release](https://github.com/pot-app/pot-desktop/releases/latest) 下载 pot 的 SnipDo 扩展 (pot.pbar)
3. 双击下载的扩展文件完成安装。
4. 选中文字，可以看到弹出的 SnipDo 工具条，点击翻译按钮即可翻译。

### PopClip (MacOS)

1. 从 [App Store](https://apps.apple.com/us/app/popclip/id445189367?mt=12) 下载安装 PopClip
2. 从 [Release](https://github.com/pot-app/pot-desktop/releases/latest) 下载 pot 的 PopClip 扩展 (pot.popclipextz)
3. 双击下载的扩展文件完成安装。
4. 在 PopClip 的扩展中启用 pot 扩展，选中文本即可点击翻译。

### Starry (Linux)

> Starry 目前仍处于开发阶段，因此您只能手动编译它。

Github: [ccslykx/Starry](https://github.com/ccslykx/Starry)

<div align="center">

# Wayland 支持

</div>

由于各大发行版对于 Wayland 的支持程度不同，所以 pot 本身没法做到特别完美的支持，这里可以提供一些常见问题的解决方案，通过合理的设置之后，pot 也可以在 Wayland 下完美运行。

## 快捷键无法使用

由于 Tauri 的快捷键方案并没有支持 Wayland，所以 pot 应用内的快捷键设置在 Wayland 下无法使用。 针对这一问题 pot 提供了命令行启动参数，可以通过命令来设置系统快捷键。

> 所有命令都需要 pot 保持后台运行

```bash
pot cofig # 启动pot设置
pot persistent # 启动输入翻译窗口
pot translate # 划词翻译
pot screenshot_ocr # 截图OCR
pot screenshot_translate # 截图翻译
pot screenshot_ocr without_screenshot # 截图OCR(不使用pot截图)
pot screenshot_translate without_screenshot # 截图翻译(不使用pot截图)
```

## 截图无法使用

在一些纯 Wayland 桌面环境/窗口管理器(如 Hyprland)上，pot 内置的截图无法使用，这时可以通过命令行参数来使用其他截图工具代替，只要实现截图后保存在 `~/.cache/com.pylogmon.pot/pot_screenshot_cut.png` 后再执行 `pot screenshot_ocr without_screenshot` 即可。

下面给出在 Hyprland 下的配置示例(通过 grim 和 slurp 实现截图)：

```conf
bind = ALT, X, exec, grim -g "$(slurp)" ~/.cache/com.pylogmon.pot/pot_screenshot_cut.png && pot screenshot_ocr without_screenshot
bind = ALT, C, exec, grim -g "$(slurp)" ~/.cache/com.pylogmon.pot/pot_screenshot_cut.png && pot screenshot_translate without_screenshot
```

其他桌面环境/窗口管理器也是类似的操作

## 划词翻译窗口跟随鼠标位置

由于目前 pot 在 Wayland 下还无法获取到正确的鼠标坐标，所以内部的实现无法工作。 对于某些桌面环境/窗口管理器，可以通过设置窗口规则来实现窗口跟随鼠标位置，这里以 Hyprland 为例：

```conf
windowrulev2 = float, class:(pot), title:(Translator|OCR|PopClip|Screenshot Translate) # Translation window floating
windowrulev2 = move cursor 0 0, class:(pot), title:(Translator|PopClip|Screenshot Translate) # Translation window follows the mouse position.
```

<div align="center">

# 贡献者

</div>

<img src="https://github.com/pot-app/.github/blob/master/pot-desktop-contributions.svg?raw=true" width="100%"/>

## 手动编译

### 环境要求

Node.js >= 18.0.0

pnpm >= 8.5.0

Rust >= 1.69.0

### 开始编译

1. Clone 仓库

    ```bash
    git clone https://github.com/pot-app/pot-desktop.git
    ```

2. 安装依赖

    ```bash
    cd pot-desktop
    pnpm install
    ```

3. 安装依赖(仅 Linux 需要)

```bash
sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libappindicator3-dev librsvg2-dev patchelf libxdo-dev libxcb1 libxrandr2 libdbus-1-3
```

4. 开发调试

    ```bash
    pnpm tauri dev # Run the app in development mode
    ```

5. 打包构建
    ```bash
    pnpm tauri build # Build into installation package
    ```

<div align="center">

# 感谢

</div>

-   [Bob](https://github.com/ripperhe/Bob) 灵感来源
-   [bob-plugin-openai-translator](https://github.com/yetone/bob-plugin-openai-translator) OpenAI 接口参考
-   [@uiYzzi](https://github.com/uiYzzi) 实现思路
-   [@Lichenkass](https://github.com/Lichenkass) 维护 Deepin 应用商店中的 pot
-   [Tauri](https://github.com/tauri-apps/tauri) 好用的 GUI 框架
-   [eSearch-OCR](https://github.com/xushengfeng/eSearch-OCR) PaddleOCR 实现

<div align="center">
