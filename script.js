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
      console.log('source box id: ', box.id)
      const box_id_array = find_adjacent_boxes(parseInt(box.id))
      console.table(box_id_array)
      apply_hover_effect(box_id_array, color)
    })
    // box.addEventListener('mouseout', () => {
    //   find_adjacent_boxes(`${color}`, box.id)
    //   remove_hover_effect(box)
    // })
  }
}

function get_color(max) {
  const random_num = Math.floor(Math.random() * max)

  switch (random_num) {
    case 0:
      // blue
      return 'rgb(0, 0, 255)'
    case 1:
      // red
      return 'rgb(255, 0, 0)'
    case 2:
      // green
      return 'rgb(0, 128, 0)'
    case 3:
      // yellow
      return 'rgb(255, 255, 0)'
  }
}

// build an array of box ids that share a side with our source box
const find_adjacent_boxes = (source_id) => {
  const adjacent_boxes = [];
  // left box
  if (document.getElementById(source_id - 1)) {
    adjacent_boxes.push(source_id - 1)
  }
  console.log('adjacent boxes 1 ', adjacent_boxes);

  // right box
  if (document.getElementById(source_id + 1)) {
    adjacent_boxes.push(source_id + 1)
  }
  console.log('adjacent boxes 2 ', adjacent_boxes);
  
  // top box
  if (document.getElementById(source_id - 7)) {
    adjacent_boxes.push(source_id - 7)
  }
  console.log('adjacent boxes 3 ', adjacent_boxes);
  
  // bottom box
  if (document.getElementById(source_id + 7)) {
    adjacent_boxes.push(source_id + 7)
  }
  console.log('adjacent boxes 4 ', adjacent_boxes);
  
  return adjacent_boxes
}

// takes an array of ids and iterates over the grid to find matches to apply hover effects
function apply_hover_effect(array, color) {
  // apply hover effect to box with box_id
  for (i of array) {
    console.log(i)
    const element = document.getElementById(i)
    const i_color = window.getComputedStyle(element).getPropertyValue('background-color')
    console.log(i_color)
    console.log(color)
    if (i_color == color) {
      console.log('apply hover effect to box: ', i)
      element.style["box-shadow"] = "none"
    }
  }

}

// function convert_color(color) {

//   switch (color) {
//     case "rgb(0, 0, 255)"
//   }
//   return rgb
// }

// function remove_hover_effect(box) {
//   console.log('remove hover effect from box: ', box.id)
//   box.style["box-shadow"] = "inset black 0px 0px 60px -12px"
// }