<script>
  import { onMount, setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { select } from 'd3-selection'

  export let width
  export let height
  export let padding = {
    top: 16,
    right: 24,
    bottom: 16,
    left: 24,
  }
  export let center = {
    x: 0.5,
    y: 0.5,
  }

  let canvasRef = null
  let bounds = null
  $: dimensions = {
    padding,

    width: 0,
    height: 0,
    boundedWidth: 0,
    boundedHeight: 0,
  }

  let svgContext = writable({
    dimensions,
    center,
    bounds,
  })
  setContext('svgContext', svgContext)

  function initCenter() {
    $svgContext.center = {
      ...$svgContext.center,
      ...center,
    }
  }

  function initDimensions() {
    dimensions.padding = {
      ...dimensions.padding,
      ...padding
    }

    dimensions.width = width
    dimensions.height = height
    dimensions.boundedWidth = dimensions.width
      - dimensions.padding.left
      - dimensions.padding.right
    dimensions.boundedHeight = dimensions.height
      - dimensions.padding.top
      - dimensions.padding.bottom

    $svgContext.dimensions = dimensions
  }

  function drawCanvas() {
    const canvas = select(canvasRef)
    const bounds = canvas.append('g')
      .style('transform', `translate(${
        dimensions.padding.left
      }px, ${
        dimensions.padding.top
      }px)`)

    $svgContext.bounds = bounds
  }

  onMount(() => {
    initCenter()
    initDimensions()
    drawCanvas()
  })

</script>

<svg {width} {height} {...$$restProps} bind:this={canvasRef}>
  <slot></slot>
</svg>
