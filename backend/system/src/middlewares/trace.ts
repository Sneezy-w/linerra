import { Request, Response, NextFunction } from 'express';
import { v4 as uuidV4 } from 'uuid';

export const trace = async (req: Request, res: Response, next: NextFunction) => {
  const traceId = req.headers['x-amzn-trace-id'] || uuidV4();

  // Also add traceId to response header
  res.set('X-Trace-Id', traceId);

  // Continue to process the request
  next();
};
