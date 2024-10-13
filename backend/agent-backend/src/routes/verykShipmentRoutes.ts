import { Router } from "express";
import { VerykShipmentController } from "../controllers/veryk/verykShipmentController";
import { auth } from "../middlewares/auth";

const router = Router();
const verykShipmentController = new VerykShipmentController();

router.use(auth);

router.get("/getAvailableCarriers", verykShipmentController.getAvailableCarriers);
router.post("/quote", verykShipmentController.quote);
router.post("/save", verykShipmentController.save);
router.post("/submit", verykShipmentController.submit);
router.get("/get/:number", verykShipmentController.get);
router.delete("/delete/:number", verykShipmentController.delete);
router.get("/getDetail/:number", verykShipmentController.getDetail);
router.post("/page", verykShipmentController.getPage);
router.get("/shipmentList", verykShipmentController.shipmentList);
router.get("/shipmentDetail/:id", verykShipmentController.shipmentDetail);
router.get("/getSignedLabelUrl", verykShipmentController.getSignedLabelUrl);

export default router;
