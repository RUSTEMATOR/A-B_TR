import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsStageAT from '../../../src/methods/Recursions/Stage/Positive/recursionsAT';

    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AT)
})

test.describe('A/B AT Stage test', async  () => {
    const recursionsAT = new RecursionsStageAT()

    test('A/B AT test Goddes', async () => {

        await recursionsAT.recursiveTestStageGoddesAT(STAGE_LINK)
    })

    test('A/B AT test Pharaoh', async () => {

        await recursionsAT.recursiveTestStagePharaohAT(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})