const app = document.querySelector('#app')

const grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]

for (i of grid) {
  const row = document.createElement('div')
  row.setAttribute('class', 'row')
  app.appendChild(row)

  for (j of i) {
    const box = document.createElement('div')
    box.setAttribute('class', 'box')
    row.appendChild(box)
    const color = get_color(4)
    box.style["background-color"] = `${color}`
  }
}

function get_color(max) {
  const random_num = Math.floor(Math.random() * max)

  switch (random_num) {
    case 0:
      return 'blue'
    case 1:
      return 'red'
    case 2:
      return 'green'
    case 3:
      return 'yellow'
  }
}