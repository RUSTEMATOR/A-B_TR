import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeIE from '../../../src/methods/Recursions/Negative/recursionsNegativeIE';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B Negative IE test', async  () => {
    const vpnController = new VpnController()
    const recursionsIE = new RecursionsNegativeIE()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.IE)
    })

    test('A/B Negative IE test Goddes', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsIE.recursiveNegativeTestGoddesIE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative IE test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsIE.recursiveNegativeTestPharaohIE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})