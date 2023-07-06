const nameList = ["Giorgia" , "Gianni" ,"Matteo" , "Romano" , "Silvio", "Pierferdinando"]
const surnameList = ["Giorgini" , "Giannini" , "Matteini" ,"Romanini","Silvini","Ferdinandini"]



for (let i = 0; i < nameList.length; i++) {
    const randomName= Math.floor(Math.random() * nameList.length);
    const randomSurname= Math.floor(Math.random() * surnameList.length);

    const currentName = nameList[randomName];
    const currentSurname = surnameList[randomSurname]    

    const fakeName = `${currentName} ${currentSurname}`
    console.log (fakeName)
}


