# Offline Web Applications

**NOTES:** everything here is based on my learning process, feel free to add suggestions if you find something strange.

## Lesson 2 - Introducing the Service Worker

### 1 - An Overview of Service Worker

Visit "Is Service Worker Ready?" [Here](https://jakearchibald.github.io/isserviceworkerready/).

### 2 - Quiz: Scoping Quiz

```
Given this registration code, which page URLs will this service worker control?

navigator.serviceWorker.register('/sw.js', {scope: '/foo/'});

- [ ] /
- [ ] /sw.js
- [ ] /foo
- [ ] /foo.html
- [x] /foo/
- [x] /foo/bar/index.html
- [x] /foo/bar
```