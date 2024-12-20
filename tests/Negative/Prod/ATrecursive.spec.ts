import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeAT from '../../../src/methods/Recursions/Prod/Negative/recursionsNegativeAT';
import { Methods } from '../../../src/methods/methods';

test.beforeAll(async () => {
    const vpnController = new VpnController()   
    await vpnController.vpnConnnect(LOCATIONS.AT)

})

test.describe('A/B Negative AT test', async  () => {

    const recursionsAT = new RecursionsNegativeAT()
    

    test('A/B Negative AT test Goddes', async () => {

        await recursionsAT.recursiveNegativeTestGoddesAT('samoilenkofluttershy@gmail.com')
    })

    test('A/B Negative AT test Pharaoh', async () => {
        
        await recursionsAT.recursiveNegativeTestPharaohAT('samoilenkofluttershy@gmail.com')
    })


})


test.afterAll(async () => {
    const vpnController = new VpnController()   
    await vpnController.vpnDisconnect()
})