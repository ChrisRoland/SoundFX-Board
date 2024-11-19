const sounds = [
    { label: "applause 👏", id: "applause" },
    { label: "boo 👎", id: "boo" },
    { label: "gasp 😱", id: "gasp" },
    { label: "tada 🥳", id: "tada" },
    { label: "victory 🎉", id: "victory" },
    { label: "wrong 🙅", id: "wrong" },
];

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound.label;

    btn.addEventListener("click", () => {
        stopSounds();

        document.getElementById(sound.id).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopSounds() {
    sounds.forEach(sound => {
        const sfx = document.getElementById(sound.id);

        sfx.pause();
        sfx.currentTime = 0;
    });
}