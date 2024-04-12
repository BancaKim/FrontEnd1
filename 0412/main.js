let inputText;
let resultElement;
let inputSize;
function changeWord() {
    inputText = document.getElementById("inputtext").value;
    resultElement = document.getElementById("txresult");
    inputSize = document.getElementsByName("sizeitems")[0].value;

    resultElement.textContent = inputText;
    changeColor(resultElement);
    changeSize(resultElement, inputSize);
    changeStyle(resultElement, inputSize);
}

function changeColor(element) {
    let inputColor = document.getElementsByName("coloritems")[0].value;
    element.style.color = inputColor;
}

function changeSize(element, size) {
    element.style.fontSize = `${size}em`;
}

function changeStyle(element, size) {
    let newSize = parseInt(size);
    let checkboxes = document.getElementsByName("fontoption");

    if (checkboxes[0].checked) {
        element.style.textDecoration = 'line-through';
    } else {
        element.style.textDecoration = 'none';
    }
    // 취소선

    if (checkboxes[1].checked) {
        // 크게
        element.style.fontSize = `${newSize + 1}em`;
    } else if (checkboxes[2].checked) {
        // 작게
        element.style.fontSize = `${newSize - 1}em`;
    } else {
        element.style.fontSize = `${newSize}em`;
    }

    if (checkboxes[3].checked) {
        // 두껍게
        element.style.fontWeight = 'bold';
    } else {
        element.style.fontWeight = 'normal';
    }

    if (checkboxes[4].checked) {
        // 기울임
        element.style.fontStyle = 'italic';
    } else {
        element.style.fontStyle = 'normal';
    }

    if (checkboxes[5].checked) {
        // 위첨자
        element.style.transform = 'scale(1.2)';
    } else if (checkboxes[6].checked) {
        // 아래첨자
        element.style.transform = 'scale(0.8)';
    }

    if (checkboxes[7].checked) {
        // 소문자
        element.textContent = element.textContent.toLowerCase();
    } else if (checkboxes[8].checked) {
        // 대문자
        element.textContent = element.textContent.toUpperCase();
    }
}