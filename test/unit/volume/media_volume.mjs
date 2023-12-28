import { assert } from 'chai'
import faker from 'faker'
import MediaVolumePresenter from '../../../src/volume/presenters/mediaVolume.mjs'

describe('Media Volume', () => {
  it('Media volume', async () => {
    const volumeDto = []
    const code = faker.datatype.number()
    volumeDto.push({ volume: 1010, code: code })
    volumeDto.push({ volume: 100, code: code })
    volumeDto.push({ volume: 10, code: code })
    const dateFrom = new Date('2022-03-01')
    const dateTo = new Date('2022-04-01')
    const volume = MediaVolumePresenter.present(dateFrom, dateTo, volumeDto, 4)
    assert.equal(280, volume.mediaVolume)
    assert.equal(1120, volume.sumVolume)
    assert.equal(dateFrom, volume.dateFrom)
    assert.equal(dateTo, volume.dateTo)
    assert.equal(code, volume.code)
  })
})
