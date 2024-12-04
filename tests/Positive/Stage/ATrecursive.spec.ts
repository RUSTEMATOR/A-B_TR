import { test, expect } from '@playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import RecursionsAT from '../../../src/methods/Recursions/Positive/recursionsAT';
import { Methods } from '../../../src/methods/methods';


test.describe('A/B AT Stage test', async  () => {
    const vpnController = new VpnController()
    const recursionsAT = new RecursionsAT()
    
    
    
    

    test.beforeAll(async () => {
       
        await vpnController.vpnConnnect(LOCATIONS.AT)
    
    })

    test('A/B AT test Goddes', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()

        await recursionsAT.recursiveTestGoddesAT(STAGE_LINK)
    })

    test('A/B AT test Pharaoh', async ({page}) => {
        const methods = new Methods(page)
        await methods.sleep(5000)
        await methods.page.close()
        
        await recursionsAT.recursiveTestPharaohAT(STAGE_LINK)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})