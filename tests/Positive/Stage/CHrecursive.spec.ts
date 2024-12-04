import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsCH from '../../../src/methods/Recursions/Positive/recursionsCH';
import { Methods } from '../../../src/methods/methods';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.CH)
})


test.describe('A/B CH stage test', async  () => {
    const recursionsCH = new RecursionsCH()

    test('A/B CH test Goddes', async () => {
        
        await recursionsCH.recursiveTestGoddesCH(STAGE_LINK)
    })

    test('A/B CH test Pharaoh', async () => {

        await recursionsCH.recursiveTestPharaohCH(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})