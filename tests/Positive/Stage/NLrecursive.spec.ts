import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsStageNL from '../../../src/methods/Recursions/Stage/Positive/recursionsNL';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.NL)
})


test.describe('A/B NL stage test', async  () => {
    const recursionsNL = new RecursionsStageNL()

    test('A/B NL test GodNLs', async () => {

        await recursionsNL.recursiveTestStageGoddesNL(STAGE_LINK)
    })

    test('A/B NL test Pharaoh', async () => {
        
        await recursionsNL.recursiveTestStagePharaohNL(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})