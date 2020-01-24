1. What problem does the context API help solve?
  Props drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  the store is a source of truth where all state is held, actions are what components are given to start some event such as adding a toDo taking in information from a form, the reducers are what take the data the action gives and changes state 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application state is state that gets held globaly in something like Redux's store. It's good for something like state that is holding an axios' calls response.
  Component state is state that is available only to the component it's held within. This is good for things like a form where onChange needs to constantly update a state. IF you were to use the store for something like this every single keystroke would cause an entire re-render of the application which is obviously very performance heavy.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  It allows us as developers to better fine tune our actions, and often makes debugging a lot easier as it allows you to see exactly where your data was mutated incorrectly or didn't pass through.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
  I might enjoy redux as I get more used to creating reducers, but for now context api is by far the easiest to work with and the most intuitive to me
