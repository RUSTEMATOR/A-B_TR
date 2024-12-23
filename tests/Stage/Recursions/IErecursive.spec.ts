import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsStageIE from '../../../src/methods/Recursions/Stage/Positive/recursionsIE';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.IE)
})

test.describe('A/B IE stage test', async  () => {
    const recursionsIE = new RecursionsStageIE()

    test('A/B IE test GodIEs', async () => {

        await recursionsIE.recursiveTestStageGoddesIE(STAGE_LINK)
    })

    test('A/B IE test Pharaoh', async () => {

        await recursionsIE.recursiveTestStagePharaohIE(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})