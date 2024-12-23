import { test, expect } from '@playwright/test';
import { EXPECTED_QUERY, LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/vpnController/vpnController';
import GeneralRecursion from '../../../src/methods/Recursions/generalRecursions/GeneralRecursion';
import { EXPECTED_AUSTRIA_STAGE_LINKS } from '../../../src/Data/AT/expectedAustriaLinks';

    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.AT)
})

test.describe('A/B AT Stage test', async  () => {
    const recursionsAT = new GeneralRecursion()

    const url = STAGE_LINK
    const expectedQuery = EXPECTED_QUERY.expctedQueryAT
    const isStage = true

    test('A/B AT test Goddes', async () => {


        await recursionsAT.recursiveTest({url: url,
            expectedLink: EXPECTED_AUSTRIA_STAGE_LINKS.goddes,
            expectedComparisonLink: EXPECTED_AUSTRIA_STAGE_LINKS.pharaoh,
            expectedQuery: expectedQuery,
            isStage: isStage})
    })

    test('A/B AT test Pharaoh', async () => {

        await recursionsAT.recursiveTestStagePharaohAT(STAGE_LINK)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})