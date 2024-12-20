import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeStageCH from '../../../src/methods/Recursions/Stage/Negative/recursionsNegativeCH';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.CH)
})


test.describe('A/B Negative CH test', async  () => {
    
    const recursionsCH = new RecursionsNegativeStageCH()

    test('A/B Negative CH test Goddes', async () => {

        await recursionsCH.recursiveNegativeTestStageGoddesCH('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative CH test Pharaoh', async () => {

        await recursionsCH.recursiveNegativeTestStagePharaohCH('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})