import { assert } from 'chai'
import faker from 'faker'
import validateUUID from 'uuid-validate'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import { default as VolumeRepository } from '../../../src/volume/repositories/Volume.mjs'
import CreateVolume from '../../../src/volume/use_cases/CreateVolume.mjs'
import RemoveVolume from '../../../src/volume/use_cases/RemoveVolume.mjs'
import SearchVolume from '../../../src/volume/use_cases/SearchVolume.mjs'

describe('Remove Volume', () => {
  let volumeRepository
  let volumeDto = {
    code: faker.datatype.number(),
    tp: faker.datatype.number(),
    start_date: faker.datatype.datetime(),
    start_time: faker.datatype.datetime(),
    arrival_date: faker.datatype.datetime(),
    arrival_time: faker.datatype.datetime(),
    volume: faker.datatype.number(),
    temperature: faker.datatype.number(),
    route: faker.datatype.number(),
    ra: faker.datatype.string(),
    trans: faker.datatype.number(),
    device: faker.datatype.string(),
    driver: faker.datatype.number(),
    rejected_volume: faker.datatype.number(),
    pk_resfriador: faker.datatype.number(),
    status: faker.datatype.number()
  }

  beforeEach(() => {
    volumeRepository = new VolumeRepository(RepositoryImpl)
  })

  it('Create volume', async () => {
    const createVolumeUseCase = new CreateVolume(volumeRepository)
    const volumeId = await createVolumeUseCase.execute(volumeDto)
    assert.isTrue(validateUUID(volumeId.toString(), 4))
  })

  it('Remove volume', async () => {
    const removeVolumeUseCase = new RemoveVolume(volumeRepository)
    const result = await removeVolumeUseCase.execute(volumeDto)
    assert.equal(result.result.n, 1)
  })

  it('Search volume', async () => {
    const searchVolumeUseCase = new SearchVolume(volumeRepository)
    let volume = await searchVolumeUseCase.execute(
      volumeDto.code,
      volumeDto.arrival_date,
      volumeDto.arrival_date
    )

    let result = { error: `Volume not found code: ${volumeDto.code}, from: ${volumeDto.arrival_date}, to: ${volumeDto.arrival_date}` }
    assert.deepEqual(result, volume)
  })
})
