# your-final-grade

[Try it now!](https://jcharante.com/your-final-grade)

![qr-code-200](https://user-images.githubusercontent.com/13973198/66542565-eb329980-eb00-11e9-9984-0c6c51c5b9f6.png)

For the final project of [CS 4241 at WPI](https://cs4241-19a.github.io/), our group developed the ultimate final grade calculator. As a user, you can add your class grades and grading policy in it and it will tell you your current grade as well as the highest/lowest grades. The system supports several different grading policies such as dropping, extra credit, top worth more, etc. It will store individual information for every user who uses it. Users also have the option to use it offline only or synchronize online. Available in English和中文。

## Source Code

This repository only contains the build files from the website to take advantage of Github Pages static site hosting. Please look in the linked repositories for source code:

- [View the Website's repository](https://github.com/JCharante/your-final-grade-spa)
- [View the calculator's repository](https://github.com/JCharante/your-final-grade-calculator)
- [View the api server's repository](https://github.com/JCharante/your-final-grade-calculator)

- [Read the Proposal](https://github.com/yangjack1998/fp/blob/master/Proposal.md)
- [Read the submitted README](https://github.com/yangjack1998/fp/tree/master)

## Technologies
There are three main components to our project. There is the calculator package, which is published on NPM as your-final-grade-calculator-public. This has no third party dependencies. Then there is the api service, which is a function that is made available by a local express server but is also invoked by sending an HTTP to its endpoint on Google Cloud Platform. The API service facilitates all communication with MongoDB. Then there is the client, which is a Single Page Application developed with Quasar Framework, which enables you to use Vue.js and its pre-configured build system and Material Design components.


## The Team
**Yicheng Yang** <yyang17@wpi.edu>

**James J. Scherick** <jjscherick@wpi.edu>

**Jean Claude Zarate** <jzarate@wpi.edu>

## Challenges 
Basically, there are too many different grading policies. It is complicated to figure out the algorithm for each one and how to implement all of them at the same time. 

## Members' responsibility
**Jean Claude Zarate:** Helped coordinate the team and plan out objectives, did extensive work on the website, developed API server, liaison between the team that used the calculator and the team working on the calculator. Worked on collecting syllabuses and reading them to discover what features the calculator algorithm needed to support.

**Yicheng Yang:** Contributed to the algorithm of the calculating system. Did the translation for the Chinese version of the website. Helped to write an explanation of each field that user need to fill.

**James J. Scherick:** Critical contributor on the team developing the calculator algorithm.
