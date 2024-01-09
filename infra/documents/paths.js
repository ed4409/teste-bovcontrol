import healthCheck from './paths/healthCheck.js'
import volume from './paths/volume.js'
//import fazendeiro from './paths/cadastroFazendeiro.js'


let paths = Object.assign(
  healthCheck,
  volume
)

export default paths
