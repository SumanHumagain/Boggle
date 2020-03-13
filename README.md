
# A Boggle Game

This is a simple project based on a famous word game Boggle. The front-end is built using React JS
while the back end is powered by Ruby on Rails.


## Built with

- Ruby 2.6.5

- Rails 6.0.2

- Node : v12.14.1 

- npm : 6.13.4 or Yarn

- React JS 16.13.0

  

## Quick Start

You need to have bundler installed in your system.

**Step 1:** You can install it by typing:

```bash
$ gem install bundler
```


**Step 2:** Install all the related package.

```bash
$ bundle install
```


**Step 3:** Install the necessary node packages:

```bash
$ yarn install or 
$ npm install
```


**Step 4:** Run the server:

```bash
$ rails server
```

By default,  the server tries to run on port 3000.
So if you want to run it on a different port:

```
rails s -p <port>
```

Open up your browser and access the app via url `http://localhost:<port>`


## Credits and References

- [Wikipedia Definition](https://en.wikipedia.org/wiki/Boggle)
- [https://boggle-backend.herokuapp.com/rounds/new]


This project uses https://developer.oxforddictionaries.com
api to validate if a word is valid. So even abbreviations will
be accepted as a valid word.
