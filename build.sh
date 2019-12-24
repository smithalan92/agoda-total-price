rm -rf extension
mkdir extension
npm run build
cp -R src/icons extension
cp src/manifest.json extension/
