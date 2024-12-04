import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeDE from '../../../src/methods/Recursions/Negative/recursionsNegativeDE';
import { Methods } from '../../../src/methods/methods';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.DE)
})

test.describe('A/B Negative DE test', async  () => {
    const vpnController = new VpnController()
    const recursionsDE = new RecursionsNegativeDE()

    test('A/B Negative DE test Goddes', async () => {

        await recursionsDE.recursiveNegativeTestGoddesDE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative DE test Pharaoh', async () => {
 
        await recursionsDE.recursiveNegativeTestPharaohDE('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})