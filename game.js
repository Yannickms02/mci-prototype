/*eslint-env es6*/
/*
let i = 0;
let txt = 'You are a skilled hacker and information broker living in the sprawling megacity of Neo-Tokyo. Your day-to-day life is filled with danger and intrigue as you navigate the complex web of corporate espionage and political intrigue that defines the city.'; 
let prompt1 = "One day, you are approached by a mysterious client who offers you a job that could change everything. They want you to infiltrate the secure network of a powerful corporation and steal sensitive data that could bring them down. The pay is high, but the risks are even higher - if you're caught, you'll face the full wrath of the corporation and its allies."
const prompt1_continuation = "You weigh the risks and rewards of this job carefully. You've hacked into corporate networks before, but this would be a big score. On the other hand, getting caught would mean more than just getting thrown in jail - it could mean being disappeared entirely. What do you do?";
let speed = 55; 
*/
const prompt = document.getElementById("prompt")
const startButton = document.getElementById("start");
const contButton = document.getElementById("continue");
const backButton = document.getElementById("back");
const option1Button = document.getElementById("option-1");
const option2Button = document.getElementById("option-2");
const option3Button = document.getElementById("option-3");
let speed = 55; // default animation speed value (delay in ms)

function updateValue(value) {
  var speedtext = document.getElementById("speedvalue");
  speedtext.textContent = value;
	speed = 100-value; // inverted speed value
  // Führen Sie eine JavaScript-Aktion im Hintergrund aus, wenn sich der Wert ändert
  // TODO: Fügen Sie hier Ihre Aktion ein
}


