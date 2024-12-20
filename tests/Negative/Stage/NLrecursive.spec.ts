import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeStageNL from '../../../src/methods/Recursions/Stage/Negative/recursionsNegativeNL';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.NL)
})

test.describe('A/B Negative NL test', async  () => {
    const vpnController = new VpnController()
    const recursionsNL = new RecursionsNegativeStageNL()

    test('A/B Negative NL test GodNLs', async () => {
 
        await recursionsNL.recursiveNegativeTestStageGoddesNL('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative NL test Pharaoh', async () => {

        await recursionsNL.recursiveNegativeTestStagePharaohNL('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})