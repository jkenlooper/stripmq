# Mobile-first CSS fallback

A Grunt task to generate a fallback version of your fancy mobile first stylesheet.
Since <IE9 doesnt support media queries, you can use a javascript like respond.js to enable this,
or generate a fallback version with this task.

It strips out all the media queries and creates overwrites, and also removes all the device pixel queries with it's contents.
With the `width` option, you can remove `max-width` queries, since they wont be in the desktop version.

### Sample
````css
body { background: url('mobile-background.png'); }

@media screen and (min-width: 640px) {
    body { background: url('tablet-background.png'); }
}

@media screen and (max-width: 800px) {
    body { background: url('until-800px-background.png'); }
}

@media screen and (min-width: 900px) {
    body { background: url('desktop-background.png'); }
}

@media (-webkit-min-device-pixel-ratio: 1.5),
    (min--moz-device-pixel-ratio: 1.5),
    (-o-min-device-pixel-ratio: 3 / 2),
    (min-device-pixel-ratio: 1.5) {
    body { background: url('hd-background.png'); }
}
````

becomes

````css
body {
  background: url('mobile-background.png');
}

body {
  background: url('tablet-background.png');
}

body {
  background: url('desktop-background.png');
}
````

### Grunt task
````js
    stripmq: {
        options: {
            width: 980
        }
        all: {
            files: {
                'desktop.css': ['mobile-first.css']
            }
        }
    }
````


### Todo
- Remove overwritten properties