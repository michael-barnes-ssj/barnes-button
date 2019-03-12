import uglify from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

const config = {
  input: "src/barnesButton.js",
  external: ["react"],
  output: {
    format: "umd",
    name: "barnesButton",
    globals: {
      react: "React"
    }
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify.uglify()
  ]
};
export default config;
