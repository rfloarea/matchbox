# matchbox

Replicating a simplified version of the Destructo-O-Match game from Neopets.

2024-12-10

- The current state was surprisingly straight forward once I figured out the basic components. I'm not saying that they won't change, but I am saying that sketching out _something_ in raw HTML and CSS helped _produce_ a solution in JS. I didn't rush it. In fact, I was sitting in bed talking with R most of the time. Each step sort of became obvious, until there was no obvious next step. When was when I stopped.

2020-12-14

- What if we give each row and each box a number id? That way we can have a grid that is something like an XY graph with coordinates. Then, if we click and find a match, we can programmatically locate the correct elements by their coordinates and replace them with "blank", non-clickable divs.
