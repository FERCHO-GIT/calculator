window.onload = () => {
    var btns = ["btn-zero", "btn-one", "btn-two", "btn-three",
                "btn-four", "btn-five", "btn-six", "btn-seven",
                "btn-eight", "btn-nine", "btn-plus", "btn-minus",
                "btn-product", "btn-division", "btn-equal",
                "btn-dot", "btn-erase"],
        result = "",
        flag = false;

    for (let i = 0; i < btns.length; i++ ) {
        pressed(btns[i]);
    }

    function pressed(btnId) {
        let btnPressed = document.getElementById(btnId);
        btnPressed.addEventListener("click", () => {
            let display = document.getElementById("display");

            if (btnPressed.innerHTML == "C") {
                if (display.value.length > 0) {
                    display.style.color = "#464866";
                    display.value = "";
                    result = "";
                    flag = false;
                }
            } else if (btnPressed.innerHTML == "=") {
                if (display.value.length > 0 && result.match(/\d$/)) {
                    display.value = eval(result);

                    if (display.value == "NaN" || display.value == "Infinity") {
                        display.value = "Error";
                        display.style.color = "#ac3b61";
                        flag = true;
                    }
                }
            } else {
                if (!flag) {
                    switch (btnPressed.innerHTML) {
                        case "÷":
                            if (display.value.match(/\d$/)) {
                                display.value += btnPressed.innerHTML;
                                result += btnPressed.innerHTML.replace("÷", "/");
                            }
                            break;
                        case "x":
                            if (display.value.match(/\d$/)) {
                                display.value += btnPressed.innerHTML;
                                result += btnPressed.innerHTML.replace("x", "*");
                            }
                            break;
                        case "+":
                            if (display.value.match(/\d$/)) {
                                display.value += btnPressed.innerHTML;
                                result += btnPressed.innerHTML;
                            }
                            break;
                        case "-":
                            if (!display.value.match(/[-]{1}|\.$/)) {
                                display.value += btnPressed.innerHTML;
                                result += btnPressed.innerHTML;
                            }
                            break;
                        case ".":
                            if (!display.value.match(/(\.|\.\d+)$/)) {
                                display.value += btnPressed.innerHTML;
                                result += btnPressed.innerHTML;
                            }
                            break;
                        default:
                            display.value += btnPressed.innerHTML;
                            result += btnPressed.innerHTML;
                            break;
                    }
                }
            }
        }, false);
    }

    document.getElementById("display").disabled = true;
}