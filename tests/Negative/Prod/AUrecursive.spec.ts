import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeAU from '../../../src/methods/Recursions/Prod/Negative/recursionsNegativeAU';
import { Methods } from '../../../src/methods/methods';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AU)
})

test.describe('A/B Negative AU test', async  () => {
    const vpnController = new VpnController()
    const recursionsAU = new RecursionsNegativeAU()
    

    test('A/B Negative AU test Goddes', async () => {

        await recursionsAU.recursiveNegativeTestGoddesAU('samoilenkofluttershy@gmail.com')
    })

    test('A/B Negative AU test Pharaoh', async () => {

        await recursionsAU.recursiveNegativeTestGoddesAU('samoilenkofluttershy@gmail.com')
    })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})