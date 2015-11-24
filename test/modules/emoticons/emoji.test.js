import {Emoji} from '../../../src/js/modules/emoticons/emoji.es6'
var expect = require('chai').expect;

var options={
	customEmoji:[]
}

var string = 'I am happy :smile:';
var string2 = 'I am happy :smile: :+1:';

var emoji = new Emoji(string, options);
var emoji2 = new Emoji(string2, options);


describe('Emoji Unit test', function () {
	"use strict";

	it('should return a string', function () {
		expect(emoji.process()).to.be.a('string');
	});

	it('should convert a emoji text into emoji', function () {
		expect(emoji.process()).to.equal(`I am happy <span class="emoticon emoticon-smile" title=":smile:"></span>`);
		expect(emoji2.process()).to.equal(
			`I am happy <span class="emoticon emoticon-smile" title=":smile:"></span> <span class="emoticon emoticon-+1" title=":+1:"></span>`
		)
	})
});


