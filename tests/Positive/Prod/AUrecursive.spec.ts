import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsAU from '../../../src/methods/Recursions/Positive/recursionsAU';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B AU test', async  () => {
    const vpnController = new VpnController()
    const recursionsAU = new RecursionsAU()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.AU)
    })

    test('A/B AU test Goddes', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsAU.recursiveTestGoddesAU()
    })

    test('A/B AU test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsAU.recursiveTestPharaohAU()
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})