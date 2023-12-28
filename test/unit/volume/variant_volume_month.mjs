import { assert } from 'chai'
import VariantVolumeMonthPresenter from '../../../src/volume/presenters/variantVolumeMonth.mjs'

describe('Variant Volume Month', () => {
  it('Variant volume Month', async () => {
    const variantResult = []

    const volumeDto = []
    volumeDto.push({ volume: 1010 })
    const dateFrom = new Date('2022-03-02T00:00:00.000Z')
    const dateTo = new Date('2022-03-02T00:00:00.000Z')
    const volume = VariantVolumeMonthPresenter.present(dateFrom, dateTo, volumeDto)
    variantResult.push(volume)

    const volumeDto1 = []
    volumeDto1.push({ volume: 900 })
    const dateFrom1 = new Date('2022-04-02T00:00:00.000Z')
    const dateTo1 = new Date('2022-04-02T00:00:00.000Z')
    const volume1 = VariantVolumeMonthPresenter.present(dateFrom1, dateTo1, volumeDto1)
    variantResult.push(volume1)

    const variantVolume = VariantVolumeMonthPresenter.resultPresenter(variantResult)

    assert.equal(112.22, variantVolume.percentMonth)
    assert.equal(1010, variantVolume.params[0].sumVolume)
    assert.equal('2022-3-2', variantVolume.params[0].dataFromFormat)
    assert.equal('2022-3-2', variantVolume.params[0].dataToFormat)

    assert.equal(900, variantVolume.params[1].sumVolume)
    assert.equal('2022-4-2', variantVolume.params[1].dataFromFormat)
    assert.equal('2022-4-2', variantVolume.params[1].dataToFormat)
  })
})
