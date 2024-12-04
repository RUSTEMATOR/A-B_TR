import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsCH from '../../../src/methods/Recursions/Positive/recursionsCH';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B CH test', async  () => {
    const vpnController = new VpnController()
    const recursionsCH = new RecursionsCH()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.CH)
    })

    test('A/B CH test Goddes', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsCH.recursiveTestGoddesCH()
    })

    test('A/B CH test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsCH.recursiveTestPharaohCH()
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})