---
title: Making <em>Jekyll</em> multilingual
redirect_from: /multilingual-website-with-jekyll/
category: articles
layout: post
---

J<em>ekyll</em> has a very flexible design that allows a great freedom of choice, allowing the user to simply introduce features that are not integrated into its engine. This is particularly the case when one wants to create a multilingual website: while CMS remain very rigid and often require plugins, few filters are sufficient to achieve it with _Jekyll_.

This article aims to present a way to create a multilingual site with _Jekyll_. _Jekyll_ have to be installed[[the article [Static website with *Jekyll*]({{site.base}}/static-website-with-jekyll/) explains how to install and use *Jekyll* in order to get a simple website]] on your computer and you should be able to know how to generate a simple website.

### Goals
Our website can be translated in as many languages as wanted. In the following examples, it will have three languages: English, French, and Chinese. Each page may be translated or not in the various languages[[regardless of the version, they may be pages which are not translated in each language]]. On each page, the entire contents --- article, date, menus, URL --- must be in the same language.

A language selector, as the one on the top right of this website, will show the actual language and the different translations available[[the selector musn't lead to the translated homepage, but to the translation of the current page]].

Everything will work without any plugin, in order to get a good compatibility with the future versions of *Jekyll* and to be able to generate the site in `safe` mode and thus to be able to host it on [GitHub Pages](https://pages.github.com/).

