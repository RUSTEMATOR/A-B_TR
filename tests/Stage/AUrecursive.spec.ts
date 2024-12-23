import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsStageAU from '../../../src/methods/Recursions/Stage/Positive/recursionsAU';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AU)
})

test.describe('A/B AU Stage test', async  () => {
    const recursionsAU = new RecursionsStageAU()

    test('A/B AU test Goddes', async () => {

        await recursionsAU.recursiveTestStageGoddesAU(STAGE_LINK)
    })

    test('A/B AU test Pharaoh', async () => {

        await recursionsAU.recursiveTestStagePharaohAU(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})