const prompts = [{
    text: "Welcome to this adventure set in the futuristic city of neo-tokyo in 2122.",
    buttons: [{
      text: "Start Journey",
      next: 1,
    }, ],
  },
  {
    text: "You are a skilled hacker and information broker living in the sprawling megacity of Neo-Tokyo. Your day-to-day life is filled with danger and intrigue as you navigate the complex web of corporate espionage and political intrigue that defines the city.",
    buttons: [{
      text: "Continue",
      next: 2,
    }, ],
  },
  {
    text: "One day, you are approached by a mysterious client who offers you a job that could change everything. They want you to infiltrate the secure network of a powerful corporation and steal sensitive data that could bring them down. The pay is high, but the risks are even higher - if you're caught, you'll face the full wrath of the corporation and its allies.",
    buttons: [{
      text: "Continue",
      next: 3,
    }, ],
  },
  {
    text: "You weigh the risks and rewards of this job carefully. You've hacked into corporate networks before, but this would be a big score. On the other hand, getting caught would mean more than just getting thrown in jail - it could mean being disappeared entirely. What do you do?",
    buttons: [{
        text: "Take the job",
        next: 4,
      },
      {
        text: "Reject offer",
        next: 5,
      },
    ],
  },
	{
		// Index 4
		text: "As you consider the job offer, you know that it won't be easy. You'll need to gather information about the corporation and its security measures, and you'll need to acquire the necessary resources to break into their network. You'll also need to build a team of allies who can help you evade detection and overcome the corporation's defenses.",
		buttons: [
			{
				text: "Continue",
				next: 6,
			},
		],
	},
				 {
					 // Index 5 -- Reject offer
					 text: "You consider the job offer, but ultimately you decide that it's too risky. You don't want to get involved in a job that could bring down the wrath of a powerful corporation on your head. Instead, you decide to try to lay low until the heat dies down.",
					 buttons: [
						 {
							 text: "Continue",
							 next: 7,
						 },
					 ],
				 },
				 {
					 // Index 6 -- Take job - part_2
					 text: "If you accept the job, you start by making contact with potential allies. You reach out to your hacker contacts, and you also do some reconnaissance work to find out who might be willing to help you. After a few days of searching, you manage to put together a team of skilled hackers and infiltrators who are willing to work with you.",
					 buttons: [
						 {
							 text: "Continue", 
							 next: 8,
						 },
					 ],
				 },
				 {
					 // Index 7 -- Reject offer - part_2
					 text: "You know that won't be easy - the shadows of Neo-Tokyo are filled with danger, and you're always looking over your shoulder. You try to avoid your usual haunts and contacts, and you do your best to keep a low profile. But even so, you can feel the eyes of the city watching you, waiting for you to slip up.",
					 buttons: [
						 {
							 text: "Continue",
							 next: 9,
						 },
					 ],
				 },
				 {
					 // Index 8 -- Take job - part_3
					 text: "With your team in place, you begin to plan the heist. You gather as much information as you can about the corporation's security measures, and you start to develop a strategy for breaking into their network. You also start to acquire the necessary resources - software, hardware, and other tools - that you'll need to carry out the job.",
					 buttons: [
						 {
							 text: "Continue",
							 next: 10,
						 },
					 ],
				 },
				 {
					 // Index 9 -- Reject offer - part_3
					 text: "You start to wonder if maybe you're already in too deep, whether you take the job or not. You start to feel paranoid, constantly looking over your shoulder, wondering if someone is watching you. And then, theres the imminent thought that keeps crawling back to you: why did the client approach you specifically? Who are they working for? ",
					 buttons: [
						 {
							 text: "Continue",
							 next: 11,
						 },
					 ],
				 },
				 {
					 // Index 10 -- Take job - part_4
					 text: "You spend the next few days planning your attack. You study the target network's security protocols and devise a plan to bypass them. You scope out the building and the surrounding area, looking for the best way in. Finally, you're ready. You slip into the building undetected and start your hack. The security is tight, but you're good. You make your way to the data center and start downloading the sensitive information. Just as you're about to finish, you hear footsteps behind you. You turn around and see a group of armed guards, led by a figure in a suit. "+'"'+"You've made a big mistake,"+'"'+" he says, leveling his gun at you.",
					 buttons: [
						 {
							 text: "Fight your way out",
							 next: 12,
						 },
						 {
							 text: "Surrender",
							 next: 13,
						 },
					 ],
				 },
				 {
					 // Index 11 -- Reject offer - part_4
					 text: "Despite your best efforts, you find yourself drawn back into the fray. One day, you stumble upon a piece of information that could be valuable to the right people. You're hesitant to get involved, but you know that the information could be worth a lot of money. You try to sell it to some of your contacts, but they're not interested. That's when you realize that the information must be more valuable than you thought.",
					 buttons: [
						 {
							 text: "Continue",
							 next: 14,
						 },
					 ],
				 },
				 {
					 // Index 12 -- Take job -> Fight
					 text: "You're not one to go down without a fight. You reach for your own weapon and start firing. The guards return fire, but you manage to take a few of them down. You make a break for it, sprinting towards the exit. You can hear the sound of alarms ringing out behind you, but you keep running. You finally burst through the front doors and into the street. You can see a hovercar waiting for you, but it's a long way off. The guards are catching up, and you know you won't make it to the car in time. You have one last chance to escape - a nearby air duct that leads to the roof. Do you take the risk?",
					 buttons: [
						 {
							 text: "Of course!",
							 next: 15,
						 },
						 {
							 text: "Play it safe ...",
							 next: 16,
						 }
					 ],
				 },
				 {
					 // Index 13 -- Take job -> Surrender
					 text: "You know that you're outmatched. You drop your weapon and put your hands up. The guards move in and grab you, dragging you out of the building. You're thrown into a van and driven to an unknown location. When you arrive, you're taken to an interrogation room and strapped to a chair. You can hear the sound of a drill whirring to life.",
					 buttons: [
					 ],
				 },
				 {
					 // Index 14 -- Reject offer - part_5
					 text: "You start to investigate further, and you soon realize that the information could be the key to a major heist. You start to consider the possibilities - the risks, the rewards, the potential fallout. In the end, you'll need to make a choice: do you play it safe and stay out of the game, or do you take the risk and try to make a name for yourself in the shadowy world of Neo-Tokyo?",
					 buttons: [
						 
					 ],
				 },
				 {
					 // Index 15 -- Take job -> Fight -> Take risk
					 text: "You take the risk and climb into the air duct. It's cramped and dark, and you can hear the guards shouting behind you. You crawl as fast as you can, scraping your knees on the rough metal. You finally emerge on the roof, gasping for breath. You can see the hovercar waiting for you, but it's surrounded by guards. You'll have to take them out if you want to escape.",
					 buttons: [
						 {
							 text: "Take out guards",
							 next: 17,
						 },
						 {
							 text: "Flee",
							 next: 18,
						 },
					 ],
				 },
				 {
					 // Index 16 -- Take job -> Fight -> No risk taken
					 text: "You endure the torture for as long as you can, but eventually, you break. You reveal everything you know about the client, the corporation, and the job. The interrogators are satisfied, and they let you go. But your life will never be the same - you're marked as a traitor and a liability. You'll have to keep a low profile for a long time, always looking over your shoulder. You may have survived this time, but you know that the dangers of the cyberpunk world are never far away.",
					 buttons: [
						 
					 ],
				 },
				 {
					 // Index 17 -- Take job -> Fight -> Take risk -> Take out guards
					 text: "You take a deep breath and charge towards the guards, firing your weapon at them. They're caught off guard by your sudden attack, and you manage to take out a few before they can even react. They return fire, but you're able to dodge and weave your way towards the hovercar. You finally reach it, and you jump in the driver's seat. The guards are still firing at you, but you're able to activate the car's shields just in time. The hovercar takes off, soaring into the air. You're not out of danger yet - the corporation will be after you for a long time - but you've completed the job and made a clean getaway.",
					 buttons: [
						 
					 ],
				 },
				 {
					 // Index 18 -- Take job -> Fight -> Take risk -> Flee
					 text: "You take one look at the guards and decide that it's not worth the risk. You turn around and sprint back towards the air duct. You can hear the guards shouting behind you, but you're too fast for them. You crawl back through the duct and drop down onto the ground floor. You sprint towards the exit, dodging security cameras and guards as you go. You finally burst through the front doors and into the street. You can see the hovercar waiting for you, but it's a long way off. You start running towards it, but you know that the guards are right behind you. You can hear the sound of their boots pounding on the pavement.",
					 buttons: [
						 
					 ],
				 },
]


