# Changelog

If not otherwise noted, changes apply to all devices.

## v1.5.0 <Badge type="tip" text="beta" />

> Released on 2024-11-20

- **[60 Series]** Minimum resolution improved to 0.01mm; Rapid Trigger settings now have a minimum of 0.02mm (previously 0.02mm and 0.04mm)
- Fixed an issue in version 1.4.0 where pressing one key could unintentionally affect another
- If the Rapid Trigger is set too low and "Manual bottom calibration" has not been performed, the effective value will be limited to 0.05mm (this is not currently indicated in the configurator, and the limit may be adjusted in the future)
- Fixed an issue where current profile would reset after power down
- Fully implemented RGB-related features (though the current 60 series only has a single LED, so the functionality is less noticeable)

::: tip Statement on Performance Parameters

We always guarantee that all our advertised specifications are accurate and valid, with no false claims or marketing tricks. There will never be scenarios where advertised precision is only valid at specific pressing distances, or misleading statements like claiming an 8000Hz polling rate equates to 0.125ms latency.

You may also look forward to our new products launching between late 2024 and early 2025, which will feature significantly improved performance parameters.

:::

## Configurator v2.5.0

> Released on 2024-11-20

- Added a tool for self-investigation or reporting issues related to chattering and missed keystrokes
- Added a tool for general-purpose key testing
- Modified some hints
- Fixed an issue where the key assigned for switching profiles was sometimes displayed incorrectly
- The icon font now includes only the icons used, significantly reducing download size
- Adapted to changes introduced in the latest firmware version

## Configurator v2.3.0

> Released 2024-10-27

- Fix an issue where the value of "Standalone keymap" option is not displayed correctly
- Add some hint
- Adapt changes of unreleased devices

## v1.3.0 <Badge type="tip" text="stable" />

> Released on 2024-10-13

- Solves the problem that after pressing a key hard, abnormal distance readings will occur when pressing the key again with normal force, by adding an extra manual calibration step

## Configurator v2.2.0

> Released on 2024-10-13

- Adapt firmware v1.3.0 changes

## v1.2.1

> Released on 2024-10-13

- Continue of "A new way to key readings more accurately"

::: warning "A new way to make button readings more accurate" since v0.18.0 also requires the switch to be stably mounted

This change mainly solves the problem that pressing a key will cause abnormal changes in the readings of related keys (usually surrounding keys).
However, if the switch cannot be stably mounted on the PCB, this change will have the opposite effect, such as more abnormal resets.

If you encounter this phenomenon, please check whether the switch is installed correctly.

:::

## Configurator v2.1.2

> Released on 2024-10-08

- Fixed the problem that the switch cannot be set for devices with very low firmware versions (before 2024-07-11, which does not support setting the switch individually)

## Configurator v2.1.1

> Released on 2024-10-08

- Fixed the problem that errors will occur when setting the switch in batches

- Fixed the background error of some new interfaces in dark mode

## v1.2.0

> Released at 2024-10-08

- Support more switches (experimental) <del>parameters are actually the same for some switches</del>
- Fix the problem that a complete recalibration is not triggered when changing switches

::: warning About the plate

Note that some batches of keyboards use PC plates, 
which are fine when used with early batches of GATERON Magnetic Jade Switches 
and GATERON Magnetic White Switch.
However, the newer switches have thinner pins and cannot be fixed on the PCB.
When using a PC plate, the switch is equivalent to completely floating on the PCB,
which will cause serious false touch problems.
If necessary, please replace it with a FR4 material plate with screws.

In addition, there is feedback that the same problem will occur 
if the user replaces the slotted plate on their own.
:::

## Configurator v2.1.0

> Released at 2024-10-08

- New Switch settings interface

## v1.1.0

> Released at 2024-10-05

- Improved processing speed
- Distance readings no longer jump between 0.00mm and 0.02mm when idle
- Adjusted auto calibration
- Fixed issue where adjusting the "Standalone keymap" option would trigger profile switching

## Configurator v2.0.0

