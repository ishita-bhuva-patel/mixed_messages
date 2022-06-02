const addDot = () => {
    const dotCss = {
        "background-color": "black",
        width: "50%",
        height: "50%",
        "border-radius": "50%",
    };
    for (let i = 0; i < 9; i++) {
        $("#mm-die1").append($(`<span id="${i}"></span>`).css(dotCss));
        $("#mm-die2").append($(`<span id="${i}"></span>`).css(dotCss));
        $("#mm-die3").append($(`<span id="${i}"></span>`).css(dotCss));
    }
};

const dice = () => {
    const dotVisibility = [
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 0, 1],
    ];
    let d1 = Math.floor(Math.random() * 6);
    let d2 = Math.floor(Math.random() * 6);
    let d3 = Math.floor(Math.random() * 6);
    for (let i = 0; i < 9; i++) {
        $("#mm-die1").children()[i].style.visibility = dotVisibility[d1][i]
            ? "visible"
            : "hidden";
        $("#mm-die2").children()[i].style.visibility = dotVisibility[d2][i]
            ? "visible"
            : "hidden";
        $("#mm-die3").children()[i].style.visibility = dotVisibility[d3][i]
            ? "visible"
            : "hidden";
    }
};

$(document).ready(() => {
    addDot();
    dice();
    $("#mm-dice-roll").click(dice);
});
