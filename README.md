# [devcember.com](http://devcember.com/)

Uses [Jekyll](http://jekyllrb.com/) to generate a static,
[Semantic-UI](http://semantic-ui.com/) based project promo site.

## Development

You'll need [Ruby](https://www.ruby-lang.org/).

```
$ gem install jekyll bundler
$ bundle install # the jekyll bits
$ npm i # the semantic-ui bits
$ npm run build # once. not needed again unless customizing semantic.css
$ bundle exec jekyll serve --incremental # more optimal serve/watch
```
# License

MIT
