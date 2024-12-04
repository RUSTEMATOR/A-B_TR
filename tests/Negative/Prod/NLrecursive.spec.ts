import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeNL from '../../../src/methods/Recursions/Negative/recursionsNegativeNL';
import { Methods } from '../../../src/methods/methods';
import { reverse } from 'dns';

    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.NL)
})

test.describe('A/B Negative NL test', async  () => {
    const recursionsNL = new RecursionsNegativeNL()

    test('A/B Negative NL test GodNLs', async () => {

        await recursionsNL.recursiveNegativeTestGoddesNL('samoilenkofluttershy@gmail.com')
    })

    test('A/B Negative NL test Pharaoh', async () => {

        await recursionsNL.recursiveNegativeTestPharaohNL('samoilenkofluttershy@gmail.com')
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})