const fs = require("fs")
const addPerson = (id, fname, lname, age, city) => {
    const allData = loadInfo()
    const dublicatedData = allData.filter((obj) => { return obj.id === id })
    if (dublicatedData.length == 0) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
        saveallData(allData)
    } else console.log("Error Dublicated")
}
const loadInfo = () => {
    try {
        const datajson = fs.readFileSync(("data.json").toString())
        return JSON.parse(datajson)
    } catch {
        return []
    }
}
const saveallData = (allData) => {
    const saveallDatajson = JSON.stringify(allData)
    fs.writeFileSync("data.json", saveallDatajson)
}
const readAll = () => {
    const allData = loadInfo()
    if (allData.length == 0) {
        console.log("NO Data Found")
        return
    } else { console.log(allData) }
}
const readData = (id) => {
    const allData = loadInfo()
    const itemNeeded = allData.find((obj) => {
        return obj.id === id
    })
    if (itemNeeded) {
        console.log(itemNeeded)
    } else console.log("ID NOT FOUND")
}
const deleteData = (id) => {
    const allData = loadInfo()
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })
    saveallData(dataToKeep)
}
const deleteAll = () => {
    const allData = loadInfo()
    saveallData([])
    console.log("ALL DATA DELETED SUCCESSFULLY")
}
const listData = () => {
    const allData = loadInfo()
    allData.forEach((obj) => {
        console.log(`Full Name: ${obj.fname} ${obj.lname},City:${obj.city}`)
    });
}
module.exports = {
    addPerson,
    readAll,
    readData,
    deleteData, 
    deleteAll, 
    listData
}