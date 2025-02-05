let optionsButtons = document.querySelectorAll('.option-button');
let advancedOptionButton = document.querySelectorAll('.adv-option-button');
let fontName = document.getElementById('fontName');
let fontSizeRef = document.getElementById('fontSize');
let writingArea = document.getElementById('text-input');
let linkButton = document.getElementById('createLink');
let alignButtons = document.querySelectorAll('.align');
let spacingButtons = document.querySelector('.spacing');
let formatButtons = document.querySelectorAll('.format');
let scriptButtons = document.querySelectorAll('.script');


//List of Fonts
let fontList = ['Arial', 'Verdana', 'Times New Roman', 'Garamond', 'Georgia', 'Courier New', 'Cursive'];

const initializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, true);
    highlighter(scriptButtons, true);

    fontList.map(value => {
        let option = document.createElement('option');
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
}

const modifyText = (command, defaultUI, value) => {
    document.execCommand(command, defaultUI, value);
}

optionsButtons.forEach(button => {
    button.addEventListener('click', () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach(button => {
    button.addEventListener('change', () => {
        modifyText(button.id, false, button.value)
    })
})

linkButton.addEventListener('click', () => {
    let userlink = prompt("Enter a URL");
    if (/http/i.test(userlink)) {
        modifyText(linkButton.id, false, userlink)
    } else {
        userlink = "http://" + userlink;
        modifyText(linkButton.id, false, userlink)
    }

})

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener('click', () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains('active')) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add('active');
                }
            } else {
                button.classList.toggle('active');
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove('active');
    })
}

window.onload = initializer();