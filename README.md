https://avyrie.github.io/Tamagotchi-Project/
**Week 3 Project: Tamagotchi**

Tamagotchis are digital pets that require care to keep them alive.

**Requirements**

Specifications
- Create a repo for your tomagotchi pet
- Make a commit after you finish each one of the following
- Create a Class (JS Class, look at your notes if your forget) for your tomagotchi 
- Instatiate your Tomagotchi
- Display a character of your choice on the screen to represent your pet
- Display the following metrics for your pet:
    - Hunger (1-10 scale)
    - Sleepiness (1-10 scale)
    - Boredom (1-10 scale)
    - Age
- Add buttons to the screen to feed your pet, turn off the lights, and play with your pet
- Add the ability to name your pet
- Style the page
- Increase your pet's age every x minutes - done
- Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing
- You pet should die if Hunger, Boredom, or Sleepiness hits 10
- Morph your pet at certain ages
- Animate your pet across the screen while it's alive.

Extras
- Have your tomagotchi give birth to baby tomagotchi...
- ...with special powers (extend the class)!
- Add an excercise() method to your tomagotchi, that affects certain properties
- Add anything you can think of... use your imagination!

**Gameplay:**

On the first screen, enter your preferred name for your new virtual pet. Click the "Name Your New Friend" button to name your new pet! 

When you are ready, click the "Begin Life With Your New Best Friend" button to start caring for your new best friend! You will see a trio of random starting metrics for your new pet. Make sure to care for your pet and keep the metrics of "Hunger", "Sleepiness", and "Boredom" below 10 to keep your pet happy and healthy!

**For my project, I have decided to set up the functionality per the following:**

The initial screen shows the "Tamagotchi device" with an egg in the center. There is a text input space above the "Tamagotchi device" for you to enter the name of your digital pet and buttons on the bottom of the "Tamagotchi device" to decriment the values of the digital pet's "Hunger", "Sleepiness", and "Boredom" metrics.

When a name is entered into the text field to the left of the "Name Your New Friend" button and the "Name Your New Friend" button is then clicked, a set of random stats between 1 and 5 will be assigned to the "Hunger", "Sleepiness", and "Boredom" metrics and the inputted name will show on the screen. The metrics of the digital pet will be console.logged along with the message, "Your new friend's name is (chosen name)) :)"

When the "Begin Life With Your New Best Friend" button is clicked, a timer will start and both the name input box and button as well as the "Begin Life With Your New Best Friend" button will disappear to prevent users from clicking them again unnecessarily. 

Every 8 seconds, an alert will appear that the digital pet needs some attention and a random metric will increase by 1. Clicking the "Feed!", "Time For Bed", and "Play!" buttons will decrease the respective metric by 1. Depending on which metric is increased, a message will be console.logged reading, "(Pet's name)'s (metric) level is (metric level)".

Every 20 seconds, the age of the digital pet will increase by 1 and an alert with the message of "Happy Birthday, (tamagotchi's name)! You're (age) years old!" will appear.

Every 100 seconds, the digital pet will morph to the next life-stage.

If any metric reaches 10, an alert will appear reading, "You have let down your precious friend. They have died from neglect." and the digital pet's image will change to that of a ghost. The timer and game will end at this time.

If all metrics stay below 10 and the timer reaches 300 seconds, an alert will appear stating, "It's always hard to say goodbye..." and the digital pet's image will change to that of a ghost. The timer and game will end at this time.

**Animation:**

The egg shown at the beginning will shake when you hover the cursor over it.

The each "evolution" of the digital pet will fade in, replacing the image of the previous. 

All images except the initial egg are publicly available gifs, I did not animate these images.

Clicking the "Play" button will cause the digital pet to bounce the first time it is clicked.

**Choice explaination:**

Speaking on the aesthetic look of the tamagotchi, I wanted to go for a pastel color scheme; something warm and calm and inviting as this is upposed to be a cute game about caring for your pet.

I chose the "life stages" images because they were 1. transparent images. 2. mostly fit together in terms of evolution. and 3. Pre-animated gifs. They posess similar color pallettes and grow in size and complexity with each evolution. Plus, I like cats :) I wanted each image to be a transparent png because I wanted to add a cute background to make them look like they were actually inside of a virtual world.

I chose to randomize the beginning metrics because I figured it was more challenging (and interesting) than beginning from zero. This gives the player more incentive to interact with the pet if the starting metrics are closer to the "end game" metric of 10.

I also chose to randomize which metric was elevated every 8 seconds to keep the user "on their toes" and not knowing which metric would increase. I chose the time interval of 8 so that it would not frequently overlap with the other alerts I have set (birthday, etc). *A sample of these randomizations may be seen below:*

*//Randomizes starting hunger, sleepiness, and boredom values*
*let randomHunger = Math.floor(Math.random() * (5 - 1 + 1)) + 1;*

&

*//Put tamagotchi factors into an array for easy random access*

*let factors = [tamagotchi.hunger, tamagotchi.sleepiness, tamagotchi.boredom ];*

*//every 8 seconds,a prompt will appear and a randomly chosen factor will be increased by 1*

*if (time % 8 === 0) {*

    *let randomFactor = factors[Math.floor(Math.random() * 3)];*

*if (randomFactor === tamagotchi.hunger) {*

    *tamagotchi.hunger = tamagotchi.hunger + 1;*
    *console.log(`${tamagotchi.name}'s hunger level is ${tamagotchi.hunger}`);*
    *hungerCount.textContent = tamagotchi.hunger;*

**Approach**

I decided to begin the construction of this game with the Javascript, choosing to focus first on functionality before tackling aesthetic. This served me well as I was able to complete most of the functionality the first day and focus on mostly the aesthetic look of the device and characters in the subsequent days. I am not as familiar with CSS as I am JS and wanted to make sure my game worked to my satisfaction first so that I would have time to familiarize myself with various CSS properties I was shakier on.

**Difficulties**

Getting the CSS to where I was satisfied with the appearance of the game was definitely my biggest challenge.

Animating the images was also a struggle of mine. I managed to animate the life-stage evolution transitions to fade in when the timer hit a certain number of seconds, but did not end up being able to fade out the previous life-stage image.

I was able to animate the image of the digital pet so that it would bounce when the play button was clicked.

**Wishful Thinking**

Although I am proud of the product I have completed, I would have liked to include a few more aspects.

1. A slow fade-out of the life-stages instead of just a fade in of the next life-stage.
2. More animation, especially when it comes to the interactive metric buttons.
3. A selection of items to feed to the digital pet that would decrease the hunger level by a value of 1-3 depending on what was being fed.
4. A fully customized character instead of publicly available images that would change facial expressions or actions in response to interaction or metric level.
5. Thin borders around each section of the "tamagotchi device" to give more screen separation.
6. When the pet dies, to have the ghost-form of the pet animate up and out of sight in the screen followed by the background being replaced by a video.
7. The user has a choice between 1 of 3 different-colored eggs to start with which will yield different characters and life stages.

**Wire Frame**
<img src="./assets/20200626_094836.jpg"/>
<a href='https://www.freepik.com/vectors/background'>Background vector created by upklyak - www.freepik.com</a>
<img src="./assets/20200626_094851.jpg"/>
