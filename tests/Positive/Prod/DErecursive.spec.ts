import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsDE from '../../../src/methods/Recursions/Positive/recursionsDE';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B DE test', async  () => {
    const vpnController = new VpnController()
    const recursionsDE = new RecursionsDE()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.DE)
    })

    test('A/B DE test Goddes', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsDE.recursiveTestGoddesDE()
    })

    test('A/B DE test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsDE.recursiveTestPharaohDE()
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})