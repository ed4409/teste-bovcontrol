import { assert } from 'chai'
import faker from 'faker'
import MediaVolumeMonthPresenter from '../../../src/volume/presenters/mediaVolumeMonth.mjs'

describe('Media Volume Month', () => {
  it('Media volume Month', async () => {
    const volumeDto = []
    const code = faker.datatype.number()
    volumeDto.push({ volume: 1010, code: code })
    volumeDto.push({ volume: 100, code: code })
    volumeDto.push({ volume: 10, code: code })
    const dateFrom = new Date('2022-03-02T00:00:00.000Z')
    const dateTo = new Date('2022-04-02T00:00:00.000Z')
    const numMonth = 2
    const volume = MediaVolumeMonthPresenter.present(dateFrom, dateTo, volumeDto, 4)
    assert.equal(560, volume.mediaVolume)
    assert.equal(1120, volume.sumVolume)
    assert.equal('2022-3-2', volume.dataFromFormat)
    assert.equal('2022-4-2', volume.dataToFormat)
    assert.equal(numMonth, volume.numMonth)
    assert.equal(code, volume.code)
  })
})
