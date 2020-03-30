# manjaro.com.cn

This readme is a work in progress if anything is missing let us know.

## Built With

* [Hugo](https://gohugo.io/getting-started/) - Static Website Generator

### Installing and running localy 

* Install on Manjaro with `pacman -S hugo, git`
* clonning repo on local machine `git clone https://github.com/Manjaro-China/manjaro.com.cn.git`
* `cd /manjaro.com.cn/site`
* Test run `hugo server -wDEFv --disableFastRender --noHTTPCache`
* Preview at `http://localhost:1313/`

### Testing News Localy
* Cors plugins are available 
  * [Chrome](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc)
  * [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/cors-everywhere/)
  
### Testing in a diferent language
* (TODO)

### libraries used, get familiar with them. ( needs update ) 
* [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Isotope](https://isotope.metafizzy.co/)
* [Jquery](https://jquery.com/)
* [Fontawesome](https://fontawesome.com/)

## Content creation
* Adding/Editing menus

Menus can be edited by opening (/site/config.toml), more examples can be found inside the file.

`weight` - link order in the menu.

`parent` - submenu the link belongs to.

If only a link is needed, ignore submenu, set link in `url` field.

```
[[menu.main]]
    name = "Features"
    url = "#"
    pre = ""
    weight = 2
    identifier = "features"
```
Submenu

```
[[menu.main]]
    name = "Under your control"
    url = "/features/under-your-control/"
    pre = "<i class='now-ui-icons objects_spaceship'></i>"
    weight = 2
    parent = "features"
```

* Adding a Edition

Editions can be added by creating an markdown file in (/site/content/download/my-edition.md), supported edition category, in the `Tags` field ( official, community, arm, 32bit ).

```
+++
Download_x64 = "https://osdn.net/dl/manjaro/manjaro-gnome-18.0.4-stable-x86_64.iso"
Download_x64_Checksum = "c7ce6949197a42b285425ae5c6c5203c883530c4"
Download_x64_Sig = "https://osdn.net/dl/manjaro/manjaro-gnome-18.0.4-stable-x86_64.iso.sig"
Download_x64_Torrent = ""
Download_x86 = ""
Download_x86_Checksum = ""
Download_x86_Sig = ""
Download_x86_Torrent = ""
Name = "GNOME"
Screenshot = "gnome-full.jpg"
Youtube = "OjyfrFWaLDM"
Tags = [ "official" ]
shortDescription = "For people who want a very modern and simple desktop"
Thumbnail = "gnome.jpg"
Version = "18.0.4"
date = "12.03.2019T12:37:00+01:00"
title = "Gnome Stable"
type="download-edition"
weigth = "3"
+++

This edition is supported by the Manjaro team and comes with the GNOME 3 desktop that breaks with traditional concepts and allows users to focus on their tasks. Desktop-specific applications are crafted with care and clearly defined by guidelines that make them more consistent to use.

If you are looking for older images check the [GNOME](https://osdn.net/projects/manjaro/storage/z_release_archive/gnome) archive.
```

### Adding pages
(TODO)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

