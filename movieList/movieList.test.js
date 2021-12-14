const {Builder, Capabilities} = require('selenium-webdriver')
const {By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie} = require('./testFunctions')
const {findX} = require('./testFunctions')
const {deleteMovie} = require('./testFunctions')
const {notificationVerification} = require('./testFunctions')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

// test('Delete a movie', async () => {
//     await (driver)

//     await driver.sleep(5000)
// })



describe('', () => {

    test('add a movie', async () => {
        await addMovie(driver)
    })
    
    test('Find "X" delete button next to movie', async () => {
        await findX(driver)
    })

    test('Delete a movie', async () => {
        await deleteMovie(driver)
    })
    
    test('verify notification appears', async () => {
        await notificationVerification(driver) 
    })
     
})

