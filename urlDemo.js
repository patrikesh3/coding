import url from 'url';
// url object 
const urlObj = 'https://www.google.com/search?q=hello+world';
console.log(urlObj);
// format()
console.log(url.format(urlObj));
// import.meta.url()
console.log(import.meta.url);
// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));
console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));
params.append('limit', '5');
params.delete('limit');
console.log(params);