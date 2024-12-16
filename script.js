const app = document.querySelector('#app')

const grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]

let row_id = grid.length
let box_id = 1

for (i of grid) {
  const row = document.createElement('div')
  row.setAttribute('class', 'row')
  row.setAttribute('id', `${row_id}`)
  app.appendChild(row)
  row_id--

  for (j of i) {
    const box = document.createElement('button')
    box.setAttribute('class', 'box')
    box.setAttribute('id', `${box_id}`)
    row.appendChild(box)
    box_id++

    const color = get_color(4)
    box.style["background-color"] = `${color}`
    box.addEventListener('click', () => console.log(`${color}`))
    box.addEventListener('mouseover', () => {
      console.log("hover")
      // recursively scan the surrounding blocks for the same color
      // we can check the boxes using math!
      // find the box with this_box_id = this_box_id - 1 and this_box_id = this_box_id + 1 
        // that gives us the boxes left and right (unless at the end) 
      // find the box with this_box_id = this_box_id - row.length and this_box_id = this_box_id + row.length 
        // that gives us the boxes above and below
      // this process will not work for some edge case boxes
        // each corner has a special case
        // the top and bottom rows have special cases
      for (i of grid) {
        for (j of i) {
          // if the block's background-color = background-color of mousover

          // apply hover effect
        }
      }
      // if found, apply hover effect
    })
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