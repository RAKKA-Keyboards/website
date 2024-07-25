# RAKKA 60 Origin

RAKKA 60 Origin is our first pre-built kit (user only needs to prepare and install the keycaps) with a full layout. It is available in both 60 and 64 layout. It is equipped with Gatoron Magnetic Jade switch (Gateron KS-20T). Officially assembled to eliminate inaccurate distance detection due to assembly issues.

> The RAKKA 60 was once sold as a DIY kit. However, there were too many assembly problems, and many novice users even damaged the PCB board, so the DIY kit is not available for sale this time.

![Keyboard image](/rakka-60-origin/DSCF8924.png)

![Keyboard image](/rakka-60-origin/DSCF8933.png)

::: info Info

The webpage has English version

:::

![Configuration webpage](/web/remap.png)

![Configuration webpage](/web/performance.png)

## Disclaimer

::: warning Disclaimer

TAKKA 60 by KBDfans is **NOT** our direct product!

Our keyboards have high requirement on assembly. Check the installation guide at the end of this page.

Our 0.1mm is real and usable: with the key travels all set to 0.1mm, a steady press (excluding problems of the stability of the switch and the human finger) should not cause any problems.

If not assembled correctly, it will lead to inaccurate distance detection and even problems such as disrupted press and false press.

:::

## Purchase

China: <https://shop.rakka.cn/products/rakka-60>

Outside mainland China (Taobao provides forwarding services for some locations): <https://item.taobao.com/item.htm?id=759344809128>


### Update

#### 2024/01/03

- Due to the keycap supplier issue, the keycaps are cancelled, and the price is reduced
  
  The shipped product is stilled pre-assembled, but only requires the user to prepare and install the keycaps 

### Delivery time

Expected in early February 2024

## Introduction

### Package Contents

- RAKKA 60 keyboard
- Keyboard bag
- USB cable

### Features

- No dead zones, the set distance is the physical distance
- Adjustable keystroke from 0.1mm to bottoming (bottoming varies by switches)
- 0.02mm ultra-high resolution (set in 0.02mm increments)
- 8000Hz polling rate
- Supports a variety of switches (supports Gatoron KS-20, Gatoron KS-20T, Gatoron KS-20U, etc.)
- Firmware updates will be available later to support the setting of which switch is installed for individual keys
- For ultimate performance, only the CapsLock indicator LED
- Configuration of the keyboard is done on the web, no need to install so-called "drivers" (keyboard configuration webpage: [China](https://kb.rakka.cn) [Overseas](https://kb.rakka.dev), with demo mode, you can check out the supported features now)
- All settings are saved inside the keyboard
- Supports Rapid Trigger, press/release at any position for a specified distance to trigger/reset, much faster than traditional mechanical keyboards
- Rapid Trigger can be set for individual keys
- All keys can be customized, including special keys such as layer toggle
- Full-featured "Layer" function
- Supports "profiles" function, with customizable key combinations to switch between multiple profiles to suit different environments (e.g., no RT configuration for typing; multiple RT profiles with different key travel settings for different games)
- Support for "Click/long-press" keys, where a click and a long-press correspond to different keys (e.g. a click is CapsLock, a long-press is Ctrl; a click is Space, a long-press toggle layer 1)
- Supports "Key combo", i.e. a single key can correspond to a key + modifier (e.g. pressing a key can trigger Ctrl+C)
- Support firmware upgrade, all functions can be added later through firmware upgrade

### Layout

Standard 60 or 64 is available.

The blue part shows the multi-layout support. However, the pre-built keyboard uses plate-mount stabilizers, which does not support any of the layout options. Please choose the plate that supports PCB-mount stabilizers.

#### 60

![60 layout](/60he/layout_60.png)

#### 64

![64 layout](/60he/layout_64.png)

### Switch

Gateron Magnetic Jade Switch (Gateron KS-20T)

- Initial force: 30gf
- Bottom force: 50gf
- Total stroke: 3.5±0.2mm
- Lubrication type: Factory lube
- Type: Linear

### Case

- Material: 6063 aluminum alloy, full CNC
- Color: Anodized black, Anodized silver, electrophoresis cold white (anode for 180 mesh)
- Front height: 18.9mm
- Mount: Tray mount (different from the standard GH60 shell, part of the fixed screws for removable copper column)

> Considering that the target users are gamers, the casing is made lightweight to meet the demand of moving the keyboard in use.

### PCB

The PCB is the same as the one sold separately.

- 1.6mm black ENIG PCB
- Compatible PCB-mount stabilizers
- Supports multiple layouts (Split Backspace, Split Left Shift, ISO Enter, Split Right Shift, Split Space)

### Plate

Black ENIG FR4 plate (compatible with plate-mount stabilizers)

Additional option:

Black ENIG FR4 plate (compatible with PCB-mount stabilizers)


### Foam

> I really don't know how to translate them

- 夹心棉 (Between PCB and plate)
- "轴座棉" (Foam with holes cut out according to the components on the back of the PCB, mounted between the PCB and the case foam, to fully fill the gaps)
- Case foam

Since adding an under-switch foam while maintaining a 3.5mm spacing between the PCB and the positioning plate will inevitably result in inconsistencies in the degree of compression of the under-switch foam for each key, resulting in a shift between the key travel detection and the actual key travel, the current generation of the product is not paired with an under-switch foam.

## Resources

### Installation guide

[DIY Kit Installation Guide](../guide/60-diy-kit.html)

### Plate drawing

<https://github.com/RAKKA-Keyboards/RAKKA-60>

### Firmware

> Firmware updates can now be done directly on the web, no need to manually download files.

<https://drive.google.com/drive/folders/16oWU3LX3uJv9fVTtH_3yXZEAipBdagES>

## Firmware changelog

[Changelog](../changelog/)

## Solution for firmware upgrade failure

### If the CapsLock light is always on

This means that the device is in recovery mode at this time, and you only need to upgrade the firmware again. The only thing to note is that you need to select the "Device is already in recovery mode" option during the upgrade process.

### If USB is not recognized

Hold the Bootloader button on the back of the PCB and plugin the USB. The device will enter recovery mode again. At this time, you can upgrade the firmware again.

> If the last firmware upgrade was not completed, the device will enter recovery mode the next time it is powered on.
> If the Bootloader button on the back of the PCB is pressed at this time, the device will think that the upgrade has been successful, but in fact it has not been completed, resulting in a "brick" .

## The function of the buttons on the back of PCB

- Reset

  Simply restarting the device.

- Bootloader

  When the device is disconnected, hold this button while plugin the USB cable, the device will enter recovery mode.

  When the device is in recovery mode, click this button to exit recovery mode.
