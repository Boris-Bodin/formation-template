# Formation Template

This project is a formation deployment system that uses GitHub Actions and GitLab CI to automatically deploy markdown-based slides to GitHub Pages and GitLab Pages respectively. The slides are generated from markdown files using [remark.js](https://remarkjs.com/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following installed on your system:

- Node.js
- Yarn or npm

### Installing

Clone the repository:

```bash
git clone https://github.com/Boris-Bodin/formation-template.git
```

Navigate into the project directory:

```bash
cd formation-template
```

Install the dependencies:

```bash
yarn install
# or
npm install
```

## Usage

The project uses markdown files located in the `public/slides` directory to generate the slides. Each markdown file represents a session. The markdown files use a specific syntax to define the layout and content of the slides.

The slides are generated using [remark.js](https://remarkjs.com/), a flexible, browser-based markdown presentation tool.

For add a session, create a new markdown file in the `public/slides` directory. And add a button in the `views/index.ejs` file to link to the new session.

The name of a slide should be the snake_case version of the section title. For example, if the section title is `### My Section`, the slide name should be `name: my-section`. Special characters in the section title should be replaced with a '-'. This naming convention ensures that the sections title are displayed correctly in the presentation.

The project uses a GitHub Actions workflow defined in `.github/workflows/page.yml` and a GitLab CI configuration defined in `.gitlab-ci.yml` to automatically deploy the slides to GitHub Pages and GitLab Pages whenever changes are pushed to the `main` branch or when the workflow is manually triggered from the Actions tab or the CI/CD pipelines page.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
