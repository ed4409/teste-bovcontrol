import { assert } from "chai";
import faker from "faker";
import SumVolumePresenter from "../../../src/volume/presenters/sumVolume.mjs";

describe("Sum Volume", () => {
  it("Sum volume", async () => {
    const volumeDto = [];
    const code = faker.datatype.number();
    volumeDto.push({ volume: 100, code: code });
    volumeDto.push({ volume: 100, code: code });
    volumeDto.push({ volume: 100, code: code });
    const dateFrom = new Date("2022-03-01");
    const dateTo = new Date("2022-04-01");
    const volume = SumVolumePresenter.present(dateFrom, dateTo, volumeDto);
    let resultDateFrom =
      dateFrom.getFullYear() +
      "-" +
      (dateFrom.getMonth() + 1) +
      "-" +
      dateFrom.getDate();
    let resultDateTo =
      dateTo.getFullYear() +
      "-" +
      (dateTo.getMonth() + 1) +
      "-" +
      dateTo.getDate();
    assert.equal(300, volume.sumVolume);
    assert.equal(resultDateFrom, volume.dateFrom);
    assert.equal(resultDateTo, volume.dateTo);
    assert.equal(code, volume.code);
  });
});
