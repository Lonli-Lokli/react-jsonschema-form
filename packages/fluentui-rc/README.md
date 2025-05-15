[![Build Status][build-shield]][build-url]
[![npm][npm-shield]][npm-url]
[![npm downloads][npm-dl-shield]][npm-dl-url]
[![Contributors][contributors-shield]][contributors-url]
[![Apache 2.0 License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/rjsf-team/react-jsonschema-form">
    <img src="https://github.com/rjsf-team/react-jsonschema-form/blob/main/packages/fluentui-rc/logo.png?raw=true" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">@lonli-lokli/dynamic-forms-fluentui-rc</h3>

  <p align="center">
    Fluent UI React Components (v9) theme, fields and widgets for <a href="https://github.com/rjsf-team/react-jsonschema-form/"><code>react-jsonschema-form</code></a>.
    <br />
    <a href="https://rjsf-team.github.io/react-jsonschema-form/docs/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rjsf-team.github.io/react-jsonschema-form/">View Playground</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Report Bug</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

Fluent UI React Components (v9) theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form/)
- [Fluent UI React Components (v9)](https://react.fluentui.dev/)
- [TypeScript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- `@fluentui/react-components >= 9.35.0`
- `@lonli-lokli/dynamic-forms-core >= 2.0.0`

```bash
yarn add @fluentui/react-components @lonli-lokli/dynamic-forms-core @lonli-lokli/dynamic-forms-utils @lonli-lokli/dynamic-forms-validator-ajv8
```

### Installation

```bash
yarn add @lonli-lokli/dynamic-forms-fluentui-rc
```

<!-- USAGE EXAMPLES -->

## Usage

```js
import Form from '@lonli-lokli/dynamic-forms-fluentui-rc';
```

or

```js
import { withTheme } from '@lonli-lokli/dynamic-forms-core';
import { Theme as FluentUIRCTheme } from '@lonli-lokli/dynamic-forms-fluentui-rc';

// Make modifications to the theme with your own fields and widgets

const Form = withTheme(FluentUIRCTheme);
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/rjsf-team/react-jsonschema-form/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Read our [contributors' guide](https://rjsf-team.github.io/react-jsonschema-form/docs/contributing/) to get started.

<!-- CONTACT -->

## Contact

rjsf team: [https://github.com/orgs/rjsf-team/people](https://github.com/orgs/rjsf-team/people)

GitHub repository: [https://github.com/rjsf-team/react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[build-shield]: https://github.com/rjsf-team/react-jsonschema-form/workflows/CI/badge.svg
[build-url]: https://github.com/rjsf-team/react-jsonschema-form/actions
[contributors-shield]: https://img.shields.io/github/contributors/rjsf-team/react-jsonschema-form.svg
[contributors-url]: https://github.com/rjsf-team/react-jsonschema-form/graphs/contributors
[license-shield]: https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/apache-2.0/
[npm-shield]: https://img.shields.io/npm/v/@lonli-lokli/dynamic-forms-fluentui-rc/latest.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@lonli-lokli/dynamic-forms-fluentui-rc
[npm-dl-shield]: https://img.shields.io/npm/dm/@lonli-lokli/dynamic-forms-fluentui-rc.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/@lonli-lokli/dynamic-forms-fluentui-rc
[product-screenshot]: https://github.com/rjsf-team/react-jsonschema-form/blob/main/packages/fluentui-rc/screenshot.png?raw=true
