import Ajv from 'ajv';
import addFormats from 'ajv-formats';

let ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const schemaPriceAverageMonthsSupervisor = {
  type: 'object',
  properties: {
    codSupBuy: {
      type: 'string'
    },
    date: {
      type: 'string',
      format: 'date'
    }
  },
  required: ['date', 'codSupBuy'],
  additionalProperties: false
};

async function validate(data) {
  const validateAverage = ajv.compile(schemaPriceAverageMonthsSupervisor);
  const resultAverage = validateAverage(data);

  if (resultAverage) {
    return resultAverage;
  }
  return validateAverage.errors;
}

export default {
  validate
};
