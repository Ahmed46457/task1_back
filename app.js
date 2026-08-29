const yargs = require("yargs")
const data1 = require("./data1")
const { type } = require("node:os")

yargs.command({
    command:"add",
    describe:"To add a new person",
    builder:{
        id:{type:"string",demandOption:true},
        fname:{type:"string",demandOption:true},
        lname:{type:"string",demandOption:true},
        age:{type:"string",demandOption:true},
        city:{type:"string",demandOption:true},
    },
    handler:(x)=>{
        data1.addPerson(x.id,x.fname,x.lname,x.age,x.city)
    }
})
//////////////////////////////////////////////////////////////////////
yargs.command({
    command:"ReadAll",
    describe:"To View All Data",
    handler:()=>{data1.readAll()}
})

yargs.command({
    command:"read",
    describe:"to view data of specific person",
    builder:{
        id:{type:"string",demandOption:true}
    },
    handler:(x)=>{
        data1.readData(x.id)
    }
})
/////////////////////////////////////////////////////////////////////
yargs.command({
    command:"delete",
    describe:"to delete data of a specific person",
    builder:{
        id:{type:"string",demandOption:true}
    },
    handler:(x)=>{
        data1.deleteData(x.id)
    }
})

yargs.command({
    command:"deleteAll",
    describe:"to delete all data",
    handler:()=>{
        data1.deleteAll()
    }
})
yargs.command({
    command:"list",
    describe:"to list data",
    handler:()=>{data1.listData()}
})

yargs.parse()