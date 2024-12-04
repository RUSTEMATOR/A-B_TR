import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeIE from '../../../src/methods/Recursions/Negative/recursionsNegativeIE';
import { Methods } from '../../../src/methods/methods';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.IE)
})

test.describe('A/B Negative IE test', async  () => {
    const vpnController = new VpnController()
    const recursionsIE = new RecursionsNegativeIE()

    test('A/B Negative IE test Goddes', async () => {

        await recursionsIE.recursiveNegativeTestGoddesIE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative IE test Pharaoh', async () => {
  
        await recursionsIE.recursiveNegativeTestPharaohIE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})