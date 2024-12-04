import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeNL from '../../../src/methods/Recursions/Negative/recursionsNegativeNL';
import { Methods } from '../../../src/methods/methods';
import { reverse } from 'dns';


test.describe('A/B Negative NL test', async  () => {
    const vpnController = new VpnController()
    const recursionsNL = new RecursionsNegativeNL()
    
    

    test.beforeAll(async () => {
        await vpnController.vpnConnnect(LOCATIONS.NL)
    })

    test('A/B Negative NL test GodNLs', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsNL.recursiveNegativeTestGoddesNL('samoilenkofluttershy@gmail.com')
    })

    test('A/B Negative NL test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsNL.recursiveNegativeTestPharaohNL('samoilenkofluttershy@gmail.com')
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})