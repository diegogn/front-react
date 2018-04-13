const { FuseBox, WebIndexPlugin, LESSPlugin, CSSResourcePlugin, CSSPlugin} = require("fuse-box");
const path = require("path");
const fuse = FuseBox.init({
    homeDir : "assets",
    target : 'browser@es5',
    output : "dist/$name.js",
    useTypescriptCompiler : true,
    plugins : [
        [LESSPlugin(), CSSResourcePlugin({ dist: "dist/css-resources" }), CSSPlugin()]
    ]
})
fuse.dev();
fuse.bundle("app")
    .instructions(" > scripts/main.tsx");
fuse.run();
