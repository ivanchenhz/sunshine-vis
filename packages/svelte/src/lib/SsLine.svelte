<script lang="ts">
  import * as d3 from 'd3'

  import { getContext, onMount, tick } from 'svelte'

  const svgContext = getContext('svgContext')

  export let dataset = []
  export let xKey
  export let yKey
  export let timeFormat

  let xAccessor
  let yAccessor
  let xScale
  let yScale
  let lineGenerator

  onMount(async () => {
    await tick()
    init()
    drawLine()
  })

  function init() {
    xAccessor = d => timeFormat ? d3.timeParse(timeFormat)(d[xKey]) : d => d[xKey]
    yAccessor = d => d[yKey]

    xScale = d3.scaleTime()
      .domain(d3.extent(dataset, xAccessor))
      .range([0, $svgContext.dimensions.boundedWidth])

    yScale = d3.scaleLinear()
      .domain(d3.extent(dataset, yAccessor))
      .range([$svgContext.dimensions.boundedHeight, 0])
  }

  function drawLine() {
    lineGenerator = d3.line()
      .x(d => xScale(xAccessor(d)))
      .y(d => yScale(yAccessor(d)))

    const path = $svgContext.bounds.append('path')
      .attr('d', lineGenerator(dataset))
      .attr('fill', 'none')
      .attr('stroke', 'currentColor')

    for (let k in $$restProps) {
      path.attr(k, $$restProps[k])
    }
  }

</script>
