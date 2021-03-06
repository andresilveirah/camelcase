import test from 'ava';
import m from '.';

test('camelCase', t => {
	t.is(m('foo'), 'foo');
	t.is(m('foo-bar'), 'fooBar');
	t.is(m('foo-bar-baz'), 'fooBarBaz');
	t.is(m('foo--bar'), 'fooBar');
	t.is(m('--foo-bar'), 'fooBar');
	t.is(m('--foo--bar'), 'fooBar');
	t.is(m('FOO-BAR'), 'fooBar');
	t.is(m('FOÈ-BAR'), 'foèBar');
	t.is(m('-foo-bar-'), 'fooBar');
	t.is(m('--foo--bar--'), 'fooBar');
	t.is(m('foo.bar'), 'fooBar');
	t.is(m('foo..bar'), 'fooBar');
	t.is(m('..foo..bar..'), 'fooBar');
	t.is(m('foo_bar'), 'fooBar');
	t.is(m('__foo__bar__'), 'fooBar');
	t.is(m('__foo__bar__'), 'fooBar');
	t.is(m('foo bar'), 'fooBar');
	t.is(m('  foo  bar  '), 'fooBar');
	t.is(m('-'), '-');
	t.is(m(' - '), '-');
	t.is(m('fooBar'), 'fooBar');
	t.is(m('fooBar-baz'), 'fooBarBaz');
	t.is(m('foìBar-baz'), 'foìBarBaz');
	t.is(m('fooBarBaz-bazzy'), 'fooBarBazBazzy');
	t.is(m('FBBazzy'), 'fbBazzy');
	t.is(m('F'), 'f');
	t.is(m('FooBar'), 'fooBar');
	t.is(m('Foo'), 'foo');
	t.is(m('FOO'), 'foo');
	t.is(m(['foo', 'bar']), 'fooBar');
	t.is(m(['foo', '-bar']), 'fooBar');
	t.is(m(['foo', '-bar', 'baz']), 'fooBarBaz');
	t.is(m(['', '']), '');
	t.is(m('--'), '');
	t.is(m(''), '');
	t.is(m('--__--_--_'), '');
	t.is(m(['---_', '--', '', '-_- ']), '');
	t.is(m('foo bar?'), 'fooBar?');
	t.is(m('foo bar!'), 'fooBar!');
	t.is(m('foo bar$'), 'fooBar$');
	t.is(m('foo-bar#'), 'fooBar#');
	t.is(m('XMLHttpRequest'), 'xmlHttpRequest');
	t.is(m('AjaxXMLHttpRequest'), 'ajaxXmlHttpRequest');
	t.is(m('Ajax-XMLHttpRequest'), 'ajaxXmlHttpRequest');
	t.is(m([]), '');
});

test('camelCase with pascalCase option', t => {
	t.is(m('foo', {pascalCase: true}), 'Foo');
	t.is(m('foo-bar', {pascalCase: true}), 'FooBar');
	t.is(m('foo-bar-baz', {pascalCase: true}), 'FooBarBaz');
	t.is(m('foo--bar', {pascalCase: true}), 'FooBar');
	t.is(m('--foo-bar', {pascalCase: true}), 'FooBar');
	t.is(m('--foo--bar', {pascalCase: true}), 'FooBar');
	t.is(m('FOO-BAR', {pascalCase: true}), 'FooBar');
	t.is(m('FOÈ-BAR', {pascalCase: true}), 'FoèBar');
	t.is(m('-foo-bar-', {pascalCase: true}), 'FooBar');
	t.is(m('--foo--bar--', {pascalCase: true}), 'FooBar');
	t.is(m('foo.bar', {pascalCase: true}), 'FooBar');
	t.is(m('foo..bar', {pascalCase: true}), 'FooBar');
	t.is(m('..foo..bar..', {pascalCase: true}), 'FooBar');
	t.is(m('foo_bar', {pascalCase: true}), 'FooBar');
	t.is(m('__foo__bar__', {pascalCase: true}), 'FooBar');
	t.is(m('__foo__bar__', {pascalCase: true}), 'FooBar');
	t.is(m('foo bar', {pascalCase: true}), 'FooBar');
	t.is(m('  foo  bar  ', {pascalCase: true}), 'FooBar');
	t.is(m('-', {pascalCase: true}), '-');
	t.is(m(' - ', {pascalCase: true}), '-');
	t.is(m('fooBar', {pascalCase: true}), 'FooBar');
	t.is(m('fooBar-baz', {pascalCase: true}), 'FooBarBaz');
	t.is(m('foìBar-baz', {pascalCase: true}), 'FoìBarBaz');
	t.is(m('fooBarBaz-bazzy', {pascalCase: true}), 'FooBarBazBazzy');
	t.is(m('FBBazzy', {pascalCase: true}), 'FbBazzy');
	t.is(m('F', {pascalCase: true}), 'F');
	t.is(m('FooBar', {pascalCase: true}), 'FooBar');
	t.is(m('Foo', {pascalCase: true}), 'Foo');
	t.is(m('FOO', {pascalCase: true}), 'Foo');
	t.is(m(['foo', 'bar'], {pascalCase: true}), 'FooBar');
	t.is(m(['foo', '-bar'], {pascalCase: true}), 'FooBar');
	t.is(m(['foo', '-bar', 'baz'], {pascalCase: true}), 'FooBarBaz');
	t.is(m(['', ''], {pascalCase: true}), '');
	t.is(m('--', {pascalCase: true}), '');
	t.is(m('', {pascalCase: true}), '');
	t.is(m('--__--_--_', {pascalCase: true}), '');
	t.is(m(['---_', '--', '', '-_- '], {pascalCase: true}), '');
	t.is(m('foo bar?', {pascalCase: true}), 'FooBar?');
	t.is(m('foo bar!', {pascalCase: true}), 'FooBar!');
	t.is(m('foo bar$', {pascalCase: true}), 'FooBar$');
	t.is(m('foo-bar#', {pascalCase: true}), 'FooBar#');
	t.is(m('XMLHttpRequest', {pascalCase: true}), 'XmlHttpRequest');
	t.is(m('AjaxXMLHttpRequest', {pascalCase: true}), 'AjaxXmlHttpRequest');
	t.is(m('Ajax-XMLHttpRequest', {pascalCase: true}), 'AjaxXmlHttpRequest');
	t.is(m([], {pascalCase: true}), '');
});
