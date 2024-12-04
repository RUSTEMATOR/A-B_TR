import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsIE from '../../../src/methods/Recursions/Positive/recursionsIE';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B IE stage test', async  () => {
    const vpnController = new VpnController()
    const recursionsIE = new RecursionsIE()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.IE)
    })

    test('A/B IE test GodIEs', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsIE.recursiveTestGoddesIE(STAGE_LINK)
    })

    test('A/B IE test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsIE.recursiveTestPharaohIE(STAGE_LINK)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})