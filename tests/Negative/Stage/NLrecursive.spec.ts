import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeNL from '../../../src/methods/Recursions/Negative/recursionsNegativeNL';
import { Methods } from '../../../src/methods/methods';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.NL)
})

test.describe('A/B Negative NL test', async  () => {
    const vpnController = new VpnController()
    const recursionsNL = new RecursionsNegativeNL()

    test('A/B Negative NL test GodNLs', async () => {
 
        await recursionsNL.recursiveNegativeTestGoddesNL('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative NL test Pharaoh', async () => {

        await recursionsNL.recursiveNegativeTestPharaohNL('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})