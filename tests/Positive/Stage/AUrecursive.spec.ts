import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsAU from '../../../src/methods/Recursions/Positive/recursionsAU';
import { Methods } from '../../../src/methods/methods';
 

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AU)
})

test.describe('A/B AU Stage test', async  () => {
    const recursionsAU = new RecursionsAU()

    test('A/B AU test Goddes', async () => {

        await recursionsAU.recursiveTestGoddesAU(STAGE_LINK)
    })

    test('A/B AU test Pharaoh', async () => {

        await recursionsAU.recursiveTestPharaohAU(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})