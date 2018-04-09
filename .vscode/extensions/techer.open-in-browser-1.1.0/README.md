

# Open in Browser

## what's new
1, Add Opera Support

2, Change Icon

if you find any bug, please let me know. Thanks!
***

Finally, you can open html pages with browsers you specified.

Usually, I use Firefox for convenience, however, I prefer to use Chrome when I debugging my html pages. In previous versions, I can't get it. But now, we can.

####  open-in-browser.default

In this version, I add a "open-in-browser.default" configuration option. You can set the value to the name of your favorite browser. 
if the value is correct and not empty,  when you open the browser directly through the shortcut keys, it will open the browser that you specified, rather than the system default browser.

For some reason, acceptable browsers are as follows:
>##### Firefox , Chrome , Opera, IE and Safari #####

You do not need to set a very accurate value, only if the value in the array, I will handle it:

chrome browser acceptable values:
>   [ 'chrome', 'google chrome', 'google-chrome', 'gc', '谷歌浏览器' ]

firefox browser acceptable values:
>   [ 'firefox', 'ff', 'mozilla firefox', '火狐浏览器' ]

ie browser acceptable values:
>   [ 'ie', 'iexplore' ]

safari browser acceptable values:
>   [ 'safari' ]

opera browser acceptable values:
>   [ 'opera' ]


### There is no demonstration gif because VSCE will check if images come from an HTTPS source ... Pretend there is a picture here...
* * *

####  open in other browsers

This is not enough, now, you can open html pages *in other browsers*.
when you right click, you may find a new item "`open in other browsers`", if you click it, you will get a browsers list, then you can choose one to open this page.

of course, you can also get it with shortcut `Alt+Shift+B`




## SUPPORT

MacOS, Linux, Windows 


## Release

#### 1.1.1
add `opera` support

change icon;  beautiful, right?

change Licence
#### 1.0.0
add `default browser` configuration option

add `open in other browsers`

#### 0.0.3
add `open file by right click menu item`

fix some bug

#### 0.0.2
add shortcut `Alt + B` 

modify the command on linux...

#### 0.0.1

BASIC SUPPORT...

## License

Apache Licence 2.0


