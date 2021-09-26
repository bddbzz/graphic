import { initWebGL } from '../utils/helper.js'
import { FSHADER_SOURCE, VSHADER_SOURCE } from './source.js'
const canvas = document.getElementById('canvas')
const gl = canvas.getContext('webgl')
initWebGL(gl, VSHADER_SOURCE, FSHADER_SOURCE)
gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.POINTS, 0, 1)
