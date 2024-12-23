import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsStageDE from '../../../src/methods/Recursions/Stage/Positive/recursionsDE';
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.DE)
})


test.describe('A/B DE stage test', async  () => {
    const vpnController = new VpnController()
    const recursionsDE = new RecursionsStageDE()

    test('A/B DE test Goddes', async () => {

        await recursionsDE.recursiveTestStageGoddesDE(STAGE_LINK)
    })

    test('A/B DE test Pharaoh', async () => {

        await recursionsDE.recursiveTestStagePharaohDE(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})