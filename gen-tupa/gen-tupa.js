import { readFileSync, writeFileSync } from 'node:fs';

import TshetUinh from 'tshet-uinh';
import { 推導方案 } from 'tshet-uinh-deriver-tools';

/**
 * @import {原始推導函數} from 'tshet-uinh-deriver-tools'
 */

const tupaDeriver = new 推導方案(
  /** @type {原始推導函數<string, []>} */ (
    new Function('選項', '音韻地位', '字頭', readFileSync('schemata/tupa.js'))
  ),
);
const deriveTupa = tupaDeriver();

const tupaResults = {};
for (const 地位 of TshetUinh.資料.iter音韻地位()) {
  tupaResults[地位.描述] = deriveTupa(地位);
}

writeFileSync('tupa.json', JSON.stringify(tupaResults, undefined, 1));
