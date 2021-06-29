import './index.css'
import Playground from './playground/Playground.svelte'

const playground = new Playground({
  target: document.getElementById('playground')
})

export default playground
