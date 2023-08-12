const fs = require('fs-extra')

// let Quarter = ["QUARTER 1","QUARTER 2","QUARTER 3","QUARTER 4"];
// //let Weeks = ["WEEK 1-2","WEEK 3-4","WEEK 3","WEEK 5-6","WEEK 7-8"];
// let Weeks = ["WEEK 1-2","WEEK 3-4","WEEK 3","WEEK 5-6","WEEK 7-8"];
// let path = 'C:/Users/evegu/OneDrive/Desktop/isala-client/public/assets/module/elementary/Grade 2'



// let Quarter = ["Quarter 1","Quarter 2","Quarter 3","Quarter 4"];
// //let Weeks = ["WEEK 1-2","WEEK 3-4","WEEK 3","WEEK 5-6","WEEK 7-8"];
// let Weeks = ["Week 1 - 2","Week 3 - 4","Week 3","Week 5 - 6","Week 7 - 8"];
// let path = 'C:/Users/evegu/OneDrive/Desktop/isala-client/public/assets/module/elementary/Grade 4'

// let Quarter = ["Quarter 1","Quarter 2","Quarter 3","Quarter 4"];
// let Weeks = ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7","Week 8",];
// let path = 'C:/Users/evegu/OneDrive/Desktop/isala-client/public/assets/module/elementary/Grade 6'


// let Quarter = ["QUARTER 1","QUARTER 2"];
// let Weeks = ["WEEK 1-2","WEEK 3-4","WEEK 3","WEEK 5-6","WEEK 7-8"];
// let path = 'C:/Users/evegu/OneDrive/Desktop/isala-client/public/assets/module/elementary/Kinder-Nursery'



// async function start () {
//     console.log(await GetFiles())
// }



// function GetFiles(){
//     return new Promise((resolve,reject)=>{
//         let fileLocations = [];


//         for(var itemQuarter in Quarter){
//             for(var item in Weeks){
//                 let NewPaths = path +"/" + Quarter[itemQuarter] + "/" +Weeks[item]

//                 fs.readdir(NewPaths).then((files)=>{
//                     files.forEach((data,index)=>{
//                         fileLocations.push(NewPaths+ "/" + data)
//                         console.log("===================PAGE BREAK==============")
//                         console.log(fileLocations.toString())
//                     })
//                 }).catch((err)=>{
//                     // console.log(err)
//                 })
//             }
//         }
//     })
// }


// start();

import { getAllFiles, getAllFilesSync } from 'get-all-files'






export const Start = ()=>{


    console.log(getAllFilesSync(`C:/Users/Eveguel/Desktop/ISALA/isala/public/assets/module/Senior High School`).toArray().toString())
    
}


