// export const FSHADER_SOURCE = `void main() {
//   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
// }`
//绘制圆点
export const FSHADER_SOURCE = `
#ifdef GL_ES
	precision mediump float;
#endif
void main() {
  float d = distance(gl_PointCoord,vec2(0.5,0.5));
	if(d<0.5){
		gl_FragColor = vec4(1.0,0.0,0.0,1.0);
	}
	else{
		discard;
	}
}`
export const VSHADER_SOURCE = `void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
	gl_PointSize = 10.0;
}`
