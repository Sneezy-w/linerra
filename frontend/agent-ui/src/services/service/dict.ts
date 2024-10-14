import { request } from '@umijs/max';

/** get dicts GET /api/dict/getDicts
 * @param options request config
 * @returns dicts
 */
export async function getDicts(options?: Record<string, any>) {
  return request<API.R<Record<string, API.Service.DictItem[]>>>('/api/dict/getDicts', {
    method: 'GET',
    ...(options || {}),
  });
}
