import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeStageDE from '../../../src/methods/Recursions/Stage/Negative/recursionsNegativeDE';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.DE)
})

test.describe('A/B Negative DE test', async  () => {
    const vpnController = new VpnController()
    const recursionsDE = new RecursionsNegativeStageDE()

    test('A/B Negative DE test Goddes', async () => {

        await recursionsDE.recursiveNegativeTestStageGoddesDE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative DE test Pharaoh', async () => {
 
        await recursionsDE.recursiveNegativeTestStagePharaohDE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})