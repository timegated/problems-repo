// think of the interaction with chatgpt as an iterative cycle.
function Topic (topic, prompt, response) {
  this.topic = topic;
  this.prompt = prompt;
  this.response = response;
  this.getTopic = function getTopic () {
    return this.topic;
  }
}

const topic = new Topic('Math', 'lol', 'using a function constructor factory guy');

// With the topic constructor we can create objects that contain the properties we want whenever a user finishes a prompt/response cycle.
// When the cycle completes the factory function is called and the object is saved. We may need a pointer here to connect like/related topics.
// Create the Topic Node automatically whenever the user interacts with the create response button

