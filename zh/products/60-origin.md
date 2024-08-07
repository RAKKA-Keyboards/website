# RAKKA 60 Origin

RAKKA 60 Origin 是我们首款完整佩列的预组装套件，即用户只需要自行购买和安装键帽后即可使用。提供标准 60 和左移 64 两种配列可选。搭载佳达隆磁玉轴。官方组装，杜绝组装问题导致距离检测不准确。

> RAKKA 60 曾以 DIY 套装的方式销售过。但是出现了太多组装问题，不少新手用户甚至损坏了 PCB 板，故本次暂不销售 DIY 套装。

![Keyboard image](/rakka-60-origin/DSCF8924.png)

![Keyboard image](/rakka-60-origin/DSCF8933.png)

![Configuration webpage](/web/remap.png)

![Configuration webpage](/web/performance.png)

## 声明

::: warning 声明

TAKKA 60 **不是**我们直属的产品！

我们的键盘对组装的要求不低。在文末可用找到安装指南。

我们的 0.1mm 是真实、可用的：在键程全部设为 0.1mm 的情况下，稳定地按压（排除轴体及人手不稳的问题），不应有任何问题。

如果组装不当，会导致距离检测不准确，甚至出现断触、误触等问题。

:::

## 购买

中国：<https://shop.rakka.cn/products/rakka-60>

海外（如果淘宝官方转运可用） ：<https://item.taobao.com/item.htm?id=759344809128>

### 发货时间

预计在 2024 年 2 月初。

## 介绍

### 包装内容

- 键盘本体
- 键盘包
- USB 线

### 特点

- 无死区，设定的距离即为物理上的距离
- 0.1mm 至触底可调键程（触底键程根据轴体不同而不同）
- 0.02mm 超高分辨率（以 0.02mm 为单位进行设定）
- 8000Hz 回报率
- 支持多种轴体（现已支持佳达隆磁白轴、磁橙轴、双轨橙轴、磁玉轴等等）
- 后续会通过固件更新支持针对单个键位设置安装了什么轴体
- 为了追求极致性能，只有 CapsLock 指示灯
- 键盘的配置在网页上进行，无需安装所谓的“驱动”（键盘配置网页：[中国](https://kb.rakka.cn) [海外](https://kb.rakka.dev)，有演示模式，现在就可以查看键盘支持的功能）
- 所有设置均保存在键盘内
- 支持快速触发（Rapid Trigger），在任意位置按下/抬起指定的距离即可触发/重置，远快于传统机械键盘
- 键程设置、是否使用快速触发可以针对单个按键设置
- 所有按键均可以自定义，包括切层等特殊按键
- 全功能的“层”
- 支持“配置文件”功能，通过可自定义的组合键在多组不同的配置文件中切换以适应不同的环境（例如，不开启快速触发的配置用于打字；键程设定不同的多个配置适用于不同的游戏）
- 支持“单击/长按”按键，即单击和长按对应不同按键（例如单击为 CapsLock，长按为 Ctrl；单击为空格键，长按为开启第一层）
- 支持“组合键”，即单一按键可对应按键+修饰键（例如按下一个按键即可触发 Ctrl+C）
- 支持固件升级，所有功能都可以慢慢添加

### 配列

可选标准 60 或左移 64。

蓝色部分为多配列支持的按键。但是成品使用钢板卫星轴定位板，不支持任何配列选项。如有需要，请选择 PCB 卫星轴。

#### 标准 60

![60 layout](/60he/layout_60.png)

#### 左移 64

![64 layout](/60he/layout_64.png)

### 轴体

佳达隆磁玉轴（Gateron KS-20T）

- 初始力：30gf
- 触底力：50gf
- 总行程：3.5±0.2mm
- 润滑方式：出厂润滑
- 手感类型：线性

### 外壳

- 材质：6063 国标铝合金，全 CNC，非型材
- 颜色：阳极黑、阳极银、电泳冷白（阳极为 180 目）
- 前高：18.9mm
- 结构：Tray mount（与标准 GH60 外壳不同，部分固定螺丝柱为可拆卸铜柱）

> 考虑到目标用户为游戏玩家，外壳做了轻量化处理，以便满足使用中移动键盘的需求

### PCB

与之前单独贩售的内胆相同。

- 1.6mm 黑色沉金 PCB
- 兼容 PCB 卫星轴
- 支持多配列（分裂 Backspace、分裂左 Shift、ISO 空格、分裂右 Shift、分裂空格）

### 定位板

黑色沉金 FR4 定位板（兼容钢板卫星轴）

### 棉

- 夹心棉
- “轴座棉”（根据 PCB 背面的元件开孔的棉，安装在 PCB 和底棉中间，用于充分填充空隙）
- 底棉

因为在保持 PCB 和定位板间隔 3.5mm 的情况下，添加轴下垫必然会出现每个按键压缩轴下垫的程度不一致的情况，造成键程检测与实际按压的键程偏移，故本代产品并未搭配轴下垫。

## 资源

### 安装指南

[DIY 套装安装指南](../guide/60-diy-kit.html)

### 定位板图纸

国内（腾讯微云）: <https://share.weiyun.com/q54hJ66d>

海外（GitHub）: <https://github.com/RAKKA-Keyboards/RAKKA-60>

### 固件

> 固件更新现在可以在网页上直接进行，无需手动下载文件。

国内: <https://docs.qq.com/doc/DWlFJbGFPbmRCYVhr>

海外（Google Drive）: <https://drive.google.com/drive/folders/16oWU3LX3uJv9fVTtH_3yXZEAipBdagES>

## 固件更新日志

[固件更新日志](../changelog/)

## 固件升级失败的解决方法

### 如果 CapsLock 灯常亮

这说明设备此时正处于恢复模式，此时只要再次升级固件即可。唯一需要注意的是，在升级过程中需选择“设备已处于恢复模式”选项。

::: tip 也可能是正常的

从固件版本 v0.15.0 起支持了 Windows Dynamic Lighting，且在 v0.16.0 前无法从在网页上关闭。因此，如果系统版本高于 Windows 11 23H2，在什么都没有做的情况下。
:::

### 如果 USB 不识别

按住 PCB 背面的 Bootloader 按键并连接 USB，设备会进入恢复模式，此时再次升级固件即可。

> 如果上次固件升级未完成，下次通电时设备会进入恢复模式，如果此时按下了 PCB 背面的 Bootloader 按键，则设备会认为升级已成功，但实际上并未完成，导致”砖了“。

## PCB 背面按键的作用

- Reset

  很单纯的重新启动设备。

- Bootloader
  
  断电时长按此按键并通电，设备会进入恢复模式。

  设备处于恢复模式时按下，重启到正常模式。
