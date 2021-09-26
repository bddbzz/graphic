import { initWebGL } from '../utils/helper.js'
import { FSHADER_SOURCE, VSHADER_SOURCE } from './source.js'
const canvas = document.getElementById('canvas')
const gl = canvas.getContext('webgl')
const program = initWebGL(gl, VSHADER_SOURCE, FSHADER_SOURCE)
let points = new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5])
const buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)
const a_postion = gl.getAttribLocation(program, 'a_position')
gl.enableVertexAttribArray(a_postion)
gl.vertexAttribPointer(a_postion, 2, gl.FLOAT, false, 0, 0)
gl.drawArrays(gl.TRIANGLES, 0, 6)
