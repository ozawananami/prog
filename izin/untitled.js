// Transcrypt'ed from Python, 2022-01-18 22:58:20
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var surname = ['スミス', 'ジョンソン', 'ウィリアムズ', 'ブラウン', 'ジョーンズ', 'ミラー', 'デイヴィス', 'ガルシア', 'ロドリゲス', 'ウィルソン', 'トーマス', 'ゴンザレス', '織田', '豊臣', '石田', '武田', '上杉'];
export var firstname = ['ルーカス', 'イーサン', 'メイソン', 'オリバー', 'アレキサンダー', 'クリストファー', 'マイケル', 'ピーター', 'ニコラス', 'ロバート', 'エドワード', 'ケネス', 'マット', 'トム', '太郎', '謙信', '翔平'];
export var country = ['フランス', 'ドイツ', '日本', 'イタリア', 'イギリス', '中国'];
export var achieve_adj = ['限りなく透明に近い', 'カノッサの', '市ヶ谷の', '大化の', '血の', '天下分け目の', '神聖なる'];
export var achieve_noun = ['ブルー', '屈辱', '日曜日', '改新', 'ローマ帝国', '戦い', '大妻女子大学', '森'];
export var influ_area = ['全米', '全世界', '全国', '町中', '業界'];
export var gen_name = function () {
	return ''.join ([random.choice (surname), ' ', random.choice (firstname)]);
};
export var gen_lifetime = function () {
	var birthday = random.choice ((function () {
		var __accu0__ = [];
		for (var i = 0; i < 2200; i++) {
			__accu0__.append (i);
		}
		return __accu0__;
	}) ());
	var lifespan = random.randint (0, 100);
	return tuple ([birthday, birthday + lifespan, ''.join ([str (birthday), ' - ', str (birthday + lifespan)])]);
};
export var gen_biography = function () {
	var py_name = gen_name ();
	var __left0__ = gen_lifetime ();
	var b = __left0__ [0];
	var l = __left0__ [1];
	var lifetime = __left0__ [2];
	return '{} ({})\n{}に生まれる。\n{}年に{}した「{}」で{}に名を轟かせた。享年{}歳。\n'.format (py_name, lifetime, random.choice (country), random.randint (b, l), random.choice (['発生', '出版', '発明']), ''.join ([random.choice (achieve_adj), random.choice (achieve_noun)]), random.choice (influ_area), l - b);
};
for (var _ = 0; _ < 10; _++) {
	print (gen_biography ());
}

//# sourceMappingURL=untitled.map