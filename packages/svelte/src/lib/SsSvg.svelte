<script>
  import { onMount, setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import * as d3 from 'd3'

  export let padding

  let canvasRef
  let clientWidth
  let clientHeight

  let svgContext = writable({
    dimensions: null,
    canvas: null,
    bounds: null,
  })
  setContext('svgContext', svgContext)

  export let dimensions = {
    padding: {
      top: 16,
      right: 24,
      bottom: 16,
      left: 24,
    }
  }

  function initDimensions() {
    dimensions.padding = {
      ...dimensions.padding,
      ...padding
    }
    dimensions.width = clientWidth
    dimensions.height = clientHeight
    dimensions.boundedWidth = dimensions.width
      - dimensions.padding.left
      - dimensions.padding.right
    dimensions.boundedHeight = dimensions.height
      - dimensions.padding.top
      - dimensions.padding.bottom

    $svgContext.dimensions = dimensions
  }

  function drawCanvas() {
    const canvas = d3.select(canvasRef)
      .append('svg')
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)

    const bounds = canvas.append('g')
      .style('transform', `translate(${
        dimensions.padding.left
      }px, ${
        dimensions.padding.top
      }px)`)

    $svgContext.canvas = canvas
    $svgContext.bounds = bounds
  }

  onMount(() => {
    initDimensions()
    drawCanvas()
  })

</script>

<div class="{$$props.class}" style="{$$props.style}"
     bind:this={canvasRef} bind:clientWidth={clientWidth} bind:clientHeight={clientHeight}>
    <slot></slot>
</div>
