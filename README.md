# WoW Comparator Client

Examples characters to compare. First name is the Character's name, the second is the name of the Realm. 
All characters are in the EU region.

You can visit the website at https://wow-comparator.com

**Extremus - Tyrande**

**Paralilubiti - Tyrande**

**Bélsel - Tyrande**

**Randorx - Tyrande**

**Metapelo - Tyrande**

**Jinnara - Tyrande**

**Sixties - Tyrande**

**Gabrantthh - Tyrande**

# Made using Vue.js 2

https://vuejs.org/

Vue.js is a progressive JavaScript front-end framework made by former Google engineer Evan You. The reason why I chose to build WoW Comparator with Vue was because of my little previous experience with Vue and I wanted to learn a new JS framework. Vue's simplicity, syntax, and rising popularity were also contributing factors.

### __Vuex__
When I created the route for the comparator view, I began to fetch the player's character data and display it onto the view. I started working on the Vuex Store as soon as possible, knowing that with a few more requests would be overwhelming for me to handle. The Vuex documentation was easy to follow and in the same day I got the hang of it.

The documentation I followed: https://vuex.vuejs.org/guide/

### The Syntax

Vue.js is always been describe as the combination of Angular and React.js. Angular for its similar syntax and React for its simplicity and almost similar project structure.

For me, it has been easier to follow Vue's syntax than React's, in terms of learning it and debugging than JSX. I find it easier to look at something that resembles more like HTML than see a combination of JS and HTML.

A loop in JSX
```jsx
<ul>
  { this.props.obj.map((item, index) (
    <li key="index">{item.name}</li>
  )) }
</ul>
``` 

Same loop in Vue
```html
<ul>
  <li v-for="(item, index) in obj" :key="index">
    {{ item.name }}
  </li>
</ul>
```

I also knew that, when I have to go back to React again in the future, I wouldn't be so lost because of the similarities Vue has to React.

### Rising Popularity

Although not as popular as React, Vue is getting more momentum and it has become a well-known framework by now. However, the community is still very small and you got to have luck on your side if you wanna know the solution of any of your Vue problems. While developing WoW Comparator, I had to ask about best way to organize my Vuex store, alternative image if any errors ocurr, and how to refactor a lot of my code.

Although the community is small, lately, finding questions about Vue or asking them has become a lot easier now. The community, though small, is active and incredible helpful. 

https://medium.freecodecamp.org/i-just-asked-23-000-developers-what-they-think-of-javascript-heres-what-i-learned-9a06b61998fa

## Styling

All styling was done using Sass

## Responsiveness

The website works with devices as small as 768px for now.




