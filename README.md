## Setting up on a Windows machine

*Note: I don't have much experience running Protractor on Windows, as evidenced by today is the first time I did it, so there might be better ways, but here's what I had to do to run the sample spec in this repo:*

- Install node/npm using the Windows installer here: https://nodejs.org/en/download/

- Clone this repo into the directory of your choice.

- In a command window, go into the repo and run "npm install".

- Run "webdriver-manager update".  NOTE: I had trouble getting the path right here, so I had to run it from the subdirectory it's in, which will be **\<repo dir\>\\node_modules\\.bin**

- Run "webdriver-manager start".

- If this is the first time, you'll probably have to run "npm install grunt", so you can use grunt to run the tests.

- With that running, in a separate command window, go to the repo directory, and run "grunt validateForums", which will load a sample website, fill out and submit a form. (As above, I had to run it from that **\<repo dir\>\\node_modules\\.bin** subdirectory, but you should be able to get that on the PATH.)
