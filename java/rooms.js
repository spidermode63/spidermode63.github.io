const textElement = document.getElementById('text')
const imgElement = document.getElementById('image')
const buttonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showNode(1)
}

function showNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    imgElement.src = textNode.scene
    while (buttonsElement.firstChild) {
        buttonsElement.removeChild(buttonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            buttonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    if (option.requiredFalseState == null)
        return option.requiredState == null || option.requiredState(state)
    else
        return!(option.requiredFalseState(state))
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        scene: 'img/front room.jpg',
        text: 'You are inside of a home. The front door is completely encased in concrete. There is an axe nearby. In front of you, there is a set of stairs and a dining room.',
        options: [
            {
                text: 'take axe',
                setState: {Axe: true},
                nextText: 2
            },
            {
                text: 'enter dining room',
                nextText: 3
            },
            {
                text: 'climb stairs up',
                nextText: 4
            },
            {
                text: 'climb stairs down',
                nextText: 5
            }
        ]
    },
    {
        id: 2,
        scene: 'img/front room.jpg',
        text: 'Due to the absence of the axe, the main room does not seem as welcoming.',
        options: [
            {
                text: 'replace axe',
                setState: {Axe: false},
                nextText: 1
            },
            {
            text: 'enter dining room',
                nextText: 3
            },
            {
                text: 'climb stairs up',
                nextText: 4
            },
            {
                text: 'climb stairs down',
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        scene: 'img/dining room.jpg',
        text: 'The dining room is rather elegant. Sunlight shines through the window, but no ground or clouds are visible. Just a clear blue void.',
        options: [
            {
                requiredState: (currentState) => currentState.Axe,
                text: 'Break window',
                nextText: 6
            },
            {
                requiredState: (currentState) => currentState.Axe,
                text: 'Go to front room',
                nextText: 2
            },
            {
                requiredFalseState: (currentState) => currentState.Axe,
                text: 'Go to front room',
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: 'The upper floor consists of'
    },
    {
        id: 5,
        text: 'The lower floor consists of'
    },
    {
        id: 6,
        scene: 'img/placeholder.png',
        text: 'The window shatters, sending glass particles out into the blue void for miles until they are slowed down by the atmospheric drag. Along with the window, you have shattered the simulation, and angered the gods. You die instantly.',
        options: [
            {
                text: 'redo',
                nextText: 1
            }
        ]
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
    {
        id: 9,
    },
    {
        id: 10,
    },
]

startGame()