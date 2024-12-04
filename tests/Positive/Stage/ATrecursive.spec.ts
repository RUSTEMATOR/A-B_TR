import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsAT from '../../../src/methods/Recursions/Positive/recursionsAT';
import { Methods } from '../../../src/methods/methods';

    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AT)
})

test.describe('A/B AT Stage test', async  () => {
    const recursionsAT = new RecursionsAT()

    test('A/B AT test Goddes', async () => {

        await recursionsAT.recursiveTestGoddesAT(STAGE_LINK)
    })

    test('A/B AT test Pharaoh', async () => {

        await recursionsAT.recursiveTestPharaohAT(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})