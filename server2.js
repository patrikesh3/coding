import { createServer} from 'http'
const PORT = process.env.PORT || 8080;
const users=[
    {id:1, Name: 'kesh'},
    {id:1, Name: 'sando'},
    {id:1, Name: 'kevin'}
]
const server = createServer((req, res) =>{
if(req.url==='/api/users' &&  req.method==='GET'){
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end()       
}
else {
    res.statusCode = 400;
    res.end('not found')
}
})

server.listen(PORT, ()=> {
    console.log(`running on the port ${PORT}`);
})