
const client= require('./client')

module.exports.connect =async function (){
    try {
        await client.connect()
        console.log(`connect to ${client.database} database`)
    } catch (e) {
        console.log('error connection to db')
    }
}
