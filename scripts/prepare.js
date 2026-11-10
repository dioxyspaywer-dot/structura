const fs=require('fs');fs.mkdirSync('www/lib',{recursive:true});
fs.copyFileSync('node_modules/three/build/three.module.min.js','www/lib/three.module.min.js');
fs.copyFileSync('node_modules/three/examples/jsm/controls/OrbitControls.js','www/lib/OrbitControls.js');
