import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsAU from '../../../src/methods/Recursions/Prod/Positive/recursionsAU';
import { Methods } from '../../../src/methods/methods';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AU)
})


test.describe('A/B AU test', async  () => {
    
    const recursionsAU = new RecursionsAU()


    test('A/B AU test Goddes', async () => {

        await recursionsAU.recursiveTestGoddesAU()
    })

    test('A/B AU test Pharaoh', async () => {

        await recursionsAU.recursiveTestPharaohAU()
    })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})