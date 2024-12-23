import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsStageCH from '../../../src/methods/Recursions/Stage/Positive/recursionsCH';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.CH)
})


test.describe('A/B CH stage test', async  () => {
    const recursionsCH = new RecursionsStageCH()

    test('A/B CH test Goddes', async () => {
        
        await recursionsCH.recursiveTestStageGoddesCH(STAGE_LINK)
    })

    test('A/B CH test Pharaoh', async () => {

        await recursionsCH.recursiveTestStagePharaohCH(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})