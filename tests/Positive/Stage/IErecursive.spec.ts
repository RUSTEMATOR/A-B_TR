import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsIE from '../../../src/methods/Recursions/Positive/recursionsIE';
import { Methods } from '../../../src/methods/methods';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.IE)
})

test.describe('A/B IE stage test', async  () => {
    const recursionsIE = new RecursionsIE()


    test('A/B IE test GodIEs', async () => {

        await recursionsIE.recursiveTestGoddesIE(STAGE_LINK)
    })

    test('A/B IE test Pharaoh', async () => {

        await recursionsIE.recursiveTestPharaohIE(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})