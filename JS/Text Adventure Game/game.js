const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a forest. There is a copper sword a few metres away.',
    options: [
      {
        text: 'Take the sword',
        setState: { copperSword: true },
        nextText: 2
      },
      {
        text: 'Leave the sword',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You walk down a long, winding path through the woods. Eventually, It forks.',
    options: [
      {
        text: 'left',
        nextText: 3
      },
      {
        text: 'right',
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: 'After some walking, you stumble upon a giant slug!',
    options: [
      {
        text: 'Try to kill it',
        requiredState: (currentState) => currentState.copperSword,
        nextText: 4
      },
      {
        text: 'Run',
        nextText: 10
      }
    ]
  },
  {
    id: 4,
    text: 'You have slain the slug. He dropped slug leather',
    options: [
      {
        text: 'Continue Walking',
        setState: {slugLeather: true},
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'After a bit of walking, you find yourself at the entrance to a large cave, however a dungeon guard stands there. He explains that he will only let you in if given slug leather',
    options: [
      {
        text: 'Give him the leather',
        requiredState: (currentState) => currentState.slugLeather,
        nextText: 6,
        setState: {slugLeather: false}
      },
      {
        text: 'Ignore him and continue Journey',
        nextText: 11
      }
    ]
  },
  {
    id: 6,
    text: 'You hand over the leather and enter the cave. Suddenly, a massive spider jumps out',
    options: [
      {
        text: 'Try to kill',
        requiredState: (currentState) => currentState.copperSword,
        nextText: 9
      },
      {
        text: 'Run',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'you run from the monster and it explodes with hunger, dropping a dungeon souveneir',
    options: [
      {
        text: 'Return to the surface',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'You win! This game is under construction though so this may not be the end forever :)',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a sword. He surrounds you in a cocoon and your blood is sapped away.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'You try to run, but he eats you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You walk the grassy plains in search of slug leather, but you must wait until I finish making this game.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  }
]

startGame()