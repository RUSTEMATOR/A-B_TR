import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeDE from '../../../src/methods/Recursions/Negative/recursionsNegativeDE';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B Negative DE test', async  () => {
    const vpnController = new VpnController()
    const recursionsDE = new RecursionsNegativeDE()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.DE)
    })

    test('A/B Negative DE test Goddes', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsDE.recursiveNegativeTestGoddesDE('samoilenkofluttershy@gmail.com')
    })

    test('A/B Negative DE test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsDE.recursiveNegativeTestPharaohDE('samoilenkofluttershy@gmail.com')
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})