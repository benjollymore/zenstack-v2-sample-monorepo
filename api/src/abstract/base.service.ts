import { getSessionUser } from "../middleware/session-user";
import {
  getEnhancedPrismaClient,
  type EnhancedPrismaClient,
} from "../database/client";

export abstract class BaseService {
  protected client(): EnhancedPrismaClient {
    const user = getSessionUser();
    return getEnhancedPrismaClient(user);
  }
}
