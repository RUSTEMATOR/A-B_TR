import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsDE from '../../../src/methods/Recursions/Prod/Positive/recursionsDE';
import { Methods } from '../../../src/methods/methods';
    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.DE)
})

test.describe('A/B DE test', async  () => {
    const recursionsDE = new RecursionsDE()
    test('A/B DE test Goddes', async () => {

        await recursionsDE.recursiveTestGoddesDE()
    })

    test('A/B DE test Pharaoh', async () => {

        await recursionsDE.recursiveTestPharaohDE()
    })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})