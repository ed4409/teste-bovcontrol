import { assert } from 'chai'
import faker from 'faker'
import validateUUID from 'uuid-validate'
import UUIDGenerator from '../../../src/support/UUIDGenerator.mjs';
import RepositoryImpl from '../../../infra/repository/index.mjs'
import { default as VolumeRepository } from '../../../src/volume/repositories/Volume.mjs'
import CreateVolume from '../../../src/volume/use_cases/CreateVolume.mjs'
import ReplaceVolume from '../../../src/volume/use_cases/ReplaceVolume.mjs'
import SearchVolume from '../../../src/volume/use_cases/SearchVolume.mjs'

describe('Replace Volume', () => {
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
    // console.log('CREATE ===> ', volumeDto)
    assert.isTrue(validateUUID(volumeId.toString(), 4))
  })

  it('Replace volume', async () => {
    const replaceVolumeUseCase = new ReplaceVolume(volumeRepository)
    volumeDto.driver = faker.datatype.number()
    volumeDto.volume = faker.datatype.number()
    volumeDto.temperature = faker.datatype.number()
    volumeDto.route = faker.datatype.number()
    volumeDto.ra = faker.datatype.string()
    volumeDto.trans = faker.datatype.number()
    volumeDto.device = faker.datatype.string()
    volumeDto.driver = faker.datatype.number()
    volumeDto.rejected_volume = faker.datatype.number()
    volumeDto.pk_resfriador = faker.datatype.number()
    volumeDto.status = faker.datatype.number()
    const volumeId = await replaceVolumeUseCase.execute(volumeDto)
    assert.isTrue(validateUUID(UUIDGenerator.from(volumeId).toString(), 4))
  })

  it('Search volume Replace', async () => {
    const searchVolumeUseCase = new SearchVolume(volumeRepository)
    const volume = await searchVolumeUseCase.execute(
      volumeDto.code,
      volumeDto.arrival_date,
      volumeDto.arrival_date
    )

    assert.equal(volumeDto.code, volume[0].code)
    assert.equal(volumeDto.tp, volume[0].tp)
    assert.deepEqual(volumeDto.start_date, volume[0].start_date)
    assert.deepEqual(volumeDto.start_time, volume[0].start_time)
    assert.deepEqual(volumeDto.arrival_date, volume[0].arrival_date)
    assert.deepEqual(volumeDto.arrival_time, volume[0].arrival_time)
    assert.equal(volumeDto.volume, volume[0].volume)
    assert.equal(volumeDto.temperature, volume[0].temperature)
    assert.equal(volumeDto.route, volume[0].route)
    assert.equal(volumeDto.ra, volume[0].ra)
    assert.equal(volumeDto.trans, volume[0].trans)
    assert.equal(volumeDto.device, volume[0].device)
    assert.equal(volumeDto.driver, volume[0].driver)
    assert.equal(volumeDto.rejected_volume, volume[0].rejected_volume)
    assert.equal(volumeDto.pk_resfriador, volume[0].pk_resfriador)
    assert.equal(volumeDto.status, volume[0].status)
  })
})
