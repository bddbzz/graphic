export function initWebGL(gl, VSHADER_SOURCE, FSHADER_SOURCE) {
    //创建程序
    const program = gl.createProgram()
    //创建顶点着色器
    const vShader = gl.createShader(gl.VERTEX_SHADER)
    //创建片元着色器
    const fShader = gl.createShader(gl.FRAGMENT_SHADER)
    //shader容器与着色器绑定
    gl.shaderSource(vShader, VSHADER_SOURCE)
    gl.shaderSource(fShader, FSHADER_SOURCE)
    //将GLSL ES语言编译成浏览器可用的代码
    gl.compileShader(vShader)
    gl.compileShader(fShader)
    //将着色器添加到程序上
    gl.attachShader(program, vShader)
    gl.attachShader(program, fShader)
    //链接程序，在链接操作执行后，可以任意修改shader的源代码
    //对shader重新编译不会影响整个程序，除非重新链接程序
    gl.linkProgram(program)
    // add this for extra debugging
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        var info = gl.getProgramInfoLog(program)
        throw new Error('Could not compile WebGL program. \n\n' + info)
    }
    //加载并使用链接好的程序
    gl.useProgram(program)
    return program
}
