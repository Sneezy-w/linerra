import { Request, Response, NextFunction } from 'express';
import { accessVerifier, idTokenVerifier } from '@linerra/system/src/utils/tokenVerifier';
import logger from '@linerra/system/src/utils/logger';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const payload = await accessVerifier.verify(token);


    // get user info from JWT payload
    if (!req.context) {
      req.context = {};
    }
    req.context.accessToken = token;
    req.context.idToken = req.headers['identity-token'];
    req.context.sessionId = req.headers['session-id'];

    const idTokenPayload = await idTokenVerifier.verify(req.context.idToken as string);
    req.context.user = {
      sub: payload.sub,
      email: payload.email,
      stationId: idTokenPayload['custom:stationId'],
      stationNo: idTokenPayload['custom:stationNo'],
      // more fields can be added as needed
    };

    next();
  } catch (err) {
    logger.error('Token verification failed:', err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