let currentPrompt = 0;
let prevPrompt = null;

function displayPrompt(promptIndex) {
  // update prevPrompt to the current prompt index
  prevPrompt = currentPrompt;

  // update currentPrompt to the new prompt index
  currentPrompt = promptIndex;
	if (currentPrompt == 0) {
		backButton.style.visibility = "hidden";
	}
  if (currentPrompt == 1) {
    startButton.style.display = "none";
  }
  if (prompts[prevPrompt].buttons[0].text == "Continue") {
    contButton.style.display = "none";
  }


  // display the text for the current prompt
  //prompt.textContent = prompts[currentPrompt].text;
  let i = 0;
  let text = prompts[currentPrompt].text;

  function typeWriter() {
    if (i == 0) {
      prompt.textContent = "root@kali:~# ";
    }
    if (i < text.length) {
      prompt.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else if (prompts[currentPrompt].buttons[0].text == "Continue") {
      contButton.style.display = "block";
    } else {
      if (currentPrompt == 0) {
        startButton.style.display = "block";
      } else {
        startButton.style.display = "none";
      }
      contButton.style.display = "none";
      // display the buttons for the current prompt
      const buttons = prompts[currentPrompt].buttons;
      option1Button.style.display = buttons.length > 0 && buttons[0].text != "Continue" && buttons[0].text != "Start Journey" ? "block" : "none";
      option2Button.style.display = buttons.length > 1 ? "block" : "none";
      option3Button.style.display = buttons.length > 2 ? "block" : "none";
      option1Button.textContent = buttons.length > 0 && buttons[0].text != "Continue" && buttons[0].text != "Start Journey" ? buttons[0].text : "";
      option2Button.textContent = buttons.length > 1 ? buttons[1].text : "";
      option3Button.textContent = buttons.length > 2 ? buttons[2].text : "";
    }
  }
  typeWriter();


}

function displayPrevPrompt() {
  if (prevPrompt !== null) {
    displayPrompt(prevPrompt);
  }
}

// add event listeners for buttons
startButton.addEventListener("click", () => {
  displayPrompt(1);
	backButton.style.visibility = "visible";
});

contButton.addEventListener("click", () => {
  const nextPrompt = prompts[currentPrompt].buttons[0].next;
  displayPrompt(nextPrompt);
});

backButton.addEventListener("click", displayPrevPrompt);

option1Button.addEventListener("click", () => {
  const nextPrompt = prompts[currentPrompt].buttons[0].next;
  displayPrompt(nextPrompt);
	option1Button.style.display = "none";
	option2Button.style.display = "none";
});

option2Button.addEventListener("click", () => {
  const nextPrompt = prompts[currentPrompt].buttons[1].next;
  displayPrompt(nextPrompt);
	option1Button.style.display = "none";
	option2Button.style.display = "none";
});

option3Button.addEventListener("click", () => {
  const nextPrompt = prompts[currentPrompt].buttons[2].next;
  displayPrompt(nextPrompt);
});

// display the first prompt on page load
displayPrompt(0);


/*
// introduction to story
startButton.addEventListener("click", function typeWriter() {
  if (i < txt.length) {
    prompt.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    contButton.style.display = "block";
    i = 0;
  }
  startButton.style.display = "none";
})

// first prompt
let run = true;
contButton.addEventListener("click", function typeWriter() {
  if (i == 0) {
    prompt.innerHTML += "<br><br>";
  }
  if (i < prompt1.length) {
    prompt.innerHTML += prompt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } 
  if (i == prompt1.length && run) {
    i = 0;
    prompt1 = prompt1_continuation;
    run = false;
    setTimeout(typeWriter, 2000);
  }
  else if (!run && i == prompt1.length) {
    option_1_button.style.display = "block";
    option_1_button.innerHTML = "Take the job";
    option_2_button.style.display = "block";
    option_2_button.innerHTML = "Reject offer";
  }
  contButton.style.display = "none";
})

//-- Option 1 -- take the job
*/
