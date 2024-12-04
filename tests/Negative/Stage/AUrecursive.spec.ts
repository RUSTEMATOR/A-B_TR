import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeAU from '../../../src/methods/Recursions/Negative/recursionsNegativeAU';
import { Methods } from '../../../src/methods/methods';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AU)
})

test.describe('A/B Negative AU test', async  () => {
    const vpnController = new VpnController()
    const recursionsAU = new RecursionsNegativeAU()
    

    test('A/B Negative AU test Goddes', async () => {

        await recursionsAU.recursiveNegativeTestGoddesAU('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative AU test Pharaoh', async () => {

        await recursionsAU.recursiveNegativeTestGoddesAU('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})