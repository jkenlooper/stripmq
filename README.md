# stripmq

*Strip media queries from stylesheets*

## Standalone cli version of grunt-stripmq

The stripmq.js is taken from the
[grunt-stripmq](https://npmjs.org/package/grunt-stripmq) project.  This was
mainly done so as to not depend on having grunt in order to just strip the
media queries from css.  The bin/stripmq command is a simple cli that takes the
same options as the grunt-stripmq task but for one file at a time.


## Installing

The `stripmq` command can be installed globally via npm:

```shell
npm install stripmq -g
```

## Using

```shell
stripmq --input test/input.css --width 1000 --type screen --output output.css
```

## More details

See the [grunt-stripmq on github](https://github.com/jtangelder/grunt-stripmq).
