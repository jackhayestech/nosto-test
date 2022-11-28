## Nosto Burger Hut

Nosto is looking to build a digital burger hut, and it needs your help.

We've created a system where people can buy burgers on the fly, from their mobile devices or on their computers.

When a user orders a burger, the user is offered an option to post this content to all their social media channels including 
- Twitter
- Instagram
- Facebook

1) The users say their picture successfully posts on Twitter & Facebook, but fails when it comes to Instagram. 
2) When 300 people order a burger at the same time, our users complain about load speed when they place an order.
3) A software engineer learnt that their friend's password on our platform was bob1234 when they accessed their friend's computer.

Things are rather messy... and we need recommendations on how to fix our system.

**As a "hired" software engineer, there are a few things you will need to consider:**
1) You will need to understand the scope of work provided
2) Fix as many issues as you can identify, or offer us technical alternatives that will improve our platform.
3) We recommend at most 1 hour, we don't want you to spend too much time on this task. Feel free to spend as much as you wish though, we wont stop you :) 
4) Feel free to add libraries as required.
5) Have fun!

## Getting Started
### Please check the routes created by us.

The **index** route is redundant, and will point you back to this file.

The **/order** route is where orders are processed, at the moment it only accepts post request with no data.

The **/user** route is where the current user can be retrieved. This is just mock data.

These routes are necessary for you to complete the task, and align well with the scenario provided.

----

Please do not touch the no_touching folder; you will not be assessed for any changes in here. You are welcome to view it, or debug it if you wish, but no edits will be assessed.

You will be assessed based on how well you deal with the given scenario, and how well you fix the issues.
The test is quite abstract, so when creating different methods to emulate different functions please name them appropriately so we know what its supposed to do.

For example, I've created a method called `simulateSlowEmailRequest()` to simulate a slow email request.

You will not be expected to initiate a connection to the database, or other infrastructure etc, please keep it abstract. This ensures you are not spending too much time on our exams (we know you have other interviews to do!!).

In some instances there is logic involved, please update the code to implement better logic. In other instances, you will need to make assumptions and offer technical alternatives.

For the moment, this test is fully back-end. But if you'd like to show off your skills feel free to create a simple UI for us. A nice touch, not necessary to pass the test though :)

----

Any other improvements you can think of will make a great display of your skills.

Once you're done, please write a summary of the changes you have made, zip them up in a folder and send them over to the recruiter.

### The tools we have provided
- Express
- EsBuild


### How to start the server
- Use nvm to install and use the node version specified in the .nvmmrc file using `nvm use` command
- npm install
- npm run start
