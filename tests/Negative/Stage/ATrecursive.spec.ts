import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeAT from '../../../src/methods/Recursions/Negative/recursionsNegativeAT';
import { Methods } from '../../../src/methods/methods';

    
    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AT)

})

test.describe('A/B Negative AT test', async  () => {
    const recursionsAT = new RecursionsNegativeAT()
    

    test('A/B Negative AT test Goddes', async () => {

        await recursionsAT.recursiveNegativeTestGoddesAT('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })

    test('A/B Negative AT test Pharaoh', async () => {

        await recursionsAT.recursiveNegativeTestPharaohAT('samoilenkofluttershy@gmail.com', STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})