> Released at 2024-10-05

- Significantly changed the interface layout to make it more logical (more changes will be made in the future)
- New Keymap settings interface
- New Advanced key settings interface
- Show prompts if the window size is too small
- Show shortcut keys for switching profiles based on the current keymap settings

## v1.0.1

> Released at 2024-07-28

- **[60 series]** Continue of "A new way to key readings more accurately" again

## v1.0.0

> Released at 2024-07-28

- Added a new feature: Set two keys as a combination and select whether the two keys should be triggered in multiple rules; each profile can configure multiple different combinations

::: warning Prohibited in Counter Strike 2

As of 2024-08-20, the "last input priority" feature has been prohibited by Counter Strike 2. This is because it is considered as automation.

Please refer to [Counter Strike 2's announcement on Steam Community](https://store.steampowered.com/news/app/730/view/6500469346429600836).
:::

## v0.18.0

> Released at 2024-07-27

- **[60 series]** Continue of "A new way to key readings more accurately"

## v0.17.0

> Released at 2024-07-25

- A new way to make key readings more accurately
- Fix the problem where abnormal keys were sent when NKRO was manually disabled
- Fix a problem with dynamic trigger distance being set very high (although it's unlikely anyone would actually set it that high)
- The first change will inevitably consume computing power, but this update also includes other changes to improve responsiveness

## v0.16.3

> Released at 2024-07-19

- Fix the problem that auto-calibration does not work properly since version 0.16.0
- Auto-calibration is now forced to be turned on, regardless of the switch on the web page
- Slightly adjust the strategy of auto-calibration

## v0.16.1

> Released at 2024-07-11

- Reset all settings automatically if any key is bound to an invalid keycode

## v0.16.0

> Released at 2024-07-11

- Modify the key sending related parts, which could solve various strange problems
- Support choosing different switch for different keys
- Support modifying profile name
- More options for the only LED of the keyboard -_-

::: warning

This version contains many other internal changes. Before it is confirmed to be stable, users who do not know how to roll back the version are not recommended to update.

:::

## v0.15.8

> Released at 2024-05-25

- Fix the problem that version 0.15.7 breaks layout detection accidentally

## v0.15.7

> Released at 2024-05-24

- Fix the problem that the toggling "Standalone key mapping" option does not take effect immediately (you need to switch to another profile and then switch back to take effect)
- Add some keys to switch profiles
    - `↔ PF`: Switch between the current profile and the last switched profile
    - `↔ PF0`: Switch between the current profile and profile 0
    - `→ PF` `← PF`: Cycle through profiles in forward and reverse order

## v0.15.6

> Released at 2024-05-07

- Fix old bugs introduced from 0.15.1

## v0.15.1

> Released at 2024-05-01

- Reduce the memory usage inside the keyboard AGAIN™, leaving more space for future updates
- Improved response speed (reduced latency)

## v0.15.0

> Released at 2024-04-16

- Support Windows Dynamic Lighting (although this keyboard only has one LED -_-)

  ::: tip What is Windows Dynamic Lighting?

  Dynamic lighting is a new feature of Windows 11 23H2, which allows you to control all supported keyboards, mice, and
  other peripherals in Windows settings or third-party control programs (Including but not limited to Armory Crate from ASUS)
  to achieve a unified lighting style.

  See [Microsoft support page](https://support.microsoft.com/en-us/windows/control-your-dynamic-lighting-devices-in-windows-8e8f22e3-e820-476c-8f9d-9ffc7b6ffcd2).

  :::

  ::: tip How to turn off the CapsLock LED?

  If your system version is Windows 11 23H2 or higher, this feature is enabled by default. Therefore, you will find the CapsLock LED is always on. If you don't need it, you can find the "Dynamic Lighting" option in Windows settings and turn it off for the keyboard.

  :::

- Change the strategy for triggering the CapsLock indicator light when the Profile changes

    - The indicator light is only forced to turn on for 3 seconds
    - After that, the indicator light which has color changed will only turn on when CapsLock is on

- Fix non-English characters (e.g. `￥｜`, Japanese Yen Symbol) not working

  Users still need to change the keyboard layout to the corresponding language in the operating system

- Fix the problem that the NKRO toggle does not work

## v0.14.0

> Released at 2024-04-03

- Reduce the memory usage inside the keyboard further, leaving more space for future updates

## v0.13.2

> Released at 2024-03-23

> This version of the firmware requires the latest version of the web page. If the web page is opened earlier, it will
> be stuck in "Communicating with the device". Please refresh.

- Standalone key mapping: Allow users to choose whether non-0 profiles have independent key binding settings
- Force CapsLock LED color when profile is not 0

    - Profile 1: Forced to magenta
    - Profile 2: Forced to green
    - Profile 3: Force to light blue
    - Profile 0: Off, purple when Caps Lock is on
    - Currently, no custom settings are supported, as well as this behavior cannot be turned off.

- Significantly reduce the firmware size and internal memory usage, leaving more space for future updates

## v0.12.2

> Released at 2024-03-01

- Very slightly improved performance

## v0.12.1

> Released at 2024-02-28

- Allow set "Tap" key as a modifier key for "Tap Hold" keys

## v0.12.0

> Released at 2024-02-03

- Allows the "Dynamic trigger travel" and "Dynamic reset travel" of the Rapid trigger mode to be adjusted to a minimum
  of 0.04mm (note that more extreme options are only recommended for use on more stable switches)

## v0.11.2

> Released at 2024-01-27

> This version is the factory firmware for the January 2024 batch

- Continue to adjust the auto-calibration strategy, now it is turned on by default (include upgrading from older
  versions)
- Adjust the curve for "GATERON Magnetic Jade switch (KS-20T)"
- Reduces the time spent on calculations, which theoretically reduces latency

## v0.10.0

> Released at 2023-12-20

- Adjust the auto-calibration strategy (but it is still turned off by default)
- Allows selection of installed switches at the entire keyboard level

## v0.9.5

> Released at 2023-12-14

- Fix the problem that holding "Layer Tap", "Mod Tap" key, then press another key, long press key is not triggered as
  excepted

## v0.9.4

> Released at 2023-12-14

- Fixed the problem that under extreme settings, the key may still be triggered even if the key is released

Explanation:
Suppose 0.1mm trigger and 0.1mm reset is set. If the distance when the key is not pressed has shifted slightly for any
reason, e.g. to 0.02mm or 0.04mm, then the key will not be reset because the key needs to go back to 0.00mm before it
can be reset.
This fix does not address cases where the distance has shifted more when the key was not pressed (e.g. the distance
reading was more than 0.1mm when it was not pressed).

## v0.9.1

> Released at 2023-12-13

- Fix pressing multiple "tap hold" key will cause fault of the keyboard
  (This feature may need more fixes later)

## v0.9.0

> Released at 2023-12-13

- Support "Mod Tap" (tap=keycode, hold=modifier) ("Layer Tap" is supported from the beginning)
- Support tap and hold with different keycode
- Fix the problem that all tap key from "tap hold" keys cannot be long pressed
- Change the behavior of Layer Tap, now the layer change is activated once there is another key is pressed

Note that due to it requiring some time to check if it is tapped rather than long pressed, the "tap" key cannot be
triggered immediately after you press the key.

## v0.8.0

> Released at 2023-12-09

- New auto calibration strategy
- Auto calibration is disabled by default, enable it in "Debug" tab
- Add "Recalibrate" key ("Keymap"-"Extra"-"Calibrate"), bind it to any key you want, press it to redo the calibration
  step (same with "Reinitialize" in "Debug" tab)

## v0.7.0

> Released at 2023-12-08

- Trying to avoid the problem of distance errors caused by pressing buttons when power-on calibration
- Introduce auto calibration
- Solve an internal array out-of-bounds access bug (x_x)

#### Declaration

Trademark declaration: The product names mentioned on this website are for identification purposes only, and these names may be registered trademarks or copyrights of other companies.
