// import { writeFile } from 'fs';
const fs=require('fs');


// fs.writeFile("lab1.txt","[]",function(err)
// {
//     console.log("file is save")
// })

//_______________________________________________________________________________________________________________________________

if(process.argv[2]=="add")
{
    let data=JSON.parse( fs.readFileSync("lab1.txt",'utf-8'))
   console.log(data) 
    data.push({"id":(data.length+1),"name":process.argv[4],"grade":process.argv[5]});
    fs.writeFileSync("lab1.txt",JSON.stringify(data));
    console.log(data) 
}
// ____________________________________________________________________________________________________

__________________________________________________________________________________
      if(process.argv[2]=="list")
{
    let data=JSON.parse( fs.readFileSync("lab1.txt",'utf-8',function(){
        console.log(data);
    }))
}
// // _____________________________________________________________

if(process.argv[2]=="edit")
{
    console.log("ok");
    let data=JSON.parse( fs.readFileSync("lab1.txt",'utf-8'))

    data[parseInt(process.argv[3])].name = process.argv[4];
    fs.writeFileSync("lab1.txt",JSON.stringify(data));
}
// __________________________________________________________
else if(process.argv[2]=="del")
{
    let data=JSON.parse( fs.readFileSync("lab1.txt",'utf-8'))

   data.splice(parseInt(process.argv[3]),1);
   
    fs.writeFileSync("lab1.txt",JSON.stringify(data));
}
// ___________________________________________________________________
else if(process.argv[2]=="sum")
{
    let data=JSON.parse( fs.readFileSync("new.txt",'utf-8'))
    var sum =0

    for(var i=0 ; i<data.length;i++)
    sum+= parseInt(data[i].grad) ;
    console.log(sum);



}