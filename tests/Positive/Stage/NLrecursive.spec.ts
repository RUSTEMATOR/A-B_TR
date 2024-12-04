import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNL from '../../../src/methods/Recursions/Positive/recursionsNL';
import { Methods } from '../../../src/methods/methods';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.NL)
})


test.describe('A/B NL stage test', async  () => {
    const recursionsNL = new RecursionsNL()

    test('A/B NL test GodNLs', async () => {

        await recursionsNL.recursiveTestGoddesNL(STAGE_LINK)
    })

    test('A/B NL test Pharaoh', async () => {

        await recursionsNL.recursiveTestPharaohNL(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})