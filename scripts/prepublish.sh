echo "Cleaning Dist";
rm -rf ./dist
mkdir dist
echo "Transpiling ES2015"
./node_modules/.bin/babel src --ignore tests --out-dir ./dist
echo "Actions Complete"
