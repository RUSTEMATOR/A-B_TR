import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsAT from '../../../src/methods/Recursions/Positive/recursionsAT';
import { Methods } from '../../../src/methods/methods';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AT)

})

test.describe('A/B AT test', async  () => {
    const recursionsAT = new RecursionsAT()

    test('A/B AT test Goddes', async () => {


        await recursionsAT.recursiveTestGoddesAT()
    })

    test('A/B AT test Pharaoh', async () => {
  
        await recursionsAT.recursiveTestPharaohAT()
    })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})