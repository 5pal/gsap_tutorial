import buzz from "buzz";
import gsap from "gsap";
import "./style.css";

let isClicked = false;

const mySound = new buzz.sound("/walwal", {
    formats: ["wav"],
});

const toggleButton = document.createElement("button");
toggleButton.textContent = "왈왈";
document.body.appendChild(toggleButton);

function handleSound() {
    isClicked = !isClicked;
    isClicked
        ? (toggleButton.textContent = "일시정지")
        : (toggleButton.textContent = "왈왈");

    isClicked
        ? mySound
              .play()
              .loop()
              .bind("timeupdate", function () {
                  document.querySelector("#timer").innerHTML = buzz.toTimer(
                      this.getTime(),
                  );
              })
        : mySound.pause();
}

toggleButton.addEventListener("click", handleSound);

const menuItems = document.querySelectorAll("#menu ul li");

menuItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
        gsap.to(item, {
            rotation: 0,
            y: -5,
            duration: 0.3,
        });
    });
    item.addEventListener("mouseleave", () => {
        gsap.to(item, {
            rotation: 0,
            y: 0,
            duration: 0.4,
            repeat: 2,
            yoyo: true,
        });
    });
});
