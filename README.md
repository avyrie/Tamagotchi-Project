# ally-tamagotchi
**Week 3 Project: Tamagotchi**

Tamagotchis are digital pets that require care to keep them alive.

**Gameplay:**

On the first screen, enter your preferred name for your new virtual pet. Click the "Name Your New Friend" button to name your new pet! You will see a trio of random starting metrics for your new pet. 

When you are ready, click the "Begin Life With Your New Best Friend" button to start caring for your new best friend! Make sure to care for your pet and keep the metrics of "Hunger", "Sleepiness", and "Boredom" below 10 to keep your pet happy and healthy!

**For my project, I have decided to set up the functionality per the following:**

The initial screen shows the "Tamagotchi device" with an egg in the center. There is a text input space above the "Tamagotchi device" for you to enter the name of your digital pet and buttons on the bottom of the "Tamagotchi device" to decriment the values of the digital pet's "Hunger", "Sleepiness", and "Boredom" metrics.

When a name is entered into the text field to the left of the "Name Your New Friend" button and the "Name Your New Friend" button is then clicked, a set of random stats between 1 and 5 will be assigned to the "Hunger", "Sleepiness", and "Boredom" metrics and the inputted name will show on the screen. The metrics of the digital pet will be console.logged along with the message, "Your new friend's name is (chosen name)) :)"

When the "Begin Life With Your New Best Friend" button is clicked, a timer will start and both the name input box and button as well as the "Begin Life With Your New Best Friend" button will disappear to prevent users from clicking them again unnecessarily. 

Every 8 seconds, an alert will appear that the digital pet needs some attention and a random metric will increase by 1. Clicking the "Feed!", "Time For Bed", and "Play!" buttons will decrease the respective metric by 1. Depending on which metric is increased, a message will be console.logged reading, "(Pet's name)'s (metric) level is (metric level)".

Every 20 seconds, the age of the digital pet will increase by 1 and an alert with the message of "Happy Birthday, (tamagotchi's name)! You're (age) years old!" will appear.

If any metric reaches 10, an alert will appear reading, "You have let down your precious friend. They have died from neglect." and the digital pet's image will change to that of a ghost. The timer and game will end at this time.

If all metrics stay below 10 and the timer reaches 300 seconds, an alert will appear stating, "It's always hard to say goodbye..." and the digital pet's image will change to that of a ghost. The timer and game will end at this time.

**Animation:**

The egg shown at the beginning will shake when you hover the cursor over it.

The each "evolution" of the digital pet will fade in, replacing the image of the previous. 

Clicking the "Play" button will cause the digital pet to bounce the first time it is clicked.

**Choice explaination:**

Speaking on the aesthetic look of the tamagotchi, I wanted to go for a pastel color scheme; something warm and calm and inviting as this is upposed to be a cute game about caring for your pet.

I chose the "life stages" images because they were 1. transparent images and 2. mostly fit together in terms of evolution. They posess similar color pallettes and grow in size and complexity with each evolution. Plus, I like cats :) I wanted each image to be a transparent png because I wanted to add a cute background to make them look like they were actually inside of a virtual world.

I chose to randomize the beginning metrics because I figured it was more challenging (and interesting) than beginning from zero. This gives the player more incentive to interact with the pet if the starting metrics are closer to the "end game" metric of 10.

I also chose to randomize which metric was elevated every 8 seconds to keep the user "on their toes" and not knowing which metric would increase. A sample of this randomization may be seen below:

![](/Users/folder-of-secrets/Desktop/SEI/projects/tamagotchi/ally-tamagotchi/assets/Screen Shot 2020-06-25 at 10.54.19 PM copy.png)

&

//Put tamagotchi factors into an array for easy random access
            let factors = [tamagotchi.hunger, tamagotchi.sleepiness, tamagotchi.boredom ];
            //every 8 seconds,a prompt will appear and a randomly chosen factor will be increased by 1
            if (time % 8 === 0) {

                let randomFactor = factors[Math.floor(Math.random() * 3)];

                if (randomFactor === tamagotchi.hunger) {

                        tamagotchi.hunger = tamagotchi.hunger + 1;
                        console.log(`${tamagotchi.name}'s hunger level is ${tamagotchi.hunger}`);
                        hungerCount.textContent = tamagotchi.hunger;

