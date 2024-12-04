import { test, expect } from '@playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsNegativeAT from '../../../src/methods/Recursions/Negative/recursionsNegativeAT';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B Negative AT test', async  () => {
    const vpnController = new VpnController()
    const recursionsAT = new RecursionsNegativeAT()
    
    
    
    

    test.beforeAll(async () => {
       
        await vpnController.vpnConnnect(LOCATIONS.AT)
    
    })

    test('A/B Negative AT test Goddes', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsAT.recursiveNegativeTestGoddesAT('samoilenkofluttershy@gmail.com')
    })

    test('A/B Negative AT test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()
        
        await recursionsAT.recursiveNegativeTestPharaohAT('samoilenkofluttershy@gmail.com')
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})