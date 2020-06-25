# ally-tamagotchi
Week 3 Project: Tamagotchi
Tamagotchis are digital pets that require care to keep them alive.

For my project, I have decided to set up the functionality per the following:

The initial screen shows the "Tamagotchi device" with an egg in the center. There is a text input space above the "Tamagotchi device" for you to enter the name of your digital pet, buttons on the bottom of the "Tamagotchi device" to decriment the values of the digital pet's "Hunger", "Sleepiness", and "Boredom" metrics.

When a name is entered into the text field to the left of the "Name Your New Friend" button and the "Name Your New Friend" button is then clicked, a set of radom stats between 1 and 5 will be assigned to the "Hunger", "Sleepiness", and "Boredom" metrics and the inputted name will show on the screen. The metrics of the digital pet will be console.logged along with the message, "Your new friend's name is (chosen name)) :)"

When the "Begin Life With Your New Best Friend" button is clicked, a timer will start. Every 10 seconds, an alert will appear that the digital pet needs some attention and a random metric will increase by 1. Clicking the "Feed!", "Time For Bed", and "Play!" buttons will decrease the respective metric by 1. Depending on which metric is increased, a message will be console.logged reading, "(Pet's name)'s (metric) level is (metric level)".

Every 30 seconds, the age of the digital pet will increase by 1 and a message of "Happy Birthday, (tamagotchi's name)! You're (age) years old!" will be console.logged.

If any metric reaches 10, an alert will appear reading, "You have let down your precious friend. They have died from neglect." and the digital pet's image will change to that of a ghost. The timer and game will end at this time.

If all metrics stay below 10 and the timer reaches 900 seconds, an alert will appear stating, "It's always hard to say goodbye..." and the digital pet's image will change to that of a ghost. The timer and game will end at this time.

Animation:

The egg shown at the beginning will shake when you hover the cursor over it.

The "first evolution" of the digital pet will fade in, replacing the image of the egg with that of a small black blob. That blob will evolve to a small, cute black cat at 300 seconds and to a bigger black cat at 600 seconds.