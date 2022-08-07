import gulp from "gulp";
import browserSync from "browser-sync";

// Configurations
import path from "./config/path.js";
import app from "./config/app.js";

// Tasks
import clear from "./task/clear.js";
import html from "./task/html.js";
import scss from "./task/scss.js"
import js from "./task/js.js";
import img from "./task/img.js";
import font from "./task/font.js";

// Server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

// Watcher
const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload)
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload)
  gulp.watch(path.js.watch, js).on("all", browserSync.reload)
  gulp.watch(path.img.watch, img).on("all", browserSync.reload)
  gulp.watch(path.font.watch, font).on("all", browserSync.reload)
}

// Export tasks
export { html }
export { scss }
export { js }
export { img }
export { font }

// Build
const build = gulp.series(
  clear,
  gulp.parallel(html, scss, js, img, font),
)

const dev = gulp.series(
  build,
  gulp.parallel(watcher, server),
)

export default app.isProd ? build : dev;

//--> dev mode --> npm start
//--> build mode --> npm run build

//--> gulp html --experimental-json-modules