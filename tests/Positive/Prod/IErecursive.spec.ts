import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsIE from '../../../src/methods/Recursions/Positive/recursionsIE';
import { Methods } from '../../../src/methods/methods';

    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.IE)
})

test.describe('A/B IE test', async  () => {
    const recursionsIE = new RecursionsIE()

    test('A/B IE test GodIEs', async () => {
        
        await recursionsIE.recursiveTestGoddesIE()
    })

    test('A/B IE test Pharaoh', async () => {

        await recursionsIE.recursiveTestPharaohIE()
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})