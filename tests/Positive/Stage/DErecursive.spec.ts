import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsDE from '../../../src/methods/Recursions/Positive/recursionsDE';
import { Methods } from '../../../src/methods/methods';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.DE)
})


test.describe('A/B DE stage test', async  () => {
    const vpnController = new VpnController()
    const recursionsDE = new RecursionsDE()

    test('A/B DE test Goddes', async () => {

        await recursionsDE.recursiveTestGoddesDE(STAGE_LINK)
    })

    test('A/B DE test Pharaoh', async () => {

        await recursionsDE.recursiveTestPharaohDE(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})