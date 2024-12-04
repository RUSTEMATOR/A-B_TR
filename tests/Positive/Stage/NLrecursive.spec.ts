import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNL from '../../../src/methods/Recursions/Positive/recursionsNL';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B NL stage test', async  () => {
    const vpnController = new VpnController()
    const recursionsNL = new RecursionsNL()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.NL)
    })

    test('A/B NL test GodNLs', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsNL.recursiveTestGoddesNL(STAGE_LINK)
    })

    test('A/B NL test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsNL.recursiveTestPharaohNL(STAGE_LINK)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})