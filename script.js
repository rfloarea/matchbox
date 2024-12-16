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

    const color = rand_color(4)
    box.style["background-color"] = `${color}`
    box.addEventListener('click', () => console.log(`${color}`))
    box.addEventListener('mouseover', () => {
      console.log("hover")
      console.log('source box id: ', box.id)
      const box_id_array = find_adjacent_boxes(parseInt(box.id))
      console.table(box_id_array)
      apply_hover_effect(box_id_array)
    })
    // box.addEventListener('mouseout', () => {
    //   find_adjacent_boxes(`${color}`, box.id)
    //   remove_hover_effect(box)
    // })
  }
}

function rand_color(max) {
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

// TODO:
  // - create checks for edge cases
const find_adjacent_boxes = (source_id) => {

  const adjacent_boxes = [];
  const source_box_color = get_element_color(source_id)
    
  // left box
  if (document.getElementById(source_id - 1)) {
    const color = get_element_color(source_id - 1)
    if (source_box_color == color) {
      adjacent_boxes.push(source_id - 1)
    }
  }
  console.log('adjacent boxes with same color - 1: ', adjacent_boxes);

  // right box
  if (document.getElementById(source_id + 1)) {
    const color = get_element_color(source_id + 1)
    if (source_box_color == color) {
      adjacent_boxes.push(source_id + 1)
    }
  }
  console.log('adjacent boxes with same color - 2: ', adjacent_boxes);
  
  // top box
  if (document.getElementById(source_id - 7)) {
    const color = get_element_color(source_id - 7)
    if (source_box_color == color) {
      adjacent_boxes.push(source_id - 7)
    }
  }
  console.log('adjacent boxes with same color - 3: ', adjacent_boxes);
  
  // bottom box
  if (document.getElementById(source_id + 7)) {
    const color = get_element_color(source_id + 7)
    if (source_box_color == color) {
      adjacent_boxes.push(source_id + 7)
    }
  }
  console.log('adjacent boxes with same color - 4: ', adjacent_boxes);
  
  return adjacent_boxes
}

// takes an array of ids and apply hover effects
function apply_hover_effect(array) {
  for (i of array) {
    console.log('apply hover effect to box: ', i)
    const element = document.getElementById(i)
    element.style["box-shadow"] = "none"
  }
}

// util to find color of any element by their id
const get_element_color = (id) => {
  const element = document.getElementById(id)
  const color = window.getComputedStyle(element).getPropertyValue('background-color')
  return color
}

// function remove_hover_effect(box) {
//   console.log('remove hover effect from box: ', box.id)
//   box.style["box-shadow"] = "inset black 0px 0px 60px -12px"
// }