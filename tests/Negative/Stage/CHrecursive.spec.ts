import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeCH from '../../../src/methods/Recursions/Negative/recursionsNegativeCH';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B Negative CH test', async  () => {
    const vpnController = new VpnController()
    const recursionsCH = new RecursionsNegativeCH()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.CH)
    })

    test('A/B Negative CH test Goddes', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsCH.recursiveNegativeTestGoddesCH('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative CH test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsCH.recursiveNegativeTestPharaohCH('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})