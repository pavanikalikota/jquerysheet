/* Jison generated parser */
var tsv = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"grid":3,"rows":4,"EOF":5,"row":6,"END_OF_LINE":7,"END_OF_LINE_EMPTY":8,"string":9,"COLUMN_EMPTY":10,"COLUMN_STRING":11,"BOF":12,"CHAR":13,"QUOTE_ON":14,"QUOTE_OFF":15,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"END_OF_LINE",8:"END_OF_LINE_EMPTY",10:"COLUMN_EMPTY",11:"COLUMN_STRING",12:"BOF",13:"CHAR",14:"QUOTE_ON",15:"QUOTE_OFF"},
productions_: [0,[3,2],[3,1],[4,1],[4,1],[4,1],[4,2],[4,2],[4,3],[4,3],[6,1],[6,1],[6,1],[6,2],[6,2],[6,3],[6,3],[9,1],[9,1],[9,2],[9,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
		return $$[$0-1];
	
break;
case 2:
		return [['']];
	
break;
case 3:
		this.$ = [$$[$0]];
	
break;
case 4:
        this.$ = [];
    
break;
case 5:
        this.$ = [''];
    
break;
case 6:
        this.$ = $$[$0-1];
    
break;
case 7:
        $$[$0-1][$$[$0-1].length - 1].push('');
        this.$ = $$[$0-1];
    
break;
case 8:
        $$[$0-2].push($$[$0]);
        this.$ = $$[$0-2];
    
break;
case 9:
        $$[$0-2][$$[$0-2].length - 1].push('');
        $$[$0-2].push($$[$0]);
        this.$ = $$[$0-2];
    
break;
case 10:
		this.$ = [$$[$0]];
	
break;
case 11:
		this.$ = [''];
	
break;
case 12:
        //this.$ = [];
    
break;
case 13:
        $$[$0-1].push('');
        this.$ = $$[$0-1];
    
break;
case 14:
        //$$[$0-1].push('');
        this.$ = $$[$0-1];
    
break;
case 15:
        $$[$0-2].push('');
        $$[$0-2].push($$[$0]);
        this.$ = $$[$0-2];
    
break;
case 16:
        //$$[$0-2].push('');
        $$[$0-2].push($$[$0]);
        this.$ = $$[$0-2];
    
break;
case 17:
		this.$ = '';
	
break;
case 18:
		this.$ = $$[$0];
	
break;
case 19:
		this.$ = $$[$0-1] + '' + $$[$0];
	
break;
case 20:
		this.$ = $$[$0-1];
	
break;
}
},
table: [{3:1,4:2,5:[1,3],6:4,7:[1,5],8:[1,6],9:7,10:[1,8],11:[1,9],12:[1,10],13:[1,11],14:[1,12]},{1:[3]},{5:[1,13],7:[1,14],8:[1,15]},{1:[2,2]},{5:[2,3],7:[2,3],8:[2,3],10:[1,16],11:[1,17]},{5:[2,4],7:[2,4],8:[2,4]},{5:[2,5],7:[2,5],8:[2,5]},{5:[2,10],7:[2,10],8:[2,10],10:[2,10],11:[2,10],13:[1,18]},{5:[2,11],7:[2,11],8:[2,11],10:[2,11],11:[2,11]},{5:[2,12],7:[2,12],8:[2,12],10:[2,12],11:[2,12]},{5:[2,17],7:[2,17],8:[2,17],10:[2,17],11:[2,17],13:[2,17],15:[2,17]},{5:[2,18],7:[2,18],8:[2,18],10:[2,18],11:[2,18],13:[2,18],15:[2,18]},{9:19,12:[1,10],13:[1,11],14:[1,12]},{1:[2,1]},{5:[2,6],6:20,7:[2,6],8:[2,6],9:7,10:[1,8],11:[1,9],12:[1,10],13:[1,11],14:[1,12]},{5:[2,7],6:21,7:[2,7],8:[2,7],9:7,10:[1,8],11:[1,9],12:[1,10],13:[1,11],14:[1,12]},{5:[2,13],7:[2,13],8:[2,13],9:22,10:[2,13],11:[2,13],12:[1,10],13:[1,11],14:[1,12]},{5:[2,14],7:[2,14],8:[2,14],9:23,10:[2,14],11:[2,14],12:[1,10],13:[1,11],14:[1,12]},{5:[2,19],7:[2,19],8:[2,19],10:[2,19],11:[2,19],13:[2,19],15:[2,19]},{13:[1,18],15:[1,24]},{5:[2,8],7:[2,8],8:[2,8],10:[1,16],11:[1,17]},{5:[2,9],7:[2,9],8:[2,9],10:[1,16],11:[1,17]},{5:[2,15],7:[2,15],8:[2,15],10:[2,15],11:[2,15],13:[1,18]},{5:[2,16],7:[2,16],8:[2,16],10:[2,16],11:[2,16],13:[1,18]},{5:[2,20],7:[2,20],8:[2,20],10:[2,20],11:[2,20],13:[2,20],15:[2,20]}],
defaultActions: {3:[2,2],13:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;
	var oldLinesLength = (oldLines[oldLines.length - lines.length] ? oldLines[oldLines.length - lines.length].length : 0);

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLinesLength - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:return 13;
break;
case 1:return 13;
break;
case 2:
	this.popState();
	this.begin('STRING');
	return 15;

break;
case 3:
	this.popState();
	return 13;

break;
case 4:
	this.begin('SINGLE_QUOTE_ON');
	return 'SINGLE_QUOTE_ON';

break;
case 5:
	this.begin('SINGLE_QUOTE_ON');
	return 14;

break;
case 6:return 13;
break;
case 7:return 13;
break;
case 8:
	this.popState();
	this.begin('STRING');
	return 15;

break;
case 9:
	this.popState();
	return 13;

break;
case 10:
 	this.begin('DOUBLE_QUOTE_ON');
 	return 14;

break;
case 11:
	this.begin('DOUBLE_QUOTE_ON');
	return 14;

break;
case 12:
	return 12;

break;
case 13:
	this.popState();
	return 7;

break;
case 14:
	this.popState();
	return 11;

break;
case 15:return 10;
break;
case 16:return 13;
break;
case 17:return 13;
break;
case 18:return 13;
break;
case 19:return 13;
break;
case 20:return 8;
break;
case 21:
	this.begin('STRING');
	return 13;

break;
case 22:return 5;
break;
}
};
lexer.rules = [/^(?:(\n|\\n))/,/^(?:("))/,/^(?:('))/,/^(?:(?=(\t)))/,/^(?:(:::::'))/,/^(?:((\t|\n|\\n)'))/,/^(?:(\n|\\n))/,/^(?:('))/,/^(?:("))/,/^(?:(?=(\t)))/,/^(?:(:::::"))/,/^(?:((\t|\n|\\n)"))/,/^(?:(:::::))/,/^(?:(\n|\\n))/,/^(?:(\t))/,/^(?:(\t))/,/^(?:(\s))/,/^(?:(.))/,/^(?:(.))/,/^(?:(.))/,/^(?:(\n|\\n))/,/^(?:(.))/,/^(?:$)/];
lexer.conditions = {"SINGLE_QUOTE_ON":{"rules":[0,1,2,3,4,5,10,11,12,15,18,20,21,22],"inclusive":true},"DOUBLE_QUOTE_ON":{"rules":[4,5,6,7,8,9,10,11,12,15,19,20,21,22],"inclusive":true},"STRING":{"rules":[4,5,10,11,12,13,14,15,16,17,20,21,22],"inclusive":true},"INITIAL":{"rules":[4,5,10,11,12,15,20,21,22],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = tsv;
exports.Parser = tsv.Parser;
exports.parse = function () { return tsv.parse.apply(tsv, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}