<script>
  import { scaleTime, scaleLinear } from 'd3-scale'
  import { line, curveMonotoneX } from 'd3-shape'
  import { timeParse } from 'd3-time-format'
  import { extent } from 'd3-array'

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
    xAccessor = timeFormat ? d => timeParse(timeFormat)(d[xKey]) : d => d[xKey]
    yAccessor = d => d[yKey]

    xScale = (timeFormat ? scaleTime() : scaleLinear())
      .domain(extent(dataset, xAccessor))
      .range([0, $svgContext.dimensions.boundedWidth])

    yScale = scaleLinear()
      .domain(extent(dataset, yAccessor))
      .range([$svgContext.dimensions.boundedHeight, 0])
  }

  function drawLine() {
    lineGenerator = line()
      .x(d => xScale(xAccessor(d)))
      .y(d => yScale(yAccessor(d)))
      .curve(curveMonotoneX)

    const _line = lineGenerator(dataset)


    const path = $svgContext.bounds.append('path')
      .attr('d', _line)
      .attr('fill', 'none')
      .attr('stroke', 'currentColor')

    for (let k in $$restProps) {
      path.attr(k, $$restProps[k])
    }
  }

</script>
