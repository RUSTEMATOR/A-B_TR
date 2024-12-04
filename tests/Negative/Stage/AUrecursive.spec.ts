import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeAU from '../../../src/methods/Recursions/Negative/recursionsNegativeAU';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B Negative AU test', async  () => {
    const vpnController = new VpnController()
    const recursionsAU = new RecursionsNegativeAU()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.AU)
    })

    test('A/B Negative AU test Goddes', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsAU.recursiveNegativeTestGoddesAU('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative AU test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsAU.recursiveNegativeTestGoddesAU('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})