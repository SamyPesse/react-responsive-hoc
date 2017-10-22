# react-responsive-hoc

[![Build Status](https://travis-ci.org/SamyPesse/react-responsive-hoc.svg?branch=master)](https://travis-ci.org/SamyPesse/react-responsive-hoc)
[![NPM version](https://badge.fury.io/js/react-responsive-hoc.svg)](http://badge.fury.io/js/react-responsive-hoc)

Wrapper around [react-responsive](https://github.com/contra/react-responsive) to work with SSR.

This module exports a provider for defining the default device (for SSR) and a modified `MediaQuery` from `react-responsive` to use the default device.

# Installation

```
$ yarn add react-responsive-hoc
```

# Usage

```js
import { MediaQueryProvider, MediaQuery } from 'react-responsive-hoc';

const Example = () => {
    return (
        <MediaQuery query="(min-device-width: 1224px)">
            On Desktop only
        </MediaQuery>
    )
};

const App = () => {
    return (
        <MediaQueryProvider width={1600} height={800}>
            <Example />
        </MediaQueryProvider>
    );
}
```
