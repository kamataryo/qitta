# QITTA | ソーシャルねこケアアプリ

[![Linux Build Status](https://travis-ci.org/kamataryo/qitta.svg?branch=master)](https://travis-ci.org/kamataryo/qitta)
[![Windows Build status](https://ci.appveyor.com/api/projects/status/hndrdtmd5jim0d7o?svg=true)](https://ci.appveyor.com/project/kamataryo/qitta)

ねこのお世話をサポートするアプリです。
このアプリは開発中です。

[DEMO](http://qitta.biwako.io)

## Required

- Node.js >= 4
- Docker
- Docker Compose

## Getting started

```shell
$ git clone git@github.com:kamataryo/qitta.git
$ cd qitta
$ npm install
$ pushd ./server && npm install && popd
```

Start a client-dev-http-server:

```shell
$ npm start
```

SAtart mock API server:

```shell
$ pushd ./server && npm start; popd
```

## Automated testing

```shell
$ npm test
```
