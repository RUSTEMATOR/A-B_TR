import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNL from '../../../src/methods/Recursions/Positive/recursionsNL';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B IE test', async  () => {
    const vpnController = new VpnController()
    const recursionsNL = new RecursionsNL()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.NL)
    })

    test('A/B NL test GodNLs', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsNL.recursiveTestGoddesNL()
    })

    test('A/B NL test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsNL.recursiveTestPharaohNL()
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})