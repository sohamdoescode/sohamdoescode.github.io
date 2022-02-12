let themeToggler = document.getElementById("theme-toggler");

//when clicked
themeToggler.onclick = () => {
     let themeText = document.getElementById("theme-text");
     if (themeText.innerHTML.toLowerCase() === "lights off") {
          themeText.innerHTML = "Lights On";
          document.body.classList.remove("dark");
     } else {
          themeText.innerHTML = "Lights Off";
          document.body.classList.add("dark");
     }
};
