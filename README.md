# CrypTools website

<p align="center">
    <img height="256" src="https://cdn.rawgit.com/CrypTools/cryptools.github.io/733c86d5/img/Logo.png">
</p>
<p align="center">
    <img src="https://img.shields.io/github/license/Cryptools/learn.svg">
    <img src="https://img.shields.io/github/contributors/Cryptools/learn.svg">
</p>

## Welcome to the best platform to learn cryptography

> Cryptography is the art of writing and solving problems in order to prevent third parties or the public from reading private messages. And as any art, it can be taught. This was our mission by creating this platform. You'll have some challenges to complete, the first ones are easy, but don't worry, it will get much harder after some point.

> \- CrypTools

[This website](https://cryptools.github.io/learn) is a learning platform for cryptography, don't hesitate to visit it 😄.
## Built with

- [Jekyll](https://jekyllrb.com) - website generator
- [Sass](https://sass-lang.com) - stylesheets


# Contributing
## Create a challenge
First, choose wether you want a code based or a simple question an answer.
- For JS questions, put your `.md` file in `/challenges` and use `_data/challenges.yml`
- For non JS questions, put your `.md` file in `/noob_questions` and use `_data/noob.yml`

### Write the question.
Try to follow the template we use in the other file (you're allowed to copy paste other questions and change the content if want).

### Write the answer
In the config file (in the `_data` folder), declare your file and your answer using the small template at the top of the file.

## Do a PR
You can contribute to our code, but here are some rules to follow before doing any PRs:
- Make sure that your code is indented with tabs instead of spaces
- For JavaScript code, use ES7, Babel will compile it to ES5.
- Don't worry about building the site, [Travis Ci](https://travis-ci.org/CrypTools/learn) will do it for you.


## Authors

Made with ❤️ at CrypTools.

See also the list of [contributors](https://github.com/CrypTools/learn/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
