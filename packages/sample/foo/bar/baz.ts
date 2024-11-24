import { CustomType } from './index.ts';

export function important(): CustomType {
    var ct: CustomType = 'showcase';
    console.log('very! important function. ct: ' + ct);
    return ct;
}
