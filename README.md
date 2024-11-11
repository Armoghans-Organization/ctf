<h1 align="center">CTF Utility 🚀</h1>
<br>

[![Dependabot Updates](https://github.com/Armoghans-Organization/ctf/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/Armoghans-Organization/ctf/actions/workflows/dependabot/dependabot-updates)
[![Node.js Package Test 🎉](https://github.com/Armoghans-Organization/ctf/actions/workflows/node.js.yml/badge.svg)](https://github.com/Armoghans-Organization/ctf/actions/workflows/node.js.yml)
[![GitHub](https://img.shields.io/github/license/Armoghans-Organization/ctf)](https://github.com/Armoghans-Organization/ctf/blob/main/LICENSE)
![code-size](https://img.shields.io/github/languages/code-size/Armoghans-Organization/ctf)

A command-line shell utility for setting up and managing Capture The Flag (CTF) challenges.

## Table of Contents

-   [Table of Contents](#table-of-contents)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Available Commands](#available-commands)
-   [Scripts](#scripts)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   Manage CTF challenges easily from the command line.
-   Supports user and package management.
-   Integrated with ESLint and Prettier for code quality and formatting.
-   Configurable with GitHub Actions for CI/CD.

## Installation

To install the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Armoghans-Organization/ctf.git
cd ctf
npm install
```

## Usage

You can run the utility using the following command:

```bash
npx ctf
```

### Available Commands

-   **Linting**: To check for code quality, run:

    ```bash
    npm run lint
    ```

-   **Formatting**: To format your code, run:

    ```bash
    npm run format
    ```

-   **Lint and Fix**: To lint and automatically fix issues, run:
    ```bash
    npm run lint:fix
    ```

## Scripts

The following scripts are available in this project:

-   `lint`: Runs ESLint on the project files.
-   `format`: Formats the code using Prettier.
-   `lint:fix`: Lints and automatically fixes issues.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
