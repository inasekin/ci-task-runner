import { Router } from 'express';
import { startBuild, getBuildStatus } from '../controllers/build-controller';

const router = Router();

router.post('/', startBuild);
router.get('/:id/status', getBuildStatus);

export default router;
