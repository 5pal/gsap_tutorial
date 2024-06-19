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
    gsap.to(item, {
        rotation: 0,
        x: 10 * (index + 1),
        duration: 1,
        repeat: -1,
        yoyo: true,
    });
});
