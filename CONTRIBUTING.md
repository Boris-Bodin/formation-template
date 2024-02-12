# Contributing to Formation Template

First off, thank you for considering contributing to Formation Template. It's people like you that make Formation Template such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, make sure to open an issue on GitHub if one does not already exist. If one does exist, please add any more information that you have, it will be very helpful.

If you've written some code that fixes an issue, use a pull request to propose your changes to the repo's maintainers.

## Fork & create a branch

If this is something you think you can fix, then fork the repository and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```bash
git checkout -b 325-condense-duplicate-logic
```

## Get the test suite running

Make sure you're using the latest packages (run `yarn install`), then run the test suite with `yarn test` to ensure everything is running correctly.

## Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first.

## View your changes

Open up the app in your browser and manually test your changes.

## Get the style right

Your patch should follow the same syntax and semantic as the rest of the code.

## Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with the latest code from the main repository:

```bash
git remote add upstream git@github.com:Boris-Bodin/formation-template.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```bash
git checkout 325-condense-duplicate-logic
git rebase master
git push --set-upstream origin 325-condense-duplicate-logic
```

Go to the GitHub page of this fork. You can now send a pull request. Make sure to provide a clear and detailed description of your changes.

## Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

## Thank you for contributing!

Thanks again for your contribution, you're awesome! 🎉
