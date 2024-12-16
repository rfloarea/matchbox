# matchbox

Replicating a simplified version of the Destructo-O-Match game from Neopets.

2024-12-10

- The current state was surprisingly straight forward once I figured out the basic components. I'm not saying that they won't change, but I am saying that sketching out _something_ in raw HTML and CSS helped _produce_ a solution in JS. I didn't rush it. In fact, I was sitting in bed talking with R most of the time. Each step sort of became obvious, until there was no obvious next step. When was when I stopped.

2024-12-14

- What if we give each row and each box a number id? That way we can have a grid that is something like an XY graph with coordinates. Then, if we click and find a match, we can programmatically locate the correct elements by their coordinates and replace them with "blank", non-clickable divs.

2024-12-15

- So. Many. Wrong. Turns. But very educational. I'm getting closer to figuring out how to search the grid for adjacent boxes with the same color, and then applying a hover effect on those elements. I can effectively do it to the _most_ immediate boxes, which was a difficult step for me to take. Now I think I need to do some recursive magic. We'll see!
