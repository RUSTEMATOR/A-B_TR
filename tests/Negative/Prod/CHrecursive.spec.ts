import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeCH from '../../../src/methods/Recursions/Negative/recursionsNegativeCH';
import { Methods } from '../../../src/methods/methods';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.CH)
})

test.describe('A/B Negative CH test', async  () => {
    const vpnController = new VpnController()
    const recursionsCH = new RecursionsNegativeCH()
    
    test('A/B Negative CH test Goddes', async () => {

        await recursionsCH.recursiveNegativeTestGoddesCH('samoilenkofluttershy@gmail.com')
    })

    test('A/B Negative CH test Pharaoh', async () => {

        await recursionsCH.recursiveNegativeTestPharaohCH('samoilenkofluttershy@gmail.com')
    })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})