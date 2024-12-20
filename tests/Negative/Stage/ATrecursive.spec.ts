import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeStageAT from '../../../src/methods/Recursions/Stage/Negative/recursionsNegativeAT';

    
    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AT)

})

test.describe('A/B Negative AT test', async  () => {
    const recursionsAT = new RecursionsNegativeStageAT()
    

    test('A/B Negative AT test Goddes', async () => {

        await recursionsAT.recursiveNegativeTestStageGoddesAT('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative AT test Pharaoh', async () => {

        await recursionsAT.recursiveNegativeTestStagePharaohAT('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})