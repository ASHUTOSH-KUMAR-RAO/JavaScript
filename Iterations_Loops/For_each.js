const coding = ["js","ruby","python","cpp","java"]

 // Higher Order Arrays In Loop
coding.forEach( function(item) { // aur hum iss loop ko sabse jyada use kerte hai aur ye sabse smart bhi hota hai
    console.log(item);
})

coding.forEach((Ashutosh) => { // Arow Function ki help se print karwaya

    console.log(Ashutosh);
})

coding.forEach((item,arr,index)=>{
    console.log(item,arr,index);// !imse ye ho raha hai ki usne index bhi liy aur array ke andar bhi print karwaya aur item ko hi liya basically mein isme 3 kaam ek hi sath ho raha hai
})

// ? aur ye bahut common hota hai kyuki jo data base se value aata hai wo aaryas ke form mein hi ata hai (aur ye bahut complicate hota hai but sir ne ye foundation padha ke eay bana diya tysm sir 🙏)

const myCoding = [
    {
        laguageName : "c++",
        laguageFile : "cpp",

    },

    {
         laguageName : "JavaScript",
        laguageFile : "js",
    },

    {
         laguageName : "Python",
        laguageFile : "py",
    },
]

myCoding.forEach((item) =>{
console.log(item.laguageName);

})


