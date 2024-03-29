import * as VolumeController from "./controllers/VolumeController.mjs";
//import * as VolumeController from "./controllers/FazandeiroController.mjs";
import * as VolumeDailyAverageSupervisorController from "./controllers/VolumeDailyAverageSupervisorController.mjs";
import * as VolumePriceAverageSupervisorController from "./controllers/VolumePriceAverageSupervisorController.mjs";
import * as VolumePriceAverageMonthsSupervisorController from "./controllers/VolumePriceAverageMonthsSupervisorController.mjs";
import * as VolumeSupervisorController from "./controllers/VolumeSupervisorController.mjs";
import * as VolumeMetricController from "./controllers/VolumeMetricController.mjs";
import authToken from "../../infra/json_webtoken/authToken.mjs";

import { Router } from "express";

const router = Router();

router
  .route("/v1/volume/variantVolumeMonths")
  .get(VolumeController.variantVolumeMonths);
router
  .route("/v1/volume/mediaVolumeMonths")
  .get(VolumeController.mediaVolumeMonths);
router.route("/v1/volume/mediaVolume").get(VolumeController.mediaVolume);
router.route("/v1/volume/sumVolume").get(VolumeController.sumVolume);
router
  .route("/v1/volumeMetric")
  .get(authToken.validateToken, VolumeMetricController.search);

router.route("/v1/volume").post(VolumeController.store);
router
  .route("/v1/volume/:identifier")
  .delete(authToken.validateToken, VolumeController.remove);
router
  .route("/v1/volume/:identifier")
  .put(authToken.validateToken, VolumeController.update);
router
  .route("/v1/volume/:identifierProducer")
  .get(authToken.validateToken, VolumeController.index);

router
  .route("/v1/volume/Supervisor/sumAndMedia")
  .get(authToken.validateToken, VolumeSupervisorController.search);
router
  .route("/v1/volume/Supervisor/dailyAverage")
  .get(authToken.validateToken, VolumeDailyAverageSupervisorController.search);
router
  .route("/v1/volume/Supervisor/priceAverage")
  .get(authToken.validateToken, VolumePriceAverageSupervisorController.search);

router
  .route("/v1/volume/Supervisor/priceAverage/months")
  .get(VolumePriceAverageMonthsSupervisorController.search); // add authToken.validateToken,
//router.route("/v1/fazendeiro/cadastro").post(FazandeiroController.store);
router;

export default router;
