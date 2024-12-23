import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNL from '../../../src/methods/Recursions/Prod/Positive/recursionsNL';
import { Methods } from '../../../src/methods/methods';


    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.NL)
})

test.describe('A/B IE test', async  () => {
    const recursionsNL = new RecursionsNL()

    test('A/B NL test GodNLs', async () => {

        await recursionsNL.recursiveTestGoddesNL()
    })

    test('A/B NL test Pharaoh', async () => {

        await recursionsNL.recursiveTestPharaohNL()
    })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})