var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  var keywords = 'abs addr and ansichar ansistring array as asm begin boolean byte cardinal ' +
    'case char class comp const constructor currency destructor div do double ' +
    'downto else end except exports extended false file finalization finally ' +
    'for function goto if implementation in inherited int64 initialization ' +
    'integer interface is label library longint longword mod nil not object ' +
    'of on or packed pansichar pansistring pchar pcurrency pdatetime pextended ' +
    'pint64 pointer private procedure program property pshortstring pstring ' +
    'pvariant pwidechar pwidestring protected public published raise real real48 ' +
    'record repeat set shl shortint shortstring shr single smallint string then ' +
    'threadvar to true try type unit until uses val var varirnt while widechar ' +
    'widestring with word write writeln xor';

  this.regexList = [
    {
      regex: /\(\*[\s\S]*?\*\)/gm,
      css: 'comments'
    },
    {
      regex: /{(?!\$)[\s\S]*?}/gm,
      css: 'comments'
    },
    {
      regex: regexLib.singleLineCComments,
      css: 'comments'
    },
    {
      regex: regexLib.singleQuotedString,
      css: 'string'
    },
    {
      regex: /\{\$[a-zA-Z]+ .+\}/g,
      css: 'color1'
    },
    {
      regex: /\b[\d\.]+\b/g,
      css: 'value'
    },
    {
      regex: /\$[a-zA-Z0-9]+\b/g,
      css: 'value'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gmi'),
      css: 'keyword'
    }
		];
};

Brush.prototype = new BrushBase();
Brush.aliases = ['delphi', 'pascal', 'pas'];
module.exports = Brush;