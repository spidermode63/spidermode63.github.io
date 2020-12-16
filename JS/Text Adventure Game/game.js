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
    text: 'you run from the monster and it explodes with hunger, dropping a dungeon souveneir!',
    options: [
      {
        text: 'Return to the surface',
        nextText: 8,
        setState: {souveneir: true}
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
    text: 'You walk through the grassy plains. There is a gate with a slot that will only fit a dungeon souveneir. Next to it lies a small bronze shortsword',
    options: [
      {
        text: 'Take sword',
        setState: {bronzeshort: true},
        nextText: 12
      },
      {
        text: 'Use Souveneir to unlock gate',
        requiredState: (currentState) => currentState.souveneir,
        setState: {souveneir: false}
      }
    ]
  },
  {
    id: 12,
      text: 'You turn around and see a slug in the distance. You kill it with your sword and receive slug leather',
      options: [

        {
          text: 'Return to Dungeon',
          setState: {slugLeather: true},
          nextText: 6
        }

      ]
  },
  {
    id: 13,
      text: 'You insert the souveneir into the gate and it shatters. The gates creak open. A well dressed man greets you: "Hello, I am alexander. I would like to inform you that we have a criminal in our town and we want him dead. Can you do that? He is wearing a red striped shirt with cracked glasses and blue jeans and his name is Waldo. He also tends to drive a silver car with exactly 63 bullet holes in the trunk"',
      options: [

        {
          text: 'Accept',
          nextText: 14
        },
        {
          text: 'Decline',
          nextText: 17
        }
      ]
  },
    {
      id: 14,
      text: 'You gather all of the citizens to meet in their cars. There are only 4 citizens so it is not a big deal. Who do you kill?',
     options: [

      {
        text: 'A: He is wearing a red striped shirt with glasses and khakis and his name is Waldo. He drives a silver car with exactly 63 bullet holes in the trunk',
        nextText: 15
      },

      {
        text: 'B: He is wearing a red striped shirt with glasses and blue jeans and his name is Waldo. He drives a grey car with exactly 36 bullet holes in the trunk',
        nextText: 15
      },

      {
        text: 'C: He is wearing a red striped shirt with cracked glasses and blue jeans and his name is Waldo. He drives a silver car with exactly 63 bullet holes in the trunk',
        nextText: 16
      },

      {
        text: 'D: She is wearing a red striped shirt with cracked glasses and blue jeans and her name is Waldo. He drives a blue car with exactly 2 bullet holes in the trunk',
        nextText: 15
      }

     ]
    },
    {
      id: 15,
      text: 'You are in jail for murder',
      options: [
        {
          text: 'Be executed',
          nextText: -1
        }
      ]
    },
    {
      id: 16,
      text: 'You have caught the killer! Alexander rewards you with a teleporty thing',
      options: [
        {
          text: 'continue',
          setState: {tpt: true},
          nextText: 17
        }
      ]
    },
    {
      id: 17,
      text: 'ok I added a bit more for fun but I am tired now.'
    }
]

startGame()