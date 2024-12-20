import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeStageIE from '../../../src/methods/Recursions/Stage/Negative/recursionsNegativeIE';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.IE)
})

test.describe('A/B Negative IE test', async  () => {
    const vpnController = new VpnController()
    const recursionsIE = new RecursionsNegativeStageIE()

    test('A/B Negative IE test Goddes', async () => {

        await recursionsIE.recursiveNegativeTestStageGoddesIE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative IE test Pharaoh', async () => {
  
        await recursionsIE.recursiveNegativeTestStagePharaohIE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})