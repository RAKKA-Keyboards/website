# 综述

## 什么是“层”

键盘上的每一个按键都有一个对应的键值，当您按下按键时，键盘会将这个键值发送给电脑。电脑收到这个键值，从而完成触发。
但是对于小配列键盘或是有高级需求的场景，一个按键只对应一个键值是不够的。
当你按下特定的组合键时，键盘会发送不同的键值，这背后是通过“临时切换键盘的工作层”来实现的。

RAKKA 键盘固件支持的层数是可变的，不同键盘可支持的最大层数也不同。

## “层”如何工作

以拥有 4 个层的键盘为例，这个键盘的 4 个层分别是：

```
3 层（默认关闭）         <--- 优先级最高
2 层（默认关闭）
1 层（默认关闭）
0 层（默认层；默认开启） <--- 优先级最低
```

“层”具有开关状态和优先级，键盘会由高向低的向所有已开启的层中查找键值，直到找到对应的键值为止。

### 例子

下面我们以 60 配列的键盘为例来看看“层”是如何工作的。

布局（只展示键盘的左上角）：

```
0 层（默认层；默认开启）
┌───────┬───────┬───────┬───────┐
│  Esc  │   1   │   2   │   3   │
├───────┼───────┼───────┼───────┤
│  Tab  │   Q   │   W   │   E   │
└───────┴───────┴───────┴───────┘
1 层（默认关闭）
┌───────┬───────┬───────┬───────┐
│  ~    │  F1   │  F2   │  F3   │
├───────┼───────┼───────┼───────┤
│  ▽    │  ▽    │  ▽    │   ▽   │
└───────┴───────┴───────┴───────┘
```

> “▽”的意思是“从更底层寻找按键”。


#### 正常按下按键“1”

1. 由于第 0 层默认开启，所以从第 0 层开始寻找键值
2. 第 0 层的按键“1”设置了键值“1”
3. 键盘会发送“1”

#### 按住“MO(1)”并按下“1”

> MO(1) 的意思是“临时开启第 1 层”，其作用可以理解为与通常键盘会出现的“Fn”按键相同。

1. 由于第 0 层和第 1 层都开启了，所以从第 1 层开始寻找键值
2. 第 1 层的“1”位置设置了键值“F1”
3. 键盘会发送“F1”

#### 按住“MO(1)”并按下“Q”

1. 由于第 0 层和第 1 层都开启，从第 1 层开始寻找键值
2. 第 1 层的“Q”位置设置了键值“▽”，键盘会继续向更低的层寻找键值
3. 第 0 层的“Q”位置设置了键值“Q”
4. 键盘会发送“Q”

## 切换逻辑

RAKKA 键盘固件支持多种切换层的方式，包括但不限于：

- 默认层（`DF(x)`）
- 开关层（`TG(x)`）
- 临时开启层（`MO()`）


### 临时开启层

“临时开启层”的功能是，当按下绑定了“临时开启层”的按键时，临时开启对应的层，松开按键时，关闭这个层。

为了使操作符合直觉，临时开启层的优先级是最高的，即使已经存在更高优先级的已经开启的层，也以临时开启层为准。

### 开关层

“开关层”的功能是，当按下绑定了“开关层”的按键时，如果对应的层已经开启，则关闭这个层，如果对应的层没有开启，则开启这个层。

### 默认层

在默认情况下，第 0 层是默认层，即键盘的最底层。默认层是可以修改的。

“默认层”的功能是，当按下绑定了“默认层”的按键时，将对应的层设置为默认层。