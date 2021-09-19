//add winbox for about,contact and projects

const about = document.querySelector("#about");
const aboutContent = document.querySelector(".about-content");
const contact = document.querySelector("#contact");
const contactContent = document.querySelector(".contact-content");
const projects = document.querySelector("#projects");
const projectsContent = document.querySelector(".projects-content");
const terminalTab = document.querySelector("#terminal");
const themeTab = document.querySelector(".theme-tab");

about.addEventListener("click", () => {
  new WinBox({
    title: "About Me",
    mount: aboutContent,
    x: "900",
    y: "210",
    width: "600px",
    height: "380px",
    top: 60,
    onfocus: function () {
      this.setBackground("#400969");
    },
    onblur: function () {
      this.setBackground("#200336");
    },
  });
});

contact.addEventListener("click", () => {
  new WinBox({
    title: "Contact",
    mount: contactContent,
    x: "950",
    y: "300",
    width: "600px",
    height: "380px",
    top: 60,
    onfocus: function () {
      this.setBackground("#400969");
    },
    onblur: function () {
      this.setBackground("#200336");
    },
  });
});

projects.addEventListener("click", () => {
  new WinBox({
    title: "Projects",
    mount: projectsContent,
    modal: true,
    x: "center",
    y: "center",
    width: "50%",
    height: "480px",
    top: 60,
    onfocus: function () {
      this.setBackground("#400969");
    },
    onblur: function () {
      this.setBackground("#200336");
    },
  });
});

//typewriter effect
const typewriterArea = document.querySelector("#typewriter-area");

const typewriter = new Typewriter(typewriterArea, {
  loop: false,
  delay: 140,
  autoStart: true,
  cursor: "█",
  strings: ["Salam Alaykum! I'm Reza Naqvi"],
});

typewriter
  .deleteAll(1)
  .pauseFor(370)
  .deleteAll(1)
  .pauseFor(12000)
  .typeString("WOW! You still here")
  .pauseFor(500)
  .deleteAll(1);

about.addEventListener("click", () => {
  const typewriterAbout = new Typewriter(typewriterArea, {
    loop: false,
    delay: 10,
    autoStart: true,
    cursor: "█",
    strings: ["open about"],
  });
  setTimeout(() => {
    typewriterAbout.pauseFor(400).deleteAll(1);
  }, 550);
});

contact.addEventListener("click", () => {
  const typewriterContact = new Typewriter(typewriterArea, {
    loop: false,
    delay: 10,
    autoStart: true,
    cursor: "█",
    strings: ["open contact"],
  });
  setTimeout(() => {
    typewriterContact.pauseFor(400).deleteAll(1);
  }, 550);
});

projects.addEventListener("click", () => {
  const typewriterProjects = new Typewriter(typewriterArea, {
    loop: false,
    delay: 10,
    autoStart: true,
    cursor: "█",
    strings: ["open projects"],
  });
  setTimeout(() => {
    typewriterProjects.pauseFor(400).deleteAll(1);
  }, 650);
});

terminalTab.addEventListener("click", () => {
  const typewriterTerminal = new Typewriter(typewriterArea, {
    loop: false,
    delay: 10,
    autoStart: true,
    cursor: "█",
    strings: ["open terminal"],
  });
  setTimeout(() => {
    typewriterTerminal.pauseFor(400).deleteAll(1);
  }, 250);
});

// switching active-tab class based on user click

const header = document.querySelector(".header");
const navBar = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-item");

//iterate on every nav item and add click event on them
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    //don't remove active tab from previous tab and add active tab class
    //to the current tab if it's theme-tab
    //(we can remove if check if we also want to add active-tab logic on theme-tab)
    if (!navItem.classList.contains("theme-tab")) {
      //iterate on nav items and remove active-tab class from a nav item
      //which contains active tab class i.e "previous active-tab"
      for (let i = 0; i < navItems.length; i++) {
        if (navItems[i].classList.contains("active-tab")) {
          navItems[i].classList.remove("active-tab");
          break;
        }
      }
      //add active-tab class to the nav item which triggered the event
      navItem.classList.add("active-tab");
    }
  });
});

// tooltip for change theme tab

tippy(themeTab, {
  content: "Change Theme",
  followCursor: true,
  inertia: true,
});
