"use strict";(()=>{var sq=Object.create;var Wd=Object.defineProperty;var aq=Object.getOwnPropertyDescriptor;var cq=Object.getOwnPropertyNames;var uq=Object.getPrototypeOf,lq=Object.prototype.hasOwnProperty;var ek=(t,e)=>()=>(t&&(e=t(t=0)),e);var E=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),uo=(t,e)=>{for(var r in e)Wd(t,r,{get:e[r],enumerable:!0})},Ud=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of cq(e))!lq.call(t,o)&&o!==r&&Wd(t,o,{get:()=>e[o],enumerable:!(n=aq(e,o))||n.enumerable});return t},_e=(t,e,r)=>(Ud(t,e,"default"),r&&Ud(r,e,"default")),nr=(t,e,r)=>(r=t!=null?sq(uq(t)):{},Ud(e||!t||!t.__esModule?Wd(r,"default",{value:t,enumerable:!0}):r,t)),Ts=t=>Ud(Wd({},"__esModule",{value:!0}),t);var Pp={};uo(Pp,{AnnotatedTextEdit:()=>Ro,ChangeAnnotation:()=>Ji,ChangeAnnotationIdentifier:()=>Xt,CodeAction:()=>ix,CodeActionContext:()=>ox,CodeActionKind:()=>nx,CodeActionTriggerKind:()=>dl,CodeDescription:()=>Iv,CodeLens:()=>sx,Color:()=>Tp,ColorInformation:()=>Ev,ColorPresentation:()=>Dv,Command:()=>Qi,CompletionItem:()=>Bv,CompletionItemKind:()=>Fv,CompletionItemLabelDetails:()=>Hv,CompletionItemTag:()=>jv,CompletionList:()=>zv,CreateFile:()=>sc,DeleteFile:()=>cc,Diagnostic:()=>al,DiagnosticRelatedInformation:()=>_p,DiagnosticSeverity:()=>Av,DiagnosticTag:()=>Ov,DocumentHighlight:()=>Jv,DocumentHighlightKind:()=>Xv,DocumentLink:()=>cx,DocumentSymbol:()=>rx,DocumentUri:()=>kv,EOL:()=>uG,FoldingRange:()=>Nv,FoldingRangeKind:()=>Pv,FormattingOptions:()=>ax,Hover:()=>Gv,InlayHint:()=>yx,InlayHintKind:()=>Ep,InlayHintLabelPart:()=>Dp,InlineCompletionContext:()=>Tx,InlineCompletionItem:()=>xx,InlineCompletionList:()=>wx,InlineCompletionTriggerKind:()=>bx,InlineValueContext:()=>gx,InlineValueEvaluatableExpression:()=>mx,InlineValueText:()=>px,InlineValueVariableLookup:()=>hx,InsertReplaceEdit:()=>Uv,InsertTextFormat:()=>Kv,InsertTextMode:()=>Wv,Location:()=>sl,LocationLink:()=>Cv,MarkedString:()=>ll,MarkupContent:()=>uc,MarkupKind:()=>Cp,OptionalVersionedTextDocumentIdentifier:()=>ul,ParameterInformation:()=>Vv,Position:()=>ke,Range:()=>be,RenameFile:()=>ac,SelectedCompletionInfo:()=>Rx,SelectionRange:()=>ux,SemanticTokenModifiers:()=>dx,SemanticTokenTypes:()=>lx,SemanticTokens:()=>fx,SignatureInformation:()=>Yv,StringValue:()=>vx,SymbolInformation:()=>ex,SymbolKind:()=>Qv,SymbolTag:()=>Zv,TextDocument:()=>kx,TextDocumentEdit:()=>cl,TextDocumentIdentifier:()=>Mv,TextDocumentItem:()=>qv,TextEdit:()=>on,URI:()=>Rp,VersionedTextDocumentIdentifier:()=>Lv,WorkspaceChange:()=>$v,WorkspaceEdit:()=>kp,WorkspaceFolder:()=>_x,WorkspaceSymbol:()=>tx,integer:()=>Sv,uinteger:()=>il});var kv,Rp,Sv,il,ke,be,sl,Cv,Tp,Ev,Dv,Pv,Nv,_p,Av,Ov,Iv,al,Qi,on,Ji,Xt,Ro,cl,sc,ac,cc,kp,ic,Sp,$v,Mv,Lv,ul,qv,Cp,uc,Fv,Kv,jv,Uv,Wv,Hv,Bv,zv,ll,Gv,Vv,Yv,Xv,Jv,Qv,Zv,ex,tx,rx,nx,dl,ox,ix,sx,ax,cx,ux,lx,dx,fx,px,hx,mx,gx,Ep,Dp,yx,vx,xx,wx,bx,Rx,Tx,_x,uG,kx,Sx,_,Zi=ek(()=>{"use strict";(function(t){function e(r){return typeof r=="string"}t.is=e})(kv||(kv={}));(function(t){function e(r){return typeof r=="string"}t.is=e})(Rp||(Rp={}));(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Sv||(Sv={}));(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(il||(il={}));(function(t){function e(n,o){return n===Number.MAX_VALUE&&(n=il.MAX_VALUE),o===Number.MAX_VALUE&&(o=il.MAX_VALUE),{line:n,character:o}}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&_.uinteger(o.line)&&_.uinteger(o.character)}t.is=r})(ke||(ke={}));(function(t){function e(n,o,i,s){if(_.uinteger(n)&&_.uinteger(o)&&_.uinteger(i)&&_.uinteger(s))return{start:ke.create(n,o),end:ke.create(i,s)};if(ke.is(n)&&ke.is(o))return{start:n,end:o};throw new Error(`Range#create called with invalid arguments[${n}, ${o}, ${i}, ${s}]`)}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&ke.is(o.start)&&ke.is(o.end)}t.is=r})(be||(be={}));(function(t){function e(n,o){return{uri:n,range:o}}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&be.is(o.range)&&(_.string(o.uri)||_.undefined(o.uri))}t.is=r})(sl||(sl={}));(function(t){function e(n,o,i,s){return{targetUri:n,targetRange:o,targetSelectionRange:i,originSelectionRange:s}}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&be.is(o.targetRange)&&_.string(o.targetUri)&&be.is(o.targetSelectionRange)&&(be.is(o.originSelectionRange)||_.undefined(o.originSelectionRange))}t.is=r})(Cv||(Cv={}));(function(t){function e(n,o,i,s){return{red:n,green:o,blue:i,alpha:s}}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&_.numberRange(o.red,0,1)&&_.numberRange(o.green,0,1)&&_.numberRange(o.blue,0,1)&&_.numberRange(o.alpha,0,1)}t.is=r})(Tp||(Tp={}));(function(t){function e(n,o){return{range:n,color:o}}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&be.is(o.range)&&Tp.is(o.color)}t.is=r})(Ev||(Ev={}));(function(t){function e(n,o,i){return{label:n,textEdit:o,additionalTextEdits:i}}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&_.string(o.label)&&(_.undefined(o.textEdit)||on.is(o))&&(_.undefined(o.additionalTextEdits)||_.typedArray(o.additionalTextEdits,on.is))}t.is=r})(Dv||(Dv={}));(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(Pv||(Pv={}));(function(t){function e(n,o,i,s,a,c){let u={startLine:n,endLine:o};return _.defined(i)&&(u.startCharacter=i),_.defined(s)&&(u.endCharacter=s),_.defined(a)&&(u.kind=a),_.defined(c)&&(u.collapsedText=c),u}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&_.uinteger(o.startLine)&&_.uinteger(o.startLine)&&(_.undefined(o.startCharacter)||_.uinteger(o.startCharacter))&&(_.undefined(o.endCharacter)||_.uinteger(o.endCharacter))&&(_.undefined(o.kind)||_.string(o.kind))}t.is=r})(Nv||(Nv={}));(function(t){function e(n,o){return{location:n,message:o}}t.create=e;function r(n){let o=n;return _.defined(o)&&sl.is(o.location)&&_.string(o.message)}t.is=r})(_p||(_p={}));(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(Av||(Av={}));(function(t){t.Unnecessary=1,t.Deprecated=2})(Ov||(Ov={}));(function(t){function e(r){let n=r;return _.objectLiteral(n)&&_.string(n.href)}t.is=e})(Iv||(Iv={}));(function(t){function e(n,o,i,s,a,c){let u={range:n,message:o};return _.defined(i)&&(u.severity=i),_.defined(s)&&(u.code=s),_.defined(a)&&(u.source=a),_.defined(c)&&(u.relatedInformation=c),u}t.create=e;function r(n){var o;let i=n;return _.defined(i)&&be.is(i.range)&&_.string(i.message)&&(_.number(i.severity)||_.undefined(i.severity))&&(_.integer(i.code)||_.string(i.code)||_.undefined(i.code))&&(_.undefined(i.codeDescription)||_.string((o=i.codeDescription)===null||o===void 0?void 0:o.href))&&(_.string(i.source)||_.undefined(i.source))&&(_.undefined(i.relatedInformation)||_.typedArray(i.relatedInformation,_p.is))}t.is=r})(al||(al={}));(function(t){function e(n,o,...i){let s={title:n,command:o};return _.defined(i)&&i.length>0&&(s.arguments=i),s}t.create=e;function r(n){let o=n;return _.defined(o)&&_.string(o.title)&&_.string(o.command)}t.is=r})(Qi||(Qi={}));(function(t){function e(i,s){return{range:i,newText:s}}t.replace=e;function r(i,s){return{range:{start:i,end:i},newText:s}}t.insert=r;function n(i){return{range:i,newText:""}}t.del=n;function o(i){let s=i;return _.objectLiteral(s)&&_.string(s.newText)&&be.is(s.range)}t.is=o})(on||(on={}));(function(t){function e(n,o,i){let s={label:n};return o!==void 0&&(s.needsConfirmation=o),i!==void 0&&(s.description=i),s}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&_.string(o.label)&&(_.boolean(o.needsConfirmation)||o.needsConfirmation===void 0)&&(_.string(o.description)||o.description===void 0)}t.is=r})(Ji||(Ji={}));(function(t){function e(r){let n=r;return _.string(n)}t.is=e})(Xt||(Xt={}));(function(t){function e(i,s,a){return{range:i,newText:s,annotationId:a}}t.replace=e;function r(i,s,a){return{range:{start:i,end:i},newText:s,annotationId:a}}t.insert=r;function n(i,s){return{range:i,newText:"",annotationId:s}}t.del=n;function o(i){let s=i;return on.is(s)&&(Ji.is(s.annotationId)||Xt.is(s.annotationId))}t.is=o})(Ro||(Ro={}));(function(t){function e(n,o){return{textDocument:n,edits:o}}t.create=e;function r(n){let o=n;return _.defined(o)&&ul.is(o.textDocument)&&Array.isArray(o.edits)}t.is=r})(cl||(cl={}));(function(t){function e(n,o,i){let s={kind:"create",uri:n};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(s.options=o),i!==void 0&&(s.annotationId=i),s}t.create=e;function r(n){let o=n;return o&&o.kind==="create"&&_.string(o.uri)&&(o.options===void 0||(o.options.overwrite===void 0||_.boolean(o.options.overwrite))&&(o.options.ignoreIfExists===void 0||_.boolean(o.options.ignoreIfExists)))&&(o.annotationId===void 0||Xt.is(o.annotationId))}t.is=r})(sc||(sc={}));(function(t){function e(n,o,i,s){let a={kind:"rename",oldUri:n,newUri:o};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(a.options=i),s!==void 0&&(a.annotationId=s),a}t.create=e;function r(n){let o=n;return o&&o.kind==="rename"&&_.string(o.oldUri)&&_.string(o.newUri)&&(o.options===void 0||(o.options.overwrite===void 0||_.boolean(o.options.overwrite))&&(o.options.ignoreIfExists===void 0||_.boolean(o.options.ignoreIfExists)))&&(o.annotationId===void 0||Xt.is(o.annotationId))}t.is=r})(ac||(ac={}));(function(t){function e(n,o,i){let s={kind:"delete",uri:n};return o!==void 0&&(o.recursive!==void 0||o.ignoreIfNotExists!==void 0)&&(s.options=o),i!==void 0&&(s.annotationId=i),s}t.create=e;function r(n){let o=n;return o&&o.kind==="delete"&&_.string(o.uri)&&(o.options===void 0||(o.options.recursive===void 0||_.boolean(o.options.recursive))&&(o.options.ignoreIfNotExists===void 0||_.boolean(o.options.ignoreIfNotExists)))&&(o.annotationId===void 0||Xt.is(o.annotationId))}t.is=r})(cc||(cc={}));(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(o=>_.string(o.kind)?sc.is(o)||ac.is(o)||cc.is(o):cl.is(o)))}t.is=e})(kp||(kp={}));ic=class{constructor(e,r){this.edits=e,this.changeAnnotations=r}insert(e,r,n){let o,i;if(n===void 0?o=on.insert(e,r):Xt.is(n)?(i=n,o=Ro.insert(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),o=Ro.insert(e,r,i)),this.edits.push(o),i!==void 0)return i}replace(e,r,n){let o,i;if(n===void 0?o=on.replace(e,r):Xt.is(n)?(i=n,o=Ro.replace(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),o=Ro.replace(e,r,i)),this.edits.push(o),i!==void 0)return i}delete(e,r){let n,o;if(r===void 0?n=on.del(e):Xt.is(r)?(o=r,n=Ro.del(e,r)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(r),n=Ro.del(e,o)),this.edits.push(n),o!==void 0)return o}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}},Sp=class{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,r){let n;if(Xt.is(e)?n=e:(n=this.nextId(),r=e),this._annotations[n]!==void 0)throw new Error(`Id ${n} is already in use.`);if(r===void 0)throw new Error(`No annotation provided for id ${n}`);return this._annotations[n]=r,this._size++,n}nextId(){return this._counter++,this._counter.toString()}},$v=class{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new Sp(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(r=>{if(cl.is(r)){let n=new ic(r.edits,this._changeAnnotations);this._textEditChanges[r.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(r=>{let n=new ic(e.changes[r]);this._textEditChanges[r]=n})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(ul.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let r={uri:e.uri,version:e.version},n=this._textEditChanges[r.uri];if(!n){let o=[],i={textDocument:r,edits:o};this._workspaceEdit.documentChanges.push(i),n=new ic(o,this._changeAnnotations),this._textEditChanges[r.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let r=this._textEditChanges[e];if(!r){let n=[];this._workspaceEdit.changes[e]=n,r=new ic(n),this._textEditChanges[e]=r}return r}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Sp,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let o;Ji.is(r)||Xt.is(r)?o=r:n=r;let i,s;if(o===void 0?i=sc.create(e,n):(s=Xt.is(o)?o:this._changeAnnotations.manage(o),i=sc.create(e,n,s)),this._workspaceEdit.documentChanges.push(i),s!==void 0)return s}renameFile(e,r,n,o){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;Ji.is(n)||Xt.is(n)?i=n:o=n;let s,a;if(i===void 0?s=ac.create(e,r,o):(a=Xt.is(i)?i:this._changeAnnotations.manage(i),s=ac.create(e,r,o,a)),this._workspaceEdit.documentChanges.push(s),a!==void 0)return a}deleteFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let o;Ji.is(r)||Xt.is(r)?o=r:n=r;let i,s;if(o===void 0?i=cc.create(e,n):(s=Xt.is(o)?o:this._changeAnnotations.manage(o),i=cc.create(e,n,s)),this._workspaceEdit.documentChanges.push(i),s!==void 0)return s}};(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let o=n;return _.defined(o)&&_.string(o.uri)}t.is=r})(Mv||(Mv={}));(function(t){function e(n,o){return{uri:n,version:o}}t.create=e;function r(n){let o=n;return _.defined(o)&&_.string(o.uri)&&_.integer(o.version)}t.is=r})(Lv||(Lv={}));(function(t){function e(n,o){return{uri:n,version:o}}t.create=e;function r(n){let o=n;return _.defined(o)&&_.string(o.uri)&&(o.version===null||_.integer(o.version))}t.is=r})(ul||(ul={}));(function(t){function e(n,o,i,s){return{uri:n,languageId:o,version:i,text:s}}t.create=e;function r(n){let o=n;return _.defined(o)&&_.string(o.uri)&&_.string(o.languageId)&&_.integer(o.version)&&_.string(o.text)}t.is=r})(qv||(qv={}));(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(Cp||(Cp={}));(function(t){function e(r){let n=r;return _.objectLiteral(r)&&Cp.is(n.kind)&&_.string(n.value)}t.is=e})(uc||(uc={}));(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(Fv||(Fv={}));(function(t){t.PlainText=1,t.Snippet=2})(Kv||(Kv={}));(function(t){t.Deprecated=1})(jv||(jv={}));(function(t){function e(n,o,i){return{newText:n,insert:o,replace:i}}t.create=e;function r(n){let o=n;return o&&_.string(o.newText)&&be.is(o.insert)&&be.is(o.replace)}t.is=r})(Uv||(Uv={}));(function(t){t.asIs=1,t.adjustIndentation=2})(Wv||(Wv={}));(function(t){function e(r){let n=r;return n&&(_.string(n.detail)||n.detail===void 0)&&(_.string(n.description)||n.description===void 0)}t.is=e})(Hv||(Hv={}));(function(t){function e(r){return{label:r}}t.create=e})(Bv||(Bv={}));(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(zv||(zv={}));(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let o=n;return _.string(o)||_.objectLiteral(o)&&_.string(o.language)&&_.string(o.value)}t.is=r})(ll||(ll={}));(function(t){function e(r){let n=r;return!!n&&_.objectLiteral(n)&&(uc.is(n.contents)||ll.is(n.contents)||_.typedArray(n.contents,ll.is))&&(r.range===void 0||be.is(r.range))}t.is=e})(Gv||(Gv={}));(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(Vv||(Vv={}));(function(t){function e(r,n,...o){let i={label:r};return _.defined(n)&&(i.documentation=n),_.defined(o)?i.parameters=o:i.parameters=[],i}t.create=e})(Yv||(Yv={}));(function(t){t.Text=1,t.Read=2,t.Write=3})(Xv||(Xv={}));(function(t){function e(r,n){let o={range:r};return _.number(n)&&(o.kind=n),o}t.create=e})(Jv||(Jv={}));(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(Qv||(Qv={}));(function(t){t.Deprecated=1})(Zv||(Zv={}));(function(t){function e(r,n,o,i,s){let a={name:r,kind:n,location:{uri:i,range:o}};return s&&(a.containerName=s),a}t.create=e})(ex||(ex={}));(function(t){function e(r,n,o,i){return i!==void 0?{name:r,kind:n,location:{uri:o,range:i}}:{name:r,kind:n,location:{uri:o}}}t.create=e})(tx||(tx={}));(function(t){function e(n,o,i,s,a,c){let u={name:n,detail:o,kind:i,range:s,selectionRange:a};return c!==void 0&&(u.children=c),u}t.create=e;function r(n){let o=n;return o&&_.string(o.name)&&_.number(o.kind)&&be.is(o.range)&&be.is(o.selectionRange)&&(o.detail===void 0||_.string(o.detail))&&(o.deprecated===void 0||_.boolean(o.deprecated))&&(o.children===void 0||Array.isArray(o.children))&&(o.tags===void 0||Array.isArray(o.tags))}t.is=r})(rx||(rx={}));(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(nx||(nx={}));(function(t){t.Invoked=1,t.Automatic=2})(dl||(dl={}));(function(t){function e(n,o,i){let s={diagnostics:n};return o!=null&&(s.only=o),i!=null&&(s.triggerKind=i),s}t.create=e;function r(n){let o=n;return _.defined(o)&&_.typedArray(o.diagnostics,al.is)&&(o.only===void 0||_.typedArray(o.only,_.string))&&(o.triggerKind===void 0||o.triggerKind===dl.Invoked||o.triggerKind===dl.Automatic)}t.is=r})(ox||(ox={}));(function(t){function e(n,o,i){let s={title:n},a=!0;return typeof o=="string"?(a=!1,s.kind=o):Qi.is(o)?s.command=o:s.edit=o,a&&i!==void 0&&(s.kind=i),s}t.create=e;function r(n){let o=n;return o&&_.string(o.title)&&(o.diagnostics===void 0||_.typedArray(o.diagnostics,al.is))&&(o.kind===void 0||_.string(o.kind))&&(o.edit!==void 0||o.command!==void 0)&&(o.command===void 0||Qi.is(o.command))&&(o.isPreferred===void 0||_.boolean(o.isPreferred))&&(o.edit===void 0||kp.is(o.edit))}t.is=r})(ix||(ix={}));(function(t){function e(n,o){let i={range:n};return _.defined(o)&&(i.data=o),i}t.create=e;function r(n){let o=n;return _.defined(o)&&be.is(o.range)&&(_.undefined(o.command)||Qi.is(o.command))}t.is=r})(sx||(sx={}));(function(t){function e(n,o){return{tabSize:n,insertSpaces:o}}t.create=e;function r(n){let o=n;return _.defined(o)&&_.uinteger(o.tabSize)&&_.boolean(o.insertSpaces)}t.is=r})(ax||(ax={}));(function(t){function e(n,o,i){return{range:n,target:o,data:i}}t.create=e;function r(n){let o=n;return _.defined(o)&&be.is(o.range)&&(_.undefined(o.target)||_.string(o.target))}t.is=r})(cx||(cx={}));(function(t){function e(n,o){return{range:n,parent:o}}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&be.is(o.range)&&(o.parent===void 0||t.is(o.parent))}t.is=r})(ux||(ux={}));(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(lx||(lx={}));(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(dx||(dx={}));(function(t){function e(r){let n=r;return _.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(fx||(fx={}));(function(t){function e(n,o){return{range:n,text:o}}t.create=e;function r(n){let o=n;return o!=null&&be.is(o.range)&&_.string(o.text)}t.is=r})(px||(px={}));(function(t){function e(n,o,i){return{range:n,variableName:o,caseSensitiveLookup:i}}t.create=e;function r(n){let o=n;return o!=null&&be.is(o.range)&&_.boolean(o.caseSensitiveLookup)&&(_.string(o.variableName)||o.variableName===void 0)}t.is=r})(hx||(hx={}));(function(t){function e(n,o){return{range:n,expression:o}}t.create=e;function r(n){let o=n;return o!=null&&be.is(o.range)&&(_.string(o.expression)||o.expression===void 0)}t.is=r})(mx||(mx={}));(function(t){function e(n,o){return{frameId:n,stoppedLocation:o}}t.create=e;function r(n){let o=n;return _.defined(o)&&be.is(n.stoppedLocation)}t.is=r})(gx||(gx={}));(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(Ep||(Ep={}));(function(t){function e(n){return{value:n}}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&(o.tooltip===void 0||_.string(o.tooltip)||uc.is(o.tooltip))&&(o.location===void 0||sl.is(o.location))&&(o.command===void 0||Qi.is(o.command))}t.is=r})(Dp||(Dp={}));(function(t){function e(n,o,i){let s={position:n,label:o};return i!==void 0&&(s.kind=i),s}t.create=e;function r(n){let o=n;return _.objectLiteral(o)&&ke.is(o.position)&&(_.string(o.label)||_.typedArray(o.label,Dp.is))&&(o.kind===void 0||Ep.is(o.kind))&&o.textEdits===void 0||_.typedArray(o.textEdits,on.is)&&(o.tooltip===void 0||_.string(o.tooltip)||uc.is(o.tooltip))&&(o.paddingLeft===void 0||_.boolean(o.paddingLeft))&&(o.paddingRight===void 0||_.boolean(o.paddingRight))}t.is=r})(yx||(yx={}));(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(vx||(vx={}));(function(t){function e(r,n,o,i){return{insertText:r,filterText:n,range:o,command:i}}t.create=e})(xx||(xx={}));(function(t){function e(r){return{items:r}}t.create=e})(wx||(wx={}));(function(t){t.Invoked=0,t.Automatic=1})(bx||(bx={}));(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(Rx||(Rx={}));(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(Tx||(Tx={}));(function(t){function e(r){let n=r;return _.objectLiteral(n)&&Rp.is(n.uri)&&_.string(n.name)}t.is=e})(_x||(_x={}));uG=[`
`,`\r
`,"\r"];(function(t){function e(i,s,a,c){return new Sx(i,s,a,c)}t.create=e;function r(i){let s=i;return!!(_.defined(s)&&_.string(s.uri)&&(_.undefined(s.languageId)||_.string(s.languageId))&&_.uinteger(s.lineCount)&&_.func(s.getText)&&_.func(s.positionAt)&&_.func(s.offsetAt))}t.is=r;function n(i,s){let a=i.getText(),c=o(s,(d,h)=>{let g=d.range.start.line-h.range.start.line;return g===0?d.range.start.character-h.range.start.character:g}),u=a.length;for(let d=c.length-1;d>=0;d--){let h=c[d],g=i.offsetAt(h.range.start),m=i.offsetAt(h.range.end);if(m<=u)a=a.substring(0,g)+h.newText+a.substring(m,a.length);else throw new Error("Overlapping edit");u=g}return a}t.applyEdits=n;function o(i,s){if(i.length<=1)return i;let a=i.length/2|0,c=i.slice(0,a),u=i.slice(a);o(c,s),o(u,s);let d=0,h=0,g=0;for(;d<c.length&&h<u.length;)s(c[d],u[h])<=0?i[g++]=c[d++]:i[g++]=u[h++];for(;d<c.length;)i[g++]=c[d++];for(;h<u.length;)i[g++]=u[h++];return i}})(kx||(kx={}));Sx=class{constructor(e,r,n,o){this._uri=e,this._languageId=r,this._version=n,this._content=o,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let o=0;o<r.length;o++){n&&(e.push(o),n=!1);let i=r.charAt(o);n=i==="\r"||i===`
`,i==="\r"&&o+1<r.length&&r.charAt(o+1)===`
`&&o++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,o=r.length;if(o===0)return ke.create(0,e);for(;n<o;){let s=Math.floor((n+o)/2);r[s]>e?o=s:n=s+1}let i=n-1;return ke.create(i,e-r[i])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],o=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,o),n)}get lineCount(){return this.getLineOffsets().length}};(function(t){let e=Object.prototype.toString;function r(m){return typeof m<"u"}t.defined=r;function n(m){return typeof m>"u"}t.undefined=n;function o(m){return m===!0||m===!1}t.boolean=o;function i(m){return e.call(m)==="[object String]"}t.string=i;function s(m){return e.call(m)==="[object Number]"}t.number=s;function a(m,b,T){return e.call(m)==="[object Number]"&&b<=m&&m<=T}t.numberRange=a;function c(m){return e.call(m)==="[object Number]"&&-2147483648<=m&&m<=2147483647}t.integer=c;function u(m){return e.call(m)==="[object Number]"&&0<=m&&m<=2147483647}t.uinteger=u;function d(m){return e.call(m)==="[object Function]"}t.func=d;function h(m){return m!==null&&typeof m=="object"}t.objectLiteral=h;function g(m,b){return Array.isArray(m)&&m.every(b)}t.typedArray=g})(_||(_={}))});var Qo=E($x=>{"use strict";Object.defineProperty($x,"__esModule",{value:!0});var Ox;function Ix(){if(Ox===void 0)throw new Error("No runtime abstraction layer installed");return Ox}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");Ox=r}t.install=e})(Ix||(Ix={}));$x.default=Ix});var fc=E(ar=>{"use strict";Object.defineProperty(ar,"__esModule",{value:!0});ar.stringArray=ar.array=ar.func=ar.error=ar.number=ar.string=ar.boolean=void 0;function wG(t){return t===!0||t===!1}ar.boolean=wG;function FD(t){return typeof t=="string"||t instanceof String}ar.string=FD;function bG(t){return typeof t=="number"||t instanceof Number}ar.number=bG;function RG(t){return t instanceof Error}ar.error=RG;function TG(t){return typeof t=="function"}ar.func=TG;function KD(t){return Array.isArray(t)}ar.array=KD;function _G(t){return KD(t)&&t.every(e=>FD(e))}ar.stringArray=_G});var ns=E(pc=>{"use strict";Object.defineProperty(pc,"__esModule",{value:!0});pc.Emitter=pc.Event=void 0;var kG=Qo(),jD;(function(t){let e={dispose(){}};t.None=function(){return e}})(jD||(pc.Event=jD={}));var Mx=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let o=0,i=this._callbacks.length;o<i;o++)if(this._callbacks[o]===e)if(this._contexts[o]===r){this._callbacks.splice(o,1),this._contexts.splice(o,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),o=this._contexts.slice(0);for(let i=0,s=n.length;i<s;i++)try{r.push(n[i].apply(o[i],e))}catch(a){(0,kG.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},$p=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Mx),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let o={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),o.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(o),o}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};pc.Emitter=$p;$p._noop=function(){}});var xl=E(hc=>{"use strict";Object.defineProperty(hc,"__esModule",{value:!0});hc.CancellationTokenSource=hc.CancellationToken=void 0;var SG=Qo(),CG=fc(),Lx=ns(),Mp;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Lx.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Lx.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||CG.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Mp||(hc.CancellationToken=Mp={}));var EG=Object.freeze(function(t,e){let r=(0,SG.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Lp=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?EG:(this._emitter||(this._emitter=new Lx.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},qx=class{get token(){return this._token||(this._token=new Lp),this._token}cancel(){this._token?this._token.cancel():this._token=Mp.Cancelled}dispose(){this._token?this._token instanceof Lp&&this._token.dispose():this._token=Mp.None}};hc.CancellationTokenSource=qx});var Tw=E(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.Message=Q.NotificationType9=Q.NotificationType8=Q.NotificationType7=Q.NotificationType6=Q.NotificationType5=Q.NotificationType4=Q.NotificationType3=Q.NotificationType2=Q.NotificationType1=Q.NotificationType0=Q.NotificationType=Q.RequestType9=Q.RequestType8=Q.RequestType7=Q.RequestType6=Q.RequestType5=Q.RequestType4=Q.RequestType3=Q.RequestType2=Q.RequestType1=Q.RequestType=Q.RequestType0=Q.AbstractMessageSignature=Q.ParameterStructures=Q.ResponseError=Q.ErrorCodes=void 0;var as=fc(),Zx;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(Zx||(Q.ErrorCodes=Zx={}));var ew=class t extends Error{constructor(e,r,n){super(r),this.code=as.number(e)?e:Zx.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};Q.ResponseError=ew;var Or=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};Q.ParameterStructures=Or;Or.auto=new Or("auto");Or.byPosition=new Or("byPosition");Or.byName=new Or("byName");var Xe=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Or.auto}};Q.AbstractMessageSignature=Xe;var tw=class extends Xe{constructor(e){super(e,0)}};Q.RequestType0=tw;var rw=class extends Xe{constructor(e,r=Or.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Q.RequestType=rw;var nw=class extends Xe{constructor(e,r=Or.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Q.RequestType1=nw;var ow=class extends Xe{constructor(e){super(e,2)}};Q.RequestType2=ow;var iw=class extends Xe{constructor(e){super(e,3)}};Q.RequestType3=iw;var sw=class extends Xe{constructor(e){super(e,4)}};Q.RequestType4=sw;var aw=class extends Xe{constructor(e){super(e,5)}};Q.RequestType5=aw;var cw=class extends Xe{constructor(e){super(e,6)}};Q.RequestType6=cw;var uw=class extends Xe{constructor(e){super(e,7)}};Q.RequestType7=uw;var lw=class extends Xe{constructor(e){super(e,8)}};Q.RequestType8=lw;var dw=class extends Xe{constructor(e){super(e,9)}};Q.RequestType9=dw;var fw=class extends Xe{constructor(e,r=Or.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Q.NotificationType=fw;var pw=class extends Xe{constructor(e){super(e,0)}};Q.NotificationType0=pw;var hw=class extends Xe{constructor(e,r=Or.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Q.NotificationType1=hw;var mw=class extends Xe{constructor(e){super(e,2)}};Q.NotificationType2=mw;var gw=class extends Xe{constructor(e){super(e,3)}};Q.NotificationType3=gw;var yw=class extends Xe{constructor(e){super(e,4)}};Q.NotificationType4=yw;var vw=class extends Xe{constructor(e){super(e,5)}};Q.NotificationType5=vw;var xw=class extends Xe{constructor(e){super(e,6)}};Q.NotificationType6=xw;var ww=class extends Xe{constructor(e){super(e,7)}};Q.NotificationType7=ww;var bw=class extends Xe{constructor(e){super(e,8)}};Q.NotificationType8=bw;var Rw=class extends Xe{constructor(e){super(e,9)}};Q.NotificationType9=Rw;var aP;(function(t){function e(o){let i=o;return i&&as.string(i.method)&&(as.string(i.id)||as.number(i.id))}t.isRequest=e;function r(o){let i=o;return i&&as.string(i.method)&&o.id===void 0}t.isNotification=r;function n(o){let i=o;return i&&(i.result!==void 0||!!i.error)&&(as.string(i.id)||as.number(i.id)||i.id===null)}t.isResponse=n})(aP||(Q.Message=aP={}))});var kw=E(ti=>{"use strict";var cP;Object.defineProperty(ti,"__esModule",{value:!0});ti.LRUCache=ti.LinkedMap=ti.Touch=void 0;var cr;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(cr||(ti.Touch=cr={}));var Vp=class{constructor(){this[cP]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=cr.None){let n=this._map.get(e);if(n)return r!==cr.None&&this.touch(n,r),n.value}set(e,r,n=cr.None){let o=this._map.get(e);if(o)o.value=r,n!==cr.None&&this.touch(o,n);else{switch(o={key:e,value:r,next:void 0,previous:void 0},n){case cr.None:this.addItemLast(o);break;case cr.First:this.addItemFirst(o);break;case cr.Last:this.addItemLast(o);break;default:this.addItemLast(o);break}this._map.set(e,o),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,o=this._head;for(;o;){if(r?e.bind(r)(o.value,o.key,this):e(o.value,o.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");o=o.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let o={value:r.key,done:!1};return r=r.next,o}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let o={value:r.value,done:!1};return r=r.next,o}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let o={value:[r.key,r.value],done:!1};return r=r.next,o}else return{value:void 0,done:!0}}};return n}[(cP=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==cr.First&&r!==cr.Last)){if(r===cr.First){if(e===this._head)return;let n=e.next,o=e.previous;e===this._tail?(o.next=void 0,this._tail=o):(n.previous=o,o.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===cr.Last){if(e===this._tail)return;let n=e.next,o=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=o,o.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};ti.LinkedMap=Vp;var _w=class extends Vp{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=cr.AsNew){return super.get(e,r)}peek(e){return super.get(e,cr.None)}set(e,r){return super.set(e,r,cr.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};ti.LRUCache=_w});var lP=E(Yp=>{"use strict";Object.defineProperty(Yp,"__esModule",{value:!0});Yp.Disposable=void 0;var uP;(function(t){function e(r){return{dispose:r}}t.create=e})(uP||(Yp.Disposable=uP={}))});var dP=E(bc=>{"use strict";Object.defineProperty(bc,"__esModule",{value:!0});bc.SharedArrayReceiverStrategy=bc.SharedArraySenderStrategy=void 0;var zG=xl(),Ql;(function(t){t.Continue=0,t.Cancelled=1})(Ql||(Ql={}));var Sw=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=Ql.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let o=new Int32Array(n,0,1);Atomics.store(o,0,Ql.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};bc.SharedArraySenderStrategy=Sw;var Cw=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Ql.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},Ew=class{constructor(e){this.token=new Cw(e)}cancel(){}dispose(){}},Dw=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new zG.CancellationTokenSource:new Ew(r)}};bc.SharedArrayReceiverStrategy=Dw});var Nw=E(Xp=>{"use strict";Object.defineProperty(Xp,"__esModule",{value:!0});Xp.Semaphore=void 0;var GG=Qo(),Pw=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,GG.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Xp.Semaphore=Pw});var pP=E(ri=>{"use strict";Object.defineProperty(ri,"__esModule",{value:!0});ri.ReadableStreamMessageReader=ri.AbstractMessageReader=ri.MessageReader=void 0;var Ow=Qo(),Rc=fc(),Aw=ns(),VG=Nw(),fP;(function(t){function e(r){let n=r;return n&&Rc.func(n.listen)&&Rc.func(n.dispose)&&Rc.func(n.onError)&&Rc.func(n.onClose)&&Rc.func(n.onPartialMessage)}t.is=e})(fP||(ri.MessageReader=fP={}));var Jp=class{constructor(){this.errorEmitter=new Aw.Emitter,this.closeEmitter=new Aw.Emitter,this.partialMessageEmitter=new Aw.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${Rc.string(e.message)?e.message:"unknown"}`)}};ri.AbstractMessageReader=Jp;var Iw;(function(t){function e(r){let n,o,i,s=new Map,a,c=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(i=r.contentDecoder,s.set(i.name,i)),r.contentDecoders!==void 0)for(let u of r.contentDecoders)s.set(u.name,u);if(r.contentTypeDecoder!==void 0&&(a=r.contentTypeDecoder,c.set(a.name,a)),r.contentTypeDecoders!==void 0)for(let u of r.contentTypeDecoders)c.set(u.name,u)}return a===void 0&&(a=(0,Ow.default)().applicationJson.decoder,c.set(a.name,a)),{charset:n,contentDecoder:i,contentDecoders:s,contentTypeDecoder:a,contentTypeDecoders:c}}t.fromOptions=e})(Iw||(Iw={}));var $w=class extends Jp{constructor(e,r){super(),this.readable=e,this.options=Iw.fromOptions(r),this.buffer=(0,Ow.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new VG.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let o=n.get("content-length");if(!o){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let i=parseInt(o);if(isNaN(i)){this.fireError(new Error(`Content-Length value must be a number. Got ${o}`));return}this.nextMessageLength=i}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,o=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(o)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Ow.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};ri.ReadableStreamMessageReader=$w});var vP=E(ni=>{"use strict";Object.defineProperty(ni,"__esModule",{value:!0});ni.WriteableStreamMessageWriter=ni.AbstractMessageWriter=ni.MessageWriter=void 0;var hP=Qo(),Zl=fc(),YG=Nw(),mP=ns(),XG="Content-Length: ",gP=`\r
`,yP;(function(t){function e(r){let n=r;return n&&Zl.func(n.dispose)&&Zl.func(n.onClose)&&Zl.func(n.onError)&&Zl.func(n.write)}t.is=e})(yP||(ni.MessageWriter=yP={}));var Qp=class{constructor(){this.errorEmitter=new mP.Emitter,this.closeEmitter=new mP.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${Zl.string(e.message)?e.message:"unknown"}`)}};ni.AbstractMessageWriter=Qp;var Mw;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,hP.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,hP.default)().applicationJson.encoder}}t.fromOptions=e})(Mw||(Mw={}));var Lw=class extends Qp{constructor(e,r){super(),this.writable=e,this.options=Mw.fromOptions(r),this.errorCount=0,this.writeSemaphore=new YG.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let o=[];return o.push(XG,n.byteLength.toString(),gP),o.push(gP),this.doWrite(e,o,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(o){return this.handleError(o,e),Promise.reject(o)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};ni.WriteableStreamMessageWriter=Lw});var xP=E(Zp=>{"use strict";Object.defineProperty(Zp,"__esModule",{value:!0});Zp.AbstractMessageBuffer=void 0;var JG=13,QG=10,ZG=`\r
`,qw=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,o=0,i=0;e:for(;n<this._chunks.length;){let u=this._chunks[n];for(o=0;o<u.length;){switch(u[o]){case JG:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case QG:switch(r){case 1:r=2;break;case 3:r=4,o++;break e;default:r=0}break;default:r=0}o++}i+=u.byteLength,n++}if(r!==4)return;let s=this._read(i+o),a=new Map,c=this.toString(s,"ascii").split(ZG);if(c.length<2)return a;for(let u=0;u<c.length-2;u++){let d=c[u],h=d.indexOf(":");if(h===-1)throw new Error(`Message header must separate key and value using ':'
${d}`);let g=d.substr(0,h),m=d.substr(h+1).trim();a.set(e?g.toLowerCase():g,m)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let i=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(i)}if(this._chunks[0].byteLength>e){let i=this._chunks[0],s=this.asNative(i,e);return this._chunks[0]=i.slice(e),this._totalLength-=e,s}let r=this.allocNative(e),n=0,o=0;for(;e>0;){let i=this._chunks[o];if(i.byteLength>e){let s=i.slice(0,e);r.set(s,n),n+=e,this._chunks[o]=i.slice(e),this._totalLength-=e,e-=e}else r.set(i,n),n+=i.byteLength,this._chunks.shift(),this._totalLength-=i.byteLength,e-=i.byteLength}return r}};Zp.AbstractMessageBuffer=qw});var _P=E(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.createMessageConnection=he.ConnectionOptions=he.MessageStrategy=he.CancellationStrategy=he.CancellationSenderStrategy=he.CancellationReceiverStrategy=he.RequestCancellationReceiverStrategy=he.IdCancellationReceiverStrategy=he.ConnectionStrategy=he.ConnectionError=he.ConnectionErrors=he.LogTraceNotification=he.SetTraceNotification=he.TraceFormat=he.TraceValues=he.Trace=he.NullLogger=he.ProgressType=he.ProgressToken=void 0;var wP=Qo(),lt=fc(),se=Tw(),bP=kw(),ed=ns(),Fw=xl(),nd;(function(t){t.type=new se.NotificationType("$/cancelRequest")})(nd||(nd={}));var Kw;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(Kw||(he.ProgressToken=Kw={}));var td;(function(t){t.type=new se.NotificationType("$/progress")})(td||(td={}));var jw=class{constructor(){}};he.ProgressType=jw;var Uw;(function(t){function e(r){return lt.func(r)}t.is=e})(Uw||(Uw={}));he.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var Pe;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(Pe||(he.Trace=Pe={}));var RP;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(RP||(he.TraceValues=RP={}));(function(t){function e(n){if(!lt.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(Pe||(he.Trace=Pe={}));var Xr;(function(t){t.Text="text",t.JSON="json"})(Xr||(he.TraceFormat=Xr={}));(function(t){function e(r){return lt.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(Xr||(he.TraceFormat=Xr={}));var Ww;(function(t){t.type=new se.NotificationType("$/setTrace")})(Ww||(he.SetTraceNotification=Ww={}));var eh;(function(t){t.type=new se.NotificationType("$/logTrace")})(eh||(he.LogTraceNotification=eh={}));var rd;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(rd||(he.ConnectionErrors=rd={}));var Tc=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};he.ConnectionError=Tc;var Hw;(function(t){function e(r){let n=r;return n&&lt.func(n.cancelUndispatched)}t.is=e})(Hw||(he.ConnectionStrategy=Hw={}));var th;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&lt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||lt.func(n.dispose))}t.is=e})(th||(he.IdCancellationReceiverStrategy=th={}));var Bw;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&lt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||lt.func(n.dispose))}t.is=e})(Bw||(he.RequestCancellationReceiverStrategy=Bw={}));var rh;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Fw.CancellationTokenSource}});function e(r){return th.is(r)||Bw.is(r)}t.is=e})(rh||(he.CancellationReceiverStrategy=rh={}));var nh;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(nd.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&lt.func(n.sendCancellation)&&lt.func(n.cleanup)}t.is=e})(nh||(he.CancellationSenderStrategy=nh={}));var oh;(function(t){t.Message=Object.freeze({receiver:rh.Message,sender:nh.Message});function e(r){let n=r;return n&&rh.is(n.receiver)&&nh.is(n.sender)}t.is=e})(oh||(he.CancellationStrategy=oh={}));var ih;(function(t){function e(r){let n=r;return n&&lt.func(n.handleMessage)}t.is=e})(ih||(he.MessageStrategy=ih={}));var TP;(function(t){function e(r){let n=r;return n&&(oh.is(n.cancellationStrategy)||Hw.is(n.connectionStrategy)||ih.is(n.messageStrategy))}t.is=e})(TP||(he.ConnectionOptions=TP={}));var Dn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(Dn||(Dn={}));function e2(t,e,r,n){let o=r!==void 0?r:he.NullLogger,i=0,s=0,a=0,c="2.0",u,d=new Map,h,g=new Map,m=new Map,b,T=new bP.LinkedMap,C=new Map,R=new Set,p=new Map,f=Pe.Off,w=Xr.Text,O,G=Dn.New,it=new ed.Emitter,Qe=new ed.Emitter,tr=new ed.Emitter,Wt=new ed.Emitter,q=new ed.Emitter,D=n&&n.cancellationStrategy?n.cancellationStrategy:oh.Message;function V(l){if(l===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+l.toString()}function U(l){return l===null?"res-unknown-"+(++a).toString():"res-"+l.toString()}function we(){return"not-"+(++s).toString()}function te(l,x){se.Message.isRequest(x)?l.set(V(x.id),x):se.Message.isResponse(x)?l.set(U(x.id),x):l.set(we(),x)}function oe(l){}function W(){return G===Dn.Listening}function I(){return G===Dn.Closed}function re(){return G===Dn.Disposed}function jr(){(G===Dn.New||G===Dn.Listening)&&(G=Dn.Closed,Qe.fire(void 0))}function ws(l){it.fire([l,void 0,void 0])}function pu(l){it.fire(l)}t.onClose(jr),t.onError(ws),e.onClose(jr),e.onError(pu);function Po(){b||T.size===0||(b=(0,wP.default)().timer.setImmediate(()=>{b=void 0,bs()}))}function Ht(l){se.Message.isRequest(l)?rr(l):se.Message.isNotification(l)?Bt(l):se.Message.isResponse(l)?In(l):Ur(l)}function bs(){if(T.size===0)return;let l=T.shift();try{let x=n?.messageStrategy;ih.is(x)?x.handleMessage(l,Ht):Ht(l)}finally{Po()}}let _t=l=>{try{if(se.Message.isNotification(l)&&l.method===nd.type.method){let x=l.params.id,S=V(x),A=T.get(S);if(se.Message.isRequest(A)){let ee=n?.connectionStrategy,le=ee&&ee.cancelUndispatched?ee.cancelUndispatched(A,oe):void 0;if(le&&(le.error!==void 0||le.result!==void 0)){T.delete(S),p.delete(x),le.id=A.id,Hr(le,l.method,Date.now()),e.write(le).catch(()=>o.error("Sending response for canceled message failed."));return}}let ne=p.get(x);if(ne!==void 0){ne.cancel(),ki(l);return}else R.add(x)}te(T,l)}finally{Po()}};function rr(l){if(re())return;function x(H,ce,X){let ye={jsonrpc:c,id:l.id};H instanceof se.ResponseError?ye.error=H.toJson():ye.result=H===void 0?null:H,Hr(ye,ce,X),e.write(ye).catch(()=>o.error("Sending response failed."))}function S(H,ce,X){let ye={jsonrpc:c,id:l.id,error:H.toJson()};Hr(ye,ce,X),e.write(ye).catch(()=>o.error("Sending response failed."))}function A(H,ce,X){H===void 0&&(H=null);let ye={jsonrpc:c,id:l.id,result:H};Hr(ye,ce,X),e.write(ye).catch(()=>o.error("Sending response failed."))}Rs(l);let ne=d.get(l.method),ee,le;ne&&(ee=ne.type,le=ne.handler);let pe=Date.now();if(le||u){let H=l.id??String(Date.now()),ce=th.is(D.receiver)?D.receiver.createCancellationTokenSource(H):D.receiver.createCancellationTokenSource(l);l.id!==null&&R.has(l.id)&&ce.cancel(),l.id!==null&&p.set(H,ce);try{let X;if(le)if(l.params===void 0){if(ee!==void 0&&ee.numberOfParams!==0){S(new se.ResponseError(se.ErrorCodes.InvalidParams,`Request ${l.method} defines ${ee.numberOfParams} params but received none.`),l.method,pe);return}X=le(ce.token)}else if(Array.isArray(l.params)){if(ee!==void 0&&ee.parameterStructures===se.ParameterStructures.byName){S(new se.ResponseError(se.ErrorCodes.InvalidParams,`Request ${l.method} defines parameters by name but received parameters by position`),l.method,pe);return}X=le(...l.params,ce.token)}else{if(ee!==void 0&&ee.parameterStructures===se.ParameterStructures.byPosition){S(new se.ResponseError(se.ErrorCodes.InvalidParams,`Request ${l.method} defines parameters by position but received parameters by name`),l.method,pe);return}X=le(l.params,ce.token)}else u&&(X=u(l.method,l.params,ce.token));let ye=X;X?ye.then?ye.then(De=>{p.delete(H),x(De,l.method,pe)},De=>{p.delete(H),De instanceof se.ResponseError?S(De,l.method,pe):De&&lt.string(De.message)?S(new se.ResponseError(se.ErrorCodes.InternalError,`Request ${l.method} failed with message: ${De.message}`),l.method,pe):S(new se.ResponseError(se.ErrorCodes.InternalError,`Request ${l.method} failed unexpectedly without providing any details.`),l.method,pe)}):(p.delete(H),x(X,l.method,pe)):(p.delete(H),A(X,l.method,pe))}catch(X){p.delete(H),X instanceof se.ResponseError?x(X,l.method,pe):X&&lt.string(X.message)?S(new se.ResponseError(se.ErrorCodes.InternalError,`Request ${l.method} failed with message: ${X.message}`),l.method,pe):S(new se.ResponseError(se.ErrorCodes.InternalError,`Request ${l.method} failed unexpectedly without providing any details.`),l.method,pe)}}else S(new se.ResponseError(se.ErrorCodes.MethodNotFound,`Unhandled method ${l.method}`),l.method,pe)}function In(l){if(!re())if(l.id===null)l.error?o.error(`Received response message without id: Error is: 
${JSON.stringify(l.error,void 0,4)}`):o.error("Received response message without id. No further error information provided.");else{let x=l.id,S=C.get(x);if(zg(l,S),S!==void 0){C.delete(x);try{if(l.error){let A=l.error;S.reject(new se.ResponseError(A.code,A.message,A.data))}else if(l.result!==void 0)S.resolve(l.result);else throw new Error("Should never happen.")}catch(A){A.message?o.error(`Response handler '${S.method}' failed with message: ${A.message}`):o.error(`Response handler '${S.method}' failed unexpectedly.`)}}}}function Bt(l){if(re())return;let x,S;if(l.method===nd.type.method){let A=l.params.id;R.delete(A),ki(l);return}else{let A=g.get(l.method);A&&(S=A.handler,x=A.type)}if(S||h)try{if(ki(l),S)if(l.params===void 0)x!==void 0&&x.numberOfParams!==0&&x.parameterStructures!==se.ParameterStructures.byName&&o.error(`Notification ${l.method} defines ${x.numberOfParams} params but received none.`),S();else if(Array.isArray(l.params)){let A=l.params;l.method===td.type.method&&A.length===2&&Kw.is(A[0])?S({token:A[0],value:A[1]}):(x!==void 0&&(x.parameterStructures===se.ParameterStructures.byName&&o.error(`Notification ${l.method} defines parameters by name but received parameters by position`),x.numberOfParams!==l.params.length&&o.error(`Notification ${l.method} defines ${x.numberOfParams} params but received ${A.length} arguments`)),S(...A))}else x!==void 0&&x.parameterStructures===se.ParameterStructures.byPosition&&o.error(`Notification ${l.method} defines parameters by position but received parameters by name`),S(l.params);else h&&h(l.method,l.params)}catch(A){A.message?o.error(`Notification handler '${l.method}' failed with message: ${A.message}`):o.error(`Notification handler '${l.method}' failed unexpectedly.`)}else tr.fire(l)}function Ur(l){if(!l){o.error("Received empty message.");return}o.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(l,null,4)}`);let x=l;if(lt.string(x.id)||lt.number(x.id)){let S=x.id,A=C.get(S);A&&A.reject(new Error("The received response has neither a result nor an error property."))}}function Le(l){if(l!=null)switch(f){case Pe.Verbose:return JSON.stringify(l,null,4);case Pe.Compact:return JSON.stringify(l);default:return}}function Wr(l){if(!(f===Pe.Off||!O))if(w===Xr.Text){let x;(f===Pe.Verbose||f===Pe.Compact)&&l.params&&(x=`Params: ${Le(l.params)}

`),O.log(`Sending request '${l.method} - (${l.id})'.`,x)}else Br("send-request",l)}function wn(l){if(!(f===Pe.Off||!O))if(w===Xr.Text){let x;(f===Pe.Verbose||f===Pe.Compact)&&(l.params?x=`Params: ${Le(l.params)}

`:x=`No parameters provided.

`),O.log(`Sending notification '${l.method}'.`,x)}else Br("send-notification",l)}function Hr(l,x,S){if(!(f===Pe.Off||!O))if(w===Xr.Text){let A;(f===Pe.Verbose||f===Pe.Compact)&&(l.error&&l.error.data?A=`Error data: ${Le(l.error.data)}

`:l.result?A=`Result: ${Le(l.result)}

`:l.error===void 0&&(A=`No result returned.

`)),O.log(`Sending response '${x} - (${l.id})'. Processing request took ${Date.now()-S}ms`,A)}else Br("send-response",l)}function Rs(l){if(!(f===Pe.Off||!O))if(w===Xr.Text){let x;(f===Pe.Verbose||f===Pe.Compact)&&l.params&&(x=`Params: ${Le(l.params)}

`),O.log(`Received request '${l.method} - (${l.id})'.`,x)}else Br("receive-request",l)}function ki(l){if(!(f===Pe.Off||!O||l.method===eh.type.method))if(w===Xr.Text){let x;(f===Pe.Verbose||f===Pe.Compact)&&(l.params?x=`Params: ${Le(l.params)}

`:x=`No parameters provided.

`),O.log(`Received notification '${l.method}'.`,x)}else Br("receive-notification",l)}function zg(l,x){if(!(f===Pe.Off||!O))if(w===Xr.Text){let S;if((f===Pe.Verbose||f===Pe.Compact)&&(l.error&&l.error.data?S=`Error data: ${Le(l.error.data)}

`:l.result?S=`Result: ${Le(l.result)}

`:l.error===void 0&&(S=`No result returned.

`)),x){let A=l.error?` Request failed: ${l.error.message} (${l.error.code}).`:"";O.log(`Received response '${x.method} - (${l.id})' in ${Date.now()-x.timerStart}ms.${A}`,S)}else O.log(`Received response ${l.id} without active response promise.`,S)}else Br("receive-response",l)}function Br(l,x){if(!O||f===Pe.Off)return;let S={isLSPMessage:!0,type:l,message:x,timestamp:Date.now()};O.log(S)}function bn(){if(I())throw new Tc(rd.Closed,"Connection is closed.");if(re())throw new Tc(rd.Disposed,"Connection is disposed.")}function Gg(){if(W())throw new Tc(rd.AlreadyListening,"Connection is already listening")}function Vg(){if(!W())throw new Error("Call listen() first.")}function Rn(l){return l===void 0?null:l}function hu(l){if(l!==null)return l}function mu(l){return l!=null&&!Array.isArray(l)&&typeof l=="object"}function Si(l,x){switch(l){case se.ParameterStructures.auto:return mu(x)?hu(x):[Rn(x)];case se.ParameterStructures.byName:if(!mu(x))throw new Error("Received parameters by name but param is not an object literal.");return hu(x);case se.ParameterStructures.byPosition:return[Rn(x)];default:throw new Error(`Unknown parameter structure ${l.toString()}`)}}function gu(l,x){let S,A=l.numberOfParams;switch(A){case 0:S=void 0;break;case 1:S=Si(l.parameterStructures,x[0]);break;default:S=[];for(let ne=0;ne<x.length&&ne<A;ne++)S.push(Rn(x[ne]));if(x.length<A)for(let ne=x.length;ne<A;ne++)S.push(null);break}return S}let zr={sendNotification:(l,...x)=>{bn();let S,A;if(lt.string(l)){S=l;let ee=x[0],le=0,pe=se.ParameterStructures.auto;se.ParameterStructures.is(ee)&&(le=1,pe=ee);let H=x.length,ce=H-le;switch(ce){case 0:A=void 0;break;case 1:A=Si(pe,x[le]);break;default:if(pe===se.ParameterStructures.byName)throw new Error(`Received ${ce} parameters for 'by Name' notification parameter structure.`);A=x.slice(le,H).map(X=>Rn(X));break}}else{let ee=x;S=l.method,A=gu(l,ee)}let ne={jsonrpc:c,method:S,params:A};return wn(ne),e.write(ne).catch(ee=>{throw o.error("Sending notification failed."),ee})},onNotification:(l,x)=>{bn();let S;return lt.func(l)?h=l:x&&(lt.string(l)?(S=l,g.set(l,{type:void 0,handler:x})):(S=l.method,g.set(l.method,{type:l,handler:x}))),{dispose:()=>{S!==void 0?g.delete(S):h=void 0}}},onProgress:(l,x,S)=>{if(m.has(x))throw new Error(`Progress handler for token ${x} already registered`);return m.set(x,S),{dispose:()=>{m.delete(x)}}},sendProgress:(l,x,S)=>zr.sendNotification(td.type,{token:x,value:S}),onUnhandledProgress:Wt.event,sendRequest:(l,...x)=>{bn(),Vg();let S,A,ne;if(lt.string(l)){S=l;let H=x[0],ce=x[x.length-1],X=0,ye=se.ParameterStructures.auto;se.ParameterStructures.is(H)&&(X=1,ye=H);let De=x.length;Fw.CancellationToken.is(ce)&&(De=De-1,ne=ce);let xt=De-X;switch(xt){case 0:A=void 0;break;case 1:A=Si(ye,x[X]);break;default:if(ye===se.ParameterStructures.byName)throw new Error(`Received ${xt} parameters for 'by Name' request parameter structure.`);A=x.slice(X,De).map(Yg=>Rn(Yg));break}}else{let H=x;S=l.method,A=gu(l,H);let ce=l.numberOfParams;ne=Fw.CancellationToken.is(H[ce])?H[ce]:void 0}let ee=i++,le;ne&&(le=ne.onCancellationRequested(()=>{let H=D.sender.sendCancellation(zr,ee);return H===void 0?(o.log(`Received no promise from cancellation strategy when cancelling id ${ee}`),Promise.resolve()):H.catch(()=>{o.log(`Sending cancellation messages for id ${ee} failed`)})}));let pe={jsonrpc:c,id:ee,method:S,params:A};return Wr(pe),typeof D.sender.enableCancellation=="function"&&D.sender.enableCancellation(pe),new Promise(async(H,ce)=>{let X=xt=>{H(xt),D.sender.cleanup(ee),le?.dispose()},ye=xt=>{ce(xt),D.sender.cleanup(ee),le?.dispose()},De={method:S,timerStart:Date.now(),resolve:X,reject:ye};try{await e.write(pe),C.set(ee,De)}catch(xt){throw o.error("Sending request failed."),De.reject(new se.ResponseError(se.ErrorCodes.MessageWriteError,xt.message?xt.message:"Unknown reason")),xt}})},onRequest:(l,x)=>{bn();let S=null;return Uw.is(l)?(S=void 0,u=l):lt.string(l)?(S=null,x!==void 0&&(S=l,d.set(l,{handler:x,type:void 0}))):x!==void 0&&(S=l.method,d.set(l.method,{type:l,handler:x})),{dispose:()=>{S!==null&&(S!==void 0?d.delete(S):u=void 0)}}},hasPendingResponse:()=>C.size>0,trace:async(l,x,S)=>{let A=!1,ne=Xr.Text;S!==void 0&&(lt.boolean(S)?A=S:(A=S.sendNotification||!1,ne=S.traceFormat||Xr.Text)),f=l,w=ne,f===Pe.Off?O=void 0:O=x,A&&!I()&&!re()&&await zr.sendNotification(Ww.type,{value:Pe.toString(l)})},onError:it.event,onClose:Qe.event,onUnhandledNotification:tr.event,onDispose:q.event,end:()=>{e.end()},dispose:()=>{if(re())return;G=Dn.Disposed,q.fire(void 0);let l=new se.ResponseError(se.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let x of C.values())x.reject(l);C=new Map,p=new Map,R=new Set,T=new bP.LinkedMap,lt.func(e.dispose)&&e.dispose(),lt.func(t.dispose)&&t.dispose()},listen:()=>{bn(),Gg(),G=Dn.Listening,t.listen(_t)},inspect:()=>{(0,wP.default)().console.log("inspect")}};return zr.onNotification(eh.type,l=>{if(f===Pe.Off||!O)return;let x=f===Pe.Verbose||f===Pe.Compact;O.log(l.message,x?l.verbose:void 0)}),zr.onNotification(td.type,l=>{let x=m.get(l.token);x?x(l.value):Wt.fire(l)}),zr}he.createMessageConnection=e2});var sh=E(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.ProgressType=P.ProgressToken=P.createMessageConnection=P.NullLogger=P.ConnectionOptions=P.ConnectionStrategy=P.AbstractMessageBuffer=P.WriteableStreamMessageWriter=P.AbstractMessageWriter=P.MessageWriter=P.ReadableStreamMessageReader=P.AbstractMessageReader=P.MessageReader=P.SharedArrayReceiverStrategy=P.SharedArraySenderStrategy=P.CancellationToken=P.CancellationTokenSource=P.Emitter=P.Event=P.Disposable=P.LRUCache=P.Touch=P.LinkedMap=P.ParameterStructures=P.NotificationType9=P.NotificationType8=P.NotificationType7=P.NotificationType6=P.NotificationType5=P.NotificationType4=P.NotificationType3=P.NotificationType2=P.NotificationType1=P.NotificationType0=P.NotificationType=P.ErrorCodes=P.ResponseError=P.RequestType9=P.RequestType8=P.RequestType7=P.RequestType6=P.RequestType5=P.RequestType4=P.RequestType3=P.RequestType2=P.RequestType1=P.RequestType0=P.RequestType=P.Message=P.RAL=void 0;P.MessageStrategy=P.CancellationStrategy=P.CancellationSenderStrategy=P.CancellationReceiverStrategy=P.ConnectionError=P.ConnectionErrors=P.LogTraceNotification=P.SetTraceNotification=P.TraceFormat=P.TraceValues=P.Trace=void 0;var Be=Tw();Object.defineProperty(P,"Message",{enumerable:!0,get:function(){return Be.Message}});Object.defineProperty(P,"RequestType",{enumerable:!0,get:function(){return Be.RequestType}});Object.defineProperty(P,"RequestType0",{enumerable:!0,get:function(){return Be.RequestType0}});Object.defineProperty(P,"RequestType1",{enumerable:!0,get:function(){return Be.RequestType1}});Object.defineProperty(P,"RequestType2",{enumerable:!0,get:function(){return Be.RequestType2}});Object.defineProperty(P,"RequestType3",{enumerable:!0,get:function(){return Be.RequestType3}});Object.defineProperty(P,"RequestType4",{enumerable:!0,get:function(){return Be.RequestType4}});Object.defineProperty(P,"RequestType5",{enumerable:!0,get:function(){return Be.RequestType5}});Object.defineProperty(P,"RequestType6",{enumerable:!0,get:function(){return Be.RequestType6}});Object.defineProperty(P,"RequestType7",{enumerable:!0,get:function(){return Be.RequestType7}});Object.defineProperty(P,"RequestType8",{enumerable:!0,get:function(){return Be.RequestType8}});Object.defineProperty(P,"RequestType9",{enumerable:!0,get:function(){return Be.RequestType9}});Object.defineProperty(P,"ResponseError",{enumerable:!0,get:function(){return Be.ResponseError}});Object.defineProperty(P,"ErrorCodes",{enumerable:!0,get:function(){return Be.ErrorCodes}});Object.defineProperty(P,"NotificationType",{enumerable:!0,get:function(){return Be.NotificationType}});Object.defineProperty(P,"NotificationType0",{enumerable:!0,get:function(){return Be.NotificationType0}});Object.defineProperty(P,"NotificationType1",{enumerable:!0,get:function(){return Be.NotificationType1}});Object.defineProperty(P,"NotificationType2",{enumerable:!0,get:function(){return Be.NotificationType2}});Object.defineProperty(P,"NotificationType3",{enumerable:!0,get:function(){return Be.NotificationType3}});Object.defineProperty(P,"NotificationType4",{enumerable:!0,get:function(){return Be.NotificationType4}});Object.defineProperty(P,"NotificationType5",{enumerable:!0,get:function(){return Be.NotificationType5}});Object.defineProperty(P,"NotificationType6",{enumerable:!0,get:function(){return Be.NotificationType6}});Object.defineProperty(P,"NotificationType7",{enumerable:!0,get:function(){return Be.NotificationType7}});Object.defineProperty(P,"NotificationType8",{enumerable:!0,get:function(){return Be.NotificationType8}});Object.defineProperty(P,"NotificationType9",{enumerable:!0,get:function(){return Be.NotificationType9}});Object.defineProperty(P,"ParameterStructures",{enumerable:!0,get:function(){return Be.ParameterStructures}});var zw=kw();Object.defineProperty(P,"LinkedMap",{enumerable:!0,get:function(){return zw.LinkedMap}});Object.defineProperty(P,"LRUCache",{enumerable:!0,get:function(){return zw.LRUCache}});Object.defineProperty(P,"Touch",{enumerable:!0,get:function(){return zw.Touch}});var t2=lP();Object.defineProperty(P,"Disposable",{enumerable:!0,get:function(){return t2.Disposable}});var kP=ns();Object.defineProperty(P,"Event",{enumerable:!0,get:function(){return kP.Event}});Object.defineProperty(P,"Emitter",{enumerable:!0,get:function(){return kP.Emitter}});var SP=xl();Object.defineProperty(P,"CancellationTokenSource",{enumerable:!0,get:function(){return SP.CancellationTokenSource}});Object.defineProperty(P,"CancellationToken",{enumerable:!0,get:function(){return SP.CancellationToken}});var CP=dP();Object.defineProperty(P,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return CP.SharedArraySenderStrategy}});Object.defineProperty(P,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return CP.SharedArrayReceiverStrategy}});var Gw=pP();Object.defineProperty(P,"MessageReader",{enumerable:!0,get:function(){return Gw.MessageReader}});Object.defineProperty(P,"AbstractMessageReader",{enumerable:!0,get:function(){return Gw.AbstractMessageReader}});Object.defineProperty(P,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return Gw.ReadableStreamMessageReader}});var Vw=vP();Object.defineProperty(P,"MessageWriter",{enumerable:!0,get:function(){return Vw.MessageWriter}});Object.defineProperty(P,"AbstractMessageWriter",{enumerable:!0,get:function(){return Vw.AbstractMessageWriter}});Object.defineProperty(P,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return Vw.WriteableStreamMessageWriter}});var r2=xP();Object.defineProperty(P,"AbstractMessageBuffer",{enumerable:!0,get:function(){return r2.AbstractMessageBuffer}});var Qt=_P();Object.defineProperty(P,"ConnectionStrategy",{enumerable:!0,get:function(){return Qt.ConnectionStrategy}});Object.defineProperty(P,"ConnectionOptions",{enumerable:!0,get:function(){return Qt.ConnectionOptions}});Object.defineProperty(P,"NullLogger",{enumerable:!0,get:function(){return Qt.NullLogger}});Object.defineProperty(P,"createMessageConnection",{enumerable:!0,get:function(){return Qt.createMessageConnection}});Object.defineProperty(P,"ProgressToken",{enumerable:!0,get:function(){return Qt.ProgressToken}});Object.defineProperty(P,"ProgressType",{enumerable:!0,get:function(){return Qt.ProgressType}});Object.defineProperty(P,"Trace",{enumerable:!0,get:function(){return Qt.Trace}});Object.defineProperty(P,"TraceValues",{enumerable:!0,get:function(){return Qt.TraceValues}});Object.defineProperty(P,"TraceFormat",{enumerable:!0,get:function(){return Qt.TraceFormat}});Object.defineProperty(P,"SetTraceNotification",{enumerable:!0,get:function(){return Qt.SetTraceNotification}});Object.defineProperty(P,"LogTraceNotification",{enumerable:!0,get:function(){return Qt.LogTraceNotification}});Object.defineProperty(P,"ConnectionErrors",{enumerable:!0,get:function(){return Qt.ConnectionErrors}});Object.defineProperty(P,"ConnectionError",{enumerable:!0,get:function(){return Qt.ConnectionError}});Object.defineProperty(P,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return Qt.CancellationReceiverStrategy}});Object.defineProperty(P,"CancellationSenderStrategy",{enumerable:!0,get:function(){return Qt.CancellationSenderStrategy}});Object.defineProperty(P,"CancellationStrategy",{enumerable:!0,get:function(){return Qt.CancellationStrategy}});Object.defineProperty(P,"MessageStrategy",{enumerable:!0,get:function(){return Qt.MessageStrategy}});var n2=Qo();P.RAL=n2.default});var DP=E(Qw=>{"use strict";Object.defineProperty(Qw,"__esModule",{value:!0});var Qn=sh(),ah=class t extends Qn.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};ah.emptyBuffer=new Uint8Array(0);var Yw=class{constructor(e){this.socket=e,this._onData=new Qn.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(o=>{this._onData.fire(new Uint8Array(o))},()=>{(0,Qn.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Qn.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Qn.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Qn.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},Xw=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Qn.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Qn.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Qn.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},o2=new TextEncoder,EP=Object.freeze({messageBuffer:Object.freeze({create:t=>new ah(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(o2.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new Yw(t),asWritableStream:t=>new Xw(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Jw(){return EP}(function(t){function e(){Qn.RAL.install(EP)}t.install=e})(Jw||(Jw={}));Qw.default=Jw});var cs=E(Jr=>{"use strict";var i2=Jr&&Jr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),s2=Jr&&Jr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&i2(e,t,r)};Object.defineProperty(Jr,"__esModule",{value:!0});Jr.createMessageConnection=Jr.BrowserMessageWriter=Jr.BrowserMessageReader=void 0;var a2=DP();a2.default.install();var _c=sh();s2(sh(),Jr);var Zw=class extends _c.AbstractMessageReader{constructor(e){super(),this._onData=new _c.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};Jr.BrowserMessageReader=Zw;var eb=class extends _c.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Jr.BrowserMessageWriter=eb;function c2(t,e,r,n){return r===void 0&&(r=_c.NullLogger),_c.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,_c.createMessageConnection)(t,e,r,n)}Jr.createMessageConnection=c2});var tb=E((gpe,PP)=>{"use strict";PP.exports=cs()});var nt=E(Ir=>{"use strict";Object.defineProperty(Ir,"__esModule",{value:!0});Ir.ProtocolNotificationType=Ir.ProtocolNotificationType0=Ir.ProtocolRequestType=Ir.ProtocolRequestType0=Ir.RegistrationType=Ir.MessageDirection=void 0;var kc=cs(),NP;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(NP||(Ir.MessageDirection=NP={}));var rb=class{constructor(e){this.method=e}};Ir.RegistrationType=rb;var nb=class extends kc.RequestType0{constructor(e){super(e)}};Ir.ProtocolRequestType0=nb;var ob=class extends kc.RequestType{constructor(e){super(e,kc.ParameterStructures.byName)}};Ir.ProtocolRequestType=ob;var ib=class extends kc.NotificationType0{constructor(e){super(e)}};Ir.ProtocolNotificationType0=ib;var sb=class extends kc.NotificationType{constructor(e){super(e,kc.ParameterStructures.byName)}};Ir.ProtocolNotificationType=sb});var ch=E(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.objectLiteral=Dt.typedArray=Dt.stringArray=Dt.array=Dt.func=Dt.error=Dt.number=Dt.string=Dt.boolean=void 0;function u2(t){return t===!0||t===!1}Dt.boolean=u2;function AP(t){return typeof t=="string"||t instanceof String}Dt.string=AP;function l2(t){return typeof t=="number"||t instanceof Number}Dt.number=l2;function d2(t){return t instanceof Error}Dt.error=d2;function f2(t){return typeof t=="function"}Dt.func=f2;function OP(t){return Array.isArray(t)}Dt.array=OP;function p2(t){return OP(t)&&t.every(e=>AP(e))}Dt.stringArray=p2;function h2(t,e){return Array.isArray(t)&&t.every(e)}Dt.typedArray=h2;function m2(t){return t!==null&&typeof t=="object"}Dt.objectLiteral=m2});var MP=E(uh=>{"use strict";Object.defineProperty(uh,"__esModule",{value:!0});uh.ImplementationRequest=void 0;var IP=nt(),$P;(function(t){t.method="textDocument/implementation",t.messageDirection=IP.MessageDirection.clientToServer,t.type=new IP.ProtocolRequestType(t.method)})($P||(uh.ImplementationRequest=$P={}))});var FP=E(lh=>{"use strict";Object.defineProperty(lh,"__esModule",{value:!0});lh.TypeDefinitionRequest=void 0;var LP=nt(),qP;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=LP.MessageDirection.clientToServer,t.type=new LP.ProtocolRequestType(t.method)})(qP||(lh.TypeDefinitionRequest=qP={}))});var UP=E(Sc=>{"use strict";Object.defineProperty(Sc,"__esModule",{value:!0});Sc.DidChangeWorkspaceFoldersNotification=Sc.WorkspaceFoldersRequest=void 0;var dh=nt(),KP;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=dh.MessageDirection.serverToClient,t.type=new dh.ProtocolRequestType0(t.method)})(KP||(Sc.WorkspaceFoldersRequest=KP={}));var jP;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=dh.MessageDirection.clientToServer,t.type=new dh.ProtocolNotificationType(t.method)})(jP||(Sc.DidChangeWorkspaceFoldersNotification=jP={}))});var BP=E(fh=>{"use strict";Object.defineProperty(fh,"__esModule",{value:!0});fh.ConfigurationRequest=void 0;var WP=nt(),HP;(function(t){t.method="workspace/configuration",t.messageDirection=WP.MessageDirection.serverToClient,t.type=new WP.ProtocolRequestType(t.method)})(HP||(fh.ConfigurationRequest=HP={}))});var VP=E(Cc=>{"use strict";Object.defineProperty(Cc,"__esModule",{value:!0});Cc.ColorPresentationRequest=Cc.DocumentColorRequest=void 0;var ph=nt(),zP;(function(t){t.method="textDocument/documentColor",t.messageDirection=ph.MessageDirection.clientToServer,t.type=new ph.ProtocolRequestType(t.method)})(zP||(Cc.DocumentColorRequest=zP={}));var GP;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=ph.MessageDirection.clientToServer,t.type=new ph.ProtocolRequestType(t.method)})(GP||(Cc.ColorPresentationRequest=GP={}))});var JP=E(Ec=>{"use strict";Object.defineProperty(Ec,"__esModule",{value:!0});Ec.FoldingRangeRefreshRequest=Ec.FoldingRangeRequest=void 0;var hh=nt(),YP;(function(t){t.method="textDocument/foldingRange",t.messageDirection=hh.MessageDirection.clientToServer,t.type=new hh.ProtocolRequestType(t.method)})(YP||(Ec.FoldingRangeRequest=YP={}));var XP;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=hh.MessageDirection.serverToClient,t.type=new hh.ProtocolRequestType0(t.method)})(XP||(Ec.FoldingRangeRefreshRequest=XP={}))});var eN=E(mh=>{"use strict";Object.defineProperty(mh,"__esModule",{value:!0});mh.DeclarationRequest=void 0;var QP=nt(),ZP;(function(t){t.method="textDocument/declaration",t.messageDirection=QP.MessageDirection.clientToServer,t.type=new QP.ProtocolRequestType(t.method)})(ZP||(mh.DeclarationRequest=ZP={}))});var nN=E(gh=>{"use strict";Object.defineProperty(gh,"__esModule",{value:!0});gh.SelectionRangeRequest=void 0;var tN=nt(),rN;(function(t){t.method="textDocument/selectionRange",t.messageDirection=tN.MessageDirection.clientToServer,t.type=new tN.ProtocolRequestType(t.method)})(rN||(gh.SelectionRangeRequest=rN={}))});var aN=E(oi=>{"use strict";Object.defineProperty(oi,"__esModule",{value:!0});oi.WorkDoneProgressCancelNotification=oi.WorkDoneProgressCreateRequest=oi.WorkDoneProgress=void 0;var g2=cs(),yh=nt(),oN;(function(t){t.type=new g2.ProgressType;function e(r){return r===t.type}t.is=e})(oN||(oi.WorkDoneProgress=oN={}));var iN;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=yh.MessageDirection.serverToClient,t.type=new yh.ProtocolRequestType(t.method)})(iN||(oi.WorkDoneProgressCreateRequest=iN={}));var sN;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=yh.MessageDirection.clientToServer,t.type=new yh.ProtocolNotificationType(t.method)})(sN||(oi.WorkDoneProgressCancelNotification=sN={}))});var dN=E(ii=>{"use strict";Object.defineProperty(ii,"__esModule",{value:!0});ii.CallHierarchyOutgoingCallsRequest=ii.CallHierarchyIncomingCallsRequest=ii.CallHierarchyPrepareRequest=void 0;var Dc=nt(),cN;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Dc.MessageDirection.clientToServer,t.type=new Dc.ProtocolRequestType(t.method)})(cN||(ii.CallHierarchyPrepareRequest=cN={}));var uN;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Dc.MessageDirection.clientToServer,t.type=new Dc.ProtocolRequestType(t.method)})(uN||(ii.CallHierarchyIncomingCallsRequest=uN={}));var lN;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Dc.MessageDirection.clientToServer,t.type=new Dc.ProtocolRequestType(t.method)})(lN||(ii.CallHierarchyOutgoingCallsRequest=lN={}))});var yN=E($r=>{"use strict";Object.defineProperty($r,"__esModule",{value:!0});$r.SemanticTokensRefreshRequest=$r.SemanticTokensRangeRequest=$r.SemanticTokensDeltaRequest=$r.SemanticTokensRequest=$r.SemanticTokensRegistrationType=$r.TokenFormat=void 0;var ko=nt(),fN;(function(t){t.Relative="relative"})(fN||($r.TokenFormat=fN={}));var od;(function(t){t.method="textDocument/semanticTokens",t.type=new ko.RegistrationType(t.method)})(od||($r.SemanticTokensRegistrationType=od={}));var pN;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=ko.MessageDirection.clientToServer,t.type=new ko.ProtocolRequestType(t.method),t.registrationMethod=od.method})(pN||($r.SemanticTokensRequest=pN={}));var hN;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=ko.MessageDirection.clientToServer,t.type=new ko.ProtocolRequestType(t.method),t.registrationMethod=od.method})(hN||($r.SemanticTokensDeltaRequest=hN={}));var mN;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=ko.MessageDirection.clientToServer,t.type=new ko.ProtocolRequestType(t.method),t.registrationMethod=od.method})(mN||($r.SemanticTokensRangeRequest=mN={}));var gN;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=ko.MessageDirection.serverToClient,t.type=new ko.ProtocolRequestType0(t.method)})(gN||($r.SemanticTokensRefreshRequest=gN={}))});var wN=E(vh=>{"use strict";Object.defineProperty(vh,"__esModule",{value:!0});vh.ShowDocumentRequest=void 0;var vN=nt(),xN;(function(t){t.method="window/showDocument",t.messageDirection=vN.MessageDirection.serverToClient,t.type=new vN.ProtocolRequestType(t.method)})(xN||(vh.ShowDocumentRequest=xN={}))});var TN=E(xh=>{"use strict";Object.defineProperty(xh,"__esModule",{value:!0});xh.LinkedEditingRangeRequest=void 0;var bN=nt(),RN;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=bN.MessageDirection.clientToServer,t.type=new bN.ProtocolRequestType(t.method)})(RN||(xh.LinkedEditingRangeRequest=RN={}))});var NN=E(ur=>{"use strict";Object.defineProperty(ur,"__esModule",{value:!0});ur.WillDeleteFilesRequest=ur.DidDeleteFilesNotification=ur.DidRenameFilesNotification=ur.WillRenameFilesRequest=ur.DidCreateFilesNotification=ur.WillCreateFilesRequest=ur.FileOperationPatternKind=void 0;var an=nt(),_N;(function(t){t.file="file",t.folder="folder"})(_N||(ur.FileOperationPatternKind=_N={}));var kN;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolRequestType(t.method)})(kN||(ur.WillCreateFilesRequest=kN={}));var SN;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method)})(SN||(ur.DidCreateFilesNotification=SN={}));var CN;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolRequestType(t.method)})(CN||(ur.WillRenameFilesRequest=CN={}));var EN;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method)})(EN||(ur.DidRenameFilesNotification=EN={}));var DN;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method)})(DN||(ur.DidDeleteFilesNotification=DN={}));var PN;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolRequestType(t.method)})(PN||(ur.WillDeleteFilesRequest=PN={}))});var MN=E(si=>{"use strict";Object.defineProperty(si,"__esModule",{value:!0});si.MonikerRequest=si.MonikerKind=si.UniquenessLevel=void 0;var AN=nt(),ON;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(ON||(si.UniquenessLevel=ON={}));var IN;(function(t){t.$import="import",t.$export="export",t.local="local"})(IN||(si.MonikerKind=IN={}));var $N;(function(t){t.method="textDocument/moniker",t.messageDirection=AN.MessageDirection.clientToServer,t.type=new AN.ProtocolRequestType(t.method)})($N||(si.MonikerRequest=$N={}))});var KN=E(ai=>{"use strict";Object.defineProperty(ai,"__esModule",{value:!0});ai.TypeHierarchySubtypesRequest=ai.TypeHierarchySupertypesRequest=ai.TypeHierarchyPrepareRequest=void 0;var Pc=nt(),LN;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Pc.MessageDirection.clientToServer,t.type=new Pc.ProtocolRequestType(t.method)})(LN||(ai.TypeHierarchyPrepareRequest=LN={}));var qN;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Pc.MessageDirection.clientToServer,t.type=new Pc.ProtocolRequestType(t.method)})(qN||(ai.TypeHierarchySupertypesRequest=qN={}));var FN;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Pc.MessageDirection.clientToServer,t.type=new Pc.ProtocolRequestType(t.method)})(FN||(ai.TypeHierarchySubtypesRequest=FN={}))});var WN=E(Nc=>{"use strict";Object.defineProperty(Nc,"__esModule",{value:!0});Nc.InlineValueRefreshRequest=Nc.InlineValueRequest=void 0;var wh=nt(),jN;(function(t){t.method="textDocument/inlineValue",t.messageDirection=wh.MessageDirection.clientToServer,t.type=new wh.ProtocolRequestType(t.method)})(jN||(Nc.InlineValueRequest=jN={}));var UN;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=wh.MessageDirection.serverToClient,t.type=new wh.ProtocolRequestType0(t.method)})(UN||(Nc.InlineValueRefreshRequest=UN={}))});var GN=E(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});ci.InlayHintRefreshRequest=ci.InlayHintResolveRequest=ci.InlayHintRequest=void 0;var Ac=nt(),HN;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Ac.MessageDirection.clientToServer,t.type=new Ac.ProtocolRequestType(t.method)})(HN||(ci.InlayHintRequest=HN={}));var BN;(function(t){t.method="inlayHint/resolve",t.messageDirection=Ac.MessageDirection.clientToServer,t.type=new Ac.ProtocolRequestType(t.method)})(BN||(ci.InlayHintResolveRequest=BN={}));var zN;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Ac.MessageDirection.serverToClient,t.type=new Ac.ProtocolRequestType0(t.method)})(zN||(ci.InlayHintRefreshRequest=zN={}))});var eA=E(cn=>{"use strict";Object.defineProperty(cn,"__esModule",{value:!0});cn.DiagnosticRefreshRequest=cn.WorkspaceDiagnosticRequest=cn.DocumentDiagnosticRequest=cn.DocumentDiagnosticReportKind=cn.DiagnosticServerCancellationData=void 0;var ZN=cs(),y2=ch(),Oc=nt(),VN;(function(t){function e(r){let n=r;return n&&y2.boolean(n.retriggerRequest)}t.is=e})(VN||(cn.DiagnosticServerCancellationData=VN={}));var YN;(function(t){t.Full="full",t.Unchanged="unchanged"})(YN||(cn.DocumentDiagnosticReportKind=YN={}));var XN;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Oc.MessageDirection.clientToServer,t.type=new Oc.ProtocolRequestType(t.method),t.partialResult=new ZN.ProgressType})(XN||(cn.DocumentDiagnosticRequest=XN={}));var JN;(function(t){t.method="workspace/diagnostic",t.messageDirection=Oc.MessageDirection.clientToServer,t.type=new Oc.ProtocolRequestType(t.method),t.partialResult=new ZN.ProgressType})(JN||(cn.WorkspaceDiagnosticRequest=JN={}));var QN;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Oc.MessageDirection.serverToClient,t.type=new Oc.ProtocolRequestType0(t.method)})(QN||(cn.DiagnosticRefreshRequest=QN={}))});var aA=E(mt=>{"use strict";Object.defineProperty(mt,"__esModule",{value:!0});mt.DidCloseNotebookDocumentNotification=mt.DidSaveNotebookDocumentNotification=mt.DidChangeNotebookDocumentNotification=mt.NotebookCellArrayChange=mt.DidOpenNotebookDocumentNotification=mt.NotebookDocumentSyncRegistrationType=mt.NotebookDocument=mt.NotebookCell=mt.ExecutionSummary=mt.NotebookCellKind=void 0;var id=(Zi(),Ts(Pp)),Pn=ch(),Zn=nt(),ab;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(ab||(mt.NotebookCellKind=ab={}));var cb;(function(t){function e(o,i){let s={executionOrder:o};return(i===!0||i===!1)&&(s.success=i),s}t.create=e;function r(o){let i=o;return Pn.objectLiteral(i)&&id.uinteger.is(i.executionOrder)&&(i.success===void 0||Pn.boolean(i.success))}t.is=r;function n(o,i){return o===i?!0:o==null||i===null||i===void 0?!1:o.executionOrder===i.executionOrder&&o.success===i.success}t.equals=n})(cb||(mt.ExecutionSummary=cb={}));var bh;(function(t){function e(i,s){return{kind:i,document:s}}t.create=e;function r(i){let s=i;return Pn.objectLiteral(s)&&ab.is(s.kind)&&id.DocumentUri.is(s.document)&&(s.metadata===void 0||Pn.objectLiteral(s.metadata))}t.is=r;function n(i,s){let a=new Set;return i.document!==s.document&&a.add("document"),i.kind!==s.kind&&a.add("kind"),i.executionSummary!==s.executionSummary&&a.add("executionSummary"),(i.metadata!==void 0||s.metadata!==void 0)&&!o(i.metadata,s.metadata)&&a.add("metadata"),(i.executionSummary!==void 0||s.executionSummary!==void 0)&&!cb.equals(i.executionSummary,s.executionSummary)&&a.add("executionSummary"),a}t.diff=n;function o(i,s){if(i===s)return!0;if(i==null||s===null||s===void 0||typeof i!=typeof s||typeof i!="object")return!1;let a=Array.isArray(i),c=Array.isArray(s);if(a!==c)return!1;if(a&&c){if(i.length!==s.length)return!1;for(let u=0;u<i.length;u++)if(!o(i[u],s[u]))return!1}if(Pn.objectLiteral(i)&&Pn.objectLiteral(s)){let u=Object.keys(i),d=Object.keys(s);if(u.length!==d.length||(u.sort(),d.sort(),!o(u,d)))return!1;for(let h=0;h<u.length;h++){let g=u[h];if(!o(i[g],s[g]))return!1}}return!0}})(bh||(mt.NotebookCell=bh={}));var tA;(function(t){function e(n,o,i,s){return{uri:n,notebookType:o,version:i,cells:s}}t.create=e;function r(n){let o=n;return Pn.objectLiteral(o)&&Pn.string(o.uri)&&id.integer.is(o.version)&&Pn.typedArray(o.cells,bh.is)}t.is=r})(tA||(mt.NotebookDocument=tA={}));var Ic;(function(t){t.method="notebookDocument/sync",t.messageDirection=Zn.MessageDirection.clientToServer,t.type=new Zn.RegistrationType(t.method)})(Ic||(mt.NotebookDocumentSyncRegistrationType=Ic={}));var rA;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=Zn.MessageDirection.clientToServer,t.type=new Zn.ProtocolNotificationType(t.method),t.registrationMethod=Ic.method})(rA||(mt.DidOpenNotebookDocumentNotification=rA={}));var nA;(function(t){function e(n){let o=n;return Pn.objectLiteral(o)&&id.uinteger.is(o.start)&&id.uinteger.is(o.deleteCount)&&(o.cells===void 0||Pn.typedArray(o.cells,bh.is))}t.is=e;function r(n,o,i){let s={start:n,deleteCount:o};return i!==void 0&&(s.cells=i),s}t.create=r})(nA||(mt.NotebookCellArrayChange=nA={}));var oA;(function(t){t.method="notebookDocument/didChange",t.messageDirection=Zn.MessageDirection.clientToServer,t.type=new Zn.ProtocolNotificationType(t.method),t.registrationMethod=Ic.method})(oA||(mt.DidChangeNotebookDocumentNotification=oA={}));var iA;(function(t){t.method="notebookDocument/didSave",t.messageDirection=Zn.MessageDirection.clientToServer,t.type=new Zn.ProtocolNotificationType(t.method),t.registrationMethod=Ic.method})(iA||(mt.DidSaveNotebookDocumentNotification=iA={}));var sA;(function(t){t.method="notebookDocument/didClose",t.messageDirection=Zn.MessageDirection.clientToServer,t.type=new Zn.ProtocolNotificationType(t.method),t.registrationMethod=Ic.method})(sA||(mt.DidCloseNotebookDocumentNotification=sA={}))});var lA=E(Rh=>{"use strict";Object.defineProperty(Rh,"__esModule",{value:!0});Rh.InlineCompletionRequest=void 0;var cA=nt(),uA;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=cA.MessageDirection.clientToServer,t.type=new cA.ProtocolRequestType(t.method)})(uA||(Rh.InlineCompletionRequest=uA={}))});var TO=E(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.WorkspaceSymbolRequest=y.CodeActionResolveRequest=y.CodeActionRequest=y.DocumentSymbolRequest=y.DocumentHighlightRequest=y.ReferencesRequest=y.DefinitionRequest=y.SignatureHelpRequest=y.SignatureHelpTriggerKind=y.HoverRequest=y.CompletionResolveRequest=y.CompletionRequest=y.CompletionTriggerKind=y.PublishDiagnosticsNotification=y.WatchKind=y.RelativePattern=y.FileChangeType=y.DidChangeWatchedFilesNotification=y.WillSaveTextDocumentWaitUntilRequest=y.WillSaveTextDocumentNotification=y.TextDocumentSaveReason=y.DidSaveTextDocumentNotification=y.DidCloseTextDocumentNotification=y.DidChangeTextDocumentNotification=y.TextDocumentContentChangeEvent=y.DidOpenTextDocumentNotification=y.TextDocumentSyncKind=y.TelemetryEventNotification=y.LogMessageNotification=y.ShowMessageRequest=y.ShowMessageNotification=y.MessageType=y.DidChangeConfigurationNotification=y.ExitNotification=y.ShutdownRequest=y.InitializedNotification=y.InitializeErrorCodes=y.InitializeRequest=y.WorkDoneProgressOptions=y.TextDocumentRegistrationOptions=y.StaticRegistrationOptions=y.PositionEncodingKind=y.FailureHandlingKind=y.ResourceOperationKind=y.UnregistrationRequest=y.RegistrationRequest=y.DocumentSelector=y.NotebookCellTextDocumentFilter=y.NotebookDocumentFilter=y.TextDocumentFilter=void 0;y.MonikerRequest=y.MonikerKind=y.UniquenessLevel=y.WillDeleteFilesRequest=y.DidDeleteFilesNotification=y.WillRenameFilesRequest=y.DidRenameFilesNotification=y.WillCreateFilesRequest=y.DidCreateFilesNotification=y.FileOperationPatternKind=y.LinkedEditingRangeRequest=y.ShowDocumentRequest=y.SemanticTokensRegistrationType=y.SemanticTokensRefreshRequest=y.SemanticTokensRangeRequest=y.SemanticTokensDeltaRequest=y.SemanticTokensRequest=y.TokenFormat=y.CallHierarchyPrepareRequest=y.CallHierarchyOutgoingCallsRequest=y.CallHierarchyIncomingCallsRequest=y.WorkDoneProgressCancelNotification=y.WorkDoneProgressCreateRequest=y.WorkDoneProgress=y.SelectionRangeRequest=y.DeclarationRequest=y.FoldingRangeRefreshRequest=y.FoldingRangeRequest=y.ColorPresentationRequest=y.DocumentColorRequest=y.ConfigurationRequest=y.DidChangeWorkspaceFoldersNotification=y.WorkspaceFoldersRequest=y.TypeDefinitionRequest=y.ImplementationRequest=y.ApplyWorkspaceEditRequest=y.ExecuteCommandRequest=y.PrepareRenameRequest=y.RenameRequest=y.PrepareSupportDefaultBehavior=y.DocumentOnTypeFormattingRequest=y.DocumentRangesFormattingRequest=y.DocumentRangeFormattingRequest=y.DocumentFormattingRequest=y.DocumentLinkResolveRequest=y.DocumentLinkRequest=y.CodeLensRefreshRequest=y.CodeLensResolveRequest=y.CodeLensRequest=y.WorkspaceSymbolResolveRequest=void 0;y.InlineCompletionRequest=y.DidCloseNotebookDocumentNotification=y.DidSaveNotebookDocumentNotification=y.DidChangeNotebookDocumentNotification=y.NotebookCellArrayChange=y.DidOpenNotebookDocumentNotification=y.NotebookDocumentSyncRegistrationType=y.NotebookDocument=y.NotebookCell=y.ExecutionSummary=y.NotebookCellKind=y.DiagnosticRefreshRequest=y.WorkspaceDiagnosticRequest=y.DocumentDiagnosticRequest=y.DocumentDiagnosticReportKind=y.DiagnosticServerCancellationData=y.InlayHintRefreshRequest=y.InlayHintResolveRequest=y.InlayHintRequest=y.InlineValueRefreshRequest=y.InlineValueRequest=y.TypeHierarchySupertypesRequest=y.TypeHierarchySubtypesRequest=y.TypeHierarchyPrepareRequest=void 0;var $=nt(),dA=(Zi(),Ts(Pp)),jt=ch(),v2=MP();Object.defineProperty(y,"ImplementationRequest",{enumerable:!0,get:function(){return v2.ImplementationRequest}});var x2=FP();Object.defineProperty(y,"TypeDefinitionRequest",{enumerable:!0,get:function(){return x2.TypeDefinitionRequest}});var xO=UP();Object.defineProperty(y,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return xO.WorkspaceFoldersRequest}});Object.defineProperty(y,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return xO.DidChangeWorkspaceFoldersNotification}});var w2=BP();Object.defineProperty(y,"ConfigurationRequest",{enumerable:!0,get:function(){return w2.ConfigurationRequest}});var wO=VP();Object.defineProperty(y,"DocumentColorRequest",{enumerable:!0,get:function(){return wO.DocumentColorRequest}});Object.defineProperty(y,"ColorPresentationRequest",{enumerable:!0,get:function(){return wO.ColorPresentationRequest}});var bO=JP();Object.defineProperty(y,"FoldingRangeRequest",{enumerable:!0,get:function(){return bO.FoldingRangeRequest}});Object.defineProperty(y,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return bO.FoldingRangeRefreshRequest}});var b2=eN();Object.defineProperty(y,"DeclarationRequest",{enumerable:!0,get:function(){return b2.DeclarationRequest}});var R2=nN();Object.defineProperty(y,"SelectionRangeRequest",{enumerable:!0,get:function(){return R2.SelectionRangeRequest}});var pb=aN();Object.defineProperty(y,"WorkDoneProgress",{enumerable:!0,get:function(){return pb.WorkDoneProgress}});Object.defineProperty(y,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return pb.WorkDoneProgressCreateRequest}});Object.defineProperty(y,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return pb.WorkDoneProgressCancelNotification}});var hb=dN();Object.defineProperty(y,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return hb.CallHierarchyIncomingCallsRequest}});Object.defineProperty(y,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return hb.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(y,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return hb.CallHierarchyPrepareRequest}});var $c=yN();Object.defineProperty(y,"TokenFormat",{enumerable:!0,get:function(){return $c.TokenFormat}});Object.defineProperty(y,"SemanticTokensRequest",{enumerable:!0,get:function(){return $c.SemanticTokensRequest}});Object.defineProperty(y,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return $c.SemanticTokensDeltaRequest}});Object.defineProperty(y,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return $c.SemanticTokensRangeRequest}});Object.defineProperty(y,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return $c.SemanticTokensRefreshRequest}});Object.defineProperty(y,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return $c.SemanticTokensRegistrationType}});var T2=wN();Object.defineProperty(y,"ShowDocumentRequest",{enumerable:!0,get:function(){return T2.ShowDocumentRequest}});var _2=TN();Object.defineProperty(y,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return _2.LinkedEditingRangeRequest}});var us=NN();Object.defineProperty(y,"FileOperationPatternKind",{enumerable:!0,get:function(){return us.FileOperationPatternKind}});Object.defineProperty(y,"DidCreateFilesNotification",{enumerable:!0,get:function(){return us.DidCreateFilesNotification}});Object.defineProperty(y,"WillCreateFilesRequest",{enumerable:!0,get:function(){return us.WillCreateFilesRequest}});Object.defineProperty(y,"DidRenameFilesNotification",{enumerable:!0,get:function(){return us.DidRenameFilesNotification}});Object.defineProperty(y,"WillRenameFilesRequest",{enumerable:!0,get:function(){return us.WillRenameFilesRequest}});Object.defineProperty(y,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return us.DidDeleteFilesNotification}});Object.defineProperty(y,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return us.WillDeleteFilesRequest}});var mb=MN();Object.defineProperty(y,"UniquenessLevel",{enumerable:!0,get:function(){return mb.UniquenessLevel}});Object.defineProperty(y,"MonikerKind",{enumerable:!0,get:function(){return mb.MonikerKind}});Object.defineProperty(y,"MonikerRequest",{enumerable:!0,get:function(){return mb.MonikerRequest}});var gb=KN();Object.defineProperty(y,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return gb.TypeHierarchyPrepareRequest}});Object.defineProperty(y,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return gb.TypeHierarchySubtypesRequest}});Object.defineProperty(y,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return gb.TypeHierarchySupertypesRequest}});var RO=WN();Object.defineProperty(y,"InlineValueRequest",{enumerable:!0,get:function(){return RO.InlineValueRequest}});Object.defineProperty(y,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return RO.InlineValueRefreshRequest}});var yb=GN();Object.defineProperty(y,"InlayHintRequest",{enumerable:!0,get:function(){return yb.InlayHintRequest}});Object.defineProperty(y,"InlayHintResolveRequest",{enumerable:!0,get:function(){return yb.InlayHintResolveRequest}});Object.defineProperty(y,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return yb.InlayHintRefreshRequest}});var sd=eA();Object.defineProperty(y,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return sd.DiagnosticServerCancellationData}});Object.defineProperty(y,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return sd.DocumentDiagnosticReportKind}});Object.defineProperty(y,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return sd.DocumentDiagnosticRequest}});Object.defineProperty(y,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return sd.WorkspaceDiagnosticRequest}});Object.defineProperty(y,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return sd.DiagnosticRefreshRequest}});var eo=aA();Object.defineProperty(y,"NotebookCellKind",{enumerable:!0,get:function(){return eo.NotebookCellKind}});Object.defineProperty(y,"ExecutionSummary",{enumerable:!0,get:function(){return eo.ExecutionSummary}});Object.defineProperty(y,"NotebookCell",{enumerable:!0,get:function(){return eo.NotebookCell}});Object.defineProperty(y,"NotebookDocument",{enumerable:!0,get:function(){return eo.NotebookDocument}});Object.defineProperty(y,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return eo.NotebookDocumentSyncRegistrationType}});Object.defineProperty(y,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return eo.DidOpenNotebookDocumentNotification}});Object.defineProperty(y,"NotebookCellArrayChange",{enumerable:!0,get:function(){return eo.NotebookCellArrayChange}});Object.defineProperty(y,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return eo.DidChangeNotebookDocumentNotification}});Object.defineProperty(y,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return eo.DidSaveNotebookDocumentNotification}});Object.defineProperty(y,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return eo.DidCloseNotebookDocumentNotification}});var k2=lA();Object.defineProperty(y,"InlineCompletionRequest",{enumerable:!0,get:function(){return k2.InlineCompletionRequest}});var ub;(function(t){function e(r){let n=r;return jt.string(n)||jt.string(n.language)||jt.string(n.scheme)||jt.string(n.pattern)}t.is=e})(ub||(y.TextDocumentFilter=ub={}));var lb;(function(t){function e(r){let n=r;return jt.objectLiteral(n)&&(jt.string(n.notebookType)||jt.string(n.scheme)||jt.string(n.pattern))}t.is=e})(lb||(y.NotebookDocumentFilter=lb={}));var db;(function(t){function e(r){let n=r;return jt.objectLiteral(n)&&(jt.string(n.notebook)||lb.is(n.notebook))&&(n.language===void 0||jt.string(n.language))}t.is=e})(db||(y.NotebookCellTextDocumentFilter=db={}));var fb;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!jt.string(n)&&!ub.is(n)&&!db.is(n))return!1;return!0}t.is=e})(fb||(y.DocumentSelector=fb={}));var fA;(function(t){t.method="client/registerCapability",t.messageDirection=$.MessageDirection.serverToClient,t.type=new $.ProtocolRequestType(t.method)})(fA||(y.RegistrationRequest=fA={}));var pA;(function(t){t.method="client/unregisterCapability",t.messageDirection=$.MessageDirection.serverToClient,t.type=new $.ProtocolRequestType(t.method)})(pA||(y.UnregistrationRequest=pA={}));var hA;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(hA||(y.ResourceOperationKind=hA={}));var mA;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(mA||(y.FailureHandlingKind=mA={}));var gA;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(gA||(y.PositionEncodingKind=gA={}));var yA;(function(t){function e(r){let n=r;return n&&jt.string(n.id)&&n.id.length>0}t.hasId=e})(yA||(y.StaticRegistrationOptions=yA={}));var vA;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||fb.is(n.documentSelector))}t.is=e})(vA||(y.TextDocumentRegistrationOptions=vA={}));var xA;(function(t){function e(n){let o=n;return jt.objectLiteral(o)&&(o.workDoneProgress===void 0||jt.boolean(o.workDoneProgress))}t.is=e;function r(n){let o=n;return o&&jt.boolean(o.workDoneProgress)}t.hasWorkDoneProgress=r})(xA||(y.WorkDoneProgressOptions=xA={}));var wA;(function(t){t.method="initialize",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(wA||(y.InitializeRequest=wA={}));var bA;(function(t){t.unknownProtocolVersion=1})(bA||(y.InitializeErrorCodes=bA={}));var RA;(function(t){t.method="initialized",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolNotificationType(t.method)})(RA||(y.InitializedNotification=RA={}));var TA;(function(t){t.method="shutdown",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType0(t.method)})(TA||(y.ShutdownRequest=TA={}));var _A;(function(t){t.method="exit",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolNotificationType0(t.method)})(_A||(y.ExitNotification=_A={}));var kA;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolNotificationType(t.method)})(kA||(y.DidChangeConfigurationNotification=kA={}));var SA;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})(SA||(y.MessageType=SA={}));var CA;(function(t){t.method="window/showMessage",t.messageDirection=$.MessageDirection.serverToClient,t.type=new $.ProtocolNotificationType(t.method)})(CA||(y.ShowMessageNotification=CA={}));var EA;(function(t){t.method="window/showMessageRequest",t.messageDirection=$.MessageDirection.serverToClient,t.type=new $.ProtocolRequestType(t.method)})(EA||(y.ShowMessageRequest=EA={}));var DA;(function(t){t.method="window/logMessage",t.messageDirection=$.MessageDirection.serverToClient,t.type=new $.ProtocolNotificationType(t.method)})(DA||(y.LogMessageNotification=DA={}));var PA;(function(t){t.method="telemetry/event",t.messageDirection=$.MessageDirection.serverToClient,t.type=new $.ProtocolNotificationType(t.method)})(PA||(y.TelemetryEventNotification=PA={}));var NA;(function(t){t.None=0,t.Full=1,t.Incremental=2})(NA||(y.TextDocumentSyncKind=NA={}));var AA;(function(t){t.method="textDocument/didOpen",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolNotificationType(t.method)})(AA||(y.DidOpenTextDocumentNotification=AA={}));var OA;(function(t){function e(n){let o=n;return o!=null&&typeof o.text=="string"&&o.range!==void 0&&(o.rangeLength===void 0||typeof o.rangeLength=="number")}t.isIncremental=e;function r(n){let o=n;return o!=null&&typeof o.text=="string"&&o.range===void 0&&o.rangeLength===void 0}t.isFull=r})(OA||(y.TextDocumentContentChangeEvent=OA={}));var IA;(function(t){t.method="textDocument/didChange",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolNotificationType(t.method)})(IA||(y.DidChangeTextDocumentNotification=IA={}));var $A;(function(t){t.method="textDocument/didClose",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolNotificationType(t.method)})($A||(y.DidCloseTextDocumentNotification=$A={}));var MA;(function(t){t.method="textDocument/didSave",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolNotificationType(t.method)})(MA||(y.DidSaveTextDocumentNotification=MA={}));var LA;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(LA||(y.TextDocumentSaveReason=LA={}));var qA;(function(t){t.method="textDocument/willSave",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolNotificationType(t.method)})(qA||(y.WillSaveTextDocumentNotification=qA={}));var FA;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(FA||(y.WillSaveTextDocumentWaitUntilRequest=FA={}));var KA;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolNotificationType(t.method)})(KA||(y.DidChangeWatchedFilesNotification=KA={}));var jA;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(jA||(y.FileChangeType=jA={}));var UA;(function(t){function e(r){let n=r;return jt.objectLiteral(n)&&(dA.URI.is(n.baseUri)||dA.WorkspaceFolder.is(n.baseUri))&&jt.string(n.pattern)}t.is=e})(UA||(y.RelativePattern=UA={}));var WA;(function(t){t.Create=1,t.Change=2,t.Delete=4})(WA||(y.WatchKind=WA={}));var HA;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=$.MessageDirection.serverToClient,t.type=new $.ProtocolNotificationType(t.method)})(HA||(y.PublishDiagnosticsNotification=HA={}));var BA;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(BA||(y.CompletionTriggerKind=BA={}));var zA;(function(t){t.method="textDocument/completion",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(zA||(y.CompletionRequest=zA={}));var GA;(function(t){t.method="completionItem/resolve",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(GA||(y.CompletionResolveRequest=GA={}));var VA;(function(t){t.method="textDocument/hover",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(VA||(y.HoverRequest=VA={}));var YA;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(YA||(y.SignatureHelpTriggerKind=YA={}));var XA;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(XA||(y.SignatureHelpRequest=XA={}));var JA;(function(t){t.method="textDocument/definition",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(JA||(y.DefinitionRequest=JA={}));var QA;(function(t){t.method="textDocument/references",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(QA||(y.ReferencesRequest=QA={}));var ZA;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(ZA||(y.DocumentHighlightRequest=ZA={}));var eO;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(eO||(y.DocumentSymbolRequest=eO={}));var tO;(function(t){t.method="textDocument/codeAction",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(tO||(y.CodeActionRequest=tO={}));var rO;(function(t){t.method="codeAction/resolve",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(rO||(y.CodeActionResolveRequest=rO={}));var nO;(function(t){t.method="workspace/symbol",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(nO||(y.WorkspaceSymbolRequest=nO={}));var oO;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(oO||(y.WorkspaceSymbolResolveRequest=oO={}));var iO;(function(t){t.method="textDocument/codeLens",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(iO||(y.CodeLensRequest=iO={}));var sO;(function(t){t.method="codeLens/resolve",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(sO||(y.CodeLensResolveRequest=sO={}));var aO;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=$.MessageDirection.serverToClient,t.type=new $.ProtocolRequestType0(t.method)})(aO||(y.CodeLensRefreshRequest=aO={}));var cO;(function(t){t.method="textDocument/documentLink",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(cO||(y.DocumentLinkRequest=cO={}));var uO;(function(t){t.method="documentLink/resolve",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(uO||(y.DocumentLinkResolveRequest=uO={}));var lO;(function(t){t.method="textDocument/formatting",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(lO||(y.DocumentFormattingRequest=lO={}));var dO;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(dO||(y.DocumentRangeFormattingRequest=dO={}));var fO;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(fO||(y.DocumentRangesFormattingRequest=fO={}));var pO;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(pO||(y.DocumentOnTypeFormattingRequest=pO={}));var hO;(function(t){t.Identifier=1})(hO||(y.PrepareSupportDefaultBehavior=hO={}));var mO;(function(t){t.method="textDocument/rename",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(mO||(y.RenameRequest=mO={}));var gO;(function(t){t.method="textDocument/prepareRename",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(gO||(y.PrepareRenameRequest=gO={}));var yO;(function(t){t.method="workspace/executeCommand",t.messageDirection=$.MessageDirection.clientToServer,t.type=new $.ProtocolRequestType(t.method)})(yO||(y.ExecuteCommandRequest=yO={}));var vO;(function(t){t.method="workspace/applyEdit",t.messageDirection=$.MessageDirection.serverToClient,t.type=new $.ProtocolRequestType("workspace/applyEdit")})(vO||(y.ApplyWorkspaceEditRequest=vO={}))});var kO=E(Th=>{"use strict";Object.defineProperty(Th,"__esModule",{value:!0});Th.createProtocolConnection=void 0;var _O=cs();function S2(t,e,r,n){return _O.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,_O.createMessageConnection)(t,e,r,n)}Th.createProtocolConnection=S2});var CO=E(Mr=>{"use strict";var C2=Mr&&Mr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),_h=Mr&&Mr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&C2(e,t,r)};Object.defineProperty(Mr,"__esModule",{value:!0});Mr.LSPErrorCodes=Mr.createProtocolConnection=void 0;_h(cs(),Mr);_h((Zi(),Ts(Pp)),Mr);_h(nt(),Mr);_h(TO(),Mr);var E2=kO();Object.defineProperty(Mr,"createProtocolConnection",{enumerable:!0,get:function(){return E2.createProtocolConnection}});var SO;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(SO||(Mr.LSPErrorCodes=SO={}))});var gt=E(to=>{"use strict";var D2=to&&to.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),EO=to&&to.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&D2(e,t,r)};Object.defineProperty(to,"__esModule",{value:!0});to.createProtocolConnection=void 0;var P2=tb();EO(tb(),to);EO(CO(),to);function N2(t,e,r,n){return(0,P2.createMessageConnection)(t,e,r,n)}to.createProtocolConnection=N2});var xb=E(ui=>{"use strict";Object.defineProperty(ui,"__esModule",{value:!0});ui.SemanticTokensBuilder=ui.SemanticTokensDiff=ui.SemanticTokensFeature=void 0;var kh=gt(),A2=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(kh.SemanticTokensRefreshRequest.type),on:e=>{let r=kh.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=kh.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=kh.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};ui.SemanticTokensFeature=A2;var Sh=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let o=e-1,i=r-1;for(;o>=n&&i>=n&&this.originalSequence[o]===this.modifiedSequence[i];)o--,i--;(o<n||i<n)&&(o++,i++);let s=o-n+1,a=this.modifiedSequence.slice(n,i+1);return a.length===1&&a[0]===this.originalSequence[o]?[{start:n,deleteCount:s-1}]:[{start:n,deleteCount:s,data:a}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};ui.SemanticTokensDiff=Sh;var vb=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,o,i){let s=e,a=r;this._dataLen>0&&(s-=this._prevLine,s===0&&(a-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=a,this._data[this._dataLen++]=n,this._data[this._dataLen++]=o,this._data[this._dataLen++]=i,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new Sh(this._prevData,this._data).computeDiff()}:this.build()}};ui.SemanticTokensBuilder=vb});var DO=E(Ch=>{"use strict";Object.defineProperty(Ch,"__esModule",{value:!0});Ch.InlineCompletionFeature=void 0;var O2=gt(),I2=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(O2.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Ch.InlineCompletionFeature=I2});var bb=E(Eh=>{"use strict";Object.defineProperty(Eh,"__esModule",{value:!0});Eh.TextDocuments=void 0;var ls=gt(),wb=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new ls.Emitter,this._onDidOpen=new ls.Emitter,this._onDidClose=new ls.Emitter,this._onDidSave=new ls.Emitter,this._onWillSave=new ls.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=ls.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let o=n.textDocument,i=this._configuration.create(o.uri,o.languageId,o.version,o.text);this._syncedDocuments.set(o.uri,i);let s=Object.freeze({document:i});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),r.push(e.onDidChangeTextDocument(n=>{let o=n.textDocument,i=n.contentChanges;if(i.length===0)return;let{version:s}=o;if(s==null)throw new Error(`Received document change event for ${o.uri} without valid version identifier`);let a=this._syncedDocuments.get(o.uri);a!==void 0&&(a=this._configuration.update(a,i,s),this._syncedDocuments.set(o.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),r.push(e.onDidCloseTextDocument(n=>{let o=this._syncedDocuments.get(n.textDocument.uri);o!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:o})))})),r.push(e.onWillSaveTextDocument(n=>{let o=this._syncedDocuments.get(n.textDocument.uri);o!==void 0&&this._onWillSave.fire(Object.freeze({document:o,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,o)=>{let i=this._syncedDocuments.get(n.textDocument.uri);return i!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:i,reason:n.reason}),o):[]})),r.push(e.onDidSaveTextDocument(n=>{let o=this._syncedDocuments.get(n.textDocument.uri);o!==void 0&&this._onDidSave.fire(Object.freeze({document:o}))})),ls.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};Eh.TextDocuments=wb});var Tb=E(Mc=>{"use strict";Object.defineProperty(Mc,"__esModule",{value:!0});Mc.NotebookDocuments=Mc.NotebookSyncFeature=void 0;var un=gt(),PO=bb(),$2=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(un.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(un.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(un.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(un.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};Mc.NotebookSyncFeature=$2;var Dh=class t{onDidOpenTextDocument(e){return this.openHandler=e,un.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,un.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,un.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};Dh.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var Rb=class{constructor(e){e instanceof PO.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new PO.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new un.Emitter,this._onDidChange=new un.Emitter,this._onDidSave=new un.Emitter,this._onDidClose=new un.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new Dh,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(o=>{this.notebookDocuments.set(o.notebookDocument.uri,o.notebookDocument);for(let i of o.cellTextDocuments)r.openTextDocument({textDocument:i});this.updateCellMap(o.notebookDocument),this._onDidOpen.fire(o.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(o=>{let i=this.notebookDocuments.get(o.notebookDocument.uri);if(i===void 0)return;i.version=o.notebookDocument.version;let s=i.metadata,a=!1,c=o.change;c.metadata!==void 0&&(a=!0,i.metadata=c.metadata);let u=[],d=[],h=[],g=[];if(c.cells!==void 0){let R=c.cells;if(R.structure!==void 0){let p=R.structure.array;if(i.cells.splice(p.start,p.deleteCount,...p.cells!==void 0?p.cells:[]),R.structure.didOpen!==void 0)for(let f of R.structure.didOpen)r.openTextDocument({textDocument:f}),u.push(f.uri);if(R.structure.didClose)for(let f of R.structure.didClose)r.closeTextDocument({textDocument:f}),d.push(f.uri)}if(R.data!==void 0){let p=new Map(R.data.map(f=>[f.document,f]));for(let f=0;f<=i.cells.length;f++){let w=p.get(i.cells[f].document);if(w!==void 0){let O=i.cells.splice(f,1,w);if(h.push({old:O[0],new:w}),p.delete(w.document),p.size===0)break}}}if(R.textContent!==void 0)for(let p of R.textContent)r.changeTextDocument({textDocument:p.document,contentChanges:p.changes}),g.push(p.document.uri)}this.updateCellMap(i);let m={notebookDocument:i};a&&(m.metadata={old:s,new:i.metadata});let b=[];for(let R of u)b.push(this.getNotebookCell(R));let T=[];for(let R of d)T.push(this.getNotebookCell(R));let C=[];for(let R of g)C.push(this.getNotebookCell(R));(b.length>0||T.length>0||h.length>0||C.length>0)&&(m.cells={added:b,removed:T,changed:{data:h,textContent:C}}),(m.metadata!==void 0||m.cells!==void 0)&&this._onDidChange.fire(m)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(o=>{let i=this.notebookDocuments.get(o.notebookDocument.uri);i!==void 0&&this._onDidSave.fire(i)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(o=>{let i=this.notebookDocuments.get(o.notebookDocument.uri);if(i!==void 0){this._onDidClose.fire(i);for(let s of o.cellTextDocuments)r.closeTextDocument({textDocument:s});this.notebookDocuments.delete(o.notebookDocument.uri);for(let s of i.cells)this.notebookCellMap.delete(s.document)}})),un.Disposable.create(()=>{n.forEach(o=>o.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};Mc.NotebookDocuments=Rb});var _b=E(Pt=>{"use strict";Object.defineProperty(Pt,"__esModule",{value:!0});Pt.thenable=Pt.typedArray=Pt.stringArray=Pt.array=Pt.func=Pt.error=Pt.number=Pt.string=Pt.boolean=void 0;function M2(t){return t===!0||t===!1}Pt.boolean=M2;function NO(t){return typeof t=="string"||t instanceof String}Pt.string=NO;function L2(t){return typeof t=="number"||t instanceof Number}Pt.number=L2;function q2(t){return t instanceof Error}Pt.error=q2;function AO(t){return typeof t=="function"}Pt.func=AO;function OO(t){return Array.isArray(t)}Pt.array=OO;function F2(t){return OO(t)&&t.every(e=>NO(e))}Pt.stringArray=F2;function K2(t,e){return Array.isArray(t)&&t.every(e)}Pt.typedArray=K2;function j2(t){return t&&AO(t.then)}Pt.thenable=j2});var kb=E(ln=>{"use strict";Object.defineProperty(ln,"__esModule",{value:!0});ln.generateUuid=ln.parse=ln.isUUID=ln.v4=ln.empty=void 0;var ad=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},cd=class t extends ad{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};cd._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];cd._timeHighBits=["8","9","a","b"];ln.empty=new ad("00000000-0000-0000-0000-000000000000");function IO(){return new cd}ln.v4=IO;var U2=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function $O(t){return U2.test(t)}ln.isUUID=$O;function W2(t){if(!$O(t))throw new Error("invalid uuid");return new ad(t)}ln.parse=W2;function H2(){return IO().asHex()}ln.generateUuid=H2});var MO=E(di=>{"use strict";Object.defineProperty(di,"__esModule",{value:!0});di.attachPartialResult=di.ProgressFeature=di.attachWorkDone=void 0;var li=gt(),B2=kb(),ds=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,o){let i={kind:"begin",title:e,percentage:r,message:n,cancellable:o};this._connection.sendProgress(li.WorkDoneProgress.type,this._token,i)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(li.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(li.WorkDoneProgress.type,this._token,{kind:"end"})}};ds.Instances=new Map;var Ph=class extends ds{constructor(e,r){super(e,r),this._source=new li.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},ud=class{constructor(){}begin(){}report(){}done(){}},Nh=class extends ud{constructor(){super(),this._source=new li.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function z2(t,e){if(e===void 0||e.workDoneToken===void 0)return new ud;let r=e.workDoneToken;return delete e.workDoneToken,new ds(t,r)}di.attachWorkDone=z2;var G2=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(li.WorkDoneProgressCancelNotification.type,r=>{let n=ds.Instances.get(r.token);(n instanceof Ph||n instanceof Nh)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new ud:new ds(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,B2.generateUuid)();return this.connection.sendRequest(li.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Ph(this.connection,e))}else return Promise.resolve(new Nh)}};di.ProgressFeature=G2;var Sb;(function(t){t.type=new li.ProgressType})(Sb||(Sb={}));var Cb=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(Sb.type,this._token,e)}};function V2(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new Cb(t,r)}di.attachPartialResult=V2});var LO=E(Ah=>{"use strict";Object.defineProperty(Ah,"__esModule",{value:!0});Ah.ConfigurationFeature=void 0;var Y2=gt(),X2=_b(),J2=t=>class extends t{getConfiguration(e){return e?X2.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(Y2.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};Ah.ConfigurationFeature=J2});var qO=E(Ih=>{"use strict";Object.defineProperty(Ih,"__esModule",{value:!0});Ih.WorkspaceFoldersFeature=void 0;var Oh=gt(),Q2=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Oh.Emitter,this.connection.onNotification(Oh.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Oh.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Oh.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Ih.WorkspaceFoldersFeature=Q2});var FO=E($h=>{"use strict";Object.defineProperty($h,"__esModule",{value:!0});$h.CallHierarchyFeature=void 0;var Eb=gt(),Z2=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Eb.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=Eb.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=Eb.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};$h.CallHierarchyFeature=Z2});var KO=E(Mh=>{"use strict";Object.defineProperty(Mh,"__esModule",{value:!0});Mh.ShowDocumentFeature=void 0;var eV=gt(),tV=t=>class extends t{showDocument(e){return this.connection.sendRequest(eV.ShowDocumentRequest.type,e)}};Mh.ShowDocumentFeature=tV});var jO=E(Lh=>{"use strict";Object.defineProperty(Lh,"__esModule",{value:!0});Lh.FileOperationsFeature=void 0;var Lc=gt(),rV=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Lc.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(Lc.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(Lc.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(Lc.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(Lc.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(Lc.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Lh.FileOperationsFeature=rV});var UO=E(qh=>{"use strict";Object.defineProperty(qh,"__esModule",{value:!0});qh.LinkedEditingRangeFeature=void 0;var nV=gt(),oV=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(nV.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};qh.LinkedEditingRangeFeature=oV});var WO=E(Fh=>{"use strict";Object.defineProperty(Fh,"__esModule",{value:!0});Fh.TypeHierarchyFeature=void 0;var Db=gt(),iV=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Db.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=Db.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=Db.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Fh.TypeHierarchyFeature=iV});var BO=E(Kh=>{"use strict";Object.defineProperty(Kh,"__esModule",{value:!0});Kh.InlineValueFeature=void 0;var HO=gt(),sV=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(HO.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(HO.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Kh.InlineValueFeature=sV});var GO=E(jh=>{"use strict";Object.defineProperty(jh,"__esModule",{value:!0});jh.FoldingRangeFeature=void 0;var zO=gt(),aV=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(zO.FoldingRangeRefreshRequest.type),on:e=>{let r=zO.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};jh.FoldingRangeFeature=aV});var VO=E(Uh=>{"use strict";Object.defineProperty(Uh,"__esModule",{value:!0});Uh.InlayHintFeature=void 0;var Pb=gt(),cV=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Pb.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Pb.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(Pb.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};Uh.InlayHintFeature=cV});var YO=E(Wh=>{"use strict";Object.defineProperty(Wh,"__esModule",{value:!0});Wh.DiagnosticFeature=void 0;var ld=gt(),uV=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(ld.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(ld.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(ld.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(ld.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(ld.WorkspaceDiagnosticRequest.partialResult,r)))}}};Wh.DiagnosticFeature=uV});var XO=E(Hh=>{"use strict";Object.defineProperty(Hh,"__esModule",{value:!0});Hh.MonikerFeature=void 0;var lV=gt(),dV=t=>class extends t{get moniker(){return{on:e=>{let r=lV.MonikerRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Hh.MonikerFeature=dV});var d0=E(Ce=>{"use strict";Object.defineProperty(Ce,"__esModule",{value:!0});Ce.createConnection=Ce.combineFeatures=Ce.combineNotebooksFeatures=Ce.combineLanguagesFeatures=Ce.combineWorkspaceFeatures=Ce.combineWindowFeatures=Ce.combineClientFeatures=Ce.combineTracerFeatures=Ce.combineTelemetryFeatures=Ce.combineConsoleFeatures=Ce._NotebooksImpl=Ce._LanguagesImpl=Ce.BulkUnregistration=Ce.BulkRegistration=Ce.ErrorMessageTracker=void 0;var F=gt(),dn=_b(),Ab=kb(),de=MO(),fV=LO(),pV=qO(),hV=FO(),mV=xb(),gV=KO(),yV=jO(),vV=UO(),xV=WO(),wV=BO(),bV=GO(),RV=VO(),TV=YO(),_V=Tb(),kV=XO();function Nb(t){if(t!==null)return t}var Ob=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};Ce.ErrorMessageTracker=Ob;var Bh=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(F.MessageType.Error,e)}warn(e){this.send(F.MessageType.Warning,e)}info(e){this.send(F.MessageType.Info,e)}log(e){this.send(F.MessageType.Log,e)}debug(e){this.send(F.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(F.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,F.RAL)().console.error("Sending log message failed")})}},Ib=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:F.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(F.ShowMessageRequest.type,n).then(Nb)}showWarningMessage(e,...r){let n={type:F.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(F.ShowMessageRequest.type,n).then(Nb)}showInformationMessage(e,...r){let n={type:F.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(F.ShowMessageRequest.type,n).then(Nb)}},JO=(0,gV.ShowDocumentFeature)((0,de.ProgressFeature)(Ib)),QO;(function(t){function e(){return new zh}t.create=e})(QO||(Ce.BulkRegistration=QO={}));var zh=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=dn.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let o=Ab.generateUuid();this._registrations.push({id:o,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},ZO;(function(t){function e(){return new dd(void 0,[])}t.create=e})(ZO||(Ce.BulkUnregistration=ZO={}));var dd=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(F.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=dn.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let o={unregisterations:[n]};return this._connection.sendRequest(F.UnregistrationRequest.type,o).then(()=>{this._unregistrations.delete(r)},i=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Gh=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof zh?this.registerMany(e):e instanceof dd?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let o=dn.string(r)?r:r.method,i=Ab.generateUuid(),s={registrations:[{id:i,method:o,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(F.RegistrationRequest.type,s).then(a=>(e.add({id:i,method:o}),e),a=>(this.connection.console.info(`Registering request handler for ${o} failed.`),Promise.reject(a)))}registerSingle2(e,r){let n=dn.string(e)?e:e.method,o=Ab.generateUuid(),i={registrations:[{id:o,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(F.RegistrationRequest.type,i).then(s=>F.Disposable.create(()=>{this.unregisterSingle(o,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${o} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(s)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(F.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(F.RegistrationRequest.type,r).then(()=>new dd(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},$b=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(o){return o&&!!o.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(F.ApplyWorkspaceEditRequest.type,n)}},e0=(0,yV.FileOperationsFeature)((0,pV.WorkspaceFoldersFeature)((0,fV.ConfigurationFeature)($b))),Vh=class{constructor(){this._trace=F.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==F.Trace.Off&&this.connection.sendNotification(F.LogTraceNotification.type,{message:e,verbose:this._trace===F.Trace.Verbose?r:void 0}).catch(()=>{})}},Yh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(F.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Xh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,de.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,de.attachPartialResult)(this.connection,r)}};Ce._LanguagesImpl=Xh;var t0=(0,bV.FoldingRangeFeature)((0,kV.MonikerFeature)((0,TV.DiagnosticFeature)((0,RV.InlayHintFeature)((0,wV.InlineValueFeature)((0,xV.TypeHierarchyFeature)((0,vV.LinkedEditingRangeFeature)((0,mV.SemanticTokensFeature)((0,hV.CallHierarchyFeature)(Xh))))))))),Jh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,de.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,de.attachPartialResult)(this.connection,r)}};Ce._NotebooksImpl=Jh;var r0=(0,_V.NotebookSyncFeature)(Jh);function n0(t,e){return function(r){return e(t(r))}}Ce.combineConsoleFeatures=n0;function o0(t,e){return function(r){return e(t(r))}}Ce.combineTelemetryFeatures=o0;function i0(t,e){return function(r){return e(t(r))}}Ce.combineTracerFeatures=i0;function s0(t,e){return function(r){return e(t(r))}}Ce.combineClientFeatures=s0;function a0(t,e){return function(r){return e(t(r))}}Ce.combineWindowFeatures=a0;function c0(t,e){return function(r){return e(t(r))}}Ce.combineWorkspaceFeatures=c0;function u0(t,e){return function(r){return e(t(r))}}Ce.combineLanguagesFeatures=u0;function l0(t,e){return function(r){return e(t(r))}}Ce.combineNotebooksFeatures=l0;function SV(t,e){function r(o,i,s){return o&&i?s(o,i):o||i}return{__brand:"features",console:r(t.console,e.console,n0),tracer:r(t.tracer,e.tracer,i0),telemetry:r(t.telemetry,e.telemetry,o0),client:r(t.client,e.client,s0),window:r(t.window,e.window,a0),workspace:r(t.workspace,e.workspace,c0),languages:r(t.languages,e.languages,u0),notebooks:r(t.notebooks,e.notebooks,l0)}}Ce.combineFeatures=SV;function CV(t,e,r){let n=r&&r.console?new(r.console(Bh)):new Bh,o=t(n);n.rawAttach(o);let i=r&&r.tracer?new(r.tracer(Vh)):new Vh,s=r&&r.telemetry?new(r.telemetry(Yh)):new Yh,a=r&&r.client?new(r.client(Gh)):new Gh,c=r&&r.window?new(r.window(JO)):new JO,u=r&&r.workspace?new(r.workspace(e0)):new e0,d=r&&r.languages?new(r.languages(t0)):new t0,h=r&&r.notebooks?new(r.notebooks(r0)):new r0,g=[n,i,s,a,c,u,d,h];function m(p){return p instanceof Promise?p:dn.thenable(p)?new Promise((f,w)=>{p.then(O=>f(O),O=>w(O))}):Promise.resolve(p)}let b,T,C,R={listen:()=>o.listen(),sendRequest:(p,...f)=>o.sendRequest(dn.string(p)?p:p.method,...f),onRequest:(p,f)=>o.onRequest(p,f),sendNotification:(p,f)=>{let w=dn.string(p)?p:p.method;return o.sendNotification(w,f)},onNotification:(p,f)=>o.onNotification(p,f),onProgress:o.onProgress,sendProgress:o.sendProgress,onInitialize:p=>(T=p,{dispose:()=>{T=void 0}}),onInitialized:p=>o.onNotification(F.InitializedNotification.type,p),onShutdown:p=>(b=p,{dispose:()=>{b=void 0}}),onExit:p=>(C=p,{dispose:()=>{C=void 0}}),get console(){return n},get telemetry(){return s},get tracer(){return i},get client(){return a},get window(){return c},get workspace(){return u},get languages(){return d},get notebooks(){return h},onDidChangeConfiguration:p=>o.onNotification(F.DidChangeConfigurationNotification.type,p),onDidChangeWatchedFiles:p=>o.onNotification(F.DidChangeWatchedFilesNotification.type,p),__textDocumentSync:void 0,onDidOpenTextDocument:p=>o.onNotification(F.DidOpenTextDocumentNotification.type,p),onDidChangeTextDocument:p=>o.onNotification(F.DidChangeTextDocumentNotification.type,p),onDidCloseTextDocument:p=>o.onNotification(F.DidCloseTextDocumentNotification.type,p),onWillSaveTextDocument:p=>o.onNotification(F.WillSaveTextDocumentNotification.type,p),onWillSaveTextDocumentWaitUntil:p=>o.onRequest(F.WillSaveTextDocumentWaitUntilRequest.type,p),onDidSaveTextDocument:p=>o.onNotification(F.DidSaveTextDocumentNotification.type,p),sendDiagnostics:p=>o.sendNotification(F.PublishDiagnosticsNotification.type,p),onHover:p=>o.onRequest(F.HoverRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),void 0)),onCompletion:p=>o.onRequest(F.CompletionRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onCompletionResolve:p=>o.onRequest(F.CompletionResolveRequest.type,p),onSignatureHelp:p=>o.onRequest(F.SignatureHelpRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),void 0)),onDeclaration:p=>o.onRequest(F.DeclarationRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onDefinition:p=>o.onRequest(F.DefinitionRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onTypeDefinition:p=>o.onRequest(F.TypeDefinitionRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onImplementation:p=>o.onRequest(F.ImplementationRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onReferences:p=>o.onRequest(F.ReferencesRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onDocumentHighlight:p=>o.onRequest(F.DocumentHighlightRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onDocumentSymbol:p=>o.onRequest(F.DocumentSymbolRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onWorkspaceSymbol:p=>o.onRequest(F.WorkspaceSymbolRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onWorkspaceSymbolResolve:p=>o.onRequest(F.WorkspaceSymbolResolveRequest.type,p),onCodeAction:p=>o.onRequest(F.CodeActionRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onCodeActionResolve:p=>o.onRequest(F.CodeActionResolveRequest.type,(f,w)=>p(f,w)),onCodeLens:p=>o.onRequest(F.CodeLensRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onCodeLensResolve:p=>o.onRequest(F.CodeLensResolveRequest.type,(f,w)=>p(f,w)),onDocumentFormatting:p=>o.onRequest(F.DocumentFormattingRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),void 0)),onDocumentRangeFormatting:p=>o.onRequest(F.DocumentRangeFormattingRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),void 0)),onDocumentOnTypeFormatting:p=>o.onRequest(F.DocumentOnTypeFormattingRequest.type,(f,w)=>p(f,w)),onRenameRequest:p=>o.onRequest(F.RenameRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),void 0)),onPrepareRename:p=>o.onRequest(F.PrepareRenameRequest.type,(f,w)=>p(f,w)),onDocumentLinks:p=>o.onRequest(F.DocumentLinkRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onDocumentLinkResolve:p=>o.onRequest(F.DocumentLinkResolveRequest.type,(f,w)=>p(f,w)),onDocumentColor:p=>o.onRequest(F.DocumentColorRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onColorPresentation:p=>o.onRequest(F.ColorPresentationRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onFoldingRanges:p=>o.onRequest(F.FoldingRangeRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onSelectionRanges:p=>o.onRequest(F.SelectionRangeRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),(0,de.attachPartialResult)(o,f))),onExecuteCommand:p=>o.onRequest(F.ExecuteCommandRequest.type,(f,w)=>p(f,w,(0,de.attachWorkDone)(o,f),void 0)),dispose:()=>o.dispose()};for(let p of g)p.attach(R);return o.onRequest(F.InitializeRequest.type,p=>{e.initialize(p),dn.string(p.trace)&&(i.trace=F.Trace.fromString(p.trace));for(let f of g)f.initialize(p.capabilities);if(T){let f=T(p,new F.CancellationTokenSource().token,(0,de.attachWorkDone)(o,p),void 0);return m(f).then(w=>{if(w instanceof F.ResponseError)return w;let O=w;O||(O={capabilities:{}});let G=O.capabilities;G||(G={},O.capabilities=G),G.textDocumentSync===void 0||G.textDocumentSync===null?G.textDocumentSync=dn.number(R.__textDocumentSync)?R.__textDocumentSync:F.TextDocumentSyncKind.None:!dn.number(G.textDocumentSync)&&!dn.number(G.textDocumentSync.change)&&(G.textDocumentSync.change=dn.number(R.__textDocumentSync)?R.__textDocumentSync:F.TextDocumentSyncKind.None);for(let it of g)it.fillServerCapabilities(G);return O})}else{let f={capabilities:{textDocumentSync:F.TextDocumentSyncKind.None}};for(let w of g)w.fillServerCapabilities(f.capabilities);return f}}),o.onRequest(F.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,b)return b(new F.CancellationTokenSource().token)}),o.onNotification(F.ExitNotification.type,()=>{try{C&&C()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),o.onNotification(F.SetTraceNotification.type,p=>{i.trace=F.Trace.fromString(p.value)}),R}Ce.createConnection=CV});var Mb=E(lr=>{"use strict";var EV=lr&&lr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),p0=lr&&lr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&EV(e,t,r)};Object.defineProperty(lr,"__esModule",{value:!0});lr.ProposedFeatures=lr.NotebookDocuments=lr.TextDocuments=lr.SemanticTokensBuilder=void 0;var DV=xb();Object.defineProperty(lr,"SemanticTokensBuilder",{enumerable:!0,get:function(){return DV.SemanticTokensBuilder}});var PV=DO();p0(gt(),lr);var NV=bb();Object.defineProperty(lr,"TextDocuments",{enumerable:!0,get:function(){return NV.TextDocuments}});var AV=Tb();Object.defineProperty(lr,"NotebookDocuments",{enumerable:!0,get:function(){return AV.NotebookDocuments}});p0(d0(),lr);var f0;(function(t){t.all={__brand:"features",languages:PV.InlineCompletionFeature}})(f0||(lr.ProposedFeatures=f0={}))});var m0=E((Che,h0)=>{"use strict";h0.exports=gt()});var fn=E(ro=>{"use strict";var OV=ro&&ro.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),y0=ro&&ro.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&OV(e,t,r)};Object.defineProperty(ro,"__esModule",{value:!0});ro.createConnection=void 0;var Qh=Mb();y0(m0(),ro);y0(Mb(),ro);var g0=!1,IV={initialize:t=>{},get shutdownReceived(){return g0},set shutdownReceived(t){g0=t},exit:t=>{}};function $V(t,e,r,n){let o,i,s,a;t!==void 0&&t.__brand==="features"&&(o=t,t=e,e=r,r=n),Qh.ConnectionStrategy.is(t)||Qh.ConnectionOptions.is(t)?a=t:(i=t,s=e,a=r);let c=u=>(0,Qh.createProtocolConnection)(i,s,u,a);return(0,Qh.createConnection)(c,IV,o)}ro.createConnection=$V});var jc=E(fr=>{"use strict";Object.defineProperty(fr,"__esModule",{value:!0});fr.stringArray=fr.array=fr.func=fr.error=fr.number=fr.string=fr.boolean=void 0;function x3(t){return t===!0||t===!1}fr.boolean=x3;function $0(t){return typeof t=="string"||t instanceof String}fr.string=$0;function w3(t){return typeof t=="number"||t instanceof Number}fr.number=w3;function b3(t){return t instanceof Error}fr.error=b3;function R3(t){return typeof t=="function"}fr.func=R3;function M0(t){return Array.isArray(t)}fr.array=M0;function T3(t){return M0(t)&&t.every(e=>$0(e))}fr.stringArray=T3});var fR=E(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.Message=Z.NotificationType9=Z.NotificationType8=Z.NotificationType7=Z.NotificationType6=Z.NotificationType5=Z.NotificationType4=Z.NotificationType3=Z.NotificationType2=Z.NotificationType1=Z.NotificationType0=Z.NotificationType=Z.RequestType9=Z.RequestType8=Z.RequestType7=Z.RequestType6=Z.RequestType5=Z.RequestType4=Z.RequestType3=Z.RequestType2=Z.RequestType1=Z.RequestType=Z.RequestType0=Z.AbstractMessageSignature=Z.ParameterStructures=Z.ResponseError=Z.ErrorCodes=void 0;var ps=jc(),Ub;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(Ub||(Z.ErrorCodes=Ub={}));var Wb=class t extends Error{constructor(e,r,n){super(r),this.code=ps.number(e)?e:Ub.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};Z.ResponseError=Wb;var Lr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};Z.ParameterStructures=Lr;Lr.auto=new Lr("auto");Lr.byPosition=new Lr("byPosition");Lr.byName=new Lr("byName");var Je=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Lr.auto}};Z.AbstractMessageSignature=Je;var Hb=class extends Je{constructor(e){super(e,0)}};Z.RequestType0=Hb;var Bb=class extends Je{constructor(e,r=Lr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Z.RequestType=Bb;var zb=class extends Je{constructor(e,r=Lr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Z.RequestType1=zb;var Gb=class extends Je{constructor(e){super(e,2)}};Z.RequestType2=Gb;var Vb=class extends Je{constructor(e){super(e,3)}};Z.RequestType3=Vb;var Yb=class extends Je{constructor(e){super(e,4)}};Z.RequestType4=Yb;var Xb=class extends Je{constructor(e){super(e,5)}};Z.RequestType5=Xb;var Jb=class extends Je{constructor(e){super(e,6)}};Z.RequestType6=Jb;var Qb=class extends Je{constructor(e){super(e,7)}};Z.RequestType7=Qb;var Zb=class extends Je{constructor(e){super(e,8)}};Z.RequestType8=Zb;var eR=class extends Je{constructor(e){super(e,9)}};Z.RequestType9=eR;var tR=class extends Je{constructor(e,r=Lr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Z.NotificationType=tR;var rR=class extends Je{constructor(e){super(e,0)}};Z.NotificationType0=rR;var nR=class extends Je{constructor(e,r=Lr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Z.NotificationType1=nR;var oR=class extends Je{constructor(e){super(e,2)}};Z.NotificationType2=oR;var iR=class extends Je{constructor(e){super(e,3)}};Z.NotificationType3=iR;var sR=class extends Je{constructor(e){super(e,4)}};Z.NotificationType4=sR;var aR=class extends Je{constructor(e){super(e,5)}};Z.NotificationType5=aR;var cR=class extends Je{constructor(e){super(e,6)}};Z.NotificationType6=cR;var uR=class extends Je{constructor(e){super(e,7)}};Z.NotificationType7=uR;var lR=class extends Je{constructor(e){super(e,8)}};Z.NotificationType8=lR;var dR=class extends Je{constructor(e){super(e,9)}};Z.NotificationType9=dR;var L0;(function(t){function e(o){let i=o;return i&&ps.string(i.method)&&(ps.string(i.id)||ps.number(i.id))}t.isRequest=e;function r(o){let i=o;return i&&ps.string(i.method)&&o.id===void 0}t.isNotification=r;function n(o){let i=o;return i&&(i.result!==void 0||!!i.error)&&(ps.string(i.id)||ps.number(i.id)||i.id===null)}t.isResponse=n})(L0||(Z.Message=L0={}))});var hR=E(fi=>{"use strict";var q0;Object.defineProperty(fi,"__esModule",{value:!0});fi.LRUCache=fi.LinkedMap=fi.Touch=void 0;var pr;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(pr||(fi.Touch=pr={}));var ym=class{constructor(){this[q0]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=pr.None){let n=this._map.get(e);if(n)return r!==pr.None&&this.touch(n,r),n.value}set(e,r,n=pr.None){let o=this._map.get(e);if(o)o.value=r,n!==pr.None&&this.touch(o,n);else{switch(o={key:e,value:r,next:void 0,previous:void 0},n){case pr.None:this.addItemLast(o);break;case pr.First:this.addItemFirst(o);break;case pr.Last:this.addItemLast(o);break;default:this.addItemLast(o);break}this._map.set(e,o),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,o=this._head;for(;o;){if(r?e.bind(r)(o.value,o.key,this):e(o.value,o.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");o=o.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let o={value:r.key,done:!1};return r=r.next,o}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let o={value:r.value,done:!1};return r=r.next,o}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let o={value:[r.key,r.value],done:!1};return r=r.next,o}else return{value:void 0,done:!0}}};return n}[(q0=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==pr.First&&r!==pr.Last)){if(r===pr.First){if(e===this._head)return;let n=e.next,o=e.previous;e===this._tail?(o.next=void 0,this._tail=o):(n.previous=o,o.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===pr.Last){if(e===this._tail)return;let n=e.next,o=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=o,o.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};fi.LinkedMap=ym;var pR=class extends ym{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=pr.AsNew){return super.get(e,r)}peek(e){return super.get(e,pr.None)}set(e,r){return super.set(e,r,pr.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};fi.LRUCache=pR});var K0=E(vm=>{"use strict";Object.defineProperty(vm,"__esModule",{value:!0});vm.Disposable=void 0;var F0;(function(t){function e(r){return{dispose:r}}t.create=e})(F0||(vm.Disposable=F0={}))});var pi=E(yR=>{"use strict";Object.defineProperty(yR,"__esModule",{value:!0});var mR;function gR(){if(mR===void 0)throw new Error("No runtime abstraction layer installed");return mR}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");mR=r}t.install=e})(gR||(gR={}));yR.default=gR});var Wc=E(Uc=>{"use strict";Object.defineProperty(Uc,"__esModule",{value:!0});Uc.Emitter=Uc.Event=void 0;var _3=pi(),j0;(function(t){let e={dispose(){}};t.None=function(){return e}})(j0||(Uc.Event=j0={}));var vR=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let o=0,i=this._callbacks.length;o<i;o++)if(this._callbacks[o]===e)if(this._contexts[o]===r){this._callbacks.splice(o,1),this._contexts.splice(o,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),o=this._contexts.slice(0);for(let i=0,s=n.length;i<s;i++)try{r.push(n[i].apply(o[i],e))}catch(a){(0,_3.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},xm=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new vR),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let o={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),o.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(o),o}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};Uc.Emitter=xm;xm._noop=function(){}});var Rm=E(Hc=>{"use strict";Object.defineProperty(Hc,"__esModule",{value:!0});Hc.CancellationTokenSource=Hc.CancellationToken=void 0;var k3=pi(),S3=jc(),xR=Wc(),wm;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:xR.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:xR.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||S3.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(wm||(Hc.CancellationToken=wm={}));var C3=Object.freeze(function(t,e){let r=(0,k3.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),bm=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?C3:(this._emitter||(this._emitter=new xR.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},wR=class{get token(){return this._token||(this._token=new bm),this._token}cancel(){this._token?this._token.cancel():this._token=wm.Cancelled}dispose(){this._token?this._token instanceof bm&&this._token.dispose():this._token=wm.None}};Hc.CancellationTokenSource=wR});var U0=E(Bc=>{"use strict";Object.defineProperty(Bc,"__esModule",{value:!0});Bc.SharedArrayReceiverStrategy=Bc.SharedArraySenderStrategy=void 0;var E3=Rm(),md;(function(t){t.Continue=0,t.Cancelled=1})(md||(md={}));var bR=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=md.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let o=new Int32Array(n,0,1);Atomics.store(o,0,md.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};Bc.SharedArraySenderStrategy=bR;var RR=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===md.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},TR=class{constructor(e){this.token=new RR(e)}cancel(){}dispose(){}},_R=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new E3.CancellationTokenSource:new TR(r)}};Bc.SharedArrayReceiverStrategy=_R});var SR=E(Tm=>{"use strict";Object.defineProperty(Tm,"__esModule",{value:!0});Tm.Semaphore=void 0;var D3=pi(),kR=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,D3.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Tm.Semaphore=kR});var H0=E(hi=>{"use strict";Object.defineProperty(hi,"__esModule",{value:!0});hi.ReadableStreamMessageReader=hi.AbstractMessageReader=hi.MessageReader=void 0;var ER=pi(),zc=jc(),CR=Wc(),P3=SR(),W0;(function(t){function e(r){let n=r;return n&&zc.func(n.listen)&&zc.func(n.dispose)&&zc.func(n.onError)&&zc.func(n.onClose)&&zc.func(n.onPartialMessage)}t.is=e})(W0||(hi.MessageReader=W0={}));var _m=class{constructor(){this.errorEmitter=new CR.Emitter,this.closeEmitter=new CR.Emitter,this.partialMessageEmitter=new CR.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${zc.string(e.message)?e.message:"unknown"}`)}};hi.AbstractMessageReader=_m;var DR;(function(t){function e(r){let n,o,i,s=new Map,a,c=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(i=r.contentDecoder,s.set(i.name,i)),r.contentDecoders!==void 0)for(let u of r.contentDecoders)s.set(u.name,u);if(r.contentTypeDecoder!==void 0&&(a=r.contentTypeDecoder,c.set(a.name,a)),r.contentTypeDecoders!==void 0)for(let u of r.contentTypeDecoders)c.set(u.name,u)}return a===void 0&&(a=(0,ER.default)().applicationJson.decoder,c.set(a.name,a)),{charset:n,contentDecoder:i,contentDecoders:s,contentTypeDecoder:a,contentTypeDecoders:c}}t.fromOptions=e})(DR||(DR={}));var PR=class extends _m{constructor(e,r){super(),this.readable=e,this.options=DR.fromOptions(r),this.buffer=(0,ER.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new P3.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let o=n.get("content-length");if(!o){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let i=parseInt(o);if(isNaN(i)){this.fireError(new Error(`Content-Length value must be a number. Got ${o}`));return}this.nextMessageLength=i}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,o=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(o)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,ER.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};hi.ReadableStreamMessageReader=PR});var Y0=E(mi=>{"use strict";Object.defineProperty(mi,"__esModule",{value:!0});mi.WriteableStreamMessageWriter=mi.AbstractMessageWriter=mi.MessageWriter=void 0;var B0=pi(),gd=jc(),N3=SR(),z0=Wc(),A3="Content-Length: ",G0=`\r
`,V0;(function(t){function e(r){let n=r;return n&&gd.func(n.dispose)&&gd.func(n.onClose)&&gd.func(n.onError)&&gd.func(n.write)}t.is=e})(V0||(mi.MessageWriter=V0={}));var km=class{constructor(){this.errorEmitter=new z0.Emitter,this.closeEmitter=new z0.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${gd.string(e.message)?e.message:"unknown"}`)}};mi.AbstractMessageWriter=km;var NR;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,B0.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,B0.default)().applicationJson.encoder}}t.fromOptions=e})(NR||(NR={}));var AR=class extends km{constructor(e,r){super(),this.writable=e,this.options=NR.fromOptions(r),this.errorCount=0,this.writeSemaphore=new N3.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let o=[];return o.push(A3,n.byteLength.toString(),G0),o.push(G0),this.doWrite(e,o,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(o){return this.handleError(o,e),Promise.reject(o)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};mi.WriteableStreamMessageWriter=AR});var X0=E(Sm=>{"use strict";Object.defineProperty(Sm,"__esModule",{value:!0});Sm.AbstractMessageBuffer=void 0;var O3=13,I3=10,$3=`\r
`,OR=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,o=0,i=0;e:for(;n<this._chunks.length;){let u=this._chunks[n];for(o=0;o<u.length;){switch(u[o]){case O3:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case I3:switch(r){case 1:r=2;break;case 3:r=4,o++;break e;default:r=0}break;default:r=0}o++}i+=u.byteLength,n++}if(r!==4)return;let s=this._read(i+o),a=new Map,c=this.toString(s,"ascii").split($3);if(c.length<2)return a;for(let u=0;u<c.length-2;u++){let d=c[u],h=d.indexOf(":");if(h===-1)throw new Error(`Message header must separate key and value using ':'
${d}`);let g=d.substr(0,h),m=d.substr(h+1).trim();a.set(e?g.toLowerCase():g,m)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let i=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(i)}if(this._chunks[0].byteLength>e){let i=this._chunks[0],s=this.asNative(i,e);return this._chunks[0]=i.slice(e),this._totalLength-=e,s}let r=this.allocNative(e),n=0,o=0;for(;e>0;){let i=this._chunks[o];if(i.byteLength>e){let s=i.slice(0,e);r.set(s,n),n+=e,this._chunks[o]=i.slice(e),this._totalLength-=e,e-=e}else r.set(i,n),n+=i.byteLength,this._chunks.shift(),this._totalLength-=i.byteLength,e-=i.byteLength}return r}};Sm.AbstractMessageBuffer=OR});var tI=E(me=>{"use strict";Object.defineProperty(me,"__esModule",{value:!0});me.createMessageConnection=me.ConnectionOptions=me.MessageStrategy=me.CancellationStrategy=me.CancellationSenderStrategy=me.CancellationReceiverStrategy=me.RequestCancellationReceiverStrategy=me.IdCancellationReceiverStrategy=me.ConnectionStrategy=me.ConnectionError=me.ConnectionErrors=me.LogTraceNotification=me.SetTraceNotification=me.TraceFormat=me.TraceValues=me.Trace=me.NullLogger=me.ProgressType=me.ProgressToken=void 0;var J0=pi(),dt=jc(),ae=fR(),Q0=hR(),yd=Wc(),IR=Rm(),wd;(function(t){t.type=new ae.NotificationType("$/cancelRequest")})(wd||(wd={}));var $R;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})($R||(me.ProgressToken=$R={}));var vd;(function(t){t.type=new ae.NotificationType("$/progress")})(vd||(vd={}));var MR=class{constructor(){}};me.ProgressType=MR;var LR;(function(t){function e(r){return dt.func(r)}t.is=e})(LR||(LR={}));me.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var Ne;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(Ne||(me.Trace=Ne={}));var Z0;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(Z0||(me.TraceValues=Z0={}));(function(t){function e(n){if(!dt.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(Ne||(me.Trace=Ne={}));var Qr;(function(t){t.Text="text",t.JSON="json"})(Qr||(me.TraceFormat=Qr={}));(function(t){function e(r){return dt.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(Qr||(me.TraceFormat=Qr={}));var qR;(function(t){t.type=new ae.NotificationType("$/setTrace")})(qR||(me.SetTraceNotification=qR={}));var Cm;(function(t){t.type=new ae.NotificationType("$/logTrace")})(Cm||(me.LogTraceNotification=Cm={}));var xd;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(xd||(me.ConnectionErrors=xd={}));var Gc=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};me.ConnectionError=Gc;var FR;(function(t){function e(r){let n=r;return n&&dt.func(n.cancelUndispatched)}t.is=e})(FR||(me.ConnectionStrategy=FR={}));var Em;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&dt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||dt.func(n.dispose))}t.is=e})(Em||(me.IdCancellationReceiverStrategy=Em={}));var KR;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&dt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||dt.func(n.dispose))}t.is=e})(KR||(me.RequestCancellationReceiverStrategy=KR={}));var Dm;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new IR.CancellationTokenSource}});function e(r){return Em.is(r)||KR.is(r)}t.is=e})(Dm||(me.CancellationReceiverStrategy=Dm={}));var Pm;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(wd.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&dt.func(n.sendCancellation)&&dt.func(n.cleanup)}t.is=e})(Pm||(me.CancellationSenderStrategy=Pm={}));var Nm;(function(t){t.Message=Object.freeze({receiver:Dm.Message,sender:Pm.Message});function e(r){let n=r;return n&&Dm.is(n.receiver)&&Pm.is(n.sender)}t.is=e})(Nm||(me.CancellationStrategy=Nm={}));var Am;(function(t){function e(r){let n=r;return n&&dt.func(n.handleMessage)}t.is=e})(Am||(me.MessageStrategy=Am={}));var eI;(function(t){function e(r){let n=r;return n&&(Nm.is(n.cancellationStrategy)||FR.is(n.connectionStrategy)||Am.is(n.messageStrategy))}t.is=e})(eI||(me.ConnectionOptions=eI={}));var An;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(An||(An={}));function M3(t,e,r,n){let o=r!==void 0?r:me.NullLogger,i=0,s=0,a=0,c="2.0",u,d=new Map,h,g=new Map,m=new Map,b,T=new Q0.LinkedMap,C=new Map,R=new Set,p=new Map,f=Ne.Off,w=Qr.Text,O,G=An.New,it=new yd.Emitter,Qe=new yd.Emitter,tr=new yd.Emitter,Wt=new yd.Emitter,q=new yd.Emitter,D=n&&n.cancellationStrategy?n.cancellationStrategy:Nm.Message;function V(l){if(l===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+l.toString()}function U(l){return l===null?"res-unknown-"+(++a).toString():"res-"+l.toString()}function we(){return"not-"+(++s).toString()}function te(l,x){ae.Message.isRequest(x)?l.set(V(x.id),x):ae.Message.isResponse(x)?l.set(U(x.id),x):l.set(we(),x)}function oe(l){}function W(){return G===An.Listening}function I(){return G===An.Closed}function re(){return G===An.Disposed}function jr(){(G===An.New||G===An.Listening)&&(G=An.Closed,Qe.fire(void 0))}function ws(l){it.fire([l,void 0,void 0])}function pu(l){it.fire(l)}t.onClose(jr),t.onError(ws),e.onClose(jr),e.onError(pu);function Po(){b||T.size===0||(b=(0,J0.default)().timer.setImmediate(()=>{b=void 0,bs()}))}function Ht(l){ae.Message.isRequest(l)?rr(l):ae.Message.isNotification(l)?Bt(l):ae.Message.isResponse(l)?In(l):Ur(l)}function bs(){if(T.size===0)return;let l=T.shift();try{let x=n?.messageStrategy;Am.is(x)?x.handleMessage(l,Ht):Ht(l)}finally{Po()}}let _t=l=>{try{if(ae.Message.isNotification(l)&&l.method===wd.type.method){let x=l.params.id,S=V(x),A=T.get(S);if(ae.Message.isRequest(A)){let ee=n?.connectionStrategy,le=ee&&ee.cancelUndispatched?ee.cancelUndispatched(A,oe):void 0;if(le&&(le.error!==void 0||le.result!==void 0)){T.delete(S),p.delete(x),le.id=A.id,Hr(le,l.method,Date.now()),e.write(le).catch(()=>o.error("Sending response for canceled message failed."));return}}let ne=p.get(x);if(ne!==void 0){ne.cancel(),ki(l);return}else R.add(x)}te(T,l)}finally{Po()}};function rr(l){if(re())return;function x(H,ce,X){let ye={jsonrpc:c,id:l.id};H instanceof ae.ResponseError?ye.error=H.toJson():ye.result=H===void 0?null:H,Hr(ye,ce,X),e.write(ye).catch(()=>o.error("Sending response failed."))}function S(H,ce,X){let ye={jsonrpc:c,id:l.id,error:H.toJson()};Hr(ye,ce,X),e.write(ye).catch(()=>o.error("Sending response failed."))}function A(H,ce,X){H===void 0&&(H=null);let ye={jsonrpc:c,id:l.id,result:H};Hr(ye,ce,X),e.write(ye).catch(()=>o.error("Sending response failed."))}Rs(l);let ne=d.get(l.method),ee,le;ne&&(ee=ne.type,le=ne.handler);let pe=Date.now();if(le||u){let H=l.id??String(Date.now()),ce=Em.is(D.receiver)?D.receiver.createCancellationTokenSource(H):D.receiver.createCancellationTokenSource(l);l.id!==null&&R.has(l.id)&&ce.cancel(),l.id!==null&&p.set(H,ce);try{let X;if(le)if(l.params===void 0){if(ee!==void 0&&ee.numberOfParams!==0){S(new ae.ResponseError(ae.ErrorCodes.InvalidParams,`Request ${l.method} defines ${ee.numberOfParams} params but received none.`),l.method,pe);return}X=le(ce.token)}else if(Array.isArray(l.params)){if(ee!==void 0&&ee.parameterStructures===ae.ParameterStructures.byName){S(new ae.ResponseError(ae.ErrorCodes.InvalidParams,`Request ${l.method} defines parameters by name but received parameters by position`),l.method,pe);return}X=le(...l.params,ce.token)}else{if(ee!==void 0&&ee.parameterStructures===ae.ParameterStructures.byPosition){S(new ae.ResponseError(ae.ErrorCodes.InvalidParams,`Request ${l.method} defines parameters by position but received parameters by name`),l.method,pe);return}X=le(l.params,ce.token)}else u&&(X=u(l.method,l.params,ce.token));let ye=X;X?ye.then?ye.then(De=>{p.delete(H),x(De,l.method,pe)},De=>{p.delete(H),De instanceof ae.ResponseError?S(De,l.method,pe):De&&dt.string(De.message)?S(new ae.ResponseError(ae.ErrorCodes.InternalError,`Request ${l.method} failed with message: ${De.message}`),l.method,pe):S(new ae.ResponseError(ae.ErrorCodes.InternalError,`Request ${l.method} failed unexpectedly without providing any details.`),l.method,pe)}):(p.delete(H),x(X,l.method,pe)):(p.delete(H),A(X,l.method,pe))}catch(X){p.delete(H),X instanceof ae.ResponseError?x(X,l.method,pe):X&&dt.string(X.message)?S(new ae.ResponseError(ae.ErrorCodes.InternalError,`Request ${l.method} failed with message: ${X.message}`),l.method,pe):S(new ae.ResponseError(ae.ErrorCodes.InternalError,`Request ${l.method} failed unexpectedly without providing any details.`),l.method,pe)}}else S(new ae.ResponseError(ae.ErrorCodes.MethodNotFound,`Unhandled method ${l.method}`),l.method,pe)}function In(l){if(!re())if(l.id===null)l.error?o.error(`Received response message without id: Error is: 
${JSON.stringify(l.error,void 0,4)}`):o.error("Received response message without id. No further error information provided.");else{let x=l.id,S=C.get(x);if(zg(l,S),S!==void 0){C.delete(x);try{if(l.error){let A=l.error;S.reject(new ae.ResponseError(A.code,A.message,A.data))}else if(l.result!==void 0)S.resolve(l.result);else throw new Error("Should never happen.")}catch(A){A.message?o.error(`Response handler '${S.method}' failed with message: ${A.message}`):o.error(`Response handler '${S.method}' failed unexpectedly.`)}}}}function Bt(l){if(re())return;let x,S;if(l.method===wd.type.method){let A=l.params.id;R.delete(A),ki(l);return}else{let A=g.get(l.method);A&&(S=A.handler,x=A.type)}if(S||h)try{if(ki(l),S)if(l.params===void 0)x!==void 0&&x.numberOfParams!==0&&x.parameterStructures!==ae.ParameterStructures.byName&&o.error(`Notification ${l.method} defines ${x.numberOfParams} params but received none.`),S();else if(Array.isArray(l.params)){let A=l.params;l.method===vd.type.method&&A.length===2&&$R.is(A[0])?S({token:A[0],value:A[1]}):(x!==void 0&&(x.parameterStructures===ae.ParameterStructures.byName&&o.error(`Notification ${l.method} defines parameters by name but received parameters by position`),x.numberOfParams!==l.params.length&&o.error(`Notification ${l.method} defines ${x.numberOfParams} params but received ${A.length} arguments`)),S(...A))}else x!==void 0&&x.parameterStructures===ae.ParameterStructures.byPosition&&o.error(`Notification ${l.method} defines parameters by position but received parameters by name`),S(l.params);else h&&h(l.method,l.params)}catch(A){A.message?o.error(`Notification handler '${l.method}' failed with message: ${A.message}`):o.error(`Notification handler '${l.method}' failed unexpectedly.`)}else tr.fire(l)}function Ur(l){if(!l){o.error("Received empty message.");return}o.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(l,null,4)}`);let x=l;if(dt.string(x.id)||dt.number(x.id)){let S=x.id,A=C.get(S);A&&A.reject(new Error("The received response has neither a result nor an error property."))}}function Le(l){if(l!=null)switch(f){case Ne.Verbose:return JSON.stringify(l,null,4);case Ne.Compact:return JSON.stringify(l);default:return}}function Wr(l){if(!(f===Ne.Off||!O))if(w===Qr.Text){let x;(f===Ne.Verbose||f===Ne.Compact)&&l.params&&(x=`Params: ${Le(l.params)}

`),O.log(`Sending request '${l.method} - (${l.id})'.`,x)}else Br("send-request",l)}function wn(l){if(!(f===Ne.Off||!O))if(w===Qr.Text){let x;(f===Ne.Verbose||f===Ne.Compact)&&(l.params?x=`Params: ${Le(l.params)}

`:x=`No parameters provided.

`),O.log(`Sending notification '${l.method}'.`,x)}else Br("send-notification",l)}function Hr(l,x,S){if(!(f===Ne.Off||!O))if(w===Qr.Text){let A;(f===Ne.Verbose||f===Ne.Compact)&&(l.error&&l.error.data?A=`Error data: ${Le(l.error.data)}

`:l.result?A=`Result: ${Le(l.result)}

`:l.error===void 0&&(A=`No result returned.

`)),O.log(`Sending response '${x} - (${l.id})'. Processing request took ${Date.now()-S}ms`,A)}else Br("send-response",l)}function Rs(l){if(!(f===Ne.Off||!O))if(w===Qr.Text){let x;(f===Ne.Verbose||f===Ne.Compact)&&l.params&&(x=`Params: ${Le(l.params)}

`),O.log(`Received request '${l.method} - (${l.id})'.`,x)}else Br("receive-request",l)}function ki(l){if(!(f===Ne.Off||!O||l.method===Cm.type.method))if(w===Qr.Text){let x;(f===Ne.Verbose||f===Ne.Compact)&&(l.params?x=`Params: ${Le(l.params)}

`:x=`No parameters provided.

`),O.log(`Received notification '${l.method}'.`,x)}else Br("receive-notification",l)}function zg(l,x){if(!(f===Ne.Off||!O))if(w===Qr.Text){let S;if((f===Ne.Verbose||f===Ne.Compact)&&(l.error&&l.error.data?S=`Error data: ${Le(l.error.data)}

`:l.result?S=`Result: ${Le(l.result)}

`:l.error===void 0&&(S=`No result returned.

`)),x){let A=l.error?` Request failed: ${l.error.message} (${l.error.code}).`:"";O.log(`Received response '${x.method} - (${l.id})' in ${Date.now()-x.timerStart}ms.${A}`,S)}else O.log(`Received response ${l.id} without active response promise.`,S)}else Br("receive-response",l)}function Br(l,x){if(!O||f===Ne.Off)return;let S={isLSPMessage:!0,type:l,message:x,timestamp:Date.now()};O.log(S)}function bn(){if(I())throw new Gc(xd.Closed,"Connection is closed.");if(re())throw new Gc(xd.Disposed,"Connection is disposed.")}function Gg(){if(W())throw new Gc(xd.AlreadyListening,"Connection is already listening")}function Vg(){if(!W())throw new Error("Call listen() first.")}function Rn(l){return l===void 0?null:l}function hu(l){if(l!==null)return l}function mu(l){return l!=null&&!Array.isArray(l)&&typeof l=="object"}function Si(l,x){switch(l){case ae.ParameterStructures.auto:return mu(x)?hu(x):[Rn(x)];case ae.ParameterStructures.byName:if(!mu(x))throw new Error("Received parameters by name but param is not an object literal.");return hu(x);case ae.ParameterStructures.byPosition:return[Rn(x)];default:throw new Error(`Unknown parameter structure ${l.toString()}`)}}function gu(l,x){let S,A=l.numberOfParams;switch(A){case 0:S=void 0;break;case 1:S=Si(l.parameterStructures,x[0]);break;default:S=[];for(let ne=0;ne<x.length&&ne<A;ne++)S.push(Rn(x[ne]));if(x.length<A)for(let ne=x.length;ne<A;ne++)S.push(null);break}return S}let zr={sendNotification:(l,...x)=>{bn();let S,A;if(dt.string(l)){S=l;let ee=x[0],le=0,pe=ae.ParameterStructures.auto;ae.ParameterStructures.is(ee)&&(le=1,pe=ee);let H=x.length,ce=H-le;switch(ce){case 0:A=void 0;break;case 1:A=Si(pe,x[le]);break;default:if(pe===ae.ParameterStructures.byName)throw new Error(`Received ${ce} parameters for 'by Name' notification parameter structure.`);A=x.slice(le,H).map(X=>Rn(X));break}}else{let ee=x;S=l.method,A=gu(l,ee)}let ne={jsonrpc:c,method:S,params:A};return wn(ne),e.write(ne).catch(ee=>{throw o.error("Sending notification failed."),ee})},onNotification:(l,x)=>{bn();let S;return dt.func(l)?h=l:x&&(dt.string(l)?(S=l,g.set(l,{type:void 0,handler:x})):(S=l.method,g.set(l.method,{type:l,handler:x}))),{dispose:()=>{S!==void 0?g.delete(S):h=void 0}}},onProgress:(l,x,S)=>{if(m.has(x))throw new Error(`Progress handler for token ${x} already registered`);return m.set(x,S),{dispose:()=>{m.delete(x)}}},sendProgress:(l,x,S)=>zr.sendNotification(vd.type,{token:x,value:S}),onUnhandledProgress:Wt.event,sendRequest:(l,...x)=>{bn(),Vg();let S,A,ne;if(dt.string(l)){S=l;let H=x[0],ce=x[x.length-1],X=0,ye=ae.ParameterStructures.auto;ae.ParameterStructures.is(H)&&(X=1,ye=H);let De=x.length;IR.CancellationToken.is(ce)&&(De=De-1,ne=ce);let xt=De-X;switch(xt){case 0:A=void 0;break;case 1:A=Si(ye,x[X]);break;default:if(ye===ae.ParameterStructures.byName)throw new Error(`Received ${xt} parameters for 'by Name' request parameter structure.`);A=x.slice(X,De).map(Yg=>Rn(Yg));break}}else{let H=x;S=l.method,A=gu(l,H);let ce=l.numberOfParams;ne=IR.CancellationToken.is(H[ce])?H[ce]:void 0}let ee=i++,le;ne&&(le=ne.onCancellationRequested(()=>{let H=D.sender.sendCancellation(zr,ee);return H===void 0?(o.log(`Received no promise from cancellation strategy when cancelling id ${ee}`),Promise.resolve()):H.catch(()=>{o.log(`Sending cancellation messages for id ${ee} failed`)})}));let pe={jsonrpc:c,id:ee,method:S,params:A};return Wr(pe),typeof D.sender.enableCancellation=="function"&&D.sender.enableCancellation(pe),new Promise(async(H,ce)=>{let X=xt=>{H(xt),D.sender.cleanup(ee),le?.dispose()},ye=xt=>{ce(xt),D.sender.cleanup(ee),le?.dispose()},De={method:S,timerStart:Date.now(),resolve:X,reject:ye};try{await e.write(pe),C.set(ee,De)}catch(xt){throw o.error("Sending request failed."),De.reject(new ae.ResponseError(ae.ErrorCodes.MessageWriteError,xt.message?xt.message:"Unknown reason")),xt}})},onRequest:(l,x)=>{bn();let S=null;return LR.is(l)?(S=void 0,u=l):dt.string(l)?(S=null,x!==void 0&&(S=l,d.set(l,{handler:x,type:void 0}))):x!==void 0&&(S=l.method,d.set(l.method,{type:l,handler:x})),{dispose:()=>{S!==null&&(S!==void 0?d.delete(S):u=void 0)}}},hasPendingResponse:()=>C.size>0,trace:async(l,x,S)=>{let A=!1,ne=Qr.Text;S!==void 0&&(dt.boolean(S)?A=S:(A=S.sendNotification||!1,ne=S.traceFormat||Qr.Text)),f=l,w=ne,f===Ne.Off?O=void 0:O=x,A&&!I()&&!re()&&await zr.sendNotification(qR.type,{value:Ne.toString(l)})},onError:it.event,onClose:Qe.event,onUnhandledNotification:tr.event,onDispose:q.event,end:()=>{e.end()},dispose:()=>{if(re())return;G=An.Disposed,q.fire(void 0);let l=new ae.ResponseError(ae.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let x of C.values())x.reject(l);C=new Map,p=new Map,R=new Set,T=new Q0.LinkedMap,dt.func(e.dispose)&&e.dispose(),dt.func(t.dispose)&&t.dispose()},listen:()=>{bn(),Gg(),G=An.Listening,t.listen(_t)},inspect:()=>{(0,J0.default)().console.log("inspect")}};return zr.onNotification(Cm.type,l=>{if(f===Ne.Off||!O)return;let x=f===Ne.Verbose||f===Ne.Compact;O.log(l.message,x?l.verbose:void 0)}),zr.onNotification(vd.type,l=>{let x=m.get(l.token);x?x(l.value):Wt.fire(l)}),zr}me.createMessageConnection=M3});var Om=E(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.ProgressType=N.ProgressToken=N.createMessageConnection=N.NullLogger=N.ConnectionOptions=N.ConnectionStrategy=N.AbstractMessageBuffer=N.WriteableStreamMessageWriter=N.AbstractMessageWriter=N.MessageWriter=N.ReadableStreamMessageReader=N.AbstractMessageReader=N.MessageReader=N.SharedArrayReceiverStrategy=N.SharedArraySenderStrategy=N.CancellationToken=N.CancellationTokenSource=N.Emitter=N.Event=N.Disposable=N.LRUCache=N.Touch=N.LinkedMap=N.ParameterStructures=N.NotificationType9=N.NotificationType8=N.NotificationType7=N.NotificationType6=N.NotificationType5=N.NotificationType4=N.NotificationType3=N.NotificationType2=N.NotificationType1=N.NotificationType0=N.NotificationType=N.ErrorCodes=N.ResponseError=N.RequestType9=N.RequestType8=N.RequestType7=N.RequestType6=N.RequestType5=N.RequestType4=N.RequestType3=N.RequestType2=N.RequestType1=N.RequestType0=N.RequestType=N.Message=N.RAL=void 0;N.MessageStrategy=N.CancellationStrategy=N.CancellationSenderStrategy=N.CancellationReceiverStrategy=N.ConnectionError=N.ConnectionErrors=N.LogTraceNotification=N.SetTraceNotification=N.TraceFormat=N.TraceValues=N.Trace=void 0;var ze=fR();Object.defineProperty(N,"Message",{enumerable:!0,get:function(){return ze.Message}});Object.defineProperty(N,"RequestType",{enumerable:!0,get:function(){return ze.RequestType}});Object.defineProperty(N,"RequestType0",{enumerable:!0,get:function(){return ze.RequestType0}});Object.defineProperty(N,"RequestType1",{enumerable:!0,get:function(){return ze.RequestType1}});Object.defineProperty(N,"RequestType2",{enumerable:!0,get:function(){return ze.RequestType2}});Object.defineProperty(N,"RequestType3",{enumerable:!0,get:function(){return ze.RequestType3}});Object.defineProperty(N,"RequestType4",{enumerable:!0,get:function(){return ze.RequestType4}});Object.defineProperty(N,"RequestType5",{enumerable:!0,get:function(){return ze.RequestType5}});Object.defineProperty(N,"RequestType6",{enumerable:!0,get:function(){return ze.RequestType6}});Object.defineProperty(N,"RequestType7",{enumerable:!0,get:function(){return ze.RequestType7}});Object.defineProperty(N,"RequestType8",{enumerable:!0,get:function(){return ze.RequestType8}});Object.defineProperty(N,"RequestType9",{enumerable:!0,get:function(){return ze.RequestType9}});Object.defineProperty(N,"ResponseError",{enumerable:!0,get:function(){return ze.ResponseError}});Object.defineProperty(N,"ErrorCodes",{enumerable:!0,get:function(){return ze.ErrorCodes}});Object.defineProperty(N,"NotificationType",{enumerable:!0,get:function(){return ze.NotificationType}});Object.defineProperty(N,"NotificationType0",{enumerable:!0,get:function(){return ze.NotificationType0}});Object.defineProperty(N,"NotificationType1",{enumerable:!0,get:function(){return ze.NotificationType1}});Object.defineProperty(N,"NotificationType2",{enumerable:!0,get:function(){return ze.NotificationType2}});Object.defineProperty(N,"NotificationType3",{enumerable:!0,get:function(){return ze.NotificationType3}});Object.defineProperty(N,"NotificationType4",{enumerable:!0,get:function(){return ze.NotificationType4}});Object.defineProperty(N,"NotificationType5",{enumerable:!0,get:function(){return ze.NotificationType5}});Object.defineProperty(N,"NotificationType6",{enumerable:!0,get:function(){return ze.NotificationType6}});Object.defineProperty(N,"NotificationType7",{enumerable:!0,get:function(){return ze.NotificationType7}});Object.defineProperty(N,"NotificationType8",{enumerable:!0,get:function(){return ze.NotificationType8}});Object.defineProperty(N,"NotificationType9",{enumerable:!0,get:function(){return ze.NotificationType9}});Object.defineProperty(N,"ParameterStructures",{enumerable:!0,get:function(){return ze.ParameterStructures}});var jR=hR();Object.defineProperty(N,"LinkedMap",{enumerable:!0,get:function(){return jR.LinkedMap}});Object.defineProperty(N,"LRUCache",{enumerable:!0,get:function(){return jR.LRUCache}});Object.defineProperty(N,"Touch",{enumerable:!0,get:function(){return jR.Touch}});var L3=K0();Object.defineProperty(N,"Disposable",{enumerable:!0,get:function(){return L3.Disposable}});var rI=Wc();Object.defineProperty(N,"Event",{enumerable:!0,get:function(){return rI.Event}});Object.defineProperty(N,"Emitter",{enumerable:!0,get:function(){return rI.Emitter}});var nI=Rm();Object.defineProperty(N,"CancellationTokenSource",{enumerable:!0,get:function(){return nI.CancellationTokenSource}});Object.defineProperty(N,"CancellationToken",{enumerable:!0,get:function(){return nI.CancellationToken}});var oI=U0();Object.defineProperty(N,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return oI.SharedArraySenderStrategy}});Object.defineProperty(N,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return oI.SharedArrayReceiverStrategy}});var UR=H0();Object.defineProperty(N,"MessageReader",{enumerable:!0,get:function(){return UR.MessageReader}});Object.defineProperty(N,"AbstractMessageReader",{enumerable:!0,get:function(){return UR.AbstractMessageReader}});Object.defineProperty(N,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return UR.ReadableStreamMessageReader}});var WR=Y0();Object.defineProperty(N,"MessageWriter",{enumerable:!0,get:function(){return WR.MessageWriter}});Object.defineProperty(N,"AbstractMessageWriter",{enumerable:!0,get:function(){return WR.AbstractMessageWriter}});Object.defineProperty(N,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return WR.WriteableStreamMessageWriter}});var q3=X0();Object.defineProperty(N,"AbstractMessageBuffer",{enumerable:!0,get:function(){return q3.AbstractMessageBuffer}});var Zt=tI();Object.defineProperty(N,"ConnectionStrategy",{enumerable:!0,get:function(){return Zt.ConnectionStrategy}});Object.defineProperty(N,"ConnectionOptions",{enumerable:!0,get:function(){return Zt.ConnectionOptions}});Object.defineProperty(N,"NullLogger",{enumerable:!0,get:function(){return Zt.NullLogger}});Object.defineProperty(N,"createMessageConnection",{enumerable:!0,get:function(){return Zt.createMessageConnection}});Object.defineProperty(N,"ProgressToken",{enumerable:!0,get:function(){return Zt.ProgressToken}});Object.defineProperty(N,"ProgressType",{enumerable:!0,get:function(){return Zt.ProgressType}});Object.defineProperty(N,"Trace",{enumerable:!0,get:function(){return Zt.Trace}});Object.defineProperty(N,"TraceValues",{enumerable:!0,get:function(){return Zt.TraceValues}});Object.defineProperty(N,"TraceFormat",{enumerable:!0,get:function(){return Zt.TraceFormat}});Object.defineProperty(N,"SetTraceNotification",{enumerable:!0,get:function(){return Zt.SetTraceNotification}});Object.defineProperty(N,"LogTraceNotification",{enumerable:!0,get:function(){return Zt.LogTraceNotification}});Object.defineProperty(N,"ConnectionErrors",{enumerable:!0,get:function(){return Zt.ConnectionErrors}});Object.defineProperty(N,"ConnectionError",{enumerable:!0,get:function(){return Zt.ConnectionError}});Object.defineProperty(N,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return Zt.CancellationReceiverStrategy}});Object.defineProperty(N,"CancellationSenderStrategy",{enumerable:!0,get:function(){return Zt.CancellationSenderStrategy}});Object.defineProperty(N,"CancellationStrategy",{enumerable:!0,get:function(){return Zt.CancellationStrategy}});Object.defineProperty(N,"MessageStrategy",{enumerable:!0,get:function(){return Zt.MessageStrategy}});var F3=pi();N.RAL=F3.default});var sI=E(GR=>{"use strict";Object.defineProperty(GR,"__esModule",{value:!0});var no=Om(),Im=class t extends no.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};Im.emptyBuffer=new Uint8Array(0);var HR=class{constructor(e){this.socket=e,this._onData=new no.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(o=>{this._onData.fire(new Uint8Array(o))},()=>{(0,no.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),no.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),no.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),no.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},BR=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),no.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),no.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),no.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},K3=new TextEncoder,iI=Object.freeze({messageBuffer:Object.freeze({create:t=>new Im(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(K3.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new HR(t),asWritableStream:t=>new BR(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function zR(){return iI}(function(t){function e(){no.RAL.install(iI)}t.install=e})(zR||(zR={}));GR.default=zR});var hs=E(Zr=>{"use strict";var j3=Zr&&Zr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),U3=Zr&&Zr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&j3(e,t,r)};Object.defineProperty(Zr,"__esModule",{value:!0});Zr.createMessageConnection=Zr.BrowserMessageWriter=Zr.BrowserMessageReader=void 0;var W3=sI();W3.default.install();var Vc=Om();U3(Om(),Zr);var VR=class extends Vc.AbstractMessageReader{constructor(e){super(),this._onData=new Vc.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};Zr.BrowserMessageReader=VR;var YR=class extends Vc.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Zr.BrowserMessageWriter=YR;function H3(t,e,r,n){return r===void 0&&(r=Vc.NullLogger),Vc.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Vc.createMessageConnection)(t,e,r,n)}Zr.createMessageConnection=H3});var XR=E((lye,aI)=>{"use strict";aI.exports=hs()});var Wm={};uo(Wm,{AnnotatedTextEdit:()=>Eo,ChangeAnnotation:()=>ms,ChangeAnnotationIdentifier:()=>er,CodeAction:()=>NT,CodeActionContext:()=>PT,CodeActionKind:()=>DT,CodeActionTriggerKind:()=>Cd,CodeDescription:()=>sT,CodeLens:()=>AT,Color:()=>Mm,ColorInformation:()=>eT,ColorPresentation:()=>tT,Command:()=>gs,CompletionItem:()=>yT,CompletionItemKind:()=>dT,CompletionItemLabelDetails:()=>gT,CompletionItemTag:()=>pT,CompletionList:()=>vT,CreateFile:()=>Xc,DeleteFile:()=>Qc,Diagnostic:()=>Td,DiagnosticRelatedInformation:()=>Lm,DiagnosticSeverity:()=>oT,DiagnosticTag:()=>iT,DocumentHighlight:()=>TT,DocumentHighlightKind:()=>RT,DocumentLink:()=>IT,DocumentSymbol:()=>ET,DocumentUri:()=>JR,EOL:()=>B3,FoldingRange:()=>nT,FoldingRangeKind:()=>rT,FormattingOptions:()=>OT,Hover:()=>xT,InlayHint:()=>WT,InlayHintKind:()=>jm,InlayHintLabelPart:()=>Um,InlineCompletionContext:()=>YT,InlineCompletionItem:()=>BT,InlineCompletionList:()=>zT,InlineCompletionTriggerKind:()=>GT,InlineValueContext:()=>UT,InlineValueEvaluatableExpression:()=>jT,InlineValueText:()=>FT,InlineValueVariableLookup:()=>KT,InsertReplaceEdit:()=>hT,InsertTextFormat:()=>fT,InsertTextMode:()=>mT,Location:()=>Rd,LocationLink:()=>ZR,MarkedString:()=>Sd,MarkupContent:()=>Zc,MarkupKind:()=>Km,OptionalVersionedTextDocumentIdentifier:()=>kd,ParameterInformation:()=>wT,Position:()=>hn,Range:()=>yt,RenameFile:()=>Jc,SelectedCompletionInfo:()=>VT,SelectionRange:()=>$T,SemanticTokenModifiers:()=>LT,SemanticTokenTypes:()=>MT,SemanticTokens:()=>qT,SignatureInformation:()=>bT,StringValue:()=>HT,SymbolInformation:()=>ST,SymbolKind:()=>_T,SymbolTag:()=>kT,TextDocument:()=>JT,TextDocumentEdit:()=>_d,TextDocumentIdentifier:()=>cT,TextDocumentItem:()=>lT,TextEdit:()=>oo,URI:()=>$m,VersionedTextDocumentIdentifier:()=>uT,WorkspaceChange:()=>aT,WorkspaceEdit:()=>qm,WorkspaceFolder:()=>XT,WorkspaceSymbol:()=>CT,integer:()=>QR,uinteger:()=>bd});var JR,$m,QR,bd,hn,yt,Rd,ZR,Mm,eT,tT,rT,nT,Lm,oT,iT,sT,Td,gs,oo,ms,er,Eo,_d,Xc,Jc,Qc,qm,Yc,Fm,aT,cT,uT,kd,lT,Km,Zc,dT,fT,pT,hT,mT,gT,yT,vT,Sd,xT,wT,bT,RT,TT,_T,kT,ST,CT,ET,DT,Cd,PT,NT,AT,OT,IT,$T,MT,LT,qT,FT,KT,jT,UT,jm,Um,WT,HT,BT,zT,GT,VT,YT,XT,B3,JT,QT,k,Hm=ek(()=>{"use strict";(function(t){function e(r){return typeof r=="string"}t.is=e})(JR||(JR={}));(function(t){function e(r){return typeof r=="string"}t.is=e})($m||($m={}));(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(QR||(QR={}));(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(bd||(bd={}));(function(t){function e(n,o){return n===Number.MAX_VALUE&&(n=bd.MAX_VALUE),o===Number.MAX_VALUE&&(o=bd.MAX_VALUE),{line:n,character:o}}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&k.uinteger(o.line)&&k.uinteger(o.character)}t.is=r})(hn||(hn={}));(function(t){function e(n,o,i,s){if(k.uinteger(n)&&k.uinteger(o)&&k.uinteger(i)&&k.uinteger(s))return{start:hn.create(n,o),end:hn.create(i,s)};if(hn.is(n)&&hn.is(o))return{start:n,end:o};throw new Error(`Range#create called with invalid arguments[${n}, ${o}, ${i}, ${s}]`)}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&hn.is(o.start)&&hn.is(o.end)}t.is=r})(yt||(yt={}));(function(t){function e(n,o){return{uri:n,range:o}}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&yt.is(o.range)&&(k.string(o.uri)||k.undefined(o.uri))}t.is=r})(Rd||(Rd={}));(function(t){function e(n,o,i,s){return{targetUri:n,targetRange:o,targetSelectionRange:i,originSelectionRange:s}}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&yt.is(o.targetRange)&&k.string(o.targetUri)&&yt.is(o.targetSelectionRange)&&(yt.is(o.originSelectionRange)||k.undefined(o.originSelectionRange))}t.is=r})(ZR||(ZR={}));(function(t){function e(n,o,i,s){return{red:n,green:o,blue:i,alpha:s}}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&k.numberRange(o.red,0,1)&&k.numberRange(o.green,0,1)&&k.numberRange(o.blue,0,1)&&k.numberRange(o.alpha,0,1)}t.is=r})(Mm||(Mm={}));(function(t){function e(n,o){return{range:n,color:o}}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&yt.is(o.range)&&Mm.is(o.color)}t.is=r})(eT||(eT={}));(function(t){function e(n,o,i){return{label:n,textEdit:o,additionalTextEdits:i}}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&k.string(o.label)&&(k.undefined(o.textEdit)||oo.is(o))&&(k.undefined(o.additionalTextEdits)||k.typedArray(o.additionalTextEdits,oo.is))}t.is=r})(tT||(tT={}));(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(rT||(rT={}));(function(t){function e(n,o,i,s,a,c){let u={startLine:n,endLine:o};return k.defined(i)&&(u.startCharacter=i),k.defined(s)&&(u.endCharacter=s),k.defined(a)&&(u.kind=a),k.defined(c)&&(u.collapsedText=c),u}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&k.uinteger(o.startLine)&&k.uinteger(o.startLine)&&(k.undefined(o.startCharacter)||k.uinteger(o.startCharacter))&&(k.undefined(o.endCharacter)||k.uinteger(o.endCharacter))&&(k.undefined(o.kind)||k.string(o.kind))}t.is=r})(nT||(nT={}));(function(t){function e(n,o){return{location:n,message:o}}t.create=e;function r(n){let o=n;return k.defined(o)&&Rd.is(o.location)&&k.string(o.message)}t.is=r})(Lm||(Lm={}));(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(oT||(oT={}));(function(t){t.Unnecessary=1,t.Deprecated=2})(iT||(iT={}));(function(t){function e(r){let n=r;return k.objectLiteral(n)&&k.string(n.href)}t.is=e})(sT||(sT={}));(function(t){function e(n,o,i,s,a,c){let u={range:n,message:o};return k.defined(i)&&(u.severity=i),k.defined(s)&&(u.code=s),k.defined(a)&&(u.source=a),k.defined(c)&&(u.relatedInformation=c),u}t.create=e;function r(n){var o;let i=n;return k.defined(i)&&yt.is(i.range)&&k.string(i.message)&&(k.number(i.severity)||k.undefined(i.severity))&&(k.integer(i.code)||k.string(i.code)||k.undefined(i.code))&&(k.undefined(i.codeDescription)||k.string((o=i.codeDescription)===null||o===void 0?void 0:o.href))&&(k.string(i.source)||k.undefined(i.source))&&(k.undefined(i.relatedInformation)||k.typedArray(i.relatedInformation,Lm.is))}t.is=r})(Td||(Td={}));(function(t){function e(n,o,...i){let s={title:n,command:o};return k.defined(i)&&i.length>0&&(s.arguments=i),s}t.create=e;function r(n){let o=n;return k.defined(o)&&k.string(o.title)&&k.string(o.command)}t.is=r})(gs||(gs={}));(function(t){function e(i,s){return{range:i,newText:s}}t.replace=e;function r(i,s){return{range:{start:i,end:i},newText:s}}t.insert=r;function n(i){return{range:i,newText:""}}t.del=n;function o(i){let s=i;return k.objectLiteral(s)&&k.string(s.newText)&&yt.is(s.range)}t.is=o})(oo||(oo={}));(function(t){function e(n,o,i){let s={label:n};return o!==void 0&&(s.needsConfirmation=o),i!==void 0&&(s.description=i),s}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&k.string(o.label)&&(k.boolean(o.needsConfirmation)||o.needsConfirmation===void 0)&&(k.string(o.description)||o.description===void 0)}t.is=r})(ms||(ms={}));(function(t){function e(r){let n=r;return k.string(n)}t.is=e})(er||(er={}));(function(t){function e(i,s,a){return{range:i,newText:s,annotationId:a}}t.replace=e;function r(i,s,a){return{range:{start:i,end:i},newText:s,annotationId:a}}t.insert=r;function n(i,s){return{range:i,newText:"",annotationId:s}}t.del=n;function o(i){let s=i;return oo.is(s)&&(ms.is(s.annotationId)||er.is(s.annotationId))}t.is=o})(Eo||(Eo={}));(function(t){function e(n,o){return{textDocument:n,edits:o}}t.create=e;function r(n){let o=n;return k.defined(o)&&kd.is(o.textDocument)&&Array.isArray(o.edits)}t.is=r})(_d||(_d={}));(function(t){function e(n,o,i){let s={kind:"create",uri:n};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(s.options=o),i!==void 0&&(s.annotationId=i),s}t.create=e;function r(n){let o=n;return o&&o.kind==="create"&&k.string(o.uri)&&(o.options===void 0||(o.options.overwrite===void 0||k.boolean(o.options.overwrite))&&(o.options.ignoreIfExists===void 0||k.boolean(o.options.ignoreIfExists)))&&(o.annotationId===void 0||er.is(o.annotationId))}t.is=r})(Xc||(Xc={}));(function(t){function e(n,o,i,s){let a={kind:"rename",oldUri:n,newUri:o};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(a.options=i),s!==void 0&&(a.annotationId=s),a}t.create=e;function r(n){let o=n;return o&&o.kind==="rename"&&k.string(o.oldUri)&&k.string(o.newUri)&&(o.options===void 0||(o.options.overwrite===void 0||k.boolean(o.options.overwrite))&&(o.options.ignoreIfExists===void 0||k.boolean(o.options.ignoreIfExists)))&&(o.annotationId===void 0||er.is(o.annotationId))}t.is=r})(Jc||(Jc={}));(function(t){function e(n,o,i){let s={kind:"delete",uri:n};return o!==void 0&&(o.recursive!==void 0||o.ignoreIfNotExists!==void 0)&&(s.options=o),i!==void 0&&(s.annotationId=i),s}t.create=e;function r(n){let o=n;return o&&o.kind==="delete"&&k.string(o.uri)&&(o.options===void 0||(o.options.recursive===void 0||k.boolean(o.options.recursive))&&(o.options.ignoreIfNotExists===void 0||k.boolean(o.options.ignoreIfNotExists)))&&(o.annotationId===void 0||er.is(o.annotationId))}t.is=r})(Qc||(Qc={}));(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(o=>k.string(o.kind)?Xc.is(o)||Jc.is(o)||Qc.is(o):_d.is(o)))}t.is=e})(qm||(qm={}));Yc=class{constructor(e,r){this.edits=e,this.changeAnnotations=r}insert(e,r,n){let o,i;if(n===void 0?o=oo.insert(e,r):er.is(n)?(i=n,o=Eo.insert(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),o=Eo.insert(e,r,i)),this.edits.push(o),i!==void 0)return i}replace(e,r,n){let o,i;if(n===void 0?o=oo.replace(e,r):er.is(n)?(i=n,o=Eo.replace(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),o=Eo.replace(e,r,i)),this.edits.push(o),i!==void 0)return i}delete(e,r){let n,o;if(r===void 0?n=oo.del(e):er.is(r)?(o=r,n=Eo.del(e,r)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(r),n=Eo.del(e,o)),this.edits.push(n),o!==void 0)return o}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}},Fm=class{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,r){let n;if(er.is(e)?n=e:(n=this.nextId(),r=e),this._annotations[n]!==void 0)throw new Error(`Id ${n} is already in use.`);if(r===void 0)throw new Error(`No annotation provided for id ${n}`);return this._annotations[n]=r,this._size++,n}nextId(){return this._counter++,this._counter.toString()}},aT=class{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new Fm(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(r=>{if(_d.is(r)){let n=new Yc(r.edits,this._changeAnnotations);this._textEditChanges[r.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(r=>{let n=new Yc(e.changes[r]);this._textEditChanges[r]=n})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(kd.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let r={uri:e.uri,version:e.version},n=this._textEditChanges[r.uri];if(!n){let o=[],i={textDocument:r,edits:o};this._workspaceEdit.documentChanges.push(i),n=new Yc(o,this._changeAnnotations),this._textEditChanges[r.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let r=this._textEditChanges[e];if(!r){let n=[];this._workspaceEdit.changes[e]=n,r=new Yc(n),this._textEditChanges[e]=r}return r}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Fm,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let o;ms.is(r)||er.is(r)?o=r:n=r;let i,s;if(o===void 0?i=Xc.create(e,n):(s=er.is(o)?o:this._changeAnnotations.manage(o),i=Xc.create(e,n,s)),this._workspaceEdit.documentChanges.push(i),s!==void 0)return s}renameFile(e,r,n,o){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;ms.is(n)||er.is(n)?i=n:o=n;let s,a;if(i===void 0?s=Jc.create(e,r,o):(a=er.is(i)?i:this._changeAnnotations.manage(i),s=Jc.create(e,r,o,a)),this._workspaceEdit.documentChanges.push(s),a!==void 0)return a}deleteFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let o;ms.is(r)||er.is(r)?o=r:n=r;let i,s;if(o===void 0?i=Qc.create(e,n):(s=er.is(o)?o:this._changeAnnotations.manage(o),i=Qc.create(e,n,s)),this._workspaceEdit.documentChanges.push(i),s!==void 0)return s}};(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let o=n;return k.defined(o)&&k.string(o.uri)}t.is=r})(cT||(cT={}));(function(t){function e(n,o){return{uri:n,version:o}}t.create=e;function r(n){let o=n;return k.defined(o)&&k.string(o.uri)&&k.integer(o.version)}t.is=r})(uT||(uT={}));(function(t){function e(n,o){return{uri:n,version:o}}t.create=e;function r(n){let o=n;return k.defined(o)&&k.string(o.uri)&&(o.version===null||k.integer(o.version))}t.is=r})(kd||(kd={}));(function(t){function e(n,o,i,s){return{uri:n,languageId:o,version:i,text:s}}t.create=e;function r(n){let o=n;return k.defined(o)&&k.string(o.uri)&&k.string(o.languageId)&&k.integer(o.version)&&k.string(o.text)}t.is=r})(lT||(lT={}));(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(Km||(Km={}));(function(t){function e(r){let n=r;return k.objectLiteral(r)&&Km.is(n.kind)&&k.string(n.value)}t.is=e})(Zc||(Zc={}));(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(dT||(dT={}));(function(t){t.PlainText=1,t.Snippet=2})(fT||(fT={}));(function(t){t.Deprecated=1})(pT||(pT={}));(function(t){function e(n,o,i){return{newText:n,insert:o,replace:i}}t.create=e;function r(n){let o=n;return o&&k.string(o.newText)&&yt.is(o.insert)&&yt.is(o.replace)}t.is=r})(hT||(hT={}));(function(t){t.asIs=1,t.adjustIndentation=2})(mT||(mT={}));(function(t){function e(r){let n=r;return n&&(k.string(n.detail)||n.detail===void 0)&&(k.string(n.description)||n.description===void 0)}t.is=e})(gT||(gT={}));(function(t){function e(r){return{label:r}}t.create=e})(yT||(yT={}));(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(vT||(vT={}));(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let o=n;return k.string(o)||k.objectLiteral(o)&&k.string(o.language)&&k.string(o.value)}t.is=r})(Sd||(Sd={}));(function(t){function e(r){let n=r;return!!n&&k.objectLiteral(n)&&(Zc.is(n.contents)||Sd.is(n.contents)||k.typedArray(n.contents,Sd.is))&&(r.range===void 0||yt.is(r.range))}t.is=e})(xT||(xT={}));(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(wT||(wT={}));(function(t){function e(r,n,...o){let i={label:r};return k.defined(n)&&(i.documentation=n),k.defined(o)?i.parameters=o:i.parameters=[],i}t.create=e})(bT||(bT={}));(function(t){t.Text=1,t.Read=2,t.Write=3})(RT||(RT={}));(function(t){function e(r,n){let o={range:r};return k.number(n)&&(o.kind=n),o}t.create=e})(TT||(TT={}));(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(_T||(_T={}));(function(t){t.Deprecated=1})(kT||(kT={}));(function(t){function e(r,n,o,i,s){let a={name:r,kind:n,location:{uri:i,range:o}};return s&&(a.containerName=s),a}t.create=e})(ST||(ST={}));(function(t){function e(r,n,o,i){return i!==void 0?{name:r,kind:n,location:{uri:o,range:i}}:{name:r,kind:n,location:{uri:o}}}t.create=e})(CT||(CT={}));(function(t){function e(n,o,i,s,a,c){let u={name:n,detail:o,kind:i,range:s,selectionRange:a};return c!==void 0&&(u.children=c),u}t.create=e;function r(n){let o=n;return o&&k.string(o.name)&&k.number(o.kind)&&yt.is(o.range)&&yt.is(o.selectionRange)&&(o.detail===void 0||k.string(o.detail))&&(o.deprecated===void 0||k.boolean(o.deprecated))&&(o.children===void 0||Array.isArray(o.children))&&(o.tags===void 0||Array.isArray(o.tags))}t.is=r})(ET||(ET={}));(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(DT||(DT={}));(function(t){t.Invoked=1,t.Automatic=2})(Cd||(Cd={}));(function(t){function e(n,o,i){let s={diagnostics:n};return o!=null&&(s.only=o),i!=null&&(s.triggerKind=i),s}t.create=e;function r(n){let o=n;return k.defined(o)&&k.typedArray(o.diagnostics,Td.is)&&(o.only===void 0||k.typedArray(o.only,k.string))&&(o.triggerKind===void 0||o.triggerKind===Cd.Invoked||o.triggerKind===Cd.Automatic)}t.is=r})(PT||(PT={}));(function(t){function e(n,o,i){let s={title:n},a=!0;return typeof o=="string"?(a=!1,s.kind=o):gs.is(o)?s.command=o:s.edit=o,a&&i!==void 0&&(s.kind=i),s}t.create=e;function r(n){let o=n;return o&&k.string(o.title)&&(o.diagnostics===void 0||k.typedArray(o.diagnostics,Td.is))&&(o.kind===void 0||k.string(o.kind))&&(o.edit!==void 0||o.command!==void 0)&&(o.command===void 0||gs.is(o.command))&&(o.isPreferred===void 0||k.boolean(o.isPreferred))&&(o.edit===void 0||qm.is(o.edit))}t.is=r})(NT||(NT={}));(function(t){function e(n,o){let i={range:n};return k.defined(o)&&(i.data=o),i}t.create=e;function r(n){let o=n;return k.defined(o)&&yt.is(o.range)&&(k.undefined(o.command)||gs.is(o.command))}t.is=r})(AT||(AT={}));(function(t){function e(n,o){return{tabSize:n,insertSpaces:o}}t.create=e;function r(n){let o=n;return k.defined(o)&&k.uinteger(o.tabSize)&&k.boolean(o.insertSpaces)}t.is=r})(OT||(OT={}));(function(t){function e(n,o,i){return{range:n,target:o,data:i}}t.create=e;function r(n){let o=n;return k.defined(o)&&yt.is(o.range)&&(k.undefined(o.target)||k.string(o.target))}t.is=r})(IT||(IT={}));(function(t){function e(n,o){return{range:n,parent:o}}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&yt.is(o.range)&&(o.parent===void 0||t.is(o.parent))}t.is=r})($T||($T={}));(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(MT||(MT={}));(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(LT||(LT={}));(function(t){function e(r){let n=r;return k.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(qT||(qT={}));(function(t){function e(n,o){return{range:n,text:o}}t.create=e;function r(n){let o=n;return o!=null&&yt.is(o.range)&&k.string(o.text)}t.is=r})(FT||(FT={}));(function(t){function e(n,o,i){return{range:n,variableName:o,caseSensitiveLookup:i}}t.create=e;function r(n){let o=n;return o!=null&&yt.is(o.range)&&k.boolean(o.caseSensitiveLookup)&&(k.string(o.variableName)||o.variableName===void 0)}t.is=r})(KT||(KT={}));(function(t){function e(n,o){return{range:n,expression:o}}t.create=e;function r(n){let o=n;return o!=null&&yt.is(o.range)&&(k.string(o.expression)||o.expression===void 0)}t.is=r})(jT||(jT={}));(function(t){function e(n,o){return{frameId:n,stoppedLocation:o}}t.create=e;function r(n){let o=n;return k.defined(o)&&yt.is(n.stoppedLocation)}t.is=r})(UT||(UT={}));(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(jm||(jm={}));(function(t){function e(n){return{value:n}}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&(o.tooltip===void 0||k.string(o.tooltip)||Zc.is(o.tooltip))&&(o.location===void 0||Rd.is(o.location))&&(o.command===void 0||gs.is(o.command))}t.is=r})(Um||(Um={}));(function(t){function e(n,o,i){let s={position:n,label:o};return i!==void 0&&(s.kind=i),s}t.create=e;function r(n){let o=n;return k.objectLiteral(o)&&hn.is(o.position)&&(k.string(o.label)||k.typedArray(o.label,Um.is))&&(o.kind===void 0||jm.is(o.kind))&&o.textEdits===void 0||k.typedArray(o.textEdits,oo.is)&&(o.tooltip===void 0||k.string(o.tooltip)||Zc.is(o.tooltip))&&(o.paddingLeft===void 0||k.boolean(o.paddingLeft))&&(o.paddingRight===void 0||k.boolean(o.paddingRight))}t.is=r})(WT||(WT={}));(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(HT||(HT={}));(function(t){function e(r,n,o,i){return{insertText:r,filterText:n,range:o,command:i}}t.create=e})(BT||(BT={}));(function(t){function e(r){return{items:r}}t.create=e})(zT||(zT={}));(function(t){t.Invoked=0,t.Automatic=1})(GT||(GT={}));(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(VT||(VT={}));(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(YT||(YT={}));(function(t){function e(r){let n=r;return k.objectLiteral(n)&&$m.is(n.uri)&&k.string(n.name)}t.is=e})(XT||(XT={}));B3=[`
`,`\r
`,"\r"];(function(t){function e(i,s,a,c){return new QT(i,s,a,c)}t.create=e;function r(i){let s=i;return!!(k.defined(s)&&k.string(s.uri)&&(k.undefined(s.languageId)||k.string(s.languageId))&&k.uinteger(s.lineCount)&&k.func(s.getText)&&k.func(s.positionAt)&&k.func(s.offsetAt))}t.is=r;function n(i,s){let a=i.getText(),c=o(s,(d,h)=>{let g=d.range.start.line-h.range.start.line;return g===0?d.range.start.character-h.range.start.character:g}),u=a.length;for(let d=c.length-1;d>=0;d--){let h=c[d],g=i.offsetAt(h.range.start),m=i.offsetAt(h.range.end);if(m<=u)a=a.substring(0,g)+h.newText+a.substring(m,a.length);else throw new Error("Overlapping edit");u=g}return a}t.applyEdits=n;function o(i,s){if(i.length<=1)return i;let a=i.length/2|0,c=i.slice(0,a),u=i.slice(a);o(c,s),o(u,s);let d=0,h=0,g=0;for(;d<c.length&&h<u.length;)s(c[d],u[h])<=0?i[g++]=c[d++]:i[g++]=u[h++];for(;d<c.length;)i[g++]=c[d++];for(;h<u.length;)i[g++]=u[h++];return i}})(JT||(JT={}));QT=class{constructor(e,r,n,o){this._uri=e,this._languageId=r,this._version=n,this._content=o,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let o=0;o<r.length;o++){n&&(e.push(o),n=!1);let i=r.charAt(o);n=i==="\r"||i===`
`,i==="\r"&&o+1<r.length&&r.charAt(o+1)===`
`&&o++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,o=r.length;if(o===0)return hn.create(0,e);for(;n<o;){let s=Math.floor((n+o)/2);r[s]>e?o=s:n=s+1}let i=n-1;return hn.create(i,e-r[i])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],o=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,o),n)}get lineCount(){return this.getLineOffsets().length}};(function(t){let e=Object.prototype.toString;function r(m){return typeof m<"u"}t.defined=r;function n(m){return typeof m>"u"}t.undefined=n;function o(m){return m===!0||m===!1}t.boolean=o;function i(m){return e.call(m)==="[object String]"}t.string=i;function s(m){return e.call(m)==="[object Number]"}t.number=s;function a(m,b,T){return e.call(m)==="[object Number]"&&b<=m&&m<=T}t.numberRange=a;function c(m){return e.call(m)==="[object Number]"&&-2147483648<=m&&m<=2147483647}t.integer=c;function u(m){return e.call(m)==="[object Number]"&&0<=m&&m<=2147483647}t.uinteger=u;function d(m){return e.call(m)==="[object Function]"}t.func=d;function h(m){return m!==null&&typeof m=="object"}t.objectLiteral=h;function g(m,b){return Array.isArray(m)&&m.every(b)}t.typedArray=g})(k||(k={}))});var ot=E(qr=>{"use strict";Object.defineProperty(qr,"__esModule",{value:!0});qr.ProtocolNotificationType=qr.ProtocolNotificationType0=qr.ProtocolRequestType=qr.ProtocolRequestType0=qr.RegistrationType=qr.MessageDirection=void 0;var eu=hs(),cI;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(cI||(qr.MessageDirection=cI={}));var ZT=class{constructor(e){this.method=e}};qr.RegistrationType=ZT;var e_=class extends eu.RequestType0{constructor(e){super(e)}};qr.ProtocolRequestType0=e_;var t_=class extends eu.RequestType{constructor(e){super(e,eu.ParameterStructures.byName)}};qr.ProtocolRequestType=t_;var r_=class extends eu.NotificationType0{constructor(e){super(e)}};qr.ProtocolNotificationType0=r_;var n_=class extends eu.NotificationType{constructor(e){super(e,eu.ParameterStructures.byName)}};qr.ProtocolNotificationType=n_});var Bm=E(Nt=>{"use strict";Object.defineProperty(Nt,"__esModule",{value:!0});Nt.objectLiteral=Nt.typedArray=Nt.stringArray=Nt.array=Nt.func=Nt.error=Nt.number=Nt.string=Nt.boolean=void 0;function z3(t){return t===!0||t===!1}Nt.boolean=z3;function uI(t){return typeof t=="string"||t instanceof String}Nt.string=uI;function G3(t){return typeof t=="number"||t instanceof Number}Nt.number=G3;function V3(t){return t instanceof Error}Nt.error=V3;function Y3(t){return typeof t=="function"}Nt.func=Y3;function lI(t){return Array.isArray(t)}Nt.array=lI;function X3(t){return lI(t)&&t.every(e=>uI(e))}Nt.stringArray=X3;function J3(t,e){return Array.isArray(t)&&t.every(e)}Nt.typedArray=J3;function Q3(t){return t!==null&&typeof t=="object"}Nt.objectLiteral=Q3});var pI=E(zm=>{"use strict";Object.defineProperty(zm,"__esModule",{value:!0});zm.ImplementationRequest=void 0;var dI=ot(),fI;(function(t){t.method="textDocument/implementation",t.messageDirection=dI.MessageDirection.clientToServer,t.type=new dI.ProtocolRequestType(t.method)})(fI||(zm.ImplementationRequest=fI={}))});var gI=E(Gm=>{"use strict";Object.defineProperty(Gm,"__esModule",{value:!0});Gm.TypeDefinitionRequest=void 0;var hI=ot(),mI;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=hI.MessageDirection.clientToServer,t.type=new hI.ProtocolRequestType(t.method)})(mI||(Gm.TypeDefinitionRequest=mI={}))});var xI=E(tu=>{"use strict";Object.defineProperty(tu,"__esModule",{value:!0});tu.DidChangeWorkspaceFoldersNotification=tu.WorkspaceFoldersRequest=void 0;var Vm=ot(),yI;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=Vm.MessageDirection.serverToClient,t.type=new Vm.ProtocolRequestType0(t.method)})(yI||(tu.WorkspaceFoldersRequest=yI={}));var vI;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=Vm.MessageDirection.clientToServer,t.type=new Vm.ProtocolNotificationType(t.method)})(vI||(tu.DidChangeWorkspaceFoldersNotification=vI={}))});var RI=E(Ym=>{"use strict";Object.defineProperty(Ym,"__esModule",{value:!0});Ym.ConfigurationRequest=void 0;var wI=ot(),bI;(function(t){t.method="workspace/configuration",t.messageDirection=wI.MessageDirection.serverToClient,t.type=new wI.ProtocolRequestType(t.method)})(bI||(Ym.ConfigurationRequest=bI={}))});var kI=E(ru=>{"use strict";Object.defineProperty(ru,"__esModule",{value:!0});ru.ColorPresentationRequest=ru.DocumentColorRequest=void 0;var Xm=ot(),TI;(function(t){t.method="textDocument/documentColor",t.messageDirection=Xm.MessageDirection.clientToServer,t.type=new Xm.ProtocolRequestType(t.method)})(TI||(ru.DocumentColorRequest=TI={}));var _I;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=Xm.MessageDirection.clientToServer,t.type=new Xm.ProtocolRequestType(t.method)})(_I||(ru.ColorPresentationRequest=_I={}))});var EI=E(nu=>{"use strict";Object.defineProperty(nu,"__esModule",{value:!0});nu.FoldingRangeRefreshRequest=nu.FoldingRangeRequest=void 0;var Jm=ot(),SI;(function(t){t.method="textDocument/foldingRange",t.messageDirection=Jm.MessageDirection.clientToServer,t.type=new Jm.ProtocolRequestType(t.method)})(SI||(nu.FoldingRangeRequest=SI={}));var CI;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=Jm.MessageDirection.serverToClient,t.type=new Jm.ProtocolRequestType0(t.method)})(CI||(nu.FoldingRangeRefreshRequest=CI={}))});var NI=E(Qm=>{"use strict";Object.defineProperty(Qm,"__esModule",{value:!0});Qm.DeclarationRequest=void 0;var DI=ot(),PI;(function(t){t.method="textDocument/declaration",t.messageDirection=DI.MessageDirection.clientToServer,t.type=new DI.ProtocolRequestType(t.method)})(PI||(Qm.DeclarationRequest=PI={}))});var II=E(Zm=>{"use strict";Object.defineProperty(Zm,"__esModule",{value:!0});Zm.SelectionRangeRequest=void 0;var AI=ot(),OI;(function(t){t.method="textDocument/selectionRange",t.messageDirection=AI.MessageDirection.clientToServer,t.type=new AI.ProtocolRequestType(t.method)})(OI||(Zm.SelectionRangeRequest=OI={}))});var qI=E(gi=>{"use strict";Object.defineProperty(gi,"__esModule",{value:!0});gi.WorkDoneProgressCancelNotification=gi.WorkDoneProgressCreateRequest=gi.WorkDoneProgress=void 0;var Z3=hs(),eg=ot(),$I;(function(t){t.type=new Z3.ProgressType;function e(r){return r===t.type}t.is=e})($I||(gi.WorkDoneProgress=$I={}));var MI;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=eg.MessageDirection.serverToClient,t.type=new eg.ProtocolRequestType(t.method)})(MI||(gi.WorkDoneProgressCreateRequest=MI={}));var LI;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=eg.MessageDirection.clientToServer,t.type=new eg.ProtocolNotificationType(t.method)})(LI||(gi.WorkDoneProgressCancelNotification=LI={}))});var UI=E(yi=>{"use strict";Object.defineProperty(yi,"__esModule",{value:!0});yi.CallHierarchyOutgoingCallsRequest=yi.CallHierarchyIncomingCallsRequest=yi.CallHierarchyPrepareRequest=void 0;var ou=ot(),FI;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=ou.MessageDirection.clientToServer,t.type=new ou.ProtocolRequestType(t.method)})(FI||(yi.CallHierarchyPrepareRequest=FI={}));var KI;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=ou.MessageDirection.clientToServer,t.type=new ou.ProtocolRequestType(t.method)})(KI||(yi.CallHierarchyIncomingCallsRequest=KI={}));var jI;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=ou.MessageDirection.clientToServer,t.type=new ou.ProtocolRequestType(t.method)})(jI||(yi.CallHierarchyOutgoingCallsRequest=jI={}))});var VI=E(Fr=>{"use strict";Object.defineProperty(Fr,"__esModule",{value:!0});Fr.SemanticTokensRefreshRequest=Fr.SemanticTokensRangeRequest=Fr.SemanticTokensDeltaRequest=Fr.SemanticTokensRequest=Fr.SemanticTokensRegistrationType=Fr.TokenFormat=void 0;var Do=ot(),WI;(function(t){t.Relative="relative"})(WI||(Fr.TokenFormat=WI={}));var Ed;(function(t){t.method="textDocument/semanticTokens",t.type=new Do.RegistrationType(t.method)})(Ed||(Fr.SemanticTokensRegistrationType=Ed={}));var HI;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=Do.MessageDirection.clientToServer,t.type=new Do.ProtocolRequestType(t.method),t.registrationMethod=Ed.method})(HI||(Fr.SemanticTokensRequest=HI={}));var BI;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=Do.MessageDirection.clientToServer,t.type=new Do.ProtocolRequestType(t.method),t.registrationMethod=Ed.method})(BI||(Fr.SemanticTokensDeltaRequest=BI={}));var zI;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=Do.MessageDirection.clientToServer,t.type=new Do.ProtocolRequestType(t.method),t.registrationMethod=Ed.method})(zI||(Fr.SemanticTokensRangeRequest=zI={}));var GI;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=Do.MessageDirection.serverToClient,t.type=new Do.ProtocolRequestType0(t.method)})(GI||(Fr.SemanticTokensRefreshRequest=GI={}))});var JI=E(tg=>{"use strict";Object.defineProperty(tg,"__esModule",{value:!0});tg.ShowDocumentRequest=void 0;var YI=ot(),XI;(function(t){t.method="window/showDocument",t.messageDirection=YI.MessageDirection.serverToClient,t.type=new YI.ProtocolRequestType(t.method)})(XI||(tg.ShowDocumentRequest=XI={}))});var e$=E(rg=>{"use strict";Object.defineProperty(rg,"__esModule",{value:!0});rg.LinkedEditingRangeRequest=void 0;var QI=ot(),ZI;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=QI.MessageDirection.clientToServer,t.type=new QI.ProtocolRequestType(t.method)})(ZI||(rg.LinkedEditingRangeRequest=ZI={}))});var c$=E(hr=>{"use strict";Object.defineProperty(hr,"__esModule",{value:!0});hr.WillDeleteFilesRequest=hr.DidDeleteFilesNotification=hr.DidRenameFilesNotification=hr.WillRenameFilesRequest=hr.DidCreateFilesNotification=hr.WillCreateFilesRequest=hr.FileOperationPatternKind=void 0;var mn=ot(),t$;(function(t){t.file="file",t.folder="folder"})(t$||(hr.FileOperationPatternKind=t$={}));var r$;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=mn.MessageDirection.clientToServer,t.type=new mn.ProtocolRequestType(t.method)})(r$||(hr.WillCreateFilesRequest=r$={}));var n$;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=mn.MessageDirection.clientToServer,t.type=new mn.ProtocolNotificationType(t.method)})(n$||(hr.DidCreateFilesNotification=n$={}));var o$;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=mn.MessageDirection.clientToServer,t.type=new mn.ProtocolRequestType(t.method)})(o$||(hr.WillRenameFilesRequest=o$={}));var i$;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=mn.MessageDirection.clientToServer,t.type=new mn.ProtocolNotificationType(t.method)})(i$||(hr.DidRenameFilesNotification=i$={}));var s$;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=mn.MessageDirection.clientToServer,t.type=new mn.ProtocolNotificationType(t.method)})(s$||(hr.DidDeleteFilesNotification=s$={}));var a$;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=mn.MessageDirection.clientToServer,t.type=new mn.ProtocolRequestType(t.method)})(a$||(hr.WillDeleteFilesRequest=a$={}))});var p$=E(vi=>{"use strict";Object.defineProperty(vi,"__esModule",{value:!0});vi.MonikerRequest=vi.MonikerKind=vi.UniquenessLevel=void 0;var u$=ot(),l$;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(l$||(vi.UniquenessLevel=l$={}));var d$;(function(t){t.$import="import",t.$export="export",t.local="local"})(d$||(vi.MonikerKind=d$={}));var f$;(function(t){t.method="textDocument/moniker",t.messageDirection=u$.MessageDirection.clientToServer,t.type=new u$.ProtocolRequestType(t.method)})(f$||(vi.MonikerRequest=f$={}))});var y$=E(xi=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.TypeHierarchySubtypesRequest=xi.TypeHierarchySupertypesRequest=xi.TypeHierarchyPrepareRequest=void 0;var iu=ot(),h$;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=iu.MessageDirection.clientToServer,t.type=new iu.ProtocolRequestType(t.method)})(h$||(xi.TypeHierarchyPrepareRequest=h$={}));var m$;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=iu.MessageDirection.clientToServer,t.type=new iu.ProtocolRequestType(t.method)})(m$||(xi.TypeHierarchySupertypesRequest=m$={}));var g$;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=iu.MessageDirection.clientToServer,t.type=new iu.ProtocolRequestType(t.method)})(g$||(xi.TypeHierarchySubtypesRequest=g$={}))});var w$=E(su=>{"use strict";Object.defineProperty(su,"__esModule",{value:!0});su.InlineValueRefreshRequest=su.InlineValueRequest=void 0;var ng=ot(),v$;(function(t){t.method="textDocument/inlineValue",t.messageDirection=ng.MessageDirection.clientToServer,t.type=new ng.ProtocolRequestType(t.method)})(v$||(su.InlineValueRequest=v$={}));var x$;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=ng.MessageDirection.serverToClient,t.type=new ng.ProtocolRequestType0(t.method)})(x$||(su.InlineValueRefreshRequest=x$={}))});var _$=E(wi=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.InlayHintRefreshRequest=wi.InlayHintResolveRequest=wi.InlayHintRequest=void 0;var au=ot(),b$;(function(t){t.method="textDocument/inlayHint",t.messageDirection=au.MessageDirection.clientToServer,t.type=new au.ProtocolRequestType(t.method)})(b$||(wi.InlayHintRequest=b$={}));var R$;(function(t){t.method="inlayHint/resolve",t.messageDirection=au.MessageDirection.clientToServer,t.type=new au.ProtocolRequestType(t.method)})(R$||(wi.InlayHintResolveRequest=R$={}));var T$;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=au.MessageDirection.serverToClient,t.type=new au.ProtocolRequestType0(t.method)})(T$||(wi.InlayHintRefreshRequest=T$={}))});var N$=E(gn=>{"use strict";Object.defineProperty(gn,"__esModule",{value:!0});gn.DiagnosticRefreshRequest=gn.WorkspaceDiagnosticRequest=gn.DocumentDiagnosticRequest=gn.DocumentDiagnosticReportKind=gn.DiagnosticServerCancellationData=void 0;var P$=hs(),e4=Bm(),cu=ot(),k$;(function(t){function e(r){let n=r;return n&&e4.boolean(n.retriggerRequest)}t.is=e})(k$||(gn.DiagnosticServerCancellationData=k$={}));var S$;(function(t){t.Full="full",t.Unchanged="unchanged"})(S$||(gn.DocumentDiagnosticReportKind=S$={}));var C$;(function(t){t.method="textDocument/diagnostic",t.messageDirection=cu.MessageDirection.clientToServer,t.type=new cu.ProtocolRequestType(t.method),t.partialResult=new P$.ProgressType})(C$||(gn.DocumentDiagnosticRequest=C$={}));var E$;(function(t){t.method="workspace/diagnostic",t.messageDirection=cu.MessageDirection.clientToServer,t.type=new cu.ProtocolRequestType(t.method),t.partialResult=new P$.ProgressType})(E$||(gn.WorkspaceDiagnosticRequest=E$={}));var D$;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=cu.MessageDirection.serverToClient,t.type=new cu.ProtocolRequestType0(t.method)})(D$||(gn.DiagnosticRefreshRequest=D$={}))});var q$=E(vt=>{"use strict";Object.defineProperty(vt,"__esModule",{value:!0});vt.DidCloseNotebookDocumentNotification=vt.DidSaveNotebookDocumentNotification=vt.DidChangeNotebookDocumentNotification=vt.NotebookCellArrayChange=vt.DidOpenNotebookDocumentNotification=vt.NotebookDocumentSyncRegistrationType=vt.NotebookDocument=vt.NotebookCell=vt.ExecutionSummary=vt.NotebookCellKind=void 0;var Dd=(Hm(),Ts(Wm)),On=Bm(),io=ot(),o_;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(o_||(vt.NotebookCellKind=o_={}));var i_;(function(t){function e(o,i){let s={executionOrder:o};return(i===!0||i===!1)&&(s.success=i),s}t.create=e;function r(o){let i=o;return On.objectLiteral(i)&&Dd.uinteger.is(i.executionOrder)&&(i.success===void 0||On.boolean(i.success))}t.is=r;function n(o,i){return o===i?!0:o==null||i===null||i===void 0?!1:o.executionOrder===i.executionOrder&&o.success===i.success}t.equals=n})(i_||(vt.ExecutionSummary=i_={}));var og;(function(t){function e(i,s){return{kind:i,document:s}}t.create=e;function r(i){let s=i;return On.objectLiteral(s)&&o_.is(s.kind)&&Dd.DocumentUri.is(s.document)&&(s.metadata===void 0||On.objectLiteral(s.metadata))}t.is=r;function n(i,s){let a=new Set;return i.document!==s.document&&a.add("document"),i.kind!==s.kind&&a.add("kind"),i.executionSummary!==s.executionSummary&&a.add("executionSummary"),(i.metadata!==void 0||s.metadata!==void 0)&&!o(i.metadata,s.metadata)&&a.add("metadata"),(i.executionSummary!==void 0||s.executionSummary!==void 0)&&!i_.equals(i.executionSummary,s.executionSummary)&&a.add("executionSummary"),a}t.diff=n;function o(i,s){if(i===s)return!0;if(i==null||s===null||s===void 0||typeof i!=typeof s||typeof i!="object")return!1;let a=Array.isArray(i),c=Array.isArray(s);if(a!==c)return!1;if(a&&c){if(i.length!==s.length)return!1;for(let u=0;u<i.length;u++)if(!o(i[u],s[u]))return!1}if(On.objectLiteral(i)&&On.objectLiteral(s)){let u=Object.keys(i),d=Object.keys(s);if(u.length!==d.length||(u.sort(),d.sort(),!o(u,d)))return!1;for(let h=0;h<u.length;h++){let g=u[h];if(!o(i[g],s[g]))return!1}}return!0}})(og||(vt.NotebookCell=og={}));var A$;(function(t){function e(n,o,i,s){return{uri:n,notebookType:o,version:i,cells:s}}t.create=e;function r(n){let o=n;return On.objectLiteral(o)&&On.string(o.uri)&&Dd.integer.is(o.version)&&On.typedArray(o.cells,og.is)}t.is=r})(A$||(vt.NotebookDocument=A$={}));var uu;(function(t){t.method="notebookDocument/sync",t.messageDirection=io.MessageDirection.clientToServer,t.type=new io.RegistrationType(t.method)})(uu||(vt.NotebookDocumentSyncRegistrationType=uu={}));var O$;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=io.MessageDirection.clientToServer,t.type=new io.ProtocolNotificationType(t.method),t.registrationMethod=uu.method})(O$||(vt.DidOpenNotebookDocumentNotification=O$={}));var I$;(function(t){function e(n){let o=n;return On.objectLiteral(o)&&Dd.uinteger.is(o.start)&&Dd.uinteger.is(o.deleteCount)&&(o.cells===void 0||On.typedArray(o.cells,og.is))}t.is=e;function r(n,o,i){let s={start:n,deleteCount:o};return i!==void 0&&(s.cells=i),s}t.create=r})(I$||(vt.NotebookCellArrayChange=I$={}));var $$;(function(t){t.method="notebookDocument/didChange",t.messageDirection=io.MessageDirection.clientToServer,t.type=new io.ProtocolNotificationType(t.method),t.registrationMethod=uu.method})($$||(vt.DidChangeNotebookDocumentNotification=$$={}));var M$;(function(t){t.method="notebookDocument/didSave",t.messageDirection=io.MessageDirection.clientToServer,t.type=new io.ProtocolNotificationType(t.method),t.registrationMethod=uu.method})(M$||(vt.DidSaveNotebookDocumentNotification=M$={}));var L$;(function(t){t.method="notebookDocument/didClose",t.messageDirection=io.MessageDirection.clientToServer,t.type=new io.ProtocolNotificationType(t.method),t.registrationMethod=uu.method})(L$||(vt.DidCloseNotebookDocumentNotification=L$={}))});var j$=E(ig=>{"use strict";Object.defineProperty(ig,"__esModule",{value:!0});ig.InlineCompletionRequest=void 0;var F$=ot(),K$;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=F$.MessageDirection.clientToServer,t.type=new F$.ProtocolRequestType(t.method)})(K$||(ig.InlineCompletionRequest=K$={}))});var eL=E(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.WorkspaceSymbolRequest=v.CodeActionResolveRequest=v.CodeActionRequest=v.DocumentSymbolRequest=v.DocumentHighlightRequest=v.ReferencesRequest=v.DefinitionRequest=v.SignatureHelpRequest=v.SignatureHelpTriggerKind=v.HoverRequest=v.CompletionResolveRequest=v.CompletionRequest=v.CompletionTriggerKind=v.PublishDiagnosticsNotification=v.WatchKind=v.RelativePattern=v.FileChangeType=v.DidChangeWatchedFilesNotification=v.WillSaveTextDocumentWaitUntilRequest=v.WillSaveTextDocumentNotification=v.TextDocumentSaveReason=v.DidSaveTextDocumentNotification=v.DidCloseTextDocumentNotification=v.DidChangeTextDocumentNotification=v.TextDocumentContentChangeEvent=v.DidOpenTextDocumentNotification=v.TextDocumentSyncKind=v.TelemetryEventNotification=v.LogMessageNotification=v.ShowMessageRequest=v.ShowMessageNotification=v.MessageType=v.DidChangeConfigurationNotification=v.ExitNotification=v.ShutdownRequest=v.InitializedNotification=v.InitializeErrorCodes=v.InitializeRequest=v.WorkDoneProgressOptions=v.TextDocumentRegistrationOptions=v.StaticRegistrationOptions=v.PositionEncodingKind=v.FailureHandlingKind=v.ResourceOperationKind=v.UnregistrationRequest=v.RegistrationRequest=v.DocumentSelector=v.NotebookCellTextDocumentFilter=v.NotebookDocumentFilter=v.TextDocumentFilter=void 0;v.MonikerRequest=v.MonikerKind=v.UniquenessLevel=v.WillDeleteFilesRequest=v.DidDeleteFilesNotification=v.WillRenameFilesRequest=v.DidRenameFilesNotification=v.WillCreateFilesRequest=v.DidCreateFilesNotification=v.FileOperationPatternKind=v.LinkedEditingRangeRequest=v.ShowDocumentRequest=v.SemanticTokensRegistrationType=v.SemanticTokensRefreshRequest=v.SemanticTokensRangeRequest=v.SemanticTokensDeltaRequest=v.SemanticTokensRequest=v.TokenFormat=v.CallHierarchyPrepareRequest=v.CallHierarchyOutgoingCallsRequest=v.CallHierarchyIncomingCallsRequest=v.WorkDoneProgressCancelNotification=v.WorkDoneProgressCreateRequest=v.WorkDoneProgress=v.SelectionRangeRequest=v.DeclarationRequest=v.FoldingRangeRefreshRequest=v.FoldingRangeRequest=v.ColorPresentationRequest=v.DocumentColorRequest=v.ConfigurationRequest=v.DidChangeWorkspaceFoldersNotification=v.WorkspaceFoldersRequest=v.TypeDefinitionRequest=v.ImplementationRequest=v.ApplyWorkspaceEditRequest=v.ExecuteCommandRequest=v.PrepareRenameRequest=v.RenameRequest=v.PrepareSupportDefaultBehavior=v.DocumentOnTypeFormattingRequest=v.DocumentRangesFormattingRequest=v.DocumentRangeFormattingRequest=v.DocumentFormattingRequest=v.DocumentLinkResolveRequest=v.DocumentLinkRequest=v.CodeLensRefreshRequest=v.CodeLensResolveRequest=v.CodeLensRequest=v.WorkspaceSymbolResolveRequest=void 0;v.InlineCompletionRequest=v.DidCloseNotebookDocumentNotification=v.DidSaveNotebookDocumentNotification=v.DidChangeNotebookDocumentNotification=v.NotebookCellArrayChange=v.DidOpenNotebookDocumentNotification=v.NotebookDocumentSyncRegistrationType=v.NotebookDocument=v.NotebookCell=v.ExecutionSummary=v.NotebookCellKind=v.DiagnosticRefreshRequest=v.WorkspaceDiagnosticRequest=v.DocumentDiagnosticRequest=v.DocumentDiagnosticReportKind=v.DiagnosticServerCancellationData=v.InlayHintRefreshRequest=v.InlayHintResolveRequest=v.InlayHintRequest=v.InlineValueRefreshRequest=v.InlineValueRequest=v.TypeHierarchySupertypesRequest=v.TypeHierarchySubtypesRequest=v.TypeHierarchyPrepareRequest=void 0;var M=ot(),U$=(Hm(),Ts(Wm)),Ut=Bm(),t4=pI();Object.defineProperty(v,"ImplementationRequest",{enumerable:!0,get:function(){return t4.ImplementationRequest}});var r4=gI();Object.defineProperty(v,"TypeDefinitionRequest",{enumerable:!0,get:function(){return r4.TypeDefinitionRequest}});var XM=xI();Object.defineProperty(v,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return XM.WorkspaceFoldersRequest}});Object.defineProperty(v,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return XM.DidChangeWorkspaceFoldersNotification}});var n4=RI();Object.defineProperty(v,"ConfigurationRequest",{enumerable:!0,get:function(){return n4.ConfigurationRequest}});var JM=kI();Object.defineProperty(v,"DocumentColorRequest",{enumerable:!0,get:function(){return JM.DocumentColorRequest}});Object.defineProperty(v,"ColorPresentationRequest",{enumerable:!0,get:function(){return JM.ColorPresentationRequest}});var QM=EI();Object.defineProperty(v,"FoldingRangeRequest",{enumerable:!0,get:function(){return QM.FoldingRangeRequest}});Object.defineProperty(v,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return QM.FoldingRangeRefreshRequest}});var o4=NI();Object.defineProperty(v,"DeclarationRequest",{enumerable:!0,get:function(){return o4.DeclarationRequest}});var i4=II();Object.defineProperty(v,"SelectionRangeRequest",{enumerable:!0,get:function(){return i4.SelectionRangeRequest}});var l_=qI();Object.defineProperty(v,"WorkDoneProgress",{enumerable:!0,get:function(){return l_.WorkDoneProgress}});Object.defineProperty(v,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return l_.WorkDoneProgressCreateRequest}});Object.defineProperty(v,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return l_.WorkDoneProgressCancelNotification}});var d_=UI();Object.defineProperty(v,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return d_.CallHierarchyIncomingCallsRequest}});Object.defineProperty(v,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return d_.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(v,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return d_.CallHierarchyPrepareRequest}});var lu=VI();Object.defineProperty(v,"TokenFormat",{enumerable:!0,get:function(){return lu.TokenFormat}});Object.defineProperty(v,"SemanticTokensRequest",{enumerable:!0,get:function(){return lu.SemanticTokensRequest}});Object.defineProperty(v,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return lu.SemanticTokensDeltaRequest}});Object.defineProperty(v,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return lu.SemanticTokensRangeRequest}});Object.defineProperty(v,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return lu.SemanticTokensRefreshRequest}});Object.defineProperty(v,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return lu.SemanticTokensRegistrationType}});var s4=JI();Object.defineProperty(v,"ShowDocumentRequest",{enumerable:!0,get:function(){return s4.ShowDocumentRequest}});var a4=e$();Object.defineProperty(v,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return a4.LinkedEditingRangeRequest}});var ys=c$();Object.defineProperty(v,"FileOperationPatternKind",{enumerable:!0,get:function(){return ys.FileOperationPatternKind}});Object.defineProperty(v,"DidCreateFilesNotification",{enumerable:!0,get:function(){return ys.DidCreateFilesNotification}});Object.defineProperty(v,"WillCreateFilesRequest",{enumerable:!0,get:function(){return ys.WillCreateFilesRequest}});Object.defineProperty(v,"DidRenameFilesNotification",{enumerable:!0,get:function(){return ys.DidRenameFilesNotification}});Object.defineProperty(v,"WillRenameFilesRequest",{enumerable:!0,get:function(){return ys.WillRenameFilesRequest}});Object.defineProperty(v,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return ys.DidDeleteFilesNotification}});Object.defineProperty(v,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return ys.WillDeleteFilesRequest}});var f_=p$();Object.defineProperty(v,"UniquenessLevel",{enumerable:!0,get:function(){return f_.UniquenessLevel}});Object.defineProperty(v,"MonikerKind",{enumerable:!0,get:function(){return f_.MonikerKind}});Object.defineProperty(v,"MonikerRequest",{enumerable:!0,get:function(){return f_.MonikerRequest}});var p_=y$();Object.defineProperty(v,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return p_.TypeHierarchyPrepareRequest}});Object.defineProperty(v,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return p_.TypeHierarchySubtypesRequest}});Object.defineProperty(v,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return p_.TypeHierarchySupertypesRequest}});var ZM=w$();Object.defineProperty(v,"InlineValueRequest",{enumerable:!0,get:function(){return ZM.InlineValueRequest}});Object.defineProperty(v,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return ZM.InlineValueRefreshRequest}});var h_=_$();Object.defineProperty(v,"InlayHintRequest",{enumerable:!0,get:function(){return h_.InlayHintRequest}});Object.defineProperty(v,"InlayHintResolveRequest",{enumerable:!0,get:function(){return h_.InlayHintResolveRequest}});Object.defineProperty(v,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return h_.InlayHintRefreshRequest}});var Pd=N$();Object.defineProperty(v,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return Pd.DiagnosticServerCancellationData}});Object.defineProperty(v,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return Pd.DocumentDiagnosticReportKind}});Object.defineProperty(v,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return Pd.DocumentDiagnosticRequest}});Object.defineProperty(v,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return Pd.WorkspaceDiagnosticRequest}});Object.defineProperty(v,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return Pd.DiagnosticRefreshRequest}});var so=q$();Object.defineProperty(v,"NotebookCellKind",{enumerable:!0,get:function(){return so.NotebookCellKind}});Object.defineProperty(v,"ExecutionSummary",{enumerable:!0,get:function(){return so.ExecutionSummary}});Object.defineProperty(v,"NotebookCell",{enumerable:!0,get:function(){return so.NotebookCell}});Object.defineProperty(v,"NotebookDocument",{enumerable:!0,get:function(){return so.NotebookDocument}});Object.defineProperty(v,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return so.NotebookDocumentSyncRegistrationType}});Object.defineProperty(v,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return so.DidOpenNotebookDocumentNotification}});Object.defineProperty(v,"NotebookCellArrayChange",{enumerable:!0,get:function(){return so.NotebookCellArrayChange}});Object.defineProperty(v,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return so.DidChangeNotebookDocumentNotification}});Object.defineProperty(v,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return so.DidSaveNotebookDocumentNotification}});Object.defineProperty(v,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return so.DidCloseNotebookDocumentNotification}});var c4=j$();Object.defineProperty(v,"InlineCompletionRequest",{enumerable:!0,get:function(){return c4.InlineCompletionRequest}});var s_;(function(t){function e(r){let n=r;return Ut.string(n)||Ut.string(n.language)||Ut.string(n.scheme)||Ut.string(n.pattern)}t.is=e})(s_||(v.TextDocumentFilter=s_={}));var a_;(function(t){function e(r){let n=r;return Ut.objectLiteral(n)&&(Ut.string(n.notebookType)||Ut.string(n.scheme)||Ut.string(n.pattern))}t.is=e})(a_||(v.NotebookDocumentFilter=a_={}));var c_;(function(t){function e(r){let n=r;return Ut.objectLiteral(n)&&(Ut.string(n.notebook)||a_.is(n.notebook))&&(n.language===void 0||Ut.string(n.language))}t.is=e})(c_||(v.NotebookCellTextDocumentFilter=c_={}));var u_;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!Ut.string(n)&&!s_.is(n)&&!c_.is(n))return!1;return!0}t.is=e})(u_||(v.DocumentSelector=u_={}));var W$;(function(t){t.method="client/registerCapability",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType(t.method)})(W$||(v.RegistrationRequest=W$={}));var H$;(function(t){t.method="client/unregisterCapability",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType(t.method)})(H$||(v.UnregistrationRequest=H$={}));var B$;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(B$||(v.ResourceOperationKind=B$={}));var z$;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(z$||(v.FailureHandlingKind=z$={}));var G$;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(G$||(v.PositionEncodingKind=G$={}));var V$;(function(t){function e(r){let n=r;return n&&Ut.string(n.id)&&n.id.length>0}t.hasId=e})(V$||(v.StaticRegistrationOptions=V$={}));var Y$;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||u_.is(n.documentSelector))}t.is=e})(Y$||(v.TextDocumentRegistrationOptions=Y$={}));var X$;(function(t){function e(n){let o=n;return Ut.objectLiteral(o)&&(o.workDoneProgress===void 0||Ut.boolean(o.workDoneProgress))}t.is=e;function r(n){let o=n;return o&&Ut.boolean(o.workDoneProgress)}t.hasWorkDoneProgress=r})(X$||(v.WorkDoneProgressOptions=X$={}));var J$;(function(t){t.method="initialize",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(J$||(v.InitializeRequest=J$={}));var Q$;(function(t){t.unknownProtocolVersion=1})(Q$||(v.InitializeErrorCodes=Q$={}));var Z$;(function(t){t.method="initialized",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(Z$||(v.InitializedNotification=Z$={}));var eM;(function(t){t.method="shutdown",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType0(t.method)})(eM||(v.ShutdownRequest=eM={}));var tM;(function(t){t.method="exit",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType0(t.method)})(tM||(v.ExitNotification=tM={}));var rM;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(rM||(v.DidChangeConfigurationNotification=rM={}));var nM;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})(nM||(v.MessageType=nM={}));var oM;(function(t){t.method="window/showMessage",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolNotificationType(t.method)})(oM||(v.ShowMessageNotification=oM={}));var iM;(function(t){t.method="window/showMessageRequest",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType(t.method)})(iM||(v.ShowMessageRequest=iM={}));var sM;(function(t){t.method="window/logMessage",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolNotificationType(t.method)})(sM||(v.LogMessageNotification=sM={}));var aM;(function(t){t.method="telemetry/event",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolNotificationType(t.method)})(aM||(v.TelemetryEventNotification=aM={}));var cM;(function(t){t.None=0,t.Full=1,t.Incremental=2})(cM||(v.TextDocumentSyncKind=cM={}));var uM;(function(t){t.method="textDocument/didOpen",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(uM||(v.DidOpenTextDocumentNotification=uM={}));var lM;(function(t){function e(n){let o=n;return o!=null&&typeof o.text=="string"&&o.range!==void 0&&(o.rangeLength===void 0||typeof o.rangeLength=="number")}t.isIncremental=e;function r(n){let o=n;return o!=null&&typeof o.text=="string"&&o.range===void 0&&o.rangeLength===void 0}t.isFull=r})(lM||(v.TextDocumentContentChangeEvent=lM={}));var dM;(function(t){t.method="textDocument/didChange",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(dM||(v.DidChangeTextDocumentNotification=dM={}));var fM;(function(t){t.method="textDocument/didClose",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(fM||(v.DidCloseTextDocumentNotification=fM={}));var pM;(function(t){t.method="textDocument/didSave",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(pM||(v.DidSaveTextDocumentNotification=pM={}));var hM;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(hM||(v.TextDocumentSaveReason=hM={}));var mM;(function(t){t.method="textDocument/willSave",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(mM||(v.WillSaveTextDocumentNotification=mM={}));var gM;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(gM||(v.WillSaveTextDocumentWaitUntilRequest=gM={}));var yM;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(yM||(v.DidChangeWatchedFilesNotification=yM={}));var vM;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(vM||(v.FileChangeType=vM={}));var xM;(function(t){function e(r){let n=r;return Ut.objectLiteral(n)&&(U$.URI.is(n.baseUri)||U$.WorkspaceFolder.is(n.baseUri))&&Ut.string(n.pattern)}t.is=e})(xM||(v.RelativePattern=xM={}));var wM;(function(t){t.Create=1,t.Change=2,t.Delete=4})(wM||(v.WatchKind=wM={}));var bM;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolNotificationType(t.method)})(bM||(v.PublishDiagnosticsNotification=bM={}));var RM;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(RM||(v.CompletionTriggerKind=RM={}));var TM;(function(t){t.method="textDocument/completion",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(TM||(v.CompletionRequest=TM={}));var _M;(function(t){t.method="completionItem/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(_M||(v.CompletionResolveRequest=_M={}));var kM;(function(t){t.method="textDocument/hover",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(kM||(v.HoverRequest=kM={}));var SM;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(SM||(v.SignatureHelpTriggerKind=SM={}));var CM;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(CM||(v.SignatureHelpRequest=CM={}));var EM;(function(t){t.method="textDocument/definition",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(EM||(v.DefinitionRequest=EM={}));var DM;(function(t){t.method="textDocument/references",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(DM||(v.ReferencesRequest=DM={}));var PM;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(PM||(v.DocumentHighlightRequest=PM={}));var NM;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(NM||(v.DocumentSymbolRequest=NM={}));var AM;(function(t){t.method="textDocument/codeAction",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(AM||(v.CodeActionRequest=AM={}));var OM;(function(t){t.method="codeAction/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(OM||(v.CodeActionResolveRequest=OM={}));var IM;(function(t){t.method="workspace/symbol",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(IM||(v.WorkspaceSymbolRequest=IM={}));var $M;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})($M||(v.WorkspaceSymbolResolveRequest=$M={}));var MM;(function(t){t.method="textDocument/codeLens",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(MM||(v.CodeLensRequest=MM={}));var LM;(function(t){t.method="codeLens/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(LM||(v.CodeLensResolveRequest=LM={}));var qM;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType0(t.method)})(qM||(v.CodeLensRefreshRequest=qM={}));var FM;(function(t){t.method="textDocument/documentLink",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(FM||(v.DocumentLinkRequest=FM={}));var KM;(function(t){t.method="documentLink/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(KM||(v.DocumentLinkResolveRequest=KM={}));var jM;(function(t){t.method="textDocument/formatting",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(jM||(v.DocumentFormattingRequest=jM={}));var UM;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(UM||(v.DocumentRangeFormattingRequest=UM={}));var WM;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(WM||(v.DocumentRangesFormattingRequest=WM={}));var HM;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(HM||(v.DocumentOnTypeFormattingRequest=HM={}));var BM;(function(t){t.Identifier=1})(BM||(v.PrepareSupportDefaultBehavior=BM={}));var zM;(function(t){t.method="textDocument/rename",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(zM||(v.RenameRequest=zM={}));var GM;(function(t){t.method="textDocument/prepareRename",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(GM||(v.PrepareRenameRequest=GM={}));var VM;(function(t){t.method="workspace/executeCommand",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(VM||(v.ExecuteCommandRequest=VM={}));var YM;(function(t){t.method="workspace/applyEdit",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType("workspace/applyEdit")})(YM||(v.ApplyWorkspaceEditRequest=YM={}))});var rL=E(sg=>{"use strict";Object.defineProperty(sg,"__esModule",{value:!0});sg.createProtocolConnection=void 0;var tL=hs();function u4(t,e,r,n){return tL.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,tL.createMessageConnection)(t,e,r,n)}sg.createProtocolConnection=u4});var oL=E(Kr=>{"use strict";var l4=Kr&&Kr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),ag=Kr&&Kr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&l4(e,t,r)};Object.defineProperty(Kr,"__esModule",{value:!0});Kr.LSPErrorCodes=Kr.createProtocolConnection=void 0;ag(hs(),Kr);ag((Hm(),Ts(Wm)),Kr);ag(ot(),Kr);ag(eL(),Kr);var d4=rL();Object.defineProperty(Kr,"createProtocolConnection",{enumerable:!0,get:function(){return d4.createProtocolConnection}});var nL;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(nL||(Kr.LSPErrorCodes=nL={}))});var Tt=E(ao=>{"use strict";var f4=ao&&ao.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),iL=ao&&ao.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&f4(e,t,r)};Object.defineProperty(ao,"__esModule",{value:!0});ao.createProtocolConnection=void 0;var p4=XR();iL(XR(),ao);iL(oL(),ao);function h4(t,e,r,n){return(0,p4.createMessageConnection)(t,e,r,n)}ao.createProtocolConnection=h4});var g_=E(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.SemanticTokensBuilder=bi.SemanticTokensDiff=bi.SemanticTokensFeature=void 0;var cg=Tt(),m4=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(cg.SemanticTokensRefreshRequest.type),on:e=>{let r=cg.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=cg.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=cg.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};bi.SemanticTokensFeature=m4;var ug=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let o=e-1,i=r-1;for(;o>=n&&i>=n&&this.originalSequence[o]===this.modifiedSequence[i];)o--,i--;(o<n||i<n)&&(o++,i++);let s=o-n+1,a=this.modifiedSequence.slice(n,i+1);return a.length===1&&a[0]===this.originalSequence[o]?[{start:n,deleteCount:s-1}]:[{start:n,deleteCount:s,data:a}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};bi.SemanticTokensDiff=ug;var m_=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,o,i){let s=e,a=r;this._dataLen>0&&(s-=this._prevLine,s===0&&(a-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=a,this._data[this._dataLen++]=n,this._data[this._dataLen++]=o,this._data[this._dataLen++]=i,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new ug(this._prevData,this._data).computeDiff()}:this.build()}};bi.SemanticTokensBuilder=m_});var sL=E(lg=>{"use strict";Object.defineProperty(lg,"__esModule",{value:!0});lg.InlineCompletionFeature=void 0;var g4=Tt(),y4=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(g4.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};lg.InlineCompletionFeature=y4});var v_=E(dg=>{"use strict";Object.defineProperty(dg,"__esModule",{value:!0});dg.TextDocuments=void 0;var vs=Tt(),y_=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new vs.Emitter,this._onDidOpen=new vs.Emitter,this._onDidClose=new vs.Emitter,this._onDidSave=new vs.Emitter,this._onWillSave=new vs.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=vs.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let o=n.textDocument,i=this._configuration.create(o.uri,o.languageId,o.version,o.text);this._syncedDocuments.set(o.uri,i);let s=Object.freeze({document:i});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),r.push(e.onDidChangeTextDocument(n=>{let o=n.textDocument,i=n.contentChanges;if(i.length===0)return;let{version:s}=o;if(s==null)throw new Error(`Received document change event for ${o.uri} without valid version identifier`);let a=this._syncedDocuments.get(o.uri);a!==void 0&&(a=this._configuration.update(a,i,s),this._syncedDocuments.set(o.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),r.push(e.onDidCloseTextDocument(n=>{let o=this._syncedDocuments.get(n.textDocument.uri);o!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:o})))})),r.push(e.onWillSaveTextDocument(n=>{let o=this._syncedDocuments.get(n.textDocument.uri);o!==void 0&&this._onWillSave.fire(Object.freeze({document:o,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,o)=>{let i=this._syncedDocuments.get(n.textDocument.uri);return i!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:i,reason:n.reason}),o):[]})),r.push(e.onDidSaveTextDocument(n=>{let o=this._syncedDocuments.get(n.textDocument.uri);o!==void 0&&this._onDidSave.fire(Object.freeze({document:o}))})),vs.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};dg.TextDocuments=y_});var w_=E(du=>{"use strict";Object.defineProperty(du,"__esModule",{value:!0});du.NotebookDocuments=du.NotebookSyncFeature=void 0;var yn=Tt(),aL=v_(),v4=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(yn.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(yn.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(yn.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(yn.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};du.NotebookSyncFeature=v4;var fg=class t{onDidOpenTextDocument(e){return this.openHandler=e,yn.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,yn.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,yn.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};fg.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var x_=class{constructor(e){e instanceof aL.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new aL.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new yn.Emitter,this._onDidChange=new yn.Emitter,this._onDidSave=new yn.Emitter,this._onDidClose=new yn.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new fg,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(o=>{this.notebookDocuments.set(o.notebookDocument.uri,o.notebookDocument);for(let i of o.cellTextDocuments)r.openTextDocument({textDocument:i});this.updateCellMap(o.notebookDocument),this._onDidOpen.fire(o.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(o=>{let i=this.notebookDocuments.get(o.notebookDocument.uri);if(i===void 0)return;i.version=o.notebookDocument.version;let s=i.metadata,a=!1,c=o.change;c.metadata!==void 0&&(a=!0,i.metadata=c.metadata);let u=[],d=[],h=[],g=[];if(c.cells!==void 0){let R=c.cells;if(R.structure!==void 0){let p=R.structure.array;if(i.cells.splice(p.start,p.deleteCount,...p.cells!==void 0?p.cells:[]),R.structure.didOpen!==void 0)for(let f of R.structure.didOpen)r.openTextDocument({textDocument:f}),u.push(f.uri);if(R.structure.didClose)for(let f of R.structure.didClose)r.closeTextDocument({textDocument:f}),d.push(f.uri)}if(R.data!==void 0){let p=new Map(R.data.map(f=>[f.document,f]));for(let f=0;f<=i.cells.length;f++){let w=p.get(i.cells[f].document);if(w!==void 0){let O=i.cells.splice(f,1,w);if(h.push({old:O[0],new:w}),p.delete(w.document),p.size===0)break}}}if(R.textContent!==void 0)for(let p of R.textContent)r.changeTextDocument({textDocument:p.document,contentChanges:p.changes}),g.push(p.document.uri)}this.updateCellMap(i);let m={notebookDocument:i};a&&(m.metadata={old:s,new:i.metadata});let b=[];for(let R of u)b.push(this.getNotebookCell(R));let T=[];for(let R of d)T.push(this.getNotebookCell(R));let C=[];for(let R of g)C.push(this.getNotebookCell(R));(b.length>0||T.length>0||h.length>0||C.length>0)&&(m.cells={added:b,removed:T,changed:{data:h,textContent:C}}),(m.metadata!==void 0||m.cells!==void 0)&&this._onDidChange.fire(m)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(o=>{let i=this.notebookDocuments.get(o.notebookDocument.uri);i!==void 0&&this._onDidSave.fire(i)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(o=>{let i=this.notebookDocuments.get(o.notebookDocument.uri);if(i!==void 0){this._onDidClose.fire(i);for(let s of o.cellTextDocuments)r.closeTextDocument({textDocument:s});this.notebookDocuments.delete(o.notebookDocument.uri);for(let s of i.cells)this.notebookCellMap.delete(s.document)}})),yn.Disposable.create(()=>{n.forEach(o=>o.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};du.NotebookDocuments=x_});var b_=E(At=>{"use strict";Object.defineProperty(At,"__esModule",{value:!0});At.thenable=At.typedArray=At.stringArray=At.array=At.func=At.error=At.number=At.string=At.boolean=void 0;function x4(t){return t===!0||t===!1}At.boolean=x4;function cL(t){return typeof t=="string"||t instanceof String}At.string=cL;function w4(t){return typeof t=="number"||t instanceof Number}At.number=w4;function b4(t){return t instanceof Error}At.error=b4;function uL(t){return typeof t=="function"}At.func=uL;function lL(t){return Array.isArray(t)}At.array=lL;function R4(t){return lL(t)&&t.every(e=>cL(e))}At.stringArray=R4;function T4(t,e){return Array.isArray(t)&&t.every(e)}At.typedArray=T4;function _4(t){return t&&uL(t.then)}At.thenable=_4});var R_=E(vn=>{"use strict";Object.defineProperty(vn,"__esModule",{value:!0});vn.generateUuid=vn.parse=vn.isUUID=vn.v4=vn.empty=void 0;var Nd=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},Ad=class t extends Nd{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};Ad._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];Ad._timeHighBits=["8","9","a","b"];vn.empty=new Nd("00000000-0000-0000-0000-000000000000");function dL(){return new Ad}vn.v4=dL;var k4=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function fL(t){return k4.test(t)}vn.isUUID=fL;function S4(t){if(!fL(t))throw new Error("invalid uuid");return new Nd(t)}vn.parse=S4;function C4(){return dL().asHex()}vn.generateUuid=C4});var pL=E(Ti=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.attachPartialResult=Ti.ProgressFeature=Ti.attachWorkDone=void 0;var Ri=Tt(),E4=R_(),xs=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,o){let i={kind:"begin",title:e,percentage:r,message:n,cancellable:o};this._connection.sendProgress(Ri.WorkDoneProgress.type,this._token,i)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(Ri.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(Ri.WorkDoneProgress.type,this._token,{kind:"end"})}};xs.Instances=new Map;var pg=class extends xs{constructor(e,r){super(e,r),this._source=new Ri.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},Od=class{constructor(){}begin(){}report(){}done(){}},hg=class extends Od{constructor(){super(),this._source=new Ri.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function D4(t,e){if(e===void 0||e.workDoneToken===void 0)return new Od;let r=e.workDoneToken;return delete e.workDoneToken,new xs(t,r)}Ti.attachWorkDone=D4;var P4=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(Ri.WorkDoneProgressCancelNotification.type,r=>{let n=xs.Instances.get(r.token);(n instanceof pg||n instanceof hg)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new Od:new xs(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,E4.generateUuid)();return this.connection.sendRequest(Ri.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new pg(this.connection,e))}else return Promise.resolve(new hg)}};Ti.ProgressFeature=P4;var T_;(function(t){t.type=new Ri.ProgressType})(T_||(T_={}));var __=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(T_.type,this._token,e)}};function N4(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new __(t,r)}Ti.attachPartialResult=N4});var hL=E(mg=>{"use strict";Object.defineProperty(mg,"__esModule",{value:!0});mg.ConfigurationFeature=void 0;var A4=Tt(),O4=b_(),I4=t=>class extends t{getConfiguration(e){return e?O4.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(A4.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};mg.ConfigurationFeature=I4});var mL=E(yg=>{"use strict";Object.defineProperty(yg,"__esModule",{value:!0});yg.WorkspaceFoldersFeature=void 0;var gg=Tt(),$4=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new gg.Emitter,this.connection.onNotification(gg.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(gg.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(gg.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};yg.WorkspaceFoldersFeature=$4});var gL=E(vg=>{"use strict";Object.defineProperty(vg,"__esModule",{value:!0});vg.CallHierarchyFeature=void 0;var k_=Tt(),M4=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(k_.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=k_.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=k_.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};vg.CallHierarchyFeature=M4});var yL=E(xg=>{"use strict";Object.defineProperty(xg,"__esModule",{value:!0});xg.ShowDocumentFeature=void 0;var L4=Tt(),q4=t=>class extends t{showDocument(e){return this.connection.sendRequest(L4.ShowDocumentRequest.type,e)}};xg.ShowDocumentFeature=q4});var vL=E(wg=>{"use strict";Object.defineProperty(wg,"__esModule",{value:!0});wg.FileOperationsFeature=void 0;var fu=Tt(),F4=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(fu.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(fu.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(fu.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(fu.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(fu.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(fu.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};wg.FileOperationsFeature=F4});var xL=E(bg=>{"use strict";Object.defineProperty(bg,"__esModule",{value:!0});bg.LinkedEditingRangeFeature=void 0;var K4=Tt(),j4=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(K4.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};bg.LinkedEditingRangeFeature=j4});var wL=E(Rg=>{"use strict";Object.defineProperty(Rg,"__esModule",{value:!0});Rg.TypeHierarchyFeature=void 0;var S_=Tt(),U4=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(S_.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=S_.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=S_.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Rg.TypeHierarchyFeature=U4});var RL=E(Tg=>{"use strict";Object.defineProperty(Tg,"__esModule",{value:!0});Tg.InlineValueFeature=void 0;var bL=Tt(),W4=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(bL.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(bL.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Tg.InlineValueFeature=W4});var _L=E(_g=>{"use strict";Object.defineProperty(_g,"__esModule",{value:!0});_g.FoldingRangeFeature=void 0;var TL=Tt(),H4=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(TL.FoldingRangeRefreshRequest.type),on:e=>{let r=TL.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};_g.FoldingRangeFeature=H4});var kL=E(kg=>{"use strict";Object.defineProperty(kg,"__esModule",{value:!0});kg.InlayHintFeature=void 0;var C_=Tt(),B4=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(C_.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(C_.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(C_.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};kg.InlayHintFeature=B4});var SL=E(Sg=>{"use strict";Object.defineProperty(Sg,"__esModule",{value:!0});Sg.DiagnosticFeature=void 0;var Id=Tt(),z4=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(Id.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(Id.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Id.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(Id.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Id.WorkspaceDiagnosticRequest.partialResult,r)))}}};Sg.DiagnosticFeature=z4});var CL=E(Cg=>{"use strict";Object.defineProperty(Cg,"__esModule",{value:!0});Cg.MonikerFeature=void 0;var G4=Tt(),V4=t=>class extends t{get moniker(){return{on:e=>{let r=G4.MonikerRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Cg.MonikerFeature=V4});var UL=E(Ee=>{"use strict";Object.defineProperty(Ee,"__esModule",{value:!0});Ee.createConnection=Ee.combineFeatures=Ee.combineNotebooksFeatures=Ee.combineLanguagesFeatures=Ee.combineWorkspaceFeatures=Ee.combineWindowFeatures=Ee.combineClientFeatures=Ee.combineTracerFeatures=Ee.combineTelemetryFeatures=Ee.combineConsoleFeatures=Ee._NotebooksImpl=Ee._LanguagesImpl=Ee.BulkUnregistration=Ee.BulkRegistration=Ee.ErrorMessageTracker=void 0;var K=Tt(),xn=b_(),D_=R_(),fe=pL(),Y4=hL(),X4=mL(),J4=gL(),Q4=g_(),Z4=yL(),e8=vL(),t8=xL(),r8=wL(),n8=RL(),o8=_L(),i8=kL(),s8=SL(),a8=w_(),c8=CL();function E_(t){if(t!==null)return t}var P_=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};Ee.ErrorMessageTracker=P_;var Eg=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(K.MessageType.Error,e)}warn(e){this.send(K.MessageType.Warning,e)}info(e){this.send(K.MessageType.Info,e)}log(e){this.send(K.MessageType.Log,e)}debug(e){this.send(K.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(K.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,K.RAL)().console.error("Sending log message failed")})}},N_=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:K.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(K.ShowMessageRequest.type,n).then(E_)}showWarningMessage(e,...r){let n={type:K.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(K.ShowMessageRequest.type,n).then(E_)}showInformationMessage(e,...r){let n={type:K.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(K.ShowMessageRequest.type,n).then(E_)}},EL=(0,Z4.ShowDocumentFeature)((0,fe.ProgressFeature)(N_)),DL;(function(t){function e(){return new Dg}t.create=e})(DL||(Ee.BulkRegistration=DL={}));var Dg=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=xn.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let o=D_.generateUuid();this._registrations.push({id:o,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},PL;(function(t){function e(){return new $d(void 0,[])}t.create=e})(PL||(Ee.BulkUnregistration=PL={}));var $d=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(K.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=xn.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let o={unregisterations:[n]};return this._connection.sendRequest(K.UnregistrationRequest.type,o).then(()=>{this._unregistrations.delete(r)},i=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Pg=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Dg?this.registerMany(e):e instanceof $d?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let o=xn.string(r)?r:r.method,i=D_.generateUuid(),s={registrations:[{id:i,method:o,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(K.RegistrationRequest.type,s).then(a=>(e.add({id:i,method:o}),e),a=>(this.connection.console.info(`Registering request handler for ${o} failed.`),Promise.reject(a)))}registerSingle2(e,r){let n=xn.string(e)?e:e.method,o=D_.generateUuid(),i={registrations:[{id:o,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(K.RegistrationRequest.type,i).then(s=>K.Disposable.create(()=>{this.unregisterSingle(o,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${o} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(s)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(K.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(K.RegistrationRequest.type,r).then(()=>new $d(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},A_=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(o){return o&&!!o.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(K.ApplyWorkspaceEditRequest.type,n)}},NL=(0,e8.FileOperationsFeature)((0,X4.WorkspaceFoldersFeature)((0,Y4.ConfigurationFeature)(A_))),Ng=class{constructor(){this._trace=K.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==K.Trace.Off&&this.connection.sendNotification(K.LogTraceNotification.type,{message:e,verbose:this._trace===K.Trace.Verbose?r:void 0}).catch(()=>{})}},Ag=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(K.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Og=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,fe.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,fe.attachPartialResult)(this.connection,r)}};Ee._LanguagesImpl=Og;var AL=(0,o8.FoldingRangeFeature)((0,c8.MonikerFeature)((0,s8.DiagnosticFeature)((0,i8.InlayHintFeature)((0,n8.InlineValueFeature)((0,r8.TypeHierarchyFeature)((0,t8.LinkedEditingRangeFeature)((0,Q4.SemanticTokensFeature)((0,J4.CallHierarchyFeature)(Og))))))))),Ig=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,fe.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,fe.attachPartialResult)(this.connection,r)}};Ee._NotebooksImpl=Ig;var OL=(0,a8.NotebookSyncFeature)(Ig);function IL(t,e){return function(r){return e(t(r))}}Ee.combineConsoleFeatures=IL;function $L(t,e){return function(r){return e(t(r))}}Ee.combineTelemetryFeatures=$L;function ML(t,e){return function(r){return e(t(r))}}Ee.combineTracerFeatures=ML;function LL(t,e){return function(r){return e(t(r))}}Ee.combineClientFeatures=LL;function qL(t,e){return function(r){return e(t(r))}}Ee.combineWindowFeatures=qL;function FL(t,e){return function(r){return e(t(r))}}Ee.combineWorkspaceFeatures=FL;function KL(t,e){return function(r){return e(t(r))}}Ee.combineLanguagesFeatures=KL;function jL(t,e){return function(r){return e(t(r))}}Ee.combineNotebooksFeatures=jL;function u8(t,e){function r(o,i,s){return o&&i?s(o,i):o||i}return{__brand:"features",console:r(t.console,e.console,IL),tracer:r(t.tracer,e.tracer,ML),telemetry:r(t.telemetry,e.telemetry,$L),client:r(t.client,e.client,LL),window:r(t.window,e.window,qL),workspace:r(t.workspace,e.workspace,FL),languages:r(t.languages,e.languages,KL),notebooks:r(t.notebooks,e.notebooks,jL)}}Ee.combineFeatures=u8;function l8(t,e,r){let n=r&&r.console?new(r.console(Eg)):new Eg,o=t(n);n.rawAttach(o);let i=r&&r.tracer?new(r.tracer(Ng)):new Ng,s=r&&r.telemetry?new(r.telemetry(Ag)):new Ag,a=r&&r.client?new(r.client(Pg)):new Pg,c=r&&r.window?new(r.window(EL)):new EL,u=r&&r.workspace?new(r.workspace(NL)):new NL,d=r&&r.languages?new(r.languages(AL)):new AL,h=r&&r.notebooks?new(r.notebooks(OL)):new OL,g=[n,i,s,a,c,u,d,h];function m(p){return p instanceof Promise?p:xn.thenable(p)?new Promise((f,w)=>{p.then(O=>f(O),O=>w(O))}):Promise.resolve(p)}let b,T,C,R={listen:()=>o.listen(),sendRequest:(p,...f)=>o.sendRequest(xn.string(p)?p:p.method,...f),onRequest:(p,f)=>o.onRequest(p,f),sendNotification:(p,f)=>{let w=xn.string(p)?p:p.method;return o.sendNotification(w,f)},onNotification:(p,f)=>o.onNotification(p,f),onProgress:o.onProgress,sendProgress:o.sendProgress,onInitialize:p=>(T=p,{dispose:()=>{T=void 0}}),onInitialized:p=>o.onNotification(K.InitializedNotification.type,p),onShutdown:p=>(b=p,{dispose:()=>{b=void 0}}),onExit:p=>(C=p,{dispose:()=>{C=void 0}}),get console(){return n},get telemetry(){return s},get tracer(){return i},get client(){return a},get window(){return c},get workspace(){return u},get languages(){return d},get notebooks(){return h},onDidChangeConfiguration:p=>o.onNotification(K.DidChangeConfigurationNotification.type,p),onDidChangeWatchedFiles:p=>o.onNotification(K.DidChangeWatchedFilesNotification.type,p),__textDocumentSync:void 0,onDidOpenTextDocument:p=>o.onNotification(K.DidOpenTextDocumentNotification.type,p),onDidChangeTextDocument:p=>o.onNotification(K.DidChangeTextDocumentNotification.type,p),onDidCloseTextDocument:p=>o.onNotification(K.DidCloseTextDocumentNotification.type,p),onWillSaveTextDocument:p=>o.onNotification(K.WillSaveTextDocumentNotification.type,p),onWillSaveTextDocumentWaitUntil:p=>o.onRequest(K.WillSaveTextDocumentWaitUntilRequest.type,p),onDidSaveTextDocument:p=>o.onNotification(K.DidSaveTextDocumentNotification.type,p),sendDiagnostics:p=>o.sendNotification(K.PublishDiagnosticsNotification.type,p),onHover:p=>o.onRequest(K.HoverRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),void 0)),onCompletion:p=>o.onRequest(K.CompletionRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onCompletionResolve:p=>o.onRequest(K.CompletionResolveRequest.type,p),onSignatureHelp:p=>o.onRequest(K.SignatureHelpRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),void 0)),onDeclaration:p=>o.onRequest(K.DeclarationRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onDefinition:p=>o.onRequest(K.DefinitionRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onTypeDefinition:p=>o.onRequest(K.TypeDefinitionRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onImplementation:p=>o.onRequest(K.ImplementationRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onReferences:p=>o.onRequest(K.ReferencesRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onDocumentHighlight:p=>o.onRequest(K.DocumentHighlightRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onDocumentSymbol:p=>o.onRequest(K.DocumentSymbolRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onWorkspaceSymbol:p=>o.onRequest(K.WorkspaceSymbolRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onWorkspaceSymbolResolve:p=>o.onRequest(K.WorkspaceSymbolResolveRequest.type,p),onCodeAction:p=>o.onRequest(K.CodeActionRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onCodeActionResolve:p=>o.onRequest(K.CodeActionResolveRequest.type,(f,w)=>p(f,w)),onCodeLens:p=>o.onRequest(K.CodeLensRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onCodeLensResolve:p=>o.onRequest(K.CodeLensResolveRequest.type,(f,w)=>p(f,w)),onDocumentFormatting:p=>o.onRequest(K.DocumentFormattingRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),void 0)),onDocumentRangeFormatting:p=>o.onRequest(K.DocumentRangeFormattingRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),void 0)),onDocumentOnTypeFormatting:p=>o.onRequest(K.DocumentOnTypeFormattingRequest.type,(f,w)=>p(f,w)),onRenameRequest:p=>o.onRequest(K.RenameRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),void 0)),onPrepareRename:p=>o.onRequest(K.PrepareRenameRequest.type,(f,w)=>p(f,w)),onDocumentLinks:p=>o.onRequest(K.DocumentLinkRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onDocumentLinkResolve:p=>o.onRequest(K.DocumentLinkResolveRequest.type,(f,w)=>p(f,w)),onDocumentColor:p=>o.onRequest(K.DocumentColorRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onColorPresentation:p=>o.onRequest(K.ColorPresentationRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onFoldingRanges:p=>o.onRequest(K.FoldingRangeRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onSelectionRanges:p=>o.onRequest(K.SelectionRangeRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),(0,fe.attachPartialResult)(o,f))),onExecuteCommand:p=>o.onRequest(K.ExecuteCommandRequest.type,(f,w)=>p(f,w,(0,fe.attachWorkDone)(o,f),void 0)),dispose:()=>o.dispose()};for(let p of g)p.attach(R);return o.onRequest(K.InitializeRequest.type,p=>{e.initialize(p),xn.string(p.trace)&&(i.trace=K.Trace.fromString(p.trace));for(let f of g)f.initialize(p.capabilities);if(T){let f=T(p,new K.CancellationTokenSource().token,(0,fe.attachWorkDone)(o,p),void 0);return m(f).then(w=>{if(w instanceof K.ResponseError)return w;let O=w;O||(O={capabilities:{}});let G=O.capabilities;G||(G={},O.capabilities=G),G.textDocumentSync===void 0||G.textDocumentSync===null?G.textDocumentSync=xn.number(R.__textDocumentSync)?R.__textDocumentSync:K.TextDocumentSyncKind.None:!xn.number(G.textDocumentSync)&&!xn.number(G.textDocumentSync.change)&&(G.textDocumentSync.change=xn.number(R.__textDocumentSync)?R.__textDocumentSync:K.TextDocumentSyncKind.None);for(let it of g)it.fillServerCapabilities(G);return O})}else{let f={capabilities:{textDocumentSync:K.TextDocumentSyncKind.None}};for(let w of g)w.fillServerCapabilities(f.capabilities);return f}}),o.onRequest(K.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,b)return b(new K.CancellationTokenSource().token)}),o.onNotification(K.ExitNotification.type,()=>{try{C&&C()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),o.onNotification(K.SetTraceNotification.type,p=>{i.trace=K.Trace.fromString(p.value)}),R}Ee.createConnection=l8});var O_=E(mr=>{"use strict";var d8=mr&&mr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),HL=mr&&mr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&d8(e,t,r)};Object.defineProperty(mr,"__esModule",{value:!0});mr.ProposedFeatures=mr.NotebookDocuments=mr.TextDocuments=mr.SemanticTokensBuilder=void 0;var f8=g_();Object.defineProperty(mr,"SemanticTokensBuilder",{enumerable:!0,get:function(){return f8.SemanticTokensBuilder}});var p8=sL();HL(Tt(),mr);var h8=v_();Object.defineProperty(mr,"TextDocuments",{enumerable:!0,get:function(){return h8.TextDocuments}});var m8=w_();Object.defineProperty(mr,"NotebookDocuments",{enumerable:!0,get:function(){return m8.NotebookDocuments}});HL(UL(),mr);var WL;(function(t){t.all={__brand:"features",languages:p8.InlineCompletionFeature}})(WL||(mr.ProposedFeatures=WL={}))});var zL=E((bve,BL)=>{"use strict";BL.exports=Tt()});var I_=E(co=>{"use strict";var g8=co&&co.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),VL=co&&co.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&g8(e,t,r)};Object.defineProperty(co,"__esModule",{value:!0});co.createConnection=void 0;var $g=O_();VL(zL(),co);VL(O_(),co);var GL=!1,y8={initialize:t=>{},get shutdownReceived(){return GL},set shutdownReceived(t){GL=t},exit:t=>{}};function v8(t,e,r,n){let o,i,s,a;t!==void 0&&t.__brand==="features"&&(o=t,t=e,e=r,r=n),$g.ConnectionStrategy.is(t)||$g.ConnectionOptions.is(t)?a=t:(i=t,s=e,a=r);let c=u=>(0,$g.createProtocolConnection)(i,s,u,a);return(0,$g.createConnection)(c,y8,o)}co.createConnection=v8});var XL=E((Tve,YL)=>{"use strict";YL.exports=I_()});var Et={};uo(Et,{AbstractAstReflection:()=>Ci,AbstractCstNode:()=>pl,AbstractLangiumParser:()=>hl,AbstractParserErrorMessageProvider:()=>Ap,AbstractThreadedAsyncParser:()=>Xx,AstUtils:()=>tf,BiMap:()=>os,Cancellation:()=>B,CompositeCstNodeImpl:()=>ts,ContextCache:()=>is,CstNodeBuilder:()=>fl,CstUtils:()=>Vd,DONE_RESULT:()=>$t,DatatypeSymbol:()=>Np,DefaultAstNodeDescriptionProvider:()=>Ol,DefaultAstNodeLocator:()=>$l,DefaultAsyncParser:()=>Bl,DefaultCommentProvider:()=>Hl,DefaultConfigurationProvider:()=>Ml,DefaultDocumentBuilder:()=>Ll,DefaultDocumentValidator:()=>Al,DefaultHydrator:()=>Gl,DefaultIndexManager:()=>ql,DefaultJsonSerializer:()=>Dl,DefaultLangiumDocumentFactory:()=>wl,DefaultLangiumDocuments:()=>bl,DefaultLexer:()=>Kl,DefaultLinker:()=>Rl,DefaultNameProvider:()=>Tl,DefaultReferenceDescriptionProvider:()=>Il,DefaultReferences:()=>_l,DefaultScopeComputation:()=>kl,DefaultScopeProvider:()=>El,DefaultServiceRegistry:()=>Pl,DefaultTokenBuilder:()=>yl,DefaultValueConverter:()=>vl,DefaultWorkspaceLock:()=>zl,DefaultWorkspaceManager:()=>Fl,Deferred:()=>_r,Disposable:()=>ei,DisposableCache:()=>yc,DocumentCache:()=>Kp,DocumentState:()=>J,DocumentValidator:()=>_o,EMPTY_SCOPE:()=>PG,EMPTY_STREAM:()=>No,EmptyFileSystem:()=>Jl,EmptyFileSystemProvider:()=>zp,ErrorWithLocation:()=>Ni,GrammarAST:()=>Ii,GrammarUtils:()=>cf,JSDocDocumentationProvider:()=>Wl,LangiumCompletionParser:()=>gl,LangiumParser:()=>ml,LangiumParserErrorMessageProvider:()=>dc,LeafCstNodeImpl:()=>es,MapScope:()=>Sl,Module:()=>wc,MultiMap:()=>En,OperationCancelled:()=>Jn,ParserWorker:()=>Jx,Reduction:()=>_s,RegExpUtils:()=>of,RootCstNodeImpl:()=>lc,SimpleCache:()=>Cl,StreamImpl:()=>yr,StreamScope:()=>gc,TextDocument:()=>Zo,TreeStreamImpl:()=>en,URI:()=>He,UriUtils:()=>Jt,ValidationCategory:()=>xc,ValidationRegistry:()=>Nl,ValueConverter:()=>Xn,WorkspaceCache:()=>vc,assertUnreachable:()=>Ao,createCompletionParser:()=>Nx,createDefaultCoreModule:()=>Vl,createDefaultSharedCoreModule:()=>Yl,createGrammarConfig:()=>qy,createLangiumParser:()=>Ax,delayNextTick:()=>Kx,diagnosticData:()=>jp,eagerLoad:()=>Xl,getDiagnosticRange:()=>XD,inject:()=>ss,interruptAndCheck:()=>ut,isAstNode:()=>Ge,isAstNodeDescription:()=>Xg,isAstNodeWithComment:()=>Ux,isCompositeCstNode:()=>gr,isIMultiModeLexerDefinition:()=>Hx,isJSDoc:()=>Vx,isLeafCstNode:()=>Tn,isLinkingError:()=>Ei,isNamed:()=>Fp,isOperationCancelled:()=>sn,isReference:()=>zt,isRootCstNode:()=>yu,isTokenTypeArray:()=>JD,isTokenTypeDictionary:()=>Wx,loadGrammarFromJson:()=>Gp,parseJSDoc:()=>Gx,prepareLangiumParser:()=>qD,setInterruptionPeriod:()=>HD,startCancelableOperation:()=>WD,stream:()=>xe,toDiagnosticSeverity:()=>Up});var Vd={};uo(Vd,{DefaultNameRegexp:()=>zd,RangeComparison:()=>$n,compareRange:()=>rk,findCommentNode:()=>ey,findDeclarationNodeAtOffset:()=>Mt,findLeafNodeAtOffset:()=>Gd,findLeafNodeBeforeOffset:()=>vu,flattenCst:()=>Qg,getInteriorNodes:()=>ry,getNextNode:()=>ty,getPreviousNode:()=>ok,getStartlineNode:()=>fq,inRange:()=>Bd,isChildNode:()=>Zg,isCommentNode:()=>Jg,streamCst:()=>Di,toDocumentSegment:()=>Pi,tokenToRange:()=>ks});function Ge(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function zt(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function Xg(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function Ei(t){return typeof t=="object"&&t!==null&&Ge(t.container)&&zt(t.reference)&&typeof t.message=="string"}var Ci=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return Ge(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let o=n[r];if(o!==void 0)return o;{let i=this.computeIsSubtype(e,r);return n[r]=i,i}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),o=[];for(let i of n)this.isSubtype(i,e)&&o.push(i);return this.allSubtypes[e]=o,o}}};function gr(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function Tn(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function yu(t){return gr(t)&&typeof t.fullText=="string"}var yr=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(o=>[e?e(o):o,r?r(o):o]);return new Map(n)}toString(){return this.join()}concat(e){return new t(()=>({first:this.startFn(),firstDone:!1,iterator:e[Symbol.iterator]()}),r=>{let n;if(!r.firstDone){do if(n=this.nextFn(r.first),!n.done)return n;while(!n.done);r.firstDone=!0}do if(n=r.iterator.next(),!n.done)return n;while(!n.done);return $t})}join(e=","){let r=this.iterator(),n="",o,i=!1;do o=r.next(),o.done||(i&&(n+=e),n+=dq(o.value)),i=!0;while(!o.done);return n}indexOf(e,r=0){let n=this.iterator(),o=0,i=n.next();for(;!i.done;){if(o>=r&&i.value===e)return o;i=n.next(),o++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,o=r.next();for(;!o.done;)e(o.value,n),o=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:o}=this.nextFn(r);return n?$t:{done:!1,value:e(o)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return $t})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),o=r,i=n.next();for(;!i.done;)o===void 0?o=i.value:o=e(o,i.value),i=n.next();return o}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let o=e.next();if(o.done)return n;let i=this.recursiveReduce(e,r,n);return i===void 0?o.value:r(i,o.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,o=r.next();for(;!o.done;){if(e(o.value))return n;o=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let i=r.iterator.next();if(i.done)r.iterator=void 0;else return i}let{done:n,value:o}=this.nextFn(r.this);if(!n){let i=e(o);if(Hd(i))r.iterator=i[Symbol.iterator]();else return{done:!1,value:i}}}while(r.iterator);return $t})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}let{done:o,value:i}=r.nextFn(n.this);if(!o)if(Hd(i))n.iterator=i[Symbol.iterator]();else return{done:!1,value:i}}while(n.iterator);return $t})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?$t:this.nextFn(r.state)))}distinct(e){return new t(()=>({set:new Set,internalState:this.startFn()}),r=>{let n;do if(n=this.nextFn(r.internalState),!n.done){let o=e?e(n.value):n.value;if(!r.set.has(o))return r.set.add(o),n}while(!n.done);return $t})}exclude(e,r){let n=new Set;for(let o of e){let i=r?r(o):o;n.add(i)}return this.filter(o=>{let i=r?r(o):o;return!n.has(i)})}};function dq(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function Hd(t){return!!t&&typeof t[Symbol.iterator]=="function"}var No=new yr(()=>{},()=>$t),$t=Object.freeze({done:!0,value:void 0});function xe(...t){if(t.length===1){let e=t[0];if(e instanceof yr)return e;if(Hd(e))return new yr(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new yr(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:$t)}return t.length>1?new yr(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];Hd(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return $t}):No}var en=class extends yr{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),o=>{for(o.pruned&&(o.iterators.pop(),o.pruned=!1);o.iterators.length>0;){let s=o.iterators[o.iterators.length-1].next();if(s.done)o.iterators.pop();else return o.iterators.push(r(s.value)[Symbol.iterator]()),s}return $t})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},_s;(function(t){function e(i){return i.reduce((s,a)=>s+a,0)}t.sum=e;function r(i){return i.reduce((s,a)=>s*a,0)}t.product=r;function n(i){return i.reduce((s,a)=>Math.min(s,a))}t.min=n;function o(i){return i.reduce((s,a)=>Math.max(s,a))}t.max=o})(_s||(_s={}));function Di(t){return new en(t,e=>gr(e)?e.content:[],{includeRoot:!0})}function Qg(t){return Di(t).filter(Tn)}function Zg(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function ks(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function Pi(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var $n;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside",t[t.Outside=5]="Outside"})($n||($n={}));function rk(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<=e.start.character)return $n.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>=e.end.character)return $n.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?$n.Inside:r?$n.OverlapBack:n?$n.OverlapFront:$n.Outside}function Bd(t,e){return rk(t,e)>$n.After}var zd=/^[\w\p{L}]$/u;function Mt(t,e,r=zd){if(t){if(e>0){let n=e-t.offset,o=t.text.charAt(n);r.test(o)||e--}return Gd(t,e)}}function ey(t,e){if(t){let r=ok(t,!0);if(r&&Jg(r,e))return r;if(yu(t)){let n=t.content.findIndex(o=>!o.hidden);for(let o=n-1;o>=0;o--){let i=t.content[o];if(Jg(i,e))return i}}}}function Jg(t,e){return Tn(t)&&e.includes(t.tokenType.name)}function Gd(t,e){if(Tn(t))return t;if(gr(t)){let r=nk(t,e,!1);if(r)return Gd(r,e)}}function vu(t,e){if(Tn(t))return t;if(gr(t)){let r=nk(t,e,!0);if(r)return vu(r,e)}}function nk(t,e,r){let n=0,o=t.content.length-1,i;for(;n<=o;){let s=Math.floor((n+o)/2),a=t.content[s];if(a.offset<=e&&a.end>e)return a;a.end<=e?(i=r?a:void 0,n=s+1):o=s-1}return i}function ok(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function ty(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),o=r.content.length-1;for(;n<o;){n++;let i=r.content[n];if(e||!i.hidden)return i}t=r}}function fq(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.container;){let o=t.container,i=n??o.content.indexOf(t);if(i===0?(t=o,n=void 0):(n=i-1,t=o.content[n]),t.range.start.line!==e)break;r=t}return r}function ry(t,e){let r=pq(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function pq(t,e){let r=tk(t),n=tk(e),o;for(let i=0;i<r.length&&i<n.length;i++){let s=r[i],a=n[i];if(s.parent===a.parent)o={parent:s.parent,a:s.index,b:a.index};else break}return o}function tk(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}var cf={};uo(cf,{findAssignment:()=>Iy,findNameAssignment:()=>af,findNodeForKeyword:()=>ya,findNodeForProperty:()=>Oo,findNodesForKeyword:()=>sf,findNodesForKeywordInternal:()=>Oy,findNodesForProperty:()=>ga,getActionAtElement:()=>hk,getActionType:()=>gk,getAllReachableRules:()=>Nu,getCrossReferenceTerminal:()=>Au,getEntryRule:()=>Pu,getExplicitRuleType:()=>Ln,getHiddenRules:()=>dk,getRuleType:()=>My,getRuleTypeName:()=>Mq,getTypeName:()=>ji,isArrayCardinality:()=>$y,isArrayOperator:()=>Iq,isCommentTerminal:()=>Ny,isDataType:()=>$q,isDataTypeRule:()=>Ou,isOptionalCardinality:()=>Ki,terminalRegex:()=>Io});var Ni=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function Ao(t){throw new Error("Error! The input value was not handled.")}var Ii={};uo(Ii,{AbstractElement:()=>Es,AbstractRule:()=>Ss,AbstractType:()=>Cs,Action:()=>Gs,Alternatives:()=>Vs,ArrayLiteral:()=>Ds,ArrayType:()=>Ps,Assignment:()=>Ys,BooleanLiteral:()=>Ns,CharacterRange:()=>Xs,Condition:()=>xu,Conjunction:()=>As,CrossReference:()=>Js,Disjunction:()=>Os,EndOfFile:()=>Qs,Grammar:()=>Is,GrammarImport:()=>bu,Group:()=>Zs,InferredType:()=>$s,Interface:()=>Ms,Keyword:()=>ea,LangiumGrammarAstReflection:()=>la,LangiumGrammarTerminals:()=>hq,NamedArgument:()=>Ru,NegatedToken:()=>ta,Negation:()=>Ls,NumberLiteral:()=>qs,Parameter:()=>Fs,ParameterReference:()=>Ks,ParserRule:()=>js,ReferenceType:()=>Us,RegexToken:()=>ra,ReturnType:()=>Tu,RuleCall:()=>na,SimpleType:()=>Ws,StringLiteral:()=>Hs,TerminalAlternatives:()=>oa,TerminalGroup:()=>ia,TerminalRule:()=>Ai,TerminalRuleCall:()=>sa,Type:()=>Bs,TypeAttribute:()=>_u,TypeDefinition:()=>Yd,UnionType:()=>zs,UnorderedGroup:()=>aa,UntilToken:()=>ca,ValueLiteral:()=>wu,Wildcard:()=>ua,isAbstractElement:()=>Oi,isAbstractRule:()=>mq,isAbstractType:()=>gq,isAction:()=>_n,isAlternatives:()=>da,isArrayLiteral:()=>bq,isArrayType:()=>ny,isAssignment:()=>or,isBooleanLiteral:()=>oy,isCharacterRange:()=>fy,isCondition:()=>yq,isConjunction:()=>iy,isCrossReference:()=>kn,isDisjunction:()=>sy,isEndOfFile:()=>py,isFeatureName:()=>vq,isGrammar:()=>Rq,isGrammarImport:()=>Tq,isGroup:()=>tn,isInferredType:()=>Xd,isInterface:()=>Jd,isKeyword:()=>Gt,isNamedArgument:()=>_q,isNegatedToken:()=>hy,isNegation:()=>ay,isNumberLiteral:()=>kq,isParameter:()=>Sq,isParameterReference:()=>cy,isParserRule:()=>ft,isPrimitiveType:()=>ik,isReferenceType:()=>uy,isRegexToken:()=>my,isReturnType:()=>ly,isRuleCall:()=>kr,isSimpleType:()=>Qd,isStringLiteral:()=>Cq,isTerminalAlternatives:()=>gy,isTerminalGroup:()=>yy,isTerminalRule:()=>vr,isTerminalRuleCall:()=>Zd,isType:()=>ku,isTypeAttribute:()=>Eq,isTypeDefinition:()=>xq,isUnionType:()=>dy,isUnorderedGroup:()=>fa,isUntilToken:()=>vy,isValueLiteral:()=>wq,isWildcard:()=>xy,reflection:()=>ue});var hq={ID:/\^?[_a-zA-Z][\w_]*/,STRING:/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,NUMBER:/NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,RegexLiteral:/\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,WS:/\s+/,ML_COMMENT:/\/\*[\s\S]*?\*\//,SL_COMMENT:/\/\/[^\n\r]*/},Ss="AbstractRule";function mq(t){return ue.isInstance(t,Ss)}var Cs="AbstractType";function gq(t){return ue.isInstance(t,Cs)}var xu="Condition";function yq(t){return ue.isInstance(t,xu)}function vq(t){return ik(t)||t==="current"||t==="entry"||t==="extends"||t==="false"||t==="fragment"||t==="grammar"||t==="hidden"||t==="import"||t==="interface"||t==="returns"||t==="terminal"||t==="true"||t==="type"||t==="infer"||t==="infers"||t==="with"||typeof t=="string"&&/\^?[_a-zA-Z][\w_]*/.test(t)}function ik(t){return t==="string"||t==="number"||t==="boolean"||t==="Date"||t==="bigint"}var Yd="TypeDefinition";function xq(t){return ue.isInstance(t,Yd)}var wu="ValueLiteral";function wq(t){return ue.isInstance(t,wu)}var Es="AbstractElement";function Oi(t){return ue.isInstance(t,Es)}var Ds="ArrayLiteral";function bq(t){return ue.isInstance(t,Ds)}var Ps="ArrayType";function ny(t){return ue.isInstance(t,Ps)}var Ns="BooleanLiteral";function oy(t){return ue.isInstance(t,Ns)}var As="Conjunction";function iy(t){return ue.isInstance(t,As)}var Os="Disjunction";function sy(t){return ue.isInstance(t,Os)}var Is="Grammar";function Rq(t){return ue.isInstance(t,Is)}var bu="GrammarImport";function Tq(t){return ue.isInstance(t,bu)}var $s="InferredType";function Xd(t){return ue.isInstance(t,$s)}var Ms="Interface";function Jd(t){return ue.isInstance(t,Ms)}var Ru="NamedArgument";function _q(t){return ue.isInstance(t,Ru)}var Ls="Negation";function ay(t){return ue.isInstance(t,Ls)}var qs="NumberLiteral";function kq(t){return ue.isInstance(t,qs)}var Fs="Parameter";function Sq(t){return ue.isInstance(t,Fs)}var Ks="ParameterReference";function cy(t){return ue.isInstance(t,Ks)}var js="ParserRule";function ft(t){return ue.isInstance(t,js)}var Us="ReferenceType";function uy(t){return ue.isInstance(t,Us)}var Tu="ReturnType";function ly(t){return ue.isInstance(t,Tu)}var Ws="SimpleType";function Qd(t){return ue.isInstance(t,Ws)}var Hs="StringLiteral";function Cq(t){return ue.isInstance(t,Hs)}var Ai="TerminalRule";function vr(t){return ue.isInstance(t,Ai)}var Bs="Type";function ku(t){return ue.isInstance(t,Bs)}var _u="TypeAttribute";function Eq(t){return ue.isInstance(t,_u)}var zs="UnionType";function dy(t){return ue.isInstance(t,zs)}var Gs="Action";function _n(t){return ue.isInstance(t,Gs)}var Vs="Alternatives";function da(t){return ue.isInstance(t,Vs)}var Ys="Assignment";function or(t){return ue.isInstance(t,Ys)}var Xs="CharacterRange";function fy(t){return ue.isInstance(t,Xs)}var Js="CrossReference";function kn(t){return ue.isInstance(t,Js)}var Qs="EndOfFile";function py(t){return ue.isInstance(t,Qs)}var Zs="Group";function tn(t){return ue.isInstance(t,Zs)}var ea="Keyword";function Gt(t){return ue.isInstance(t,ea)}var ta="NegatedToken";function hy(t){return ue.isInstance(t,ta)}var ra="RegexToken";function my(t){return ue.isInstance(t,ra)}var na="RuleCall";function kr(t){return ue.isInstance(t,na)}var oa="TerminalAlternatives";function gy(t){return ue.isInstance(t,oa)}var ia="TerminalGroup";function yy(t){return ue.isInstance(t,ia)}var sa="TerminalRuleCall";function Zd(t){return ue.isInstance(t,sa)}var aa="UnorderedGroup";function fa(t){return ue.isInstance(t,aa)}var ca="UntilToken";function vy(t){return ue.isInstance(t,ca)}var ua="Wildcard";function xy(t){return ue.isInstance(t,ua)}var la=class extends Ci{getAllTypes(){return[Es,Ss,Cs,Gs,Vs,Ds,Ps,Ys,Ns,Xs,xu,As,Js,Os,Qs,Is,bu,Zs,$s,Ms,ea,Ru,ta,Ls,qs,Fs,Ks,js,Us,ra,Tu,na,Ws,Hs,oa,ia,Ai,sa,Bs,_u,Yd,zs,aa,ca,wu,ua]}computeIsSubtype(e,r){switch(e){case Gs:case Vs:case Ys:case Xs:case Js:case Qs:case Zs:case ea:case ta:case ra:case na:case oa:case ia:case sa:case aa:case ca:case ua:return this.isSubtype(Es,r);case Ds:case qs:case Hs:return this.isSubtype(wu,r);case Ps:case Us:case Ws:case zs:return this.isSubtype(Yd,r);case Ns:return this.isSubtype(xu,r)||this.isSubtype(wu,r);case As:case Os:case Ls:case Ks:return this.isSubtype(xu,r);case $s:case Ms:case Bs:return this.isSubtype(Cs,r);case js:return this.isSubtype(Ss,r)||this.isSubtype(Cs,r);case Ai:return this.isSubtype(Ss,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return Cs;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return Ss;case"Grammar:usedGrammars":return Is;case"NamedArgument:parameter":case"ParameterReference:parameter":return Fs;case"TerminalRuleCall:rule":return Ai;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case Es:return{name:Es,properties:[{name:"cardinality"},{name:"lookahead"}]};case Ds:return{name:Ds,properties:[{name:"elements",defaultValue:[]}]};case Ps:return{name:Ps,properties:[{name:"elementType"}]};case Ns:return{name:Ns,properties:[{name:"true",defaultValue:!1}]};case As:return{name:As,properties:[{name:"left"},{name:"right"}]};case Os:return{name:Os,properties:[{name:"left"},{name:"right"}]};case Is:return{name:Is,properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case bu:return{name:bu,properties:[{name:"path"}]};case $s:return{name:$s,properties:[{name:"name"}]};case Ms:return{name:Ms,properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case Ru:return{name:Ru,properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case Ls:return{name:Ls,properties:[{name:"value"}]};case qs:return{name:qs,properties:[{name:"value"}]};case Fs:return{name:Fs,properties:[{name:"name"}]};case Ks:return{name:Ks,properties:[{name:"parameter"}]};case js:return{name:js,properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case Us:return{name:Us,properties:[{name:"referenceType"}]};case Tu:return{name:Tu,properties:[{name:"name"}]};case Ws:return{name:Ws,properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case Hs:return{name:Hs,properties:[{name:"value"}]};case Ai:return{name:Ai,properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case Bs:return{name:Bs,properties:[{name:"name"},{name:"type"}]};case _u:return{name:_u,properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case zs:return{name:zs,properties:[{name:"types",defaultValue:[]}]};case Gs:return{name:Gs,properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case Vs:return{name:Vs,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Ys:return{name:Ys,properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case Xs:return{name:Xs,properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case Js:return{name:Js,properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case Qs:return{name:Qs,properties:[{name:"cardinality"},{name:"lookahead"}]};case Zs:return{name:Zs,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case ea:return{name:ea,properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case ta:return{name:ta,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case ra:return{name:ra,properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case na:return{name:na,properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case oa:return{name:oa,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case ia:return{name:ia,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case sa:return{name:sa,properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case aa:return{name:aa,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case ca:return{name:ca,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case ua:return{name:ua,properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}},ue=new la;var tf={};uo(tf,{assignMandatoryProperties:()=>Su,copyAstNode:()=>by,findLocalReferences:()=>Pq,findRootNode:()=>sk,getContainerOfType:()=>Gr,getDocument:()=>Ze,hasContainerOfType:()=>Dq,linkContentToContainer:()=>ef,streamAllContents:()=>Sr,streamAst:()=>Cr,streamContents:()=>$i,streamReferences:()=>pa});function ef(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,o)=>{Ge(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=o)}):Ge(r)&&(r.$container=t,r.$containerProperty=e))}function Gr(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function Dq(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}function Ze(t){let r=sk(t).$document;if(!r)throw new Error("AST node has no document.");return r}function sk(t){for(;t.$container;)t=t.$container;return t}function $i(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e?.range;return new yr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let o=n.keys[n.keyIndex];if(!o.startsWith("$")){let i=t[o];if(Ge(i)){if(n.keyIndex++,wy(i,r))return{done:!1,value:i}}else if(Array.isArray(i)){for(;n.arrayIndex<i.length;){let s=n.arrayIndex++,a=i[s];if(Ge(a)&&wy(a,r))return{done:!1,value:a}}n.arrayIndex=0}}n.keyIndex++}return $t})}function Sr(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new en(t,r=>$i(r,e))}function Cr(t,e){if(t){if(e?.range&&!wy(t,e.range))return new en(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new en(t,r=>$i(r,e),{includeRoot:!0})}function wy(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?Bd(n,e):!1}function pa(t){return new yr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(zt(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let o=e.arrayIndex++,i=n[o];if(zt(i))return{done:!1,value:{reference:i,container:t,property:r,index:o}}}e.arrayIndex=0}}e.keyIndex++}return $t})}function Pq(t,e=Ze(t).parseResult.value){let r=[];return Cr(e).forEach(n=>{pa(n).forEach(o=>{o.reference.ref===t&&r.push(o.reference)})}),xe(r)}function Su(t,e){let r=t.getTypeMetaData(e.$type),n=e;for(let o of r.properties)o.defaultValue!==void 0&&n[o.name]===void 0&&(n[o.name]=ak(o.defaultValue))}function ak(t){return Array.isArray(t)?[...t.map(ak)]:t}function by(t,e){let r={$type:t.$type};for(let[n,o]of Object.entries(t))if(!n.startsWith("$"))if(Ge(o))r[n]=by(o,e);else if(zt(o))r[n]=e(r,n,o.$refNode,o.$refText);else if(Array.isArray(o)){let i=[];for(let s of o)Ge(s)?i.push(by(s,e)):zt(s)?i.push(e(r,n,s.$refNode,s.$refText)):i.push(s);r[n]=i}else r[n]=o;return ef(r),r}var of={};uo(of,{NEWLINE_REGEXP:()=>ky,escapeRegExp:()=>Fi,getCaseInsensitivePattern:()=>Cy,getTerminalParts:()=>Oq,isMultilineComment:()=>Sy,isWhitespace:()=>ma,partialMatches:()=>Ey,partialRegExp:()=>lk,whitespaceCharacters:()=>uk});function ie(t){return t.charCodeAt(0)}function rf(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function ha(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function Mi(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function Cu(){throw Error("Internal Error - Should never get here!")}function Ry(t){return t.type==="Character"}var Eu=[];for(let t=ie("0");t<=ie("9");t++)Eu.push(t);var Du=[ie("_")].concat(Eu);for(let t=ie("a");t<=ie("z");t++)Du.push(t);for(let t=ie("A");t<=ie("Z");t++)Du.push(t);var Ty=[ie(" "),ie("\f"),ie(`
`),ie("\r"),ie("	"),ie("\v"),ie("	"),ie("\xA0"),ie("\u1680"),ie("\u2000"),ie("\u2001"),ie("\u2002"),ie("\u2003"),ie("\u2004"),ie("\u2005"),ie("\u2006"),ie("\u2007"),ie("\u2008"),ie("\u2009"),ie("\u200A"),ie("\u2028"),ie("\u2029"),ie("\u202F"),ie("\u205F"),ie("\u3000"),ie("\uFEFF")];var Nq=/[0-9a-fA-F]/,nf=/[0-9]/,Aq=/[1-9]/,Li=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":ha(n,"global");break;case"i":ha(n,"ignoreCase");break;case"m":ha(n,"multiLine");break;case"u":ha(n,"unicode");break;case"y":ha(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}Mi(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return Cu()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let o=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:o,atMost:o};break;case",":let i;this.isDigit()?(i=this.integerIncludingZero(),r={atLeast:o,atMost:i}):r={atLeast:o,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;Mi(r);break}if(!(e===!0&&r===void 0)&&Mi(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),Mi(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):Cu()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[ie(`
`),ie("\r"),ie("\u2028"),ie("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=Eu;break;case"D":e=Eu,r=!0;break;case"s":e=Ty;break;case"S":e=Ty,r=!0;break;case"w":e=Du;break;case"W":e=Du,r=!0;break}return Mi(e)?{type:"Set",value:e,complement:r}:Cu()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=ie("\f");break;case"n":e=ie(`
`);break;case"r":e=ie("\r");break;case"t":e=ie("	");break;case"v":e=ie("\v");break}return Mi(e)?{type:"Character",value:e}:Cu()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:ie("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:ie(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:ie(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),o=n.type==="Character";if(Ry(n)&&this.isRangeDash()){this.consumeChar("-");let i=this.classAtom(),s=i.type==="Character";if(Ry(i)){if(i.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:i.value})}else rf(n.value,e),e.push(ie("-")),rf(i.value,e)}else rf(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:ie("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(Aq.test(e)===!1)throw Error("Expecting a positive integer");for(;nf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(nf.test(e)===!1)throw Error("Expecting an integer");for(;nf.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:ie(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return nf.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let o=0;o<e;o++){let i=this.popChar();if(Nq.test(i)===!1)throw Error("Expecting a HexDecimal digits");r+=i}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var Mn=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(o=>{this.visit(o)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var ky=/\r?\n/gm,ck=new Li,_y=class extends Mn{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let n=Fi(r);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},qi=new _y;function Oq(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=ck.pattern(t),r=[];for(let n of e.value.value)qi.reset(t),qi.visit(n),r.push({start:qi.startRegexp,end:qi.endRegex});return r}catch{return[]}}function Sy(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),qi.reset(t),qi.visit(ck.pattern(t)),qi.multiline}catch{return!1}}var uk=`\f
\r	\v \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`.split("");function ma(t){let e=typeof t=="string"?new RegExp(t):t;return uk.some(r=>e.test(r))}function Fi(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Cy(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:Fi(e)).join("")}function Ey(t,e){let r=lk(t),n=e.match(r);return!!n&&n[0].length>0}function lk(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function o(){let i="",s;function a(u){i+=r.substr(n,u),n+=u}function c(u){i+="(?:"+r.substr(n,u)+"|$)",n+=u}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":c(3);break;case"x":c(4);break;case"u":e.unicode?r[n+2]==="{"?c(r.indexOf("}",n)-n+1):c(6):c(2);break;case"p":case"P":e.unicode?c(r.indexOf("}",n)-n+1):c(2);break;case"k":c(r.indexOf(">",n)-n+1);break;default:c(2);break}break;case"[":s=/\[(?:\\.|.)*?\]/g,s.lastIndex=n,s=s.exec(r)||[],c(s[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":s=/\{\d+,?\d*\}/g,s.lastIndex=n,s=s.exec(r),s?a(s[0].length):c(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":i+="(?:",n+=3,i+=o()+"|$)";break;case"=":i+="(?=",n+=3,i+=o()+")";break;case"!":s=n,n+=3,o(),i+=r.substr(s,n-s);break;case"<":switch(r[n+3]){case"=":case"!":s=n,n+=4,o(),i+=r.substr(s,n-s);break;default:a(r.indexOf(">",n)-n+1),i+=o()+"|$)";break}break}else a(1),i+=o()+"|$)";break;case")":return++n,i;default:c(1);break}return i}return new RegExp(o(),t.flags)}function Pu(t){return t.rules.find(e=>ft(e)&&e.entry)}function dk(t){return t.rules.filter(e=>vr(e)&&e.hidden)}function Nu(t,e){let r=new Set,n=Pu(t);if(!n)return new Set(t.rules);let o=[n].concat(dk(t));for(let s of o)fk(s,r,e);let i=new Set;for(let s of t.rules)(r.has(s.name)||vr(s)&&s.hidden)&&i.add(s);return i}function fk(t,e,r){e.add(t.name),Sr(t).forEach(n=>{if(kr(n)||r&&Zd(n)){let o=n.rule.ref;o&&!e.has(o.name)&&fk(o,e,r)}})}function Au(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=af(t.type.ref);return e?.terminal}}function Ny(t){return t.hidden&&!ma(Io(t))}function ga(t,e){return!t||!e?[]:Ay(t,e,t.astNode,!0)}function Oo(t,e,r){if(!t||!e)return;let n=Ay(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Ay(t,e,r,n){if(!n){let o=Gr(t.grammarSource,or);if(o&&o.feature===e)return[t]}return gr(t)&&t.astNode===r?t.content.flatMap(o=>Ay(o,e,r,!1)):[]}function sf(t,e){return t?Oy(t,e,t?.astNode):[]}function ya(t,e,r){if(!t)return;let n=Oy(t,e,t?.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Oy(t,e,r){if(t.astNode!==r)return[];if(Gt(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=Di(t).iterator(),o,i=[];do if(o=n.next(),!o.done){let s=o.value;s.astNode===r?Gt(s.grammarSource)&&s.grammarSource.value===e&&i.push(s):n.prune()}while(!o.done);return i}function Iy(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=Gr(t.grammarSource,or);if(n)return n;t=t.container}}function af(t){let e=t;return Xd(e)&&(_n(e.$container)?e=e.$container.$container:ft(e.$container)?e=e.$container:Ao(e.$container)),pk(t,e,new Map)}function pk(t,e,r){var n;function o(i,s){let a;return Gr(i,or)||(a=pk(s,s,r)),r.set(t,a),a}if(r.has(t))return r.get(t);r.set(t,void 0);for(let i of Sr(e)){if(or(i)&&i.feature.toLowerCase()==="name")return r.set(t,i),i;if(kr(i)&&ft(i.rule.ref))return o(i,i.rule.ref);if(Qd(i)&&(!((n=i.typeRef)===null||n===void 0)&&n.ref))return o(i,i.typeRef.ref)}}function hk(t){let e=t.$container;if(tn(e)){let r=e.elements,n=r.indexOf(t);for(let o=n-1;o>=0;o--){let i=r[o];if(_n(i))return i;{let s=Sr(r[o]).find(_n);if(s)return s}}}if(Oi(e))return hk(e)}function Ki(t,e){return t==="?"||t==="*"||tn(e)&&!!e.guardCondition}function $y(t){return t==="*"||t==="+"}function Iq(t){return t==="+="}function Ou(t){return mk(t,new Set)}function mk(t,e){if(e.has(t))return!0;e.add(t);for(let r of Sr(t))if(kr(r)){if(!r.rule.ref||ft(r.rule.ref)&&!mk(r.rule.ref,e))return!1}else{if(or(r))return!1;if(_n(r))return!1}return!!t.definition}function $q(t){return Py(t.type,new Set)}function Py(t,e){if(e.has(t))return!0;if(e.add(t),ny(t))return!1;if(uy(t))return!1;if(dy(t))return t.types.every(r=>Py(r,e));if(Qd(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return ku(r)?Py(r.type,e):!1}else return!1}else return!1}function Ln(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(ft(e))return e.name;if(Jd(e)||ku(e))return e.name}}}function ji(t){var e;if(ft(t))return Ou(t)?t.name:(e=Ln(t))!==null&&e!==void 0?e:t.name;if(Jd(t)||ku(t)||ly(t))return t.name;if(_n(t)){let r=gk(t);if(r)return r}else if(Xd(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function gk(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return ji(t.type.ref)}function Mq(t){var e,r,n;return vr(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Ou(t)?t.name:(n=Ln(t))!==null&&n!==void 0?n:t.name}function My(t){var e,r,n;return vr(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":(n=Ln(t))!==null&&n!==void 0?n:t.name}function Io(t){let e={s:!1,i:!1,u:!1},r=va(t.definition,e),n=Object.entries(e).filter(([,o])=>o).map(([o])=>o).join("");return new RegExp(r,n)}var Ly=/[\s\S]/.source;function va(t,e){if(gy(t))return Lq(t);if(yy(t))return qq(t);if(fy(t))return jq(t);if(Zd(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return lo(va(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(hy(t))return Kq(t);if(vy(t))return Fq(t);if(my(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),o=t.regex.substring(r+1);return e&&(e.i=o.includes("i"),e.s=o.includes("s"),e.u=o.includes("u")),lo(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(xy(t))return lo(Ly,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t?.$type}`)}}}function Lq(t){return lo(t.elements.map(e=>va(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function qq(t){return lo(t.elements.map(e=>va(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function Fq(t){return lo(`${Ly}*?${va(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function Kq(t){return lo(`(?!${va(t.terminal)})${Ly}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function jq(t){return t.right?lo(`[${Dy(t.left)}-${Dy(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):lo(Dy(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function Dy(t){return Fi(t.value)}function lo(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function qy(t){let e=[],r=t.Grammar;for(let n of r.rules)vr(n)&&Ny(n)&&Sy(Io(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:zd}}var Uq=typeof global=="object"&&global&&global.Object===Object&&global,uf=Uq;var Wq=typeof self=="object"&&self&&self.Object===Object&&self,Hq=uf||Wq||Function("return this")(),kt=Hq;var Bq=kt.Symbol,Lt=Bq;var yk=Object.prototype,zq=yk.hasOwnProperty,Gq=yk.toString,Iu=Lt?Lt.toStringTag:void 0;function Vq(t){var e=zq.call(t,Iu),r=t[Iu];try{t[Iu]=void 0;var n=!0}catch{}var o=Gq.call(t);return n&&(e?t[Iu]=r:delete t[Iu]),o}var vk=Vq;var Yq=Object.prototype,Xq=Yq.toString;function Jq(t){return Xq.call(t)}var xk=Jq;var Qq="[object Null]",Zq="[object Undefined]",wk=Lt?Lt.toStringTag:void 0;function eF(t){return t==null?t===void 0?Zq:Qq:wk&&wk in Object(t)?vk(t):xk(t)}var xr=eF;function tF(t){return t!=null&&typeof t=="object"}var wt=tF;var rF="[object Symbol]";function nF(t){return typeof t=="symbol"||wt(t)&&xr(t)==rF}var qn=nF;function oF(t,e){for(var r=-1,n=t==null?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}var Fn=oF;var iF=Array.isArray,Y=iF;var sF=1/0,bk=Lt?Lt.prototype:void 0,Rk=bk?bk.toString:void 0;function Tk(t){if(typeof t=="string")return t;if(Y(t))return Fn(t,Tk)+"";if(qn(t))return Rk?Rk.call(t):"";var e=t+"";return e=="0"&&1/t==-sF?"-0":e}var _k=Tk;var aF=/\s/;function cF(t){for(var e=t.length;e--&&aF.test(t.charAt(e)););return e}var kk=cF;var uF=/^\s+/;function lF(t){return t&&t.slice(0,kk(t)+1).replace(uF,"")}var Sk=lF;function dF(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var st=dF;var Ck=NaN,fF=/^[-+]0x[0-9a-f]+$/i,pF=/^0b[01]+$/i,hF=/^0o[0-7]+$/i,mF=parseInt;function gF(t){if(typeof t=="number")return t;if(qn(t))return Ck;if(st(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=st(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Sk(t);var r=pF.test(t);return r||hF.test(t)?mF(t.slice(2),r?2:8):fF.test(t)?Ck:+t}var Ek=gF;var Dk=1/0,yF=17976931348623157e292;function vF(t){if(!t)return t===0?t:0;if(t=Ek(t),t===Dk||t===-Dk){var e=t<0?-1:1;return e*yF}return t===t?t:0}var Pk=vF;function xF(t){var e=Pk(t),r=e%1;return e===e?r?e-r:e:0}var Kn=xF;function wF(t){return t}var Er=wF;var bF="[object AsyncFunction]",RF="[object Function]",TF="[object GeneratorFunction]",_F="[object Proxy]";function kF(t){if(!st(t))return!1;var e=xr(t);return e==RF||e==TF||e==bF||e==_F}var wr=kF;var SF=kt["__core-js_shared__"],lf=SF;var Nk=function(){var t=/[^.]+$/.exec(lf&&lf.keys&&lf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function CF(t){return!!Nk&&Nk in t}var Ak=CF;var EF=Function.prototype,DF=EF.toString;function PF(t){if(t!=null){try{return DF.call(t)}catch{}try{return t+""}catch{}}return""}var fo=PF;var NF=/[\\^$.*+?()[\]{}|]/g,AF=/^\[object .+?Constructor\]$/,OF=Function.prototype,IF=Object.prototype,$F=OF.toString,MF=IF.hasOwnProperty,LF=RegExp("^"+$F.call(MF).replace(NF,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function qF(t){if(!st(t)||Ak(t))return!1;var e=wr(t)?LF:AF;return e.test(fo(t))}var Ok=qF;function FF(t,e){return t?.[e]}var Ik=FF;function KF(t,e){var r=Ik(t,e);return Ok(r)?r:void 0}var Dr=KF;var jF=Dr(kt,"WeakMap"),df=jF;var $k=Object.create,UF=function(){function t(){}return function(e){if(!st(e))return{};if($k)return $k(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),Mk=UF;function WF(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var Lk=WF;function HF(){}var at=HF;function BF(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var qk=BF;var zF=800,GF=16,VF=Date.now;function YF(t){var e=0,r=0;return function(){var n=VF(),o=GF-(n-r);if(r=n,o>0){if(++e>=zF)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var Fk=YF;function XF(t){return function(){return t}}var Kk=XF;var JF=function(){try{var t=Dr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),xa=JF;var QF=xa?function(t,e){return xa(t,"toString",{configurable:!0,enumerable:!1,value:Kk(e),writable:!0})}:Er,jk=QF;var ZF=Fk(jk),Uk=ZF;function e1(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var ff=e1;function t1(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}var pf=t1;function r1(t){return t!==t}var Wk=r1;function n1(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}var Hk=n1;function o1(t,e,r){return e===e?Hk(t,e,r):pf(t,Wk,r)}var wa=o1;function i1(t,e){var r=t==null?0:t.length;return!!r&&wa(t,e,0)>-1}var hf=i1;var s1=9007199254740991,a1=/^(?:0|[1-9]\d*)$/;function c1(t,e){var r=typeof t;return e=e??s1,!!e&&(r=="number"||r!="symbol"&&a1.test(t))&&t>-1&&t%1==0&&t<e}var $o=c1;function u1(t,e,r){e=="__proto__"&&xa?xa(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var ba=u1;function l1(t,e){return t===e||t!==t&&e!==e}var jn=l1;var d1=Object.prototype,f1=d1.hasOwnProperty;function p1(t,e,r){var n=t[e];(!(f1.call(t,e)&&jn(n,r))||r===void 0&&!(e in t))&&ba(t,e,r)}var Mo=p1;function h1(t,e,r,n){var o=!r;r||(r={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=n?n(r[a],t[a],a,r,t):void 0;c===void 0&&(c=t[a]),o?ba(r,a,c):Mo(r,a,c)}return r}var Un=h1;var Bk=Math.max;function m1(t,e,r){return e=Bk(e===void 0?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=Bk(n.length-e,0),s=Array(i);++o<i;)s[o]=n[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=n[o];return a[e]=r(s),Lk(t,this,a)}}var zk=m1;function g1(t,e){return Uk(zk(t,e,Er),t+"")}var Ra=g1;var y1=9007199254740991;function v1(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=y1}var Ta=v1;function x1(t){return t!=null&&Ta(t.length)&&!wr(t)}var St=x1;function w1(t,e,r){if(!st(r))return!1;var n=typeof e;return(n=="number"?St(r)&&$o(e,r.length):n=="string"&&e in r)?jn(r[e],t):!1}var Lo=w1;function b1(t){return Ra(function(e,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,s=o>2?r[2]:void 0;for(i=t.length>3&&typeof i=="function"?(o--,i):void 0,s&&Lo(r[0],r[1],s)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var a=r[n];a&&t(e,a,n,i)}return e})}var Gk=b1;var R1=Object.prototype;function T1(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||R1;return t===r}var Wn=T1;function _1(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Vk=_1;var k1="[object Arguments]";function S1(t){return wt(t)&&xr(t)==k1}var Fy=S1;var Yk=Object.prototype,C1=Yk.hasOwnProperty,E1=Yk.propertyIsEnumerable,D1=Fy(function(){return arguments}())?Fy:function(t){return wt(t)&&C1.call(t,"callee")&&!E1.call(t,"callee")},qo=D1;function P1(){return!1}var Xk=P1;var Zk=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Jk=Zk&&typeof module=="object"&&module&&!module.nodeType&&module,N1=Jk&&Jk.exports===Zk,Qk=N1?kt.Buffer:void 0,A1=Qk?Qk.isBuffer:void 0,O1=A1||Xk,po=O1;var I1="[object Arguments]",$1="[object Array]",M1="[object Boolean]",L1="[object Date]",q1="[object Error]",F1="[object Function]",K1="[object Map]",j1="[object Number]",U1="[object Object]",W1="[object RegExp]",H1="[object Set]",B1="[object String]",z1="[object WeakMap]",G1="[object ArrayBuffer]",V1="[object DataView]",Y1="[object Float32Array]",X1="[object Float64Array]",J1="[object Int8Array]",Q1="[object Int16Array]",Z1="[object Int32Array]",eK="[object Uint8Array]",tK="[object Uint8ClampedArray]",rK="[object Uint16Array]",nK="[object Uint32Array]",Ve={};Ve[Y1]=Ve[X1]=Ve[J1]=Ve[Q1]=Ve[Z1]=Ve[eK]=Ve[tK]=Ve[rK]=Ve[nK]=!0;Ve[I1]=Ve[$1]=Ve[G1]=Ve[M1]=Ve[V1]=Ve[L1]=Ve[q1]=Ve[F1]=Ve[K1]=Ve[j1]=Ve[U1]=Ve[W1]=Ve[H1]=Ve[B1]=Ve[z1]=!1;function oK(t){return wt(t)&&Ta(t.length)&&!!Ve[xr(t)]}var eS=oK;function iK(t){return function(e){return t(e)}}var Hn=iK;var tS=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$u=tS&&typeof module=="object"&&module&&!module.nodeType&&module,sK=$u&&$u.exports===tS,Ky=sK&&uf.process,aK=function(){try{var t=$u&&$u.require&&$u.require("util").types;return t||Ky&&Ky.binding&&Ky.binding("util")}catch{}}(),rn=aK;var rS=rn&&rn.isTypedArray,cK=rS?Hn(rS):eS,_a=cK;var uK=Object.prototype,lK=uK.hasOwnProperty;function dK(t,e){var r=Y(t),n=!r&&qo(t),o=!r&&!n&&po(t),i=!r&&!n&&!o&&_a(t),s=r||n||o||i,a=s?Vk(t.length,String):[],c=a.length;for(var u in t)(e||lK.call(t,u))&&!(s&&(u=="length"||o&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||$o(u,c)))&&a.push(u);return a}var mf=dK;function fK(t,e){return function(r){return t(e(r))}}var gf=fK;var pK=gf(Object.keys,Object),nS=pK;var hK=Object.prototype,mK=hK.hasOwnProperty;function gK(t){if(!Wn(t))return nS(t);var e=[];for(var r in Object(t))mK.call(t,r)&&r!="constructor"&&e.push(r);return e}var yf=gK;function yK(t){return St(t)?mf(t):yf(t)}var qe=yK;var vK=Object.prototype,xK=vK.hasOwnProperty,wK=Gk(function(t,e){if(Wn(e)||St(e)){Un(e,qe(e),t);return}for(var r in e)xK.call(e,r)&&Mo(t,r,e[r])}),Vt=wK;function bK(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var oS=bK;var RK=Object.prototype,TK=RK.hasOwnProperty;function _K(t){if(!st(t))return oS(t);var e=Wn(t),r=[];for(var n in t)n=="constructor"&&(e||!TK.call(t,n))||r.push(n);return r}var iS=_K;function kK(t){return St(t)?mf(t,!0):iS(t)}var Fo=kK;var SK=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,CK=/^\w*$/;function EK(t,e){if(Y(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||qn(t)?!0:CK.test(t)||!SK.test(t)||e!=null&&t in Object(e)}var ka=EK;var DK=Dr(Object,"create"),ho=DK;function PK(){this.__data__=ho?ho(null):{},this.size=0}var sS=PK;function NK(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var aS=NK;var AK="__lodash_hash_undefined__",OK=Object.prototype,IK=OK.hasOwnProperty;function $K(t){var e=this.__data__;if(ho){var r=e[t];return r===AK?void 0:r}return IK.call(e,t)?e[t]:void 0}var cS=$K;var MK=Object.prototype,LK=MK.hasOwnProperty;function qK(t){var e=this.__data__;return ho?e[t]!==void 0:LK.call(e,t)}var uS=qK;var FK="__lodash_hash_undefined__";function KK(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ho&&e===void 0?FK:e,this}var lS=KK;function Sa(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Sa.prototype.clear=sS;Sa.prototype.delete=aS;Sa.prototype.get=cS;Sa.prototype.has=uS;Sa.prototype.set=lS;var jy=Sa;function jK(){this.__data__=[],this.size=0}var dS=jK;function UK(t,e){for(var r=t.length;r--;)if(jn(t[r][0],e))return r;return-1}var Ko=UK;var WK=Array.prototype,HK=WK.splice;function BK(t){var e=this.__data__,r=Ko(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():HK.call(e,r,1),--this.size,!0}var fS=BK;function zK(t){var e=this.__data__,r=Ko(e,t);return r<0?void 0:e[r][1]}var pS=zK;function GK(t){return Ko(this.__data__,t)>-1}var hS=GK;function VK(t,e){var r=this.__data__,n=Ko(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var mS=VK;function Ca(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ca.prototype.clear=dS;Ca.prototype.delete=fS;Ca.prototype.get=pS;Ca.prototype.has=hS;Ca.prototype.set=mS;var jo=Ca;var YK=Dr(kt,"Map"),Uo=YK;function XK(){this.size=0,this.__data__={hash:new jy,map:new(Uo||jo),string:new jy}}var gS=XK;function JK(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var yS=JK;function QK(t,e){var r=t.__data__;return yS(e)?r[typeof e=="string"?"string":"hash"]:r.map}var Wo=QK;function ZK(t){var e=Wo(this,t).delete(t);return this.size-=e?1:0,e}var vS=ZK;function ej(t){return Wo(this,t).get(t)}var xS=ej;function tj(t){return Wo(this,t).has(t)}var wS=tj;function rj(t,e){var r=Wo(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var bS=rj;function Ea(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ea.prototype.clear=gS;Ea.prototype.delete=vS;Ea.prototype.get=xS;Ea.prototype.has=wS;Ea.prototype.set=bS;var Ui=Ea;var nj="Expected a function";function Uy(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(nj);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=t.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(Uy.Cache||Ui),r}Uy.Cache=Ui;var RS=Uy;var oj=500;function ij(t){var e=RS(t,function(n){return r.size===oj&&r.clear(),n}),r=e.cache;return e}var TS=ij;var sj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,aj=/\\(\\)?/g,cj=TS(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(sj,function(r,n,o,i){e.push(o?i.replace(aj,"$1"):n||r)}),e}),_S=cj;function uj(t){return t==null?"":_k(t)}var kS=uj;function lj(t,e){return Y(t)?t:ka(t,e)?[t]:_S(kS(t))}var Ho=lj;var dj=1/0;function fj(t){if(typeof t=="string"||qn(t))return t;var e=t+"";return e=="0"&&1/t==-dj?"-0":e}var Bn=fj;function pj(t,e){e=Ho(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Bn(e[r++])];return r&&r==n?t:void 0}var Da=pj;function hj(t,e,r){var n=t==null?void 0:Da(t,e);return n===void 0?r:n}var SS=hj;function mj(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}var Pa=mj;var CS=Lt?Lt.isConcatSpreadable:void 0;function gj(t){return Y(t)||qo(t)||!!(CS&&t&&t[CS])}var ES=gj;function DS(t,e,r,n,o){var i=-1,s=t.length;for(r||(r=ES),o||(o=[]);++i<s;){var a=t[i];e>0&&r(a)?e>1?DS(a,e-1,r,n,o):Pa(o,a):n||(o[o.length]=a)}return o}var Na=DS;function yj(t){var e=t==null?0:t.length;return e?Na(t,1):[]}var bt=yj;var vj=gf(Object.getPrototypeOf,Object),vf=vj;function xj(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),r=r>o?o:r,r<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}var xf=xj;function wj(t,e,r,n){var o=-1,i=t==null?0:t.length;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}var PS=wj;function bj(){this.__data__=new jo,this.size=0}var NS=bj;function Rj(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var AS=Rj;function Tj(t){return this.__data__.get(t)}var OS=Tj;function _j(t){return this.__data__.has(t)}var IS=_j;var kj=200;function Sj(t,e){var r=this.__data__;if(r instanceof jo){var n=r.__data__;if(!Uo||n.length<kj-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ui(n)}return r.set(t,e),this.size=r.size,this}var $S=Sj;function Aa(t){var e=this.__data__=new jo(t);this.size=e.size}Aa.prototype.clear=NS;Aa.prototype.delete=AS;Aa.prototype.get=OS;Aa.prototype.has=IS;Aa.prototype.set=$S;var Bo=Aa;function Cj(t,e){return t&&Un(e,qe(e),t)}var MS=Cj;function Ej(t,e){return t&&Un(e,Fo(e),t)}var LS=Ej;var jS=typeof exports=="object"&&exports&&!exports.nodeType&&exports,qS=jS&&typeof module=="object"&&module&&!module.nodeType&&module,Dj=qS&&qS.exports===jS,FS=Dj?kt.Buffer:void 0,KS=FS?FS.allocUnsafe:void 0;function Pj(t,e){if(e)return t.slice();var r=t.length,n=KS?KS(r):new t.constructor(r);return t.copy(n),n}var US=Pj;function Nj(t,e){for(var r=-1,n=t==null?0:t.length,o=0,i=[];++r<n;){var s=t[r];e(s,r,t)&&(i[o++]=s)}return i}var Oa=Nj;function Aj(){return[]}var wf=Aj;var Oj=Object.prototype,Ij=Oj.propertyIsEnumerable,WS=Object.getOwnPropertySymbols,$j=WS?function(t){return t==null?[]:(t=Object(t),Oa(WS(t),function(e){return Ij.call(t,e)}))}:wf,Ia=$j;function Mj(t,e){return Un(t,Ia(t),e)}var HS=Mj;var Lj=Object.getOwnPropertySymbols,qj=Lj?function(t){for(var e=[];t;)Pa(e,Ia(t)),t=vf(t);return e}:wf,bf=qj;function Fj(t,e){return Un(t,bf(t),e)}var BS=Fj;function Kj(t,e,r){var n=e(t);return Y(t)?n:Pa(n,r(t))}var Rf=Kj;function jj(t){return Rf(t,qe,Ia)}var Mu=jj;function Uj(t){return Rf(t,Fo,bf)}var Tf=Uj;var Wj=Dr(kt,"DataView"),_f=Wj;var Hj=Dr(kt,"Promise"),kf=Hj;var Bj=Dr(kt,"Set"),zo=Bj;var zS="[object Map]",zj="[object Object]",GS="[object Promise]",VS="[object Set]",YS="[object WeakMap]",XS="[object DataView]",Gj=fo(_f),Vj=fo(Uo),Yj=fo(kf),Xj=fo(zo),Jj=fo(df),Wi=xr;(_f&&Wi(new _f(new ArrayBuffer(1)))!=XS||Uo&&Wi(new Uo)!=zS||kf&&Wi(kf.resolve())!=GS||zo&&Wi(new zo)!=VS||df&&Wi(new df)!=YS)&&(Wi=function(t){var e=xr(t),r=e==zj?t.constructor:void 0,n=r?fo(r):"";if(n)switch(n){case Gj:return XS;case Vj:return zS;case Yj:return GS;case Xj:return VS;case Jj:return YS}return e});var Sn=Wi;var Qj=Object.prototype,Zj=Qj.hasOwnProperty;function eU(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&Zj.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var JS=eU;var tU=kt.Uint8Array,$a=tU;function rU(t){var e=new t.constructor(t.byteLength);return new $a(e).set(new $a(t)),e}var Ma=rU;function nU(t,e){var r=e?Ma(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var QS=nU;var oU=/\w*$/;function iU(t){var e=new t.constructor(t.source,oU.exec(t));return e.lastIndex=t.lastIndex,e}var ZS=iU;var eC=Lt?Lt.prototype:void 0,tC=eC?eC.valueOf:void 0;function sU(t){return tC?Object(tC.call(t)):{}}var rC=sU;function aU(t,e){var r=e?Ma(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var nC=aU;var cU="[object Boolean]",uU="[object Date]",lU="[object Map]",dU="[object Number]",fU="[object RegExp]",pU="[object Set]",hU="[object String]",mU="[object Symbol]",gU="[object ArrayBuffer]",yU="[object DataView]",vU="[object Float32Array]",xU="[object Float64Array]",wU="[object Int8Array]",bU="[object Int16Array]",RU="[object Int32Array]",TU="[object Uint8Array]",_U="[object Uint8ClampedArray]",kU="[object Uint16Array]",SU="[object Uint32Array]";function CU(t,e,r){var n=t.constructor;switch(e){case gU:return Ma(t);case cU:case uU:return new n(+t);case yU:return QS(t,r);case vU:case xU:case wU:case bU:case RU:case TU:case _U:case kU:case SU:return nC(t,r);case lU:return new n;case dU:case hU:return new n(t);case fU:return ZS(t);case pU:return new n;case mU:return rC(t)}}var oC=CU;function EU(t){return typeof t.constructor=="function"&&!Wn(t)?Mk(vf(t)):{}}var iC=EU;var DU="[object Map]";function PU(t){return wt(t)&&Sn(t)==DU}var sC=PU;var aC=rn&&rn.isMap,NU=aC?Hn(aC):sC,cC=NU;var AU="[object Set]";function OU(t){return wt(t)&&Sn(t)==AU}var uC=OU;var lC=rn&&rn.isSet,IU=lC?Hn(lC):uC,dC=IU;var $U=1,MU=2,LU=4,fC="[object Arguments]",qU="[object Array]",FU="[object Boolean]",KU="[object Date]",jU="[object Error]",pC="[object Function]",UU="[object GeneratorFunction]",WU="[object Map]",HU="[object Number]",hC="[object Object]",BU="[object RegExp]",zU="[object Set]",GU="[object String]",VU="[object Symbol]",YU="[object WeakMap]",XU="[object ArrayBuffer]",JU="[object DataView]",QU="[object Float32Array]",ZU="[object Float64Array]",eW="[object Int8Array]",tW="[object Int16Array]",rW="[object Int32Array]",nW="[object Uint8Array]",oW="[object Uint8ClampedArray]",iW="[object Uint16Array]",sW="[object Uint32Array]",Fe={};Fe[fC]=Fe[qU]=Fe[XU]=Fe[JU]=Fe[FU]=Fe[KU]=Fe[QU]=Fe[ZU]=Fe[eW]=Fe[tW]=Fe[rW]=Fe[WU]=Fe[HU]=Fe[hC]=Fe[BU]=Fe[zU]=Fe[GU]=Fe[VU]=Fe[nW]=Fe[oW]=Fe[iW]=Fe[sW]=!0;Fe[jU]=Fe[pC]=Fe[YU]=!1;function Sf(t,e,r,n,o,i){var s,a=e&$U,c=e&MU,u=e&LU;if(r&&(s=o?r(t,n,o,i):r(t)),s!==void 0)return s;if(!st(t))return t;var d=Y(t);if(d){if(s=JS(t),!a)return qk(t,s)}else{var h=Sn(t),g=h==pC||h==UU;if(po(t))return US(t,a);if(h==hC||h==fC||g&&!o){if(s=c||g?{}:iC(t),!a)return c?BS(t,LS(s,t)):HS(t,MS(s,t))}else{if(!Fe[h])return o?t:{};s=oC(t,h,a)}}i||(i=new Bo);var m=i.get(t);if(m)return m;i.set(t,s),dC(t)?t.forEach(function(C){s.add(Sf(C,e,r,C,t,i))}):cC(t)&&t.forEach(function(C,R){s.set(R,Sf(C,e,r,R,t,i))});var b=u?c?Tf:Mu:c?Fo:qe,T=d?void 0:b(t);return ff(T||t,function(C,R){T&&(R=C,C=t[R]),Mo(s,R,Sf(C,e,r,R,t,i))}),s}var mC=Sf;var aW=4;function cW(t){return mC(t,aW)}var Ke=cW;function uW(t){for(var e=-1,r=t==null?0:t.length,n=0,o=[];++e<r;){var i=t[e];i&&(o[n++]=i)}return o}var zn=uW;var lW="__lodash_hash_undefined__";function dW(t){return this.__data__.set(t,lW),this}var gC=dW;function fW(t){return this.__data__.has(t)}var yC=fW;function Cf(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new Ui;++e<r;)this.add(t[e])}Cf.prototype.add=Cf.prototype.push=gC;Cf.prototype.has=yC;var La=Cf;function pW(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var Ef=pW;function hW(t,e){return t.has(e)}var qa=hW;var mW=1,gW=2;function yW(t,e,r,n,o,i){var s=r&mW,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var u=i.get(t),d=i.get(e);if(u&&d)return u==e&&d==t;var h=-1,g=!0,m=r&gW?new La:void 0;for(i.set(t,e),i.set(e,t);++h<a;){var b=t[h],T=e[h];if(n)var C=s?n(T,b,h,e,t,i):n(b,T,h,t,e,i);if(C!==void 0){if(C)continue;g=!1;break}if(m){if(!Ef(e,function(R,p){if(!qa(m,p)&&(b===R||o(b,R,r,n,i)))return m.push(p)})){g=!1;break}}else if(!(b===T||o(b,T,r,n,i))){g=!1;break}}return i.delete(t),i.delete(e),g}var Df=yW;function vW(t){var e=-1,r=Array(t.size);return t.forEach(function(n,o){r[++e]=[o,n]}),r}var vC=vW;function xW(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var Fa=xW;var wW=1,bW=2,RW="[object Boolean]",TW="[object Date]",_W="[object Error]",kW="[object Map]",SW="[object Number]",CW="[object RegExp]",EW="[object Set]",DW="[object String]",PW="[object Symbol]",NW="[object ArrayBuffer]",AW="[object DataView]",xC=Lt?Lt.prototype:void 0,Wy=xC?xC.valueOf:void 0;function OW(t,e,r,n,o,i,s){switch(r){case AW:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case NW:return!(t.byteLength!=e.byteLength||!i(new $a(t),new $a(e)));case RW:case TW:case SW:return jn(+t,+e);case _W:return t.name==e.name&&t.message==e.message;case CW:case DW:return t==e+"";case kW:var a=vC;case EW:var c=n&wW;if(a||(a=Fa),t.size!=e.size&&!c)return!1;var u=s.get(t);if(u)return u==e;n|=bW,s.set(t,e);var d=Df(a(t),a(e),n,o,i,s);return s.delete(t),d;case PW:if(Wy)return Wy.call(t)==Wy.call(e)}return!1}var wC=OW;var IW=1,$W=Object.prototype,MW=$W.hasOwnProperty;function LW(t,e,r,n,o,i){var s=r&IW,a=Mu(t),c=a.length,u=Mu(e),d=u.length;if(c!=d&&!s)return!1;for(var h=c;h--;){var g=a[h];if(!(s?g in e:MW.call(e,g)))return!1}var m=i.get(t),b=i.get(e);if(m&&b)return m==e&&b==t;var T=!0;i.set(t,e),i.set(e,t);for(var C=s;++h<c;){g=a[h];var R=t[g],p=e[g];if(n)var f=s?n(p,R,g,e,t,i):n(R,p,g,t,e,i);if(!(f===void 0?R===p||o(R,p,r,n,i):f)){T=!1;break}C||(C=g=="constructor")}if(T&&!C){var w=t.constructor,O=e.constructor;w!=O&&"constructor"in t&&"constructor"in e&&!(typeof w=="function"&&w instanceof w&&typeof O=="function"&&O instanceof O)&&(T=!1)}return i.delete(t),i.delete(e),T}var bC=LW;var qW=1,RC="[object Arguments]",TC="[object Array]",Pf="[object Object]",FW=Object.prototype,_C=FW.hasOwnProperty;function KW(t,e,r,n,o,i){var s=Y(t),a=Y(e),c=s?TC:Sn(t),u=a?TC:Sn(e);c=c==RC?Pf:c,u=u==RC?Pf:u;var d=c==Pf,h=u==Pf,g=c==u;if(g&&po(t)){if(!po(e))return!1;s=!0,d=!1}if(g&&!d)return i||(i=new Bo),s||_a(t)?Df(t,e,r,n,o,i):wC(t,e,c,r,n,o,i);if(!(r&qW)){var m=d&&_C.call(t,"__wrapped__"),b=h&&_C.call(e,"__wrapped__");if(m||b){var T=m?t.value():t,C=b?e.value():e;return i||(i=new Bo),o(T,C,r,n,i)}}return g?(i||(i=new Bo),bC(t,e,r,n,o,i)):!1}var kC=KW;function SC(t,e,r,n,o){return t===e?!0:t==null||e==null||!wt(t)&&!wt(e)?t!==t&&e!==e:kC(t,e,r,n,SC,o)}var Nf=SC;var jW=1,UW=2;function WW(t,e,r,n){var o=r.length,i=o,s=!n;if(t==null)return!i;for(t=Object(t);o--;){var a=r[o];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<i;){a=r[o];var c=a[0],u=t[c],d=a[1];if(s&&a[2]){if(u===void 0&&!(c in t))return!1}else{var h=new Bo;if(n)var g=n(u,d,c,t,e,h);if(!(g===void 0?Nf(d,u,jW|UW,n,h):g))return!1}}return!0}var CC=WW;function HW(t){return t===t&&!st(t)}var Af=HW;function BW(t){for(var e=qe(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,Af(o)]}return e}var EC=BW;function zW(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var Of=zW;function GW(t){var e=EC(t);return e.length==1&&e[0][2]?Of(e[0][0],e[0][1]):function(r){return r===t||CC(r,t,e)}}var DC=GW;function VW(t,e){return t!=null&&e in Object(t)}var PC=VW;function YW(t,e,r){e=Ho(e,t);for(var n=-1,o=e.length,i=!1;++n<o;){var s=Bn(e[n]);if(!(i=t!=null&&r(t,s)))break;t=t[s]}return i||++n!=o?i:(o=t==null?0:t.length,!!o&&Ta(o)&&$o(s,o)&&(Y(t)||qo(t)))}var If=YW;function XW(t,e){return t!=null&&If(t,e,PC)}var NC=XW;var JW=1,QW=2;function ZW(t,e){return ka(t)&&Af(e)?Of(Bn(t),e):function(r){var n=SS(r,t);return n===void 0&&n===e?NC(r,t):Nf(e,n,JW|QW)}}var AC=ZW;function eH(t){return function(e){return e?.[t]}}var OC=eH;function tH(t){return function(e){return Da(e,t)}}var IC=tH;function rH(t){return ka(t)?OC(Bn(t)):IC(t)}var $C=rH;function nH(t){return typeof t=="function"?t:t==null?Er:typeof t=="object"?Y(t)?AC(t[0],t[1]):DC(t):$C(t)}var pt=nH;function oH(t,e,r,n){for(var o=-1,i=t==null?0:t.length;++o<i;){var s=t[o];e(n,s,r(s),t)}return n}var MC=oH;function iH(t){return function(e,r,n){for(var o=-1,i=Object(e),s=n(e),a=s.length;a--;){var c=s[t?a:++o];if(r(i[c],c,i)===!1)break}return e}}var LC=iH;var sH=LC(),qC=sH;function aH(t,e){return t&&qC(t,e,qe)}var FC=aH;function cH(t,e){return function(r,n){if(r==null)return r;if(!St(r))return t(r,n);for(var o=r.length,i=e?o:-1,s=Object(r);(e?i--:++i<o)&&n(s[i],i,s)!==!1;);return r}}var KC=cH;var uH=KC(FC),Pr=uH;function lH(t,e,r,n){return Pr(t,function(o,i,s){e(n,o,r(o),s)}),n}var jC=lH;function dH(t,e){return function(r,n){var o=Y(r)?MC:jC,i=e?e():{};return o(r,t,pt(n,2),i)}}var UC=dH;var WC=Object.prototype,fH=WC.hasOwnProperty,pH=Ra(function(t,e){t=Object(t);var r=-1,n=e.length,o=n>2?e[2]:void 0;for(o&&Lo(e[0],e[1],o)&&(n=1);++r<n;)for(var i=e[r],s=Fo(i),a=-1,c=s.length;++a<c;){var u=s[a],d=t[u];(d===void 0||jn(d,WC[u])&&!fH.call(t,u))&&(t[u]=i[u])}return t}),Ka=pH;function hH(t){return wt(t)&&St(t)}var Hy=hH;function mH(t,e,r){for(var n=-1,o=t==null?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}var $f=mH;var gH=200;function yH(t,e,r,n){var o=-1,i=hf,s=!0,a=t.length,c=[],u=e.length;if(!a)return c;r&&(e=Fn(e,Hn(r))),n?(i=$f,s=!1):e.length>=gH&&(i=qa,s=!1,e=new La(e));e:for(;++o<a;){var d=t[o],h=r==null?d:r(d);if(d=n||d!==0?d:0,s&&h===h){for(var g=u;g--;)if(e[g]===h)continue e;c.push(d)}else i(e,h,n)||c.push(d)}return c}var HC=yH;var vH=Ra(function(t,e){return Hy(t)?HC(t,Na(e,1,Hy,!0)):[]}),Go=vH;function xH(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var Gn=xH;function wH(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Kn(e),xf(t,e<0?0:e,n)):[]}var Rt=wH;function bH(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Kn(e),e=n-e,xf(t,0,e<0?0:e)):[]}var mo=bH;function RH(t){return typeof t=="function"?t:Er}var BC=RH;function TH(t,e){var r=Y(t)?ff:Pr;return r(t,BC(e))}var j=TH;function _H(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var zC=_H;function kH(t,e){var r=!0;return Pr(t,function(n,o,i){return r=!!e(n,o,i),r}),r}var GC=kH;function SH(t,e,r){var n=Y(t)?zC:GC;return r&&Lo(t,e,r)&&(e=void 0),n(t,pt(e,3))}var ir=SH;function CH(t,e){var r=[];return Pr(t,function(n,o,i){e(n,o,i)&&r.push(n)}),r}var Mf=CH;function EH(t,e){var r=Y(t)?Oa:Mf;return r(t,pt(e,3))}var qt=EH;function DH(t){return function(e,r,n){var o=Object(e);if(!St(e)){var i=pt(r,3);e=qe(e),r=function(a){return i(o[a],a,o)}}var s=t(e,r,n);return s>-1?o[i?e[s]:s]:void 0}}var VC=DH;var PH=Math.max;function NH(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var o=r==null?0:Kn(r);return o<0&&(o=PH(n+o,0)),pf(t,pt(e,3),o)}var YC=NH;var AH=VC(YC),Vn=AH;function OH(t){return t&&t.length?t[0]:void 0}var Ft=OH;function IH(t,e){var r=-1,n=St(t)?Array(t.length):[];return Pr(t,function(o,i,s){n[++r]=e(o,i,s)}),n}var XC=IH;function $H(t,e){var r=Y(t)?Fn:XC;return r(t,pt(e,3))}var L=$H;function MH(t,e){return Na(L(t,e),1)}var Yt=MH;var LH=Object.prototype,qH=LH.hasOwnProperty,FH=UC(function(t,e,r){qH.call(t,r)?t[r].push(e):ba(t,r,[e])}),By=FH;var KH=Object.prototype,jH=KH.hasOwnProperty;function UH(t,e){return t!=null&&jH.call(t,e)}var JC=UH;function WH(t,e){return t!=null&&If(t,e,JC)}var z=WH;var HH="[object String]";function BH(t){return typeof t=="string"||!Y(t)&&wt(t)&&xr(t)==HH}var Ot=BH;function zH(t,e){return Fn(e,function(r){return t[r]})}var QC=zH;function GH(t){return t==null?[]:QC(t,qe(t))}var Ie=GH;var VH=Math.max;function YH(t,e,r,n){t=St(t)?t:Ie(t),r=r&&!n?Kn(r):0;var o=t.length;return r<0&&(r=VH(o+r,0)),Ot(t)?r<=o&&t.indexOf(e,r)>-1:!!o&&wa(t,e,r)>-1}var et=YH;var XH=Math.max;function JH(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var o=r==null?0:Kn(r);return o<0&&(o=XH(n+o,0)),wa(t,e,o)}var Lf=JH;var QH="[object Map]",ZH="[object Set]",eB=Object.prototype,tB=eB.hasOwnProperty;function rB(t){if(t==null)return!0;if(St(t)&&(Y(t)||typeof t=="string"||typeof t.splice=="function"||po(t)||_a(t)||qo(t)))return!t.length;var e=Sn(t);if(e==QH||e==ZH)return!t.size;if(Wn(t))return!yf(t).length;for(var r in t)if(tB.call(t,r))return!1;return!0}var ge=rB;var nB="[object RegExp]";function oB(t){return wt(t)&&xr(t)==nB}var ZC=oB;var eE=rn&&rn.isRegExp,iB=eE?Hn(eE):ZC,nn=iB;function sB(t){return t===void 0}var sr=sB;function aB(t,e){return t<e}var tE=aB;function cB(t,e,r){for(var n=-1,o=t.length;++n<o;){var i=t[n],s=e(i);if(s!=null&&(a===void 0?s===s&&!qn(s):r(s,a)))var a=s,c=i}return c}var rE=cB;function uB(t){return t&&t.length?rE(t,Er,tE):void 0}var nE=uB;var lB="Expected a function";function dB(t){if(typeof t!="function")throw new TypeError(lB);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var oE=dB;function fB(t,e,r,n){if(!st(t))return t;e=Ho(e,t);for(var o=-1,i=e.length,s=i-1,a=t;a!=null&&++o<i;){var c=Bn(e[o]),u=r;if(c==="__proto__"||c==="constructor"||c==="prototype")return t;if(o!=s){var d=a[c];u=n?n(d,c,a):void 0,u===void 0&&(u=st(d)?d:$o(e[o+1])?[]:{})}Mo(a,c,u),a=a[c]}return t}var iE=fB;function pB(t,e,r){for(var n=-1,o=e.length,i={};++n<o;){var s=e[n],a=Da(t,s);r(a,s)&&iE(i,Ho(s,t),a)}return i}var sE=pB;function hB(t,e){if(t==null)return{};var r=Fn(Tf(t),function(n){return[n]});return e=pt(e),sE(t,r,function(n,o){return e(n,o[0])})}var Nr=hB;function mB(t,e,r,n,o){return o(t,function(i,s,a){r=n?(n=!1,i):e(r,i,s,a)}),r}var aE=mB;function gB(t,e,r){var n=Y(t)?PS:aE,o=arguments.length<3;return n(t,pt(e,4),r,o,Pr)}var ct=gB;function yB(t,e){var r=Y(t)?Oa:Mf;return r(t,oE(pt(e,3)))}var Vo=yB;function vB(t,e){var r;return Pr(t,function(n,o,i){return r=e(n,o,i),!r}),!!r}var cE=vB;function xB(t,e,r){var n=Y(t)?Ef:cE;return r&&Lo(t,e,r)&&(e=void 0),n(t,pt(e,3))}var Lu=xB;var wB=1/0,bB=zo&&1/Fa(new zo([,-0]))[1]==wB?function(t){return new zo(t)}:at,uE=bB;var RB=200;function TB(t,e,r){var n=-1,o=hf,i=t.length,s=!0,a=[],c=a;if(r)s=!1,o=$f;else if(i>=RB){var u=e?null:uE(t);if(u)return Fa(u);s=!1,o=qa,c=new La}else c=e?[]:a;e:for(;++n<i;){var d=t[n],h=e?e(d):d;if(d=r||d!==0?d:0,s&&h===h){for(var g=c.length;g--;)if(c[g]===h)continue e;e&&c.push(h),a.push(d)}else o(c,h,r)||(c!==a&&c.push(h),a.push(d))}return a}var qf=TB;function _B(t){return t&&t.length?qf(t):[]}var ja=_B;function kB(t,e){return t&&t.length?qf(t,pt(e,2)):[]}var lE=kB;function Ua(t){console&&console.error&&console.error(`Error: ${t}`)}function qu(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function Fu(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function Ku(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function SB(t){return CB(t)?t.LABEL:t.name}function CB(t){return Ot(t.LABEL)&&t.LABEL!==""}var Vr=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),j(this.definition,r=>{r.accept(e)})}},Ae=class extends Vr{constructor(e){super([]),this.idx=1,Vt(this,Nr(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},br=class extends Vr{constructor(e){super(e.definition),this.orgText="",Vt(this,Nr(e,r=>r!==void 0))}},je=class extends Vr{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,Vt(this,Nr(e,r=>r!==void 0))}},Oe=class extends Vr{constructor(e){super(e.definition),this.idx=1,Vt(this,Nr(e,r=>r!==void 0))}},Ue=class extends Vr{constructor(e){super(e.definition),this.idx=1,Vt(this,Nr(e,r=>r!==void 0))}},We=class extends Vr{constructor(e){super(e.definition),this.idx=1,Vt(this,Nr(e,r=>r!==void 0))}},Te=class extends Vr{constructor(e){super(e.definition),this.idx=1,Vt(this,Nr(e,r=>r!==void 0))}},$e=class extends Vr{constructor(e){super(e.definition),this.idx=1,Vt(this,Nr(e,r=>r!==void 0))}},Me=class extends Vr{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Vt(this,Nr(e,r=>r!==void 0))}},ve=class{constructor(e){this.idx=1,Vt(this,Nr(e,r=>r!==void 0))}accept(e){e.visit(this)}};function Ff(t){return L(t,Wa)}function Wa(t){function e(r){return L(r,Wa)}if(t instanceof Ae){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return Ot(t.label)&&(r.label=t.label),r}else{if(t instanceof je)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Oe)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof Ue)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof We)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:Wa(new ve({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof $e)return{type:"RepetitionWithSeparator",idx:t.idx,separator:Wa(new ve({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Te)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof Me)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ve){let r={type:"Terminal",name:t.terminalType.name,label:SB(t.terminalType),idx:t.idx};Ot(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=nn(n)?n.source:n),r}else{if(t instanceof br)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var Rr=class{visit(e){let r=e;switch(r.constructor){case Ae:return this.visitNonTerminal(r);case je:return this.visitAlternative(r);case Oe:return this.visitOption(r);case Ue:return this.visitRepetitionMandatory(r);case We:return this.visitRepetitionMandatoryWithSeparator(r);case $e:return this.visitRepetitionWithSeparator(r);case Te:return this.visitRepetition(r);case Me:return this.visitAlternation(r);case ve:return this.visitTerminal(r);case br:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function zy(t){return t instanceof je||t instanceof Oe||t instanceof Te||t instanceof Ue||t instanceof We||t instanceof $e||t instanceof ve||t instanceof br}function Hi(t,e=[]){return t instanceof Oe||t instanceof Te||t instanceof $e?!0:t instanceof Me?Lu(t.definition,n=>Hi(n,e)):t instanceof Ae&&et(e,t)?!1:t instanceof Vr?(t instanceof Ae&&e.push(t),ir(t.definition,n=>Hi(n,e))):!1}function Gy(t){return t instanceof Me}function Ar(t){if(t instanceof Ae)return"SUBRULE";if(t instanceof Oe)return"OPTION";if(t instanceof Me)return"OR";if(t instanceof Ue)return"AT_LEAST_ONE";if(t instanceof We)return"AT_LEAST_ONE_SEP";if(t instanceof $e)return"MANY_SEP";if(t instanceof Te)return"MANY";if(t instanceof ve)return"CONSUME";throw Error("non exhaustive match")}var go=class{walk(e,r=[]){j(e.definition,(n,o)=>{let i=Rt(e.definition,o+1);if(n instanceof Ae)this.walkProdRef(n,i,r);else if(n instanceof ve)this.walkTerminal(n,i,r);else if(n instanceof je)this.walkFlat(n,i,r);else if(n instanceof Oe)this.walkOption(n,i,r);else if(n instanceof Ue)this.walkAtLeastOne(n,i,r);else if(n instanceof We)this.walkAtLeastOneSep(n,i,r);else if(n instanceof $e)this.walkManySep(n,i,r);else if(n instanceof Te)this.walkMany(n,i,r);else if(n instanceof Me)this.walkOr(n,i,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let o=r.concat(n);this.walk(e,o)}walkOption(e,r,n){let o=r.concat(n);this.walk(e,o)}walkAtLeastOne(e,r,n){let o=[new Oe({definition:e.definition})].concat(r,n);this.walk(e,o)}walkAtLeastOneSep(e,r,n){let o=dE(e,r,n);this.walk(e,o)}walkMany(e,r,n){let o=[new Oe({definition:e.definition})].concat(r,n);this.walk(e,o)}walkManySep(e,r,n){let o=dE(e,r,n);this.walk(e,o)}walkOr(e,r,n){let o=r.concat(n);j(e.definition,i=>{let s=new je({definition:[i]});this.walk(s,o)})}};function dE(t,e,r){return[new Oe({definition:[new ve({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function Bi(t){if(t instanceof Ae)return Bi(t.referencedRule);if(t instanceof ve)return PB(t);if(zy(t))return EB(t);if(Gy(t))return DB(t);throw Error("non exhaustive match")}function EB(t){let e=[],r=t.definition,n=0,o=r.length>n,i,s=!0;for(;o&&s;)i=r[n],s=Hi(i),e=e.concat(Bi(i)),n=n+1,o=r.length>n;return ja(e)}function DB(t){let e=L(t.definition,r=>Bi(r));return ja(bt(e))}function PB(t){return[t.terminalType]}var Kf="_~IN~_";var Vy=class extends go{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let o=NB(e.referencedRule,e.idx)+this.topProd.name,i=r.concat(n),s=new je({definition:i}),a=Bi(s);this.follows[o]=a}};function fE(t){let e={};return j(t,r=>{let n=new Vy(r).startWalking();Vt(e,n)}),e}function NB(t,e){return t.name+e+Kf}var jf={},AB=new Li;function Ha(t){let e=t.toString();if(jf.hasOwnProperty(e))return jf[e];{let r=AB.pattern(e);return jf[e]=r,r}}function pE(){jf={}}var mE="Complement Sets are not supported for first char optimization",ju=`Unable to use "first char" lexer optimizations:
`;function gE(t,e=!1){try{let r=Ha(t);return Yy(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===mE)e&&qu(`${ju}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),Ua(`${ju}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function Yy(t,e,r){switch(t.type){case"Disjunction":for(let o=0;o<t.value.length;o++)Yy(t.value[o],e,r);break;case"Alternative":let n=t.value;for(let o=0;o<n.length;o++){let i=n[o];switch(i.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=i;switch(s.type){case"Character":Uf(s.value,e,r);break;case"Set":if(s.complement===!0)throw Error(mE);j(s.value,c=>{if(typeof c=="number")Uf(c,e,r);else{let u=c;if(r===!0)for(let d=u.from;d<=u.to;d++)Uf(d,e,r);else{for(let d=u.from;d<=u.to&&d<Ba;d++)Uf(d,e,r);if(u.to>=Ba){let d=u.from>=Ba?u.from:Ba,h=u.to,g=Yn(d),m=Yn(h);for(let b=g;b<=m;b++)e[b]=b}}}});break;case"Group":Yy(s.value,e,r);break;default:throw Error("Non Exhaustive Match")}let a=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&Xy(s)===!1||s.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return Ie(e)}function Uf(t,e,r){let n=Yn(t);e[n]=n,r===!0&&OB(t,e)}function OB(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let o=Yn(n.charCodeAt(0));e[o]=o}else{let o=r.toLowerCase();if(o!==r){let i=Yn(o.charCodeAt(0));e[i]=i}}}function hE(t,e){return Vn(t.value,r=>{if(typeof r=="number")return et(e,r);{let n=r;return Vn(e,o=>n.from<=o&&o<=n.to)!==void 0}})}function Xy(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?Y(t.value)?ir(t.value,Xy):Xy(t.value):!1}var Jy=class extends Mn{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){et(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?hE(e,this.targetCharCodes)===void 0&&(this.found=!0):hE(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function Wf(t,e){if(e instanceof RegExp){let r=Ha(e),n=new Jy(t);return n.visit(r),n.found}else return Vn(e,r=>et(t,r.charCodeAt(0)))!==void 0}var zi="PATTERN",za="defaultMode",Hf="modes",Zy=typeof new RegExp("(?:)").sticky=="boolean";function xE(t,e){e=Ka(e,{useSticky:Zy,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(p,f)=>f()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{JB()});let n;r("Reject Lexer.NA",()=>{n=Vo(t,p=>p[zi]===ht.NA)});let o=!1,i;r("Transform Patterns",()=>{o=!1,i=L(n,p=>{let f=p[zi];if(nn(f)){let w=f.source;return w.length===1&&w!=="^"&&w!=="$"&&w!=="."&&!f.ignoreCase?w:w.length===2&&w[0]==="\\"&&!et(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],w[1])?w[1]:e.useSticky?vE(f):yE(f)}else{if(wr(f))return o=!0,{exec:f};if(typeof f=="object")return o=!0,f;if(typeof f=="string"){if(f.length===1)return f;{let w=f.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),O=new RegExp(w);return e.useSticky?vE(O):yE(O)}}else throw Error("non exhaustive match")}})});let s,a,c,u,d;r("misc mapping",()=>{s=L(n,p=>p.tokenTypeIdx),a=L(n,p=>{let f=p.GROUP;if(f!==ht.SKIPPED){if(Ot(f))return f;if(sr(f))return!1;throw Error("non exhaustive match")}}),c=L(n,p=>{let f=p.LONGER_ALT;if(f)return Y(f)?L(f,O=>Lf(n,O)):[Lf(n,f)]}),u=L(n,p=>p.PUSH_MODE),d=L(n,p=>z(p,"POP_MODE"))});let h;r("Line Terminator Handling",()=>{let p=CE(e.lineTerminatorCharacters);h=L(n,f=>!1),e.positionTracking!=="onlyOffset"&&(h=L(n,f=>z(f,"LINE_BREAKS")?!!f.LINE_BREAKS:SE(f,p)===!1&&Wf(p,f.PATTERN)))});let g,m,b,T;r("Misc Mapping #2",()=>{g=L(n,_E),m=L(i,YB),b=ct(n,(p,f)=>{let w=f.GROUP;return Ot(w)&&w!==ht.SKIPPED&&(p[w]=[]),p},{}),T=L(i,(p,f)=>({pattern:i[f],longerAlt:c[f],canLineTerminator:h[f],isCustom:g[f],short:m[f],group:a[f],push:u[f],pop:d[f],tokenTypeIdx:s[f],tokenType:n[f]}))});let C=!0,R=[];return e.safeMode||r("First Char Optimization",()=>{R=ct(n,(p,f,w)=>{if(typeof f.PATTERN=="string"){let O=f.PATTERN.charCodeAt(0),G=Yn(O);Qy(p,G,T[w])}else if(Y(f.START_CHARS_HINT)){let O;j(f.START_CHARS_HINT,G=>{let it=typeof G=="string"?G.charCodeAt(0):G,Qe=Yn(it);O!==Qe&&(O=Qe,Qy(p,Qe,T[w]))})}else if(nn(f.PATTERN))if(f.PATTERN.unicode)C=!1,e.ensureOptimizations&&Ua(`${ju}	Unable to analyze < ${f.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let O=gE(f.PATTERN,e.ensureOptimizations);ge(O)&&(C=!1),j(O,G=>{Qy(p,G,T[w])})}else e.ensureOptimizations&&Ua(`${ju}	TokenType: <${f.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),C=!1;return p},[])}),{emptyGroups:b,patternIdxToConfig:T,charCodeToPatternIdxToConfig:R,hasCustom:o,canBeOptimized:C}}function wE(t,e){let r=[],n=$B(t);r=r.concat(n.errors);let o=MB(n.valid),i=o.valid;return r=r.concat(o.errors),r=r.concat(IB(i)),r=r.concat(HB(i)),r=r.concat(BB(i,e)),r=r.concat(zB(i)),r}function IB(t){let e=[],r=qt(t,n=>nn(n[zi]));return e=e.concat(qB(r)),e=e.concat(jB(r)),e=e.concat(UB(r)),e=e.concat(WB(r)),e=e.concat(FB(r)),e}function $B(t){let e=qt(t,o=>!z(o,zi)),r=L(e,o=>({message:"Token Type: ->"+o.name+"<- missing static 'PATTERN' property",type:tt.MISSING_PATTERN,tokenTypes:[o]})),n=Go(t,e);return{errors:r,valid:n}}function MB(t){let e=qt(t,o=>{let i=o[zi];return!nn(i)&&!wr(i)&&!z(i,"exec")&&!Ot(i)}),r=L(e,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:tt.INVALID_PATTERN,tokenTypes:[o]})),n=Go(t,e);return{errors:r,valid:n}}var LB=/[^\\][$]/;function qB(t){class e extends Mn{constructor(){super(...arguments),this.found=!1}visitEndAnchor(i){this.found=!0}}let r=qt(t,o=>{let i=o.PATTERN;try{let s=Ha(i),a=new e;return a.visit(s),a.found}catch{return LB.test(i.source)}});return L(r,o=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+o.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:tt.EOI_ANCHOR_FOUND,tokenTypes:[o]}))}function FB(t){let e=qt(t,n=>n.PATTERN.test(""));return L(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:tt.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var KB=/[^\\[][\^]|^\^/;function jB(t){class e extends Mn{constructor(){super(...arguments),this.found=!1}visitStartAnchor(i){this.found=!0}}let r=qt(t,o=>{let i=o.PATTERN;try{let s=Ha(i),a=new e;return a.visit(s),a.found}catch{return KB.test(i.source)}});return L(r,o=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+o.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:tt.SOI_ANCHOR_FOUND,tokenTypes:[o]}))}function UB(t){let e=qt(t,n=>{let o=n[zi];return o instanceof RegExp&&(o.multiline||o.global)});return L(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:tt.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function WB(t){let e=[],r=L(t,i=>ct(t,(s,a)=>(i.PATTERN.source===a.PATTERN.source&&!et(e,a)&&a.PATTERN!==ht.NA&&(e.push(a),s.push(a)),s),[]));r=zn(r);let n=qt(r,i=>i.length>1);return L(n,i=>{let s=L(i,c=>c.name);return{message:`The same RegExp pattern ->${Ft(i).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:tt.DUPLICATE_PATTERNS_FOUND,tokenTypes:i}})}function HB(t){let e=qt(t,n=>{if(!z(n,"GROUP"))return!1;let o=n.GROUP;return o!==ht.SKIPPED&&o!==ht.NA&&!Ot(o)});return L(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:tt.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function BB(t,e){let r=qt(t,o=>o.PUSH_MODE!==void 0&&!et(e,o.PUSH_MODE));return L(r,o=>({message:`Token Type: ->${o.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${o.PUSH_MODE}<-which does not exist`,type:tt.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[o]}))}function zB(t){let e=[],r=ct(t,(n,o,i)=>{let s=o.PATTERN;return s===ht.NA||(Ot(s)?n.push({str:s,idx:i,tokenType:o}):nn(s)&&VB(s)&&n.push({str:s.source,idx:i,tokenType:o})),n},[]);return j(t,(n,o)=>{j(r,({str:i,idx:s,tokenType:a})=>{if(o<s&&GB(i,n.PATTERN)){let c=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:c,type:tt.UNREACHABLE_PATTERN,tokenTypes:[n,a]})}})}),e}function GB(t,e){if(nn(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(wr(e))return e(t,0,[],{});if(z(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function VB(t){return Vn([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function yE(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function vE(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function bE(t,e,r){let n=[];return z(t,za)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+za+`> property in its definition
`,type:tt.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),z(t,Hf)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Hf+`> property in its definition
`,type:tt.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),z(t,Hf)&&z(t,za)&&!z(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${za}: <${t.defaultMode}>which does not exist
`,type:tt.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),z(t,Hf)&&j(t.modes,(o,i)=>{j(o,(s,a)=>{if(sr(s))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${i}> at index: <${a}>
`,type:tt.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(z(s,"LONGER_ALT")){let c=Y(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];j(c,u=>{!sr(u)&&!et(o,u)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${s.name}> outside of mode <${i}>
`,type:tt.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function RE(t,e,r){let n=[],o=!1,i=zn(bt(Ie(t.modes))),s=Vo(i,c=>c[zi]===ht.NA),a=CE(r);return e&&j(s,c=>{let u=SE(c,a);if(u!==!1){let h={message:XB(c,u),type:u.issue,tokenType:c};n.push(h)}else z(c,"LINE_BREAKS")?c.LINE_BREAKS===!0&&(o=!0):Wf(a,c.PATTERN)&&(o=!0)}),e&&!o&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:tt.NO_LINE_BREAKS_FLAGS}),n}function TE(t){let e={},r=qe(t);return j(r,n=>{let o=t[n];if(Y(o))e[n]=[];else throw Error("non exhaustive match")}),e}function _E(t){let e=t.PATTERN;if(nn(e))return!1;if(wr(e))return!0;if(z(e,"exec"))return!0;if(Ot(e))return!1;throw Error("non exhaustive match")}function YB(t){return Ot(t)&&t.length===1?t.charCodeAt(0):!1}var kE={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function SE(t,e){if(z(t,"LINE_BREAKS"))return!1;if(nn(t.PATTERN)){try{Wf(e,t.PATTERN)}catch(r){return{issue:tt.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(Ot(t.PATTERN))return!1;if(_E(t))return{issue:tt.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function XB(t,e){if(e.issue===tt.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===tt.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function CE(t){return L(t,r=>Ot(r)?r.charCodeAt(0):r)}function Qy(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var Ba=256,Bf=[];function Yn(t){return t<Ba?t:Bf[t]}function JB(){if(ge(Bf)){Bf=new Array(65536);for(let t=0;t<65536;t++)Bf[t]=t>255?255+~~(t/255):t}}function yo(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function Ga(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var EE=1,PE={};function vo(t){let e=QB(t);ZB(e),tz(e),ez(e),j(e,r=>{r.isParent=r.categoryMatches.length>0})}function QB(t){let e=Ke(t),r=t,n=!0;for(;n;){r=zn(bt(L(r,i=>i.CATEGORIES)));let o=Go(r,e);e=e.concat(o),ge(o)?n=!1:r=o}return e}function ZB(t){j(t,e=>{ev(e)||(PE[EE]=e,e.tokenTypeIdx=EE++),DE(e)&&!Y(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),DE(e)||(e.CATEGORIES=[]),rz(e)||(e.categoryMatches=[]),nz(e)||(e.categoryMatchesMap={})})}function ez(t){j(t,e=>{e.categoryMatches=[],j(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push(PE[n].tokenTypeIdx)})})}function tz(t){j(t,e=>{NE([],e)})}function NE(t,e){j(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),j(e.CATEGORIES,r=>{let n=t.concat(e);et(n,r)||NE(n,r)})}function ev(t){return z(t,"tokenTypeIdx")}function DE(t){return z(t,"CATEGORIES")}function rz(t){return z(t,"categoryMatches")}function nz(t){return z(t,"categoryMatchesMap")}function AE(t){return z(t,"tokenTypeIdx")}var tv={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,o){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var tt;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(tt||(tt={}));var Uu={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:tv,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Uu);var ht=class{constructor(e,r=Uu){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(o,i)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${o}>`);let{time:a,value:c}=Fu(i),u=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&u(`${s}<-- <${o}> time: ${a}ms`),this.traceInitIndent--,c}else return i()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Vt({},Uu,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let o,i=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Uu.lineTerminatorsPattern)this.config.lineTerminatorsPattern=kE;else if(this.config.lineTerminatorCharacters===Uu.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),Y(e)?o={modes:{defaultMode:Ke(e)},defaultMode:za}:(i=!1,o=Ke(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(bE(o,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(RE(o,this.trackStartLines,this.config.lineTerminatorCharacters))})),o.modes=o.modes?o.modes:{},j(o.modes,(a,c)=>{o.modes[c]=Vo(a,u=>sr(u))});let s=qe(o.modes);if(j(o.modes,(a,c)=>{this.TRACE_INIT(`Mode: <${c}> processing`,()=>{if(this.modes.push(c),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(wE(a,s))}),ge(this.lexerDefinitionErrors)){vo(a);let u;this.TRACE_INIT("analyzeTokenTypes",()=>{u=xE(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[c]=u.patternIdxToConfig,this.charCodeToPatternIdxToConfig[c]=u.charCodeToPatternIdxToConfig,this.emptyGroups=Vt({},this.emptyGroups,u.emptyGroups),this.hasCustom=u.hasCustom||this.hasCustom,this.canModeBeOptimized[c]=u.canBeOptimized}})}),this.defaultMode=o.defaultMode,!ge(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let c=L(this.lexerDefinitionErrors,u=>u.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+c)}j(this.lexerDefinitionWarning,a=>{qu(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(Zy?(this.chopInput=Er,this.match=this.matchWithTest):(this.updateLastIndex=at,this.match=this.matchWithExec),i&&(this.handleModes=at),this.trackStartLines===!1&&(this.computeNewColumn=Er),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=at),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let a=ct(this.canModeBeOptimized,(c,u,d)=>(u===!1&&c.push(d),c),[]);if(r.ensureOptimizations&&!ge(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{pE()}),this.TRACE_INIT("toFastProperties",()=>{Ku(this)})})}tokenize(e,r=this.defaultMode){if(!ge(this.lexerDefinitionErrors)){let o=L(this.lexerDefinitionErrors,i=>i.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+o)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,o,i,s,a,c,u,d,h,g,m,b,T,C,R,p,f=e,w=f.length,O=0,G=0,it=this.hasCustom?0:Math.floor(e.length/10),Qe=new Array(it),tr=[],Wt=this.trackStartLines?1:void 0,q=this.trackStartLines?1:void 0,D=TE(this.emptyGroups),V=this.trackStartLines,U=this.config.lineTerminatorsPattern,we=0,te=[],oe=[],W=[],I=[];Object.freeze(I);let re;function jr(){return te}function ws(_t){let rr=Yn(_t),In=oe[rr];return In===void 0?I:In}let pu=_t=>{if(W.length===1&&_t.tokenType.PUSH_MODE===void 0){let rr=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(_t);tr.push({offset:_t.startOffset,line:_t.startLine,column:_t.startColumn,length:_t.image.length,message:rr})}else{W.pop();let rr=Gn(W);te=this.patternIdxToConfig[rr],oe=this.charCodeToPatternIdxToConfig[rr],we=te.length;let In=this.canModeBeOptimized[rr]&&this.config.safeMode===!1;oe&&In?re=ws:re=jr}};function Po(_t){W.push(_t),oe=this.charCodeToPatternIdxToConfig[_t],te=this.patternIdxToConfig[_t],we=te.length,we=te.length;let rr=this.canModeBeOptimized[_t]&&this.config.safeMode===!1;oe&&rr?re=ws:re=jr}Po.call(this,r);let Ht,bs=this.config.recoveryEnabled;for(;O<w;){c=null;let _t=f.charCodeAt(O),rr=re(_t),In=rr.length;for(n=0;n<In;n++){Ht=rr[n];let Bt=Ht.pattern;u=null;let Ur=Ht.short;if(Ur!==!1?_t===Ur&&(c=Bt):Ht.isCustom===!0?(p=Bt.exec(f,O,Qe,D),p!==null?(c=p[0],p.payload!==void 0&&(u=p.payload)):c=null):(this.updateLastIndex(Bt,O),c=this.match(Bt,e,O)),c!==null){if(a=Ht.longerAlt,a!==void 0){let Le=a.length;for(i=0;i<Le;i++){let Wr=te[a[i]],wn=Wr.pattern;if(d=null,Wr.isCustom===!0?(p=wn.exec(f,O,Qe,D),p!==null?(s=p[0],p.payload!==void 0&&(d=p.payload)):s=null):(this.updateLastIndex(wn,O),s=this.match(wn,e,O)),s&&s.length>c.length){c=s,u=d,Ht=Wr;break}}}break}}if(c!==null){if(h=c.length,g=Ht.group,g!==void 0&&(m=Ht.tokenTypeIdx,b=this.createTokenInstance(c,O,m,Ht.tokenType,Wt,q,h),this.handlePayload(b,u),g===!1?G=this.addToken(Qe,G,b):D[g].push(b)),e=this.chopInput(e,h),O=O+h,q=this.computeNewColumn(q,h),V===!0&&Ht.canLineTerminator===!0){let Bt=0,Ur,Le;U.lastIndex=0;do Ur=U.test(c),Ur===!0&&(Le=U.lastIndex-1,Bt++);while(Ur===!0);Bt!==0&&(Wt=Wt+Bt,q=h-Le,this.updateTokenEndLineColumnLocation(b,g,Le,Bt,Wt,q,h))}this.handleModes(Ht,pu,Po,b)}else{let Bt=O,Ur=Wt,Le=q,Wr=bs===!1;for(;Wr===!1&&O<w;)for(e=this.chopInput(e,1),O++,o=0;o<we;o++){let wn=te[o],Hr=wn.pattern,Rs=wn.short;if(Rs!==!1?f.charCodeAt(O)===Rs&&(Wr=!0):wn.isCustom===!0?Wr=Hr.exec(f,O,Qe,D)!==null:(this.updateLastIndex(Hr,O),Wr=Hr.exec(e)!==null),Wr===!0)break}if(T=O-Bt,q=this.computeNewColumn(q,T),R=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(f,Bt,T,Ur,Le),tr.push({offset:Bt,line:Ur,column:Le,length:T,message:R}),bs===!1)break}}return this.hasCustom||(Qe.length=G),{tokens:Qe,groups:D,errors:tr}}handleModes(e,r,n,o){if(e.pop===!0){let i=e.push;r(o),i!==void 0&&n.call(this,i)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,o,i,s,a){let c,u;r!==void 0&&(c=n===a-1,u=c?-1:0,o===1&&c===!0||(e.endLine=i+u,e.endColumn=s-1+-u))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,o){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:o}}createStartOnlyToken(e,r,n,o,i,s){return{image:e,startOffset:r,startLine:i,startColumn:s,tokenTypeIdx:n,tokenType:o}}createFullToken(e,r,n,o,i,s,a){return{image:e,startOffset:r,endOffset:r+a-1,startLine:i,endLine:i,startColumn:s,endColumn:s+a-1,tokenTypeIdx:n,tokenType:o}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};ht.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";ht.NA=/NOT_APPLICABLE/;function xo(t){return rv(t)?t.LABEL:t.name}function rv(t){return Ot(t.LABEL)&&t.LABEL!==""}var oz="parent",OE="categories",IE="label",$E="group",ME="push_mode",LE="pop_mode",qE="longer_alt",FE="line_breaks",KE="start_chars_hint";function zf(t){return iz(t)}function iz(t){let e=t.pattern,r={};if(r.name=t.name,sr(e)||(r.PATTERN=e),z(t,oz))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return z(t,OE)&&(r.CATEGORIES=t[OE]),vo([r]),z(t,IE)&&(r.LABEL=t[IE]),z(t,$E)&&(r.GROUP=t[$E]),z(t,LE)&&(r.POP_MODE=t[LE]),z(t,ME)&&(r.PUSH_MODE=t[ME]),z(t,qE)&&(r.LONGER_ALT=t[qE]),z(t,FE)&&(r.LINE_BREAKS=t[FE]),z(t,KE)&&(r.START_CHARS_HINT=t[KE]),r}var Yr=zf({name:"EOF",pattern:ht.NA});vo([Yr]);function Gi(t,e,r,n,o,i,s,a){return{image:e,startOffset:r,endOffset:n,startLine:o,endLine:i,startColumn:s,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function Wu(t,e){return yo(t,e)}var wo={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${rv(t)?`--> ${xo(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:o}){let i="Expecting: ",a=`
but found: '`+Ft(e).image+"'";if(n)return i+n+a;{let c=ct(t,(g,m)=>g.concat(m),[]),u=L(c,g=>`[${L(g,m=>xo(m)).join(", ")}]`),h=`one of these possible Token sequences:
${L(u,(g,m)=>`  ${m+1}. ${g}`).join(`
`)}`;return i+h+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let o="Expecting: ",s=`
but found: '`+Ft(e).image+"'";if(r)return o+r+s;{let c=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${L(t,u=>`[${L(u,d=>xo(d)).join(",")}]`).join(" ,")}>`;return o+c+s}}};Object.freeze(wo);var jE={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},Cn={buildDuplicateFoundError(t,e){function r(d){return d instanceof ve?d.terminalType.name:d instanceof Ae?d.nonTerminalName:""}let n=t.name,o=Ft(e),i=o.idx,s=Ar(o),a=r(o),c=i>0,u=`->${s}${c?i:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return u=u.replace(/[ \t]+/g," "),u=u.replace(/\s\s+/g,`
`),u},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){let e=L(t.prefixPath,o=>xo(o)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){let e=L(t.prefixPath,o=>xo(o)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError(t){let e=Ar(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=L(t.leftRecursionPath,i=>i.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof br?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function UE(t,e){let r=new nv(t,e);return r.resolveRefs(),r.errors}var nv=class extends Rr{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){j(Ie(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:It.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var ov=class extends go{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Ke(this.path.ruleStack).reverse(),this.occurrenceStack=Ke(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let o=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,o)}}updateExpectedNext(){ge(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},Gf=class extends ov{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let o=r.concat(n),i=new je({definition:o});this.possibleTokTypes=Bi(i),this.found=!0}}},Va=class extends go{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},Vf=class extends Va{walkMany(e,r,n){if(e.idx===this.occurrence){let o=Ft(r.concat(n));this.result.isEndOfRule=o===void 0,o instanceof ve&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else super.walkMany(e,r,n)}},Hu=class extends Va{walkManySep(e,r,n){if(e.idx===this.occurrence){let o=Ft(r.concat(n));this.result.isEndOfRule=o===void 0,o instanceof ve&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else super.walkManySep(e,r,n)}},Yf=class extends Va{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let o=Ft(r.concat(n));this.result.isEndOfRule=o===void 0,o instanceof ve&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else super.walkAtLeastOne(e,r,n)}},Bu=class extends Va{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let o=Ft(r.concat(n));this.result.isEndOfRule=o===void 0,o instanceof ve&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else super.walkAtLeastOneSep(e,r,n)}};function Xf(t,e,r=[]){r=Ke(r);let n=[],o=0;function i(a){return a.concat(Rt(t,o+1))}function s(a){let c=Xf(i(a),e,r);return n.concat(c)}for(;r.length<e&&o<t.length;){let a=t[o];if(a instanceof je)return s(a.definition);if(a instanceof Ae)return s(a.definition);if(a instanceof Oe)n=s(a.definition);else if(a instanceof Ue){let c=a.definition.concat([new Te({definition:a.definition})]);return s(c)}else if(a instanceof We){let c=[new je({definition:a.definition}),new Te({definition:[new ve({terminalType:a.separator})].concat(a.definition)})];return s(c)}else if(a instanceof $e){let c=a.definition.concat([new Te({definition:[new ve({terminalType:a.separator})].concat(a.definition)})]);n=s(c)}else if(a instanceof Te){let c=a.definition.concat([new Te({definition:a.definition})]);n=s(c)}else{if(a instanceof Me)return j(a.definition,c=>{ge(c.definition)===!1&&(n=s(c.definition))}),n;if(a instanceof ve)r.push(a.terminalType);else throw Error("non exhaustive match")}o++}return n.push({partialPath:r,suffixDef:Rt(t,o)}),n}function Jf(t,e,r,n){let o="EXIT_NONE_TERMINAL",i=[o],s="EXIT_ALTERNATIVE",a=!1,c=e.length,u=c-n-1,d=[],h=[];for(h.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!ge(h);){let g=h.pop();if(g===s){a&&Gn(h).idx<=u&&h.pop();continue}let m=g.def,b=g.idx,T=g.ruleStack,C=g.occurrenceStack;if(ge(m))continue;let R=m[0];if(R===o){let p={idx:b,def:Rt(m),ruleStack:mo(T),occurrenceStack:mo(C)};h.push(p)}else if(R instanceof ve)if(b<c-1){let p=b+1,f=e[p];if(r(f,R.terminalType)){let w={idx:p,def:Rt(m),ruleStack:T,occurrenceStack:C};h.push(w)}}else if(b===c-1)d.push({nextTokenType:R.terminalType,nextTokenOccurrence:R.idx,ruleStack:T,occurrenceStack:C}),a=!0;else throw Error("non exhaustive match");else if(R instanceof Ae){let p=Ke(T);p.push(R.nonTerminalName);let f=Ke(C);f.push(R.idx);let w={idx:b,def:R.definition.concat(i,Rt(m)),ruleStack:p,occurrenceStack:f};h.push(w)}else if(R instanceof Oe){let p={idx:b,def:Rt(m),ruleStack:T,occurrenceStack:C};h.push(p),h.push(s);let f={idx:b,def:R.definition.concat(Rt(m)),ruleStack:T,occurrenceStack:C};h.push(f)}else if(R instanceof Ue){let p=new Te({definition:R.definition,idx:R.idx}),f=R.definition.concat([p],Rt(m)),w={idx:b,def:f,ruleStack:T,occurrenceStack:C};h.push(w)}else if(R instanceof We){let p=new ve({terminalType:R.separator}),f=new Te({definition:[p].concat(R.definition),idx:R.idx}),w=R.definition.concat([f],Rt(m)),O={idx:b,def:w,ruleStack:T,occurrenceStack:C};h.push(O)}else if(R instanceof $e){let p={idx:b,def:Rt(m),ruleStack:T,occurrenceStack:C};h.push(p),h.push(s);let f=new ve({terminalType:R.separator}),w=new Te({definition:[f].concat(R.definition),idx:R.idx}),O=R.definition.concat([w],Rt(m)),G={idx:b,def:O,ruleStack:T,occurrenceStack:C};h.push(G)}else if(R instanceof Te){let p={idx:b,def:Rt(m),ruleStack:T,occurrenceStack:C};h.push(p),h.push(s);let f=new Te({definition:R.definition,idx:R.idx}),w=R.definition.concat([f],Rt(m)),O={idx:b,def:w,ruleStack:T,occurrenceStack:C};h.push(O)}else if(R instanceof Me)for(let p=R.definition.length-1;p>=0;p--){let f=R.definition[p],w={idx:b,def:f.definition.concat(Rt(m)),ruleStack:T,occurrenceStack:C};h.push(w),h.push(s)}else if(R instanceof je)h.push({idx:b,def:R.definition.concat(Rt(m)),ruleStack:T,occurrenceStack:C});else if(R instanceof br)h.push(sz(R,b,T,C));else throw Error("non exhaustive match")}return d}function sz(t,e,r,n){let o=Ke(r);o.push(t.name);let i=Ke(n);return i.push(1),{idx:e,def:t.definition,ruleStack:o,occurrenceStack:i}}var rt;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(rt||(rt={}));function zu(t){if(t instanceof Oe||t==="Option")return rt.OPTION;if(t instanceof Te||t==="Repetition")return rt.REPETITION;if(t instanceof Ue||t==="RepetitionMandatory")return rt.REPETITION_MANDATORY;if(t instanceof We||t==="RepetitionMandatoryWithSeparator")return rt.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof $e||t==="RepetitionWithSeparator")return rt.REPETITION_WITH_SEPARATOR;if(t instanceof Me||t==="Alternation")return rt.ALTERNATION;throw Error("non exhaustive match")}function Zf(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:o}=t,i=zu(n);return i===rt.ALTERNATION?Ya(e,r,o):Xa(e,r,i,o)}function HE(t,e,r,n,o,i){let s=Ya(t,e,r),a=XE(s)?Ga:yo;return i(s,n,a,o)}function BE(t,e,r,n,o,i){let s=Xa(t,e,o,r),a=XE(s)?Ga:yo;return i(s[0],a,n)}function zE(t,e,r,n){let o=t.length,i=ir(t,s=>ir(s,a=>a.length===1));if(e)return function(s){let a=L(s,c=>c.GATE);for(let c=0;c<o;c++){let u=t[c],d=u.length,h=a[c];if(!(h!==void 0&&h.call(this)===!1))e:for(let g=0;g<d;g++){let m=u[g],b=m.length;for(let T=0;T<b;T++){let C=this.LA(T+1);if(r(C,m[T])===!1)continue e}return c}}};if(i&&!n){let s=L(t,c=>bt(c)),a=ct(s,(c,u,d)=>(j(u,h=>{z(c,h.tokenTypeIdx)||(c[h.tokenTypeIdx]=d),j(h.categoryMatches,g=>{z(c,g)||(c[g]=d)})}),c),{});return function(){let c=this.LA(1);return a[c.tokenTypeIdx]}}else return function(){for(let s=0;s<o;s++){let a=t[s],c=a.length;e:for(let u=0;u<c;u++){let d=a[u],h=d.length;for(let g=0;g<h;g++){let m=this.LA(g+1);if(r(m,d[g])===!1)continue e}return s}}}}function GE(t,e,r){let n=ir(t,i=>i.length===1),o=t.length;if(n&&!r){let i=bt(t);if(i.length===1&&ge(i[0].categoryMatches)){let a=i[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{let s=ct(i,(a,c,u)=>(a[c.tokenTypeIdx]=!0,j(c.categoryMatches,d=>{a[d]=!0}),a),[]);return function(){let a=this.LA(1);return s[a.tokenTypeIdx]===!0}}}else return function(){e:for(let i=0;i<o;i++){let s=t[i],a=s.length;for(let c=0;c<a;c++){let u=this.LA(c+1);if(e(u,s[c])===!1)continue e}return!0}return!1}}var sv=class extends go{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,o){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(o),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,rt.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,rt.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,rt.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,rt.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,rt.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},Qf=class extends Rr{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,rt.OPTION)}visitRepetition(e){this.checkIsTarget(e,rt.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,rt.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,rt.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,rt.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,rt.ALTERNATION)}};function WE(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function iv(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],o=[];for(let i=0;i<e.length;i++){let s=e[i];o.push(s+"_"+n.tokenTypeIdx);for(let a=0;a<n.categoryMatches.length;a++){let c="_"+n.categoryMatches[a];o.push(s+c)}}e=o}return e}function az(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let o=t[n];for(let i=0;i<e.length;i++){let s=e[i];if(o[s]===!0)return!1}}return!0}function VE(t,e){let r=L(t,s=>Xf([s],1)),n=WE(r.length),o=L(r,s=>{let a={};return j(s,c=>{let u=iv(c.partialPath);j(u,d=>{a[d]=!0})}),a}),i=r;for(let s=1;s<=e;s++){let a=i;i=WE(a.length);for(let c=0;c<a.length;c++){let u=a[c];for(let d=0;d<u.length;d++){let h=u[d].partialPath,g=u[d].suffixDef,m=iv(h);if(az(o,m,c)||ge(g)||h.length===e){let T=n[c];if(ep(T,h)===!1){T.push(h);for(let C=0;C<m.length;C++){let R=m[C];o[c][R]=!0}}}else{let T=Xf(g,s+1,h);i[c]=i[c].concat(T),j(T,C=>{let R=iv(C.partialPath);j(R,p=>{o[c][p]=!0})})}}}}return n}function Ya(t,e,r,n){let o=new Qf(t,rt.ALTERNATION,n);return e.accept(o),VE(o.result,r)}function Xa(t,e,r,n){let o=new Qf(t,r);e.accept(o);let i=o.result,a=new sv(e,t,r).startWalking(),c=new je({definition:i}),u=new je({definition:a});return VE([c,u],n)}function ep(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let o=0;o<n.length;o++){let i=e[o],s=n[o];if((i===s||s.categoryMatchesMap[i.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function YE(t,e){return t.length<e.length&&ir(t,(r,n)=>{let o=e[n];return r===o||o.categoryMatchesMap[r.tokenTypeIdx]})}function XE(t){return ir(t,e=>ir(e,r=>ir(r,n=>ge(n.categoryMatches))))}function JE(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return L(e,r=>Object.assign({type:It.CUSTOM_LOOKAHEAD_VALIDATION},r))}function QE(t,e,r,n){let o=Yt(t,c=>cz(c,r)),i=hz(t,e,r),s=Yt(t,c=>dz(c,r)),a=Yt(t,c=>lz(c,t,n,r));return o.concat(i,s,a)}function cz(t,e){let r=new av;t.accept(r);let n=r.allProductions,o=By(n,uz),i=Nr(o,a=>a.length>1);return L(Ie(i),a=>{let c=Ft(a),u=e.buildDuplicateFoundError(t,a),d=Ar(c),h={message:u,type:It.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:d,occurrence:c.idx},g=ZE(c);return g&&(h.parameter=g),h})}function uz(t){return`${Ar(t)}_#_${t.idx}_#_${ZE(t)}`}function ZE(t){return t instanceof ve?t.terminalType.name:t instanceof Ae?t.nonTerminalName:""}var av=class extends Rr{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function lz(t,e,r,n){let o=[];if(ct(e,(s,a)=>a.name===t.name?s+1:s,0)>1){let s=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});o.push({message:s,type:It.DUPLICATE_RULE_NAME,ruleName:t.name})}return o}function eD(t,e,r){let n=[],o;return et(e,t)||(o=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:o,type:It.INVALID_RULE_OVERRIDE,ruleName:t})),n}function uv(t,e,r,n=[]){let o=[],i=tp(e.definition);if(ge(i))return[];{let s=t.name;et(i,t)&&o.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:It.LEFT_RECURSION,ruleName:s});let c=Go(i,n.concat([t])),u=Yt(c,d=>{let h=Ke(n);return h.push(d),uv(t,d,r,h)});return o.concat(u)}}function tp(t){let e=[];if(ge(t))return e;let r=Ft(t);if(r instanceof Ae)e.push(r.referencedRule);else if(r instanceof je||r instanceof Oe||r instanceof Ue||r instanceof We||r instanceof $e||r instanceof Te)e=e.concat(tp(r.definition));else if(r instanceof Me)e=bt(L(r.definition,i=>tp(i.definition)));else if(!(r instanceof ve))throw Error("non exhaustive match");let n=Hi(r),o=t.length>1;if(n&&o){let i=Rt(t);return e.concat(tp(i))}else return e}var Gu=class extends Rr{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function tD(t,e){let r=new Gu;t.accept(r);let n=r.alternations;return Yt(n,i=>{let s=mo(i.definition);return Yt(s,(a,c)=>{let u=Jf([a],[],yo,1);return ge(u)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:i,emptyChoiceIdx:c}),type:It.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:i.idx,alternative:c+1}]:[]})})}function rD(t,e,r){let n=new Gu;t.accept(n);let o=n.alternations;return o=Vo(o,s=>s.ignoreAmbiguities===!0),Yt(o,s=>{let a=s.idx,c=s.maxLookahead||e,u=Ya(a,t,c,s),d=fz(u,s,t,r),h=pz(u,s,t,r);return d.concat(h)})}var cv=class extends Rr{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function dz(t,e){let r=new Gu;t.accept(r);let n=r.alternations;return Yt(n,i=>i.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:i}),type:It.TOO_MANY_ALTS,ruleName:t.name,occurrence:i.idx}]:[])}function nD(t,e,r){let n=[];return j(t,o=>{let i=new cv;o.accept(i);let s=i.allProductions;j(s,a=>{let c=zu(a),u=a.maxLookahead||e,d=a.idx,g=Xa(d,o,c,u)[0];if(ge(bt(g))){let m=r.buildEmptyRepetitionError({topLevelRule:o,repetition:a});n.push({message:m,type:It.NO_NON_EMPTY_LOOKAHEAD,ruleName:o.name})}})}),n}function fz(t,e,r,n){let o=[],i=ct(t,(a,c,u)=>(e.definition[u].ignoreAmbiguities===!0||j(c,d=>{let h=[u];j(t,(g,m)=>{u!==m&&ep(g,d)&&e.definition[m].ignoreAmbiguities!==!0&&h.push(m)}),h.length>1&&!ep(o,d)&&(o.push(d),a.push({alts:h,path:d}))}),a),[]);return L(i,a=>{let c=L(a.alts,d=>d+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:c,prefixPath:a.path}),type:It.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:a.alts}})}function pz(t,e,r,n){let o=ct(t,(s,a,c)=>{let u=L(a,d=>({idx:c,path:d}));return s.concat(u)},[]);return zn(Yt(o,s=>{if(e.definition[s.idx].ignoreAmbiguities===!0)return[];let c=s.idx,u=s.path,d=qt(o,g=>e.definition[g.idx].ignoreAmbiguities!==!0&&g.idx<c&&YE(g.path,u));return L(d,g=>{let m=[g.idx+1,c+1],b=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:m,prefixPath:g.path}),type:It.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:b,alternatives:m}})}))}function hz(t,e,r){let n=[],o=L(e,i=>i.name);return j(t,i=>{let s=i.name;if(et(o,s)){let a=r.buildNamespaceConflictError(i);n.push({message:a,type:It.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),n}function oD(t){let e=Ka(t,{errMsgProvider:jE}),r={};return j(t.rules,n=>{r[n.name]=n}),UE(r,e.errMsgProvider)}function iD(t){return t=Ka(t,{errMsgProvider:Cn}),QE(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var sD="MismatchedTokenException",aD="NoViableAltException",cD="EarlyExitException",uD="NotAllInputParsedException",lD=[sD,aD,cD,uD];Object.freeze(lD);function Yo(t){return et(lD,t.name)}var Ja=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Vi=class extends Ja{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=sD}},Vu=class extends Ja{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=aD}},Yu=class extends Ja{constructor(e,r){super(e,r),this.name=uD}},Xu=class extends Ja{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=cD}};var lv={},fv="InRuleRecoveryException",dv=class extends Error{constructor(e){super(e),this.name=fv}},rp=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=z(e,"recoveryEnabled")?e.recoveryEnabled:Tr.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=mz)}getTokenToInsert(e){let r=Gi(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,o){let i=this.findReSyncTokenType(),s=this.exportLexerState(),a=[],c=!1,u=this.LA(1),d=this.LA(1),h=()=>{let g=this.LA(0),m=this.errorMessageProvider.buildMismatchTokenMessage({expected:o,actual:u,previous:g,ruleName:this.getCurrRuleFullName()}),b=new Vi(m,u,this.LA(0));b.resyncedTokens=mo(a),this.SAVE_ERROR(b)};for(;!c;)if(this.tokenMatcher(d,o)){h();return}else if(n.call(this)){h(),e.apply(this,r);return}else this.tokenMatcher(d,i)?c=!0:(d=this.SKIP_TOKEN(),this.addToResyncTokens(d,a));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new dv("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||ge(r))return!1;let n=this.LA(1);return Vn(r,i=>this.tokenMatcher(n,i))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return et(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let o=Vn(e,i=>Wu(r,i));if(o!==void 0)return o;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return lv;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return L(e,(n,o)=>o===0?lv:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[o],inRule:this.shortRuleNameToFullName(e[o-1])})}flattenFollowSet(){let e=L(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return bt(e)}getFollowSetFromFollowKey(e){if(e===lv)return[Yr];let r=e.ruleName+e.idxInCallingRule+Kf+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,Yr)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return mo(r)}attemptInRepetitionRecovery(e,r,n,o,i,s,a){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),o=Ke(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:o,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return L(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function mz(t,e,r,n,o,i,s){let a=this.getKeyForAutomaticLookahead(n,o),c=this.firstAfterRepMap[a];if(c===void 0){let g=this.getCurrRuleFullName(),m=this.getGAstProductions()[g];c=new i(m,o).startWalking(),this.firstAfterRepMap[a]=c}let u=c.token,d=c.occurrence,h=c.isEndOfRule;this.RULE_STACK.length===1&&h&&u===void 0&&(u=Yr,d=1),!(u===void 0||d===void 0)&&this.shouldInRepetitionRecoveryBeTried(u,d,s)&&this.tryInRepetitionRecovery(t,e,r,u)}function np(t,e,r){return r|e|t}var bo=class{constructor(e){var r;this.maxLookahead=(r=e?.maxLookahead)!==null&&r!==void 0?r:Tr.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(ge(r)){let n=this.validateEmptyOrAlternatives(e.rules),o=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),i=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...o,...i]}return r}validateNoLeftRecursion(e){return Yt(e,r=>uv(r,r,Cn))}validateEmptyOrAlternatives(e){return Yt(e,r=>tD(r,Cn))}validateAmbiguousAlternationAlternatives(e,r){return Yt(e,n=>rD(n,r,Cn))}validateSomeNonEmptyLookaheadPath(e,r){return nD(e,r,Cn)}buildLookaheadForAlternation(e){return HE(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,zE)}buildLookaheadForOptional(e){return BE(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,zu(e.prodType),GE)}};var ip=class{initLooksAhead(e){this.dynamicTokensEnabled=z(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Tr.dynamicTokensEnabled,this.maxLookahead=z(e,"maxLookahead")?e.maxLookahead:Tr.maxLookahead,this.lookaheadStrategy=z(e,"lookaheadStrategy")?e.lookaheadStrategy:new bo({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){j(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:o,option:i,repetitionMandatory:s,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:c}=gz(r);j(n,u=>{let d=u.idx===0?"":u.idx;this.TRACE_INIT(`${Ar(u)}${d}`,()=>{let h=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:u.idx,rule:r,maxLookahead:u.maxLookahead||this.maxLookahead,hasPredicates:u.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),g=np(this.fullRuleNameToShort[r.name],256,u.idx);this.setLaFuncCache(g,h)})}),j(o,u=>{this.computeLookaheadFunc(r,u.idx,768,"Repetition",u.maxLookahead,Ar(u))}),j(i,u=>{this.computeLookaheadFunc(r,u.idx,512,"Option",u.maxLookahead,Ar(u))}),j(s,u=>{this.computeLookaheadFunc(r,u.idx,1024,"RepetitionMandatory",u.maxLookahead,Ar(u))}),j(a,u=>{this.computeLookaheadFunc(r,u.idx,1536,"RepetitionMandatoryWithSeparator",u.maxLookahead,Ar(u))}),j(c,u=>{this.computeLookaheadFunc(r,u.idx,1280,"RepetitionWithSeparator",u.maxLookahead,Ar(u))})})})}computeLookaheadFunc(e,r,n,o,i,s){this.TRACE_INIT(`${s}${r===0?"":r}`,()=>{let a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:i||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:o}),c=np(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(c,a)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return np(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},pv=class extends Rr{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},op=new pv;function gz(t){op.reset(),t.accept(op);let e=op.dslMethods;return op.reset(),e}function gv(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function yv(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function dD(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function fD(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var yz="name";function vv(t,e){Object.defineProperty(t,yz,{enumerable:!1,configurable:!0,writable:!1,value:e})}function vz(t,e){let r=qe(t),n=r.length;for(let o=0;o<n;o++){let i=r[o],s=t[i],a=s.length;for(let c=0;c<a;c++){let u=s[c];u.tokenTypeIdx===void 0&&this[u.name](u.children,e)}}}function pD(t,e){let r=function(){};vv(r,t+"BaseSemantics");let n={visit:function(o,i){if(Y(o)&&(o=o[0]),!sr(o))return this[o.name](o.children,i)},validateVisitor:function(){let o=xz(this,e);if(!ge(o)){let i=L(o,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${i.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function hD(t,e,r){let n=function(){};vv(n,t+"BaseSemanticsWithDefaults");let o=Object.create(r.prototype);return j(e,i=>{o[i]=vz}),n.prototype=o,n.prototype.constructor=n,n}var xv;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(xv||(xv={}));function xz(t,e){return wz(t,e)}function wz(t,e){let r=qt(e,o=>wr(t[o])===!1),n=L(r,o=>({msg:`Missing visitor method: <${o}> on ${t.constructor.name} CST Visitor.`,type:xv.MISSING_METHOD,methodName:o}));return zn(n)}var up=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=z(e,"nodeLocationTracking")?e.nodeLocationTracking:Tr.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=at,this.cstFinallyStateUpdate=at,this.cstPostTerminal=at,this.cstPostNonTerminal=at,this.cstPostRule=at;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=yv,this.setNodeLocationFromNode=yv,this.cstPostRule=at,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=at,this.setNodeLocationFromNode=at,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=gv,this.setNodeLocationFromNode=gv,this.cstPostRule=at,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=at,this.setNodeLocationFromNode=at,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=at,this.setNodeLocationFromNode=at,this.cstPostRule=at,this.setInitialNodeLocation=at;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];dD(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];fD(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(sr(this.baseCstVisitorConstructor)){let e=pD(this.className,qe(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(sr(this.baseCstVisitorWithDefaultsConstructor)){let e=hD(this.className,qe(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var lp=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Qa}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?Qa:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var dp=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=Za){if(et(this.definedRulesNames,e)){let s={message:Cn.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:It.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(s)}this.definedRulesNames.push(e);let o=this.defineRule(e,r,n);return this[e]=o,o}OVERRIDE_RULE(e,r,n=Za){let o=eD(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(o);let i=this.defineRule(e,r,n);return this[e]=i,i}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(o){if(Yo(o))return!1;throw o}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Ff(Ie(this.gastProductionsCache))}};var fp=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Ga,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},z(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(Y(e)){if(ge(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(Y(e))this.tokensMap=ct(e,(i,s)=>(i[s.name]=s,i),{});else if(z(e,"modes")&&ir(bt(Ie(e.modes)),AE)){let i=bt(Ie(e.modes)),s=ja(i);this.tokensMap=ct(s,(a,c)=>(a[c.name]=c,a),{})}else if(st(e))this.tokensMap=Ke(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=Yr;let n=z(e,"modes")?bt(Ie(e.modes)):Ie(e),o=ir(n,i=>ge(i.categoryMatches));this.tokenMatcher=o?Ga:yo,vo(Ie(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let o=z(n,"resyncEnabled")?n.resyncEnabled:Za.resyncEnabled,i=z(n,"recoveryValueFunc")?n.recoveryValueFunc:Za.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=e,this.fullRuleNameToShort[e]=s;let a;return this.outputCst===!0?a=function(...d){try{this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,d);let h=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(h),h}catch(h){return this.invokeRuleCatch(h,o,i)}finally{this.ruleFinallyStateUpdate()}}:a=function(...d){try{return this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,d)}catch(h){return this.invokeRuleCatch(h,o,i)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let o=this.RULE_STACK.length===1,i=r&&!this.isBackTracking()&&this.recoveryEnabled;if(Yo(e)){let s=e;if(i){let a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(s.resyncedTokens=this.reSyncTo(a),this.outputCst){let c=this.CST_STACK[this.CST_STACK.length-1];return c.recoveredNode=!0,c}else return n(e);else{if(this.outputCst){let c=this.CST_STACK[this.CST_STACK.length-1];c.recoveredNode=!0,s.partialCstResult=c}throw s}}else{if(o)return this.moveToTerminatedState(),n(e);throw s}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let o=this.getLaFuncFromCache(n),i;if(typeof e!="function"){i=e.DEF;let s=e.GATE;if(s!==void 0){let a=o;o=()=>s.call(this)&&a.call(this)}}else i=e;if(o.call(this)===!0)return i.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let o=this.getLaFuncFromCache(n),i;if(typeof r!="function"){i=r.DEF;let s=r.GATE;if(s!==void 0){let a=o;o=()=>s.call(this)&&a.call(this)}}else i=r;if(o.call(this)===!0){let s=this.doSingleRepetition(i);for(;o.call(this)===!0&&s===!0;)s=this.doSingleRepetition(i)}else throw this.raiseEarlyExitException(e,rt.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],o,1024,e,Yf)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let o=r.DEF,i=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){o.call(this);let a=()=>this.tokenMatcher(this.LA(1),i);for(;this.tokenMatcher(this.LA(1),i)===!0;)this.CONSUME(i),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,i,a,o,Bu],a,1536,e,Bu)}else throw this.raiseEarlyExitException(e,rt.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let o=this.getLaFuncFromCache(n),i;if(typeof r!="function"){i=r.DEF;let a=r.GATE;if(a!==void 0){let c=o;o=()=>a.call(this)&&c.call(this)}}else i=r;let s=!0;for(;o.call(this)===!0&&s===!0;)s=this.doSingleRepetition(i);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],o,768,e,Vf,s)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let o=r.DEF,i=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){o.call(this);let a=()=>this.tokenMatcher(this.LA(1),i);for(;this.tokenMatcher(this.LA(1),i)===!0;)this.CONSUME(i),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,i,a,o,Hu],a,1280,e,Hu)}}repetitionSepSecondInternal(e,r,n,o,i){for(;n();)this.CONSUME(r),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,o,i],n,1536,e,i)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),o=Y(e)?e:e.DEF,s=this.getLaFuncFromCache(n).call(this,o);if(s!==void 0)return o[s].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new Yu(r,e))}}subruleInternal(e,r,n){let o;try{let i=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,o=e.apply(this,i),this.cstPostNonTerminal(o,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),o}catch(i){throw this.subruleInternalError(i,n,e.ruleName)}}subruleInternalError(e,r,n){throw Yo(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let o;try{let i=this.LA(1);this.tokenMatcher(i,e)===!0?(this.consumeToken(),o=i):this.consumeInternalError(e,i,n)}catch(i){o=this.consumeInternalRecovery(e,r,i)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,o),o}consumeInternalError(e,r,n){let o,i=this.LA(0);throw n!==void 0&&n.ERR_MSG?o=n.ERR_MSG:o=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:i,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Vi(o,r,i))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let o=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,o)}catch(i){throw i.name===fv?n:i}}else throw n}saveRecogState(){let e=this.errors,r=Ke(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),Yr)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var pp=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=z(e,"errorMessageProvider")?e.errorMessageProvider:Tr.errorMessageProvider}SAVE_ERROR(e){if(Yo(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Ke(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Ke(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let o=this.getCurrRuleFullName(),i=this.getGAstProductions()[o],a=Xa(e,i,r,this.maxLookahead)[0],c=[];for(let d=1;d<=this.maxLookahead;d++)c.push(this.LA(d));let u=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:c,previous:this.LA(0),customUserDescription:n,ruleName:o});throw this.SAVE_ERROR(new Xu(u,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),o=this.getGAstProductions()[n],i=Ya(e,o,this.maxLookahead),s=[];for(let u=1;u<=this.maxLookahead;u++)s.push(this.LA(u));let a=this.LA(0),c=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:i,actual:s,previous:a,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new Vu(c,this.LA(1),a))}};var hp=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(sr(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return Jf([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=Ft(e.ruleStack),o=this.getGAstProductions()[r];return new Gf(o,e).startWalking()}};var yp={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(yp);var mD=!0,gD=Math.pow(2,8)-1,vD=zf({name:"RECORDING_PHASE_TOKEN",pattern:ht.NA});vo([vD]);var xD=Gi(vD,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(xD);var Rz={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},mp=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,o){return this.consumeInternalRecord(n,e,o)},this[`SUBRULE${r}`]=function(n,o){return this.subruleInternalRecord(n,e,o)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return Qa}topLevelRuleRecord(e,r){try{let n=new br({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return Qu.call(this,Oe,e,r)}atLeastOneInternalRecord(e,r){Qu.call(this,Ue,r,e)}atLeastOneSepFirstInternalRecord(e,r){Qu.call(this,We,r,e,mD)}manyInternalRecord(e,r){Qu.call(this,Te,r,e)}manySepFirstInternalRecord(e,r){Qu.call(this,$e,r,e,mD)}orInternalRecord(e,r){return Tz.call(this,e,r)}subruleInternalRecord(e,r,n){if(gp(r),!e||z(e,"ruleName")===!1){let a=new Error(`<SUBRULE${yD(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}let o=Gn(this.recordingProdStack),i=e.ruleName,s=new Ae({idx:r,nonTerminalName:i,label:n?.LABEL,referencedRule:void 0});return o.definition.push(s),this.outputCst?Rz:yp}consumeInternalRecord(e,r,n){if(gp(r),!ev(e)){let s=new Error(`<CONSUME${yD(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let o=Gn(this.recordingProdStack),i=new ve({idx:r,terminalType:e,label:n?.LABEL});return o.definition.push(i),xD}};function Qu(t,e,r,n=!1){gp(r);let o=Gn(this.recordingProdStack),i=wr(e)?e:e.DEF,s=new t({definition:[],idx:r});return n&&(s.separator=e.SEP),z(e,"MAX_LOOKAHEAD")&&(s.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(s),i.call(this),o.definition.push(s),this.recordingProdStack.pop(),yp}function Tz(t,e){gp(e);let r=Gn(this.recordingProdStack),n=Y(t)===!1,o=n===!1?t:t.DEF,i=new Me({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});z(t,"MAX_LOOKAHEAD")&&(i.maxLookahead=t.MAX_LOOKAHEAD);let s=Lu(o,a=>wr(a.GATE));return i.hasPredicates=s,r.definition.push(i),j(o,a=>{let c=new je({definition:[]});i.definition.push(c),z(a,"IGNORE_AMBIGUITIES")?c.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:z(a,"GATE")&&(c.ignoreAmbiguities=!0),this.recordingProdStack.push(c),a.ALT.call(this),this.recordingProdStack.pop()}),yp}function yD(t){return t===0?"":`${t}`}function gp(t){if(t<0||t>gD){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${gD+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var vp=class{initPerformanceTracer(e){if(z(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=Tr.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:o,value:i}=Fu(r),s=o>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${n}<-- <${e}> time: ${o}ms`),this.traceInitIndent--,i}else return r()}};function wD(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(o=>{if(o==="constructor")return;let i=Object.getOwnPropertyDescriptor(n,o);i&&(i.get||i.set)?Object.defineProperty(t.prototype,o,i):t.prototype[o]=r.prototype[o]})})}var Qa=Gi(Yr,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Qa);var Tr=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:wo,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Za=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),It;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(It||(It={}));function xp(t=void 0){return function(){return t}}var Zu=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{Ku(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),j(this.definedRulesNames,o=>{let s=this[o].originalGrammarAction,a;this.TRACE_INIT(`${o} Rule`,()=>{a=this.topLevelRuleRecord(o,s)}),this.gastProductionsCache[o]=a})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=oD({rules:Ie(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(ge(n)&&this.skipValidations===!1){let o=iD({rules:Ie(this.gastProductionsCache),tokenTypes:Ie(this.tokensMap),errMsgProvider:Cn,grammarName:r}),i=JE({lookaheadStrategy:this.lookaheadStrategy,rules:Ie(this.gastProductionsCache),tokenTypes:Ie(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(o,i)}}),ge(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let o=fE(Ie(this.gastProductionsCache));this.resyncFollows=o}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var o,i;(i=(o=this.lookaheadStrategy).initialize)===null||i===void 0||i.call(o,{rules:Ie(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Ie(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!ge(this.definitionErrors))throw e=L(this.definitionErrors,o=>o.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),z(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=z(r,"skipValidations")?r.skipValidations:Tr.skipValidations}};Zu.DEFER_DEFINITION_ERRORS_HANDLING=!1;wD(Zu,[rp,ip,up,lp,fp,dp,pp,hp,mp,vp]);var el=class extends Zu{constructor(e,r=Tr){let n=Ke(r);n.outputCst=!1,super(e,n)}};function Yi(t,e,r){return`${t.name}_${e}_${r}`}var Xo=1,kz=2,bD=4,RD=5;var rc=7,Sz=8,Cz=9,Ez=10,Dz=11,TD=12,tl=class{constructor(e){this.target=e}isEpsilon(){return!1}},ec=class extends tl{constructor(e,r){super(e),this.tokenType=r}},rl=class extends tl{constructor(e){super(e)}isEpsilon(){return!0}},tc=class extends tl{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function _D(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};Pz(e,t);let r=t.length;for(let n=0;n<r;n++){let o=t[n],i=Xi(e,o,o);i!==void 0&&jz(e,o,i)}return e}function Pz(t,e){let r=e.length;for(let n=0;n<r;n++){let o=e[n],i=Kt(t,o,void 0,{type:kz}),s=Kt(t,o,void 0,{type:rc});i.stop=s,t.ruleToStartState.set(o,i),t.ruleToStopState.set(o,s)}}function kD(t,e,r){return r instanceof ve?bv(t,e,r.terminalType,r):r instanceof Ae?Kz(t,e,r):r instanceof Me?$z(t,e,r):r instanceof Oe?Mz(t,e,r):r instanceof Te?Nz(t,e,r):r instanceof $e?Az(t,e,r):r instanceof Ue?Oz(t,e,r):r instanceof We?Iz(t,e,r):Xi(t,e,r)}function Nz(t,e,r){let n=Kt(t,e,r,{type:RD});Jo(t,n);let o=nc(t,e,n,r,Xi(t,e,r));return CD(t,e,r,o)}function Az(t,e,r){let n=Kt(t,e,r,{type:RD});Jo(t,n);let o=nc(t,e,n,r,Xi(t,e,r)),i=bv(t,e,r.separator,r);return CD(t,e,r,o,i)}function Oz(t,e,r){let n=Kt(t,e,r,{type:bD});Jo(t,n);let o=nc(t,e,n,r,Xi(t,e,r));return SD(t,e,r,o)}function Iz(t,e,r){let n=Kt(t,e,r,{type:bD});Jo(t,n);let o=nc(t,e,n,r,Xi(t,e,r)),i=bv(t,e,r.separator,r);return SD(t,e,r,o,i)}function $z(t,e,r){let n=Kt(t,e,r,{type:Xo});Jo(t,n);let o=L(r.definition,s=>kD(t,e,s));return nc(t,e,n,r,...o)}function Mz(t,e,r){let n=Kt(t,e,r,{type:Xo});Jo(t,n);let o=nc(t,e,n,r,Xi(t,e,r));return Lz(t,e,r,o)}function Xi(t,e,r){let n=qt(L(r.definition,o=>kD(t,e,o)),o=>o!==void 0);return n.length===1?n[0]:n.length===0?void 0:Fz(t,n)}function SD(t,e,r,n,o){let i=n.left,s=n.right,a=Kt(t,e,r,{type:Dz});Jo(t,a);let c=Kt(t,e,r,{type:TD});return i.loopback=a,c.loopback=a,t.decisionMap[Yi(e,o?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=a,Ct(s,a),o===void 0?(Ct(a,i),Ct(a,c)):(Ct(a,c),Ct(a,o.left),Ct(o.right,i)),{left:i,right:c}}function CD(t,e,r,n,o){let i=n.left,s=n.right,a=Kt(t,e,r,{type:Ez});Jo(t,a);let c=Kt(t,e,r,{type:TD}),u=Kt(t,e,r,{type:Cz});return a.loopback=u,c.loopback=u,Ct(a,i),Ct(a,c),Ct(s,u),o!==void 0?(Ct(u,c),Ct(u,o.left),Ct(o.right,i)):Ct(u,a),t.decisionMap[Yi(e,o?"RepetitionWithSeparator":"Repetition",r.idx)]=a,{left:a,right:c}}function Lz(t,e,r,n){let o=n.left,i=n.right;return Ct(o,i),t.decisionMap[Yi(e,"Option",r.idx)]=o,n}function Jo(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function nc(t,e,r,n,...o){let i=Kt(t,e,n,{type:Sz,start:r});r.end=i;for(let a of o)a!==void 0?(Ct(r,a.left),Ct(a.right,i)):Ct(r,i);let s={left:r,right:i};return t.decisionMap[Yi(e,qz(n),n.idx)]=r,s}function qz(t){if(t instanceof Me)return"Alternation";if(t instanceof Oe)return"Option";if(t instanceof Te)return"Repetition";if(t instanceof $e)return"RepetitionWithSeparator";if(t instanceof Ue)return"RepetitionMandatory";if(t instanceof We)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function Fz(t,e){let r=e.length;for(let i=0;i<r-1;i++){let s=e[i],a;s.left.transitions.length===1&&(a=s.left.transitions[0]);let c=a instanceof tc,u=a,d=e[i+1].left;s.left.type===Xo&&s.right.type===Xo&&a!==void 0&&(c&&u.followState===s.right||a.target===s.right)?(c?u.followState=d:a.target=d,Uz(t,s.right)):Ct(s.right,d)}let n=e[0],o=e[r-1];return{left:n.left,right:o.right}}function bv(t,e,r,n){let o=Kt(t,e,n,{type:Xo}),i=Kt(t,e,n,{type:Xo});return Rv(o,new ec(i,r)),{left:o,right:i}}function Kz(t,e,r){let n=r.referencedRule,o=t.ruleToStartState.get(n),i=Kt(t,e,r,{type:Xo}),s=Kt(t,e,r,{type:Xo}),a=new tc(o,n,s);return Rv(i,a),{left:i,right:s}}function jz(t,e,r){let n=t.ruleToStartState.get(e);Ct(n,r.left);let o=t.ruleToStopState.get(e);return Ct(r.right,o),{left:n,right:o}}function Ct(t,e){let r=new rl(e);Rv(t,r)}function Kt(t,e,r,n){let o=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(o),o}function Rv(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function Uz(t,e){t.states.splice(t.states.indexOf(e),1)}var nl={},oc=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=Tv(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return L(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function Tv(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function Wz(t,e){let r={};return n=>{let o=n.toString(),i=r[o];return i!==void 0||(i={atnStartState:t,decision:e,states:{}},r[o]=i),i}}var wp=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},ED=new wp,ol=class extends bo{constructor(e){var r;super(),this.logging=(r=e?.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=_D(e.rules),this.dfas=Hz(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:o,dynamicTokensEnabled:i}=e,s=this.dfas,a=this.logging,c=Yi(n,"Alternation",r),d=this.atn.decisionMap[c].decision,h=L(Zf({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),g=>L(g,m=>m[0]));if(DD(h,!1)&&!i){let g=ct(h,(m,b,T)=>(j(b,C=>{C&&(m[C.tokenTypeIdx]=T,j(C.categoryMatches,R=>{m[R]=T}))}),m),{});return o?function(m){var b;let T=this.LA(1),C=g[T.tokenTypeIdx];if(m!==void 0&&C!==void 0){let R=(b=m[C])===null||b===void 0?void 0:b.GATE;if(R!==void 0&&R.call(this)===!1)return}return C}:function(){let m=this.LA(1);return g[m.tokenTypeIdx]}}else return o?function(g){let m=new wp,b=g===void 0?0:g.length;for(let C=0;C<b;C++){let R=g?.[C].GATE;m.set(C,R===void 0||R.call(this))}let T=_v.call(this,s,d,m,a);return typeof T=="number"?T:void 0}:function(){let g=_v.call(this,s,d,ED,a);return typeof g=="number"?g:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:o,dynamicTokensEnabled:i}=e,s=this.dfas,a=this.logging,c=Yi(n,o,r),d=this.atn.decisionMap[c].decision,h=L(Zf({maxLookahead:1,occurrence:r,prodType:o,rule:n}),g=>L(g,m=>m[0]));if(DD(h)&&h[0][0]&&!i){let g=h[0],m=bt(g);if(m.length===1&&ge(m[0].categoryMatches)){let T=m[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===T}}else{let b=ct(m,(T,C)=>(C!==void 0&&(T[C.tokenTypeIdx]=!0,j(C.categoryMatches,R=>{T[R]=!0})),T),{});return function(){let T=this.LA(1);return b[T.tokenTypeIdx]===!0}}}return function(){let g=_v.call(this,s,d,ED,a);return typeof g=="object"?!1:g===0}}};function DD(t,e=!0){let r=new Set;for(let n of t){let o=new Set;for(let i of n){if(i===void 0){if(e)break;return!1}let s=[i.tokenTypeIdx].concat(i.categoryMatches);for(let a of s)if(r.has(a)){if(!o.has(a))return!1}else r.add(a),o.add(a)}}return!0}function Hz(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=Wz(t.decisionStates[n],n);return r}function _v(t,e,r,n){let o=t[e](r),i=o.start;if(i===void 0){let a=tG(o.atnStartState);i=AD(o,ND(a)),o.start=i}return Bz.apply(this,[o,i,r,n])}function Bz(t,e,r,n){let o=e,i=1,s=[],a=this.LA(i++);for(;;){let c=Jz(o,a);if(c===void 0&&(c=zz.apply(this,[t,o,a,i,r,n])),c===nl)return Xz(s,o,a);if(c.isAcceptState===!0)return c.prediction;o=c,s.push(a),a=this.LA(i++)}}function zz(t,e,r,n,o,i){let s=Qz(e.configs,r,o);if(s.size===0)return PD(t,e,r,nl),nl;let a=ND(s),c=eG(s,o);if(c!==void 0)a.isAcceptState=!0,a.prediction=c,a.configs.uniqueAlt=c;else if(iG(s)){let u=nE(s.alts);a.isAcceptState=!0,a.prediction=u,a.configs.uniqueAlt=u,Gz.apply(this,[t,n,s.alts,i])}return a=PD(t,e,r,a),a}function Gz(t,e,r,n){let o=[];for(let u=1;u<=e;u++)o.push(this.LA(u).tokenType);let i=t.atnStartState,s=i.rule,a=i.production,c=Vz({topLevelRule:s,ambiguityIndices:r,production:a,prefixPath:o});n(c)}function Vz(t){let e=L(t.prefixPath,o=>xo(o)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${Yz(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function Yz(t){if(t instanceof Ae)return"SUBRULE";if(t instanceof Oe)return"OPTION";if(t instanceof Me)return"OR";if(t instanceof Ue)return"AT_LEAST_ONE";if(t instanceof We)return"AT_LEAST_ONE_SEP";if(t instanceof $e)return"MANY_SEP";if(t instanceof Te)return"MANY";if(t instanceof ve)return"CONSUME";throw Error("non exhaustive match")}function Xz(t,e,r){let n=Yt(e.configs.elements,i=>i.state.transitions),o=lE(n.filter(i=>i instanceof ec).map(i=>i.tokenType),i=>i.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:o,tokenPath:t}}function Jz(t,e){return t.edges[e.tokenTypeIdx]}function Qz(t,e,r){let n=new oc,o=[];for(let s of t.elements){if(r.is(s.alt)===!1)continue;if(s.state.type===rc){o.push(s);continue}let a=s.state.transitions.length;for(let c=0;c<a;c++){let u=s.state.transitions[c],d=Zz(u,e);d!==void 0&&n.add({state:d,alt:s.alt,stack:s.stack})}}let i;if(o.length===0&&n.size===1&&(i=n),i===void 0){i=new oc;for(let s of n.elements)bp(s,i)}if(o.length>0&&!nG(i))for(let s of o)i.add(s);return i}function Zz(t,e){if(t instanceof ec&&Wu(e,t.tokenType))return t.target}function eG(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function ND(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function PD(t,e,r,n){return n=AD(t,n),e.edges[r.tokenTypeIdx]=n,n}function AD(t,e){if(e===nl)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function tG(t){let e=new oc,r=t.transitions.length;for(let n=0;n<r;n++){let i={state:t.transitions[n].target,alt:n,stack:[]};bp(i,e)}return e}function bp(t,e){let r=t.state;if(r.type===rc){if(t.stack.length>0){let o=[...t.stack],s={state:o.pop(),alt:t.alt,stack:o};bp(s,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let o=0;o<n;o++){let i=r.transitions[o],s=rG(t,i);s!==void 0&&bp(s,e)}}function rG(t,e){if(e instanceof rl)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof tc){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function nG(t){for(let e of t.elements)if(e.state.type===rc)return!0;return!1}function oG(t){for(let e of t.elements)if(e.state.type!==rc)return!1;return!0}function iG(t){if(oG(t))return!0;let e=sG(t.elements);return aG(e)&&!cG(e)}function sG(t){let e=new Map;for(let r of t){let n=Tv(r,!1),o=e.get(n);o===void 0&&(o={},e.set(n,o)),o[r.alt]=!0}return e}function aG(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function cG(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}Zi();var fl=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new lc(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new ts;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new es(e.startOffset,e.image.length,ks(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.content.length===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new es(r.startOffset,r.image.length,ks(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:o}=r;for(let i=0;i<e.content.length;i++){let s=e.content[i],{offset:a,end:c}=s;if(gr(s)&&n>a&&o<c){this.addHiddenToken(s,r);return}else if(o<=a){e.content.splice(i,0,r);return}}e.content.push(r)}},pl=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},es=class extends pl{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,o,i=!1){super(),this._hidden=i,this._offset=e,this._tokenType=o,this._length=r,this._range=n}},ts=class extends pl{constructor(){super(...arguments),this.content=new Cx(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:o}=r;this._rangeCache={start:n.start,end:o.end.line<n.start.line?n.start:o.end}}return this._rangeCache}else return{start:ke.create(0,0),end:ke.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},Cx=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},lc=class extends ts{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}};var Np=Symbol("Datatype");function Ex(t){return t.$type===Np}var OD="\u200B",ID=t=>t.endsWith(OD)?t:t+OD,hl=class{constructor(e){this._unorderedGroups=new Map,this.allRules=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new Dx(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}getRule(e){return this.allRules.get(e)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},ml=class extends hl{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new fl,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=this.computeRuleType(e),o=this.wrapper.DEFINE_RULE(ID(e.name),this.startImplementation(n,r).bind(this));return this.allRules.set(e.name,o),e.entry&&(this.mainRule=o),o}computeRuleType(e){if(!e.fragment){if(Ou(e))return Np;{let r=Ln(e);return r??e.name}}}parse(e,r={}){this.nodeBuilder.buildRootNode(e);let n=this.lexer.tokenize(e);this.wrapper.input=n.tokens;let o=r.rule?this.allRules.get(r.rule):this.mainRule;if(!o)throw new Error(r.rule?`No rule found with name '${r.rule}'`:"No main rule available.");let i=o.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(n.hidden),this.unorderedGroups.clear(),{value:i,lexerErrors:n.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let i={$type:e};this.stack.push(i),e===Np&&(i.value="")}let o;try{o=r(n)}catch{o=void 0}return!this.isRecording()&&o===void 0&&(o=this.construct()),o}}consume(e,r,n){let o=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&this.isValidToken(o)){let i=this.nodeBuilder.buildLeafNode(o,n),{assignment:s,isCrossRef:a}=this.getAssignment(n),c=this.current;if(s){let u=Gt(n)?o.image:this.converter.convert(o.image,i);this.assign(s.operator,s.feature,u,i,a)}else if(Ex(c)){let u=o.image;Gt(n)||(u=this.converter.convert(u,i).toString()),c.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,r,n,o){let i;this.isRecording()||(i=this.nodeBuilder.buildCompositeNode(n));let s=this.wrapper.wrapSubrule(e,r,o);!this.isRecording()&&i&&i.length>0&&this.performSubruleAssignment(s,n,i)}performSubruleAssignment(e,r,n){let{assignment:o,isCrossRef:i}=this.getAssignment(r);if(o)this.assign(o.operator,o.feature,e,n,i);else if(!o){let s=this.current;if(Ex(s))s.value+=e.toString();else if(typeof e=="object"&&e){let a=e.$type,c=this.assignWithoutOverride(e,s);a&&(c.$type=a);let u=c;this.stack.pop(),this.stack.push(u)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(r.feature&&r.operator){n=this.construct(),this.nodeBuilder.buildCompositeNode(r).content.push(n.$cstNode);let i={$type:e};this.stack.push(i),this.assign(r.operator,r.feature,n,n.$cstNode,!1)}else n.$type=e}}construct(){if(this.isRecording())return;let e=this.current;return ef(e),this.nodeBuilder.construct(e),this.stack.pop(),Ex(e)?this.converter.convert(e.value,e.$cstNode):(Su(this.astReflection,e),e)}getAssignment(e){if(!this.assignmentMap.has(e)){let r=Gr(e,or);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?kn(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,o,i){let s=this.current,a;switch(i&&typeof n=="string"?a=this.linker.buildReference(s,r,o,n):a=n,e){case"=":{s[r]=a;break}case"?=":{s[r]=!0;break}case"+=":Array.isArray(s[r])||(s[r]=[]),s[r].push(a)}}assignWithoutOverride(e,r){for(let[o,i]of Object.entries(r)){let s=e[o];s===void 0?e[o]=i:Array.isArray(s)&&Array.isArray(i)&&(i.push(...s),e[o]=i)}let n=e.$cstNode;return n&&(n.astNode=void 0,e.$cstNode=void 0),e}get definitionErrors(){return this.wrapper.definitionErrors}},Ap=class{buildMismatchTokenMessage(e){return wo.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return wo.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return wo.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return wo.buildEarlyExitMessage(e)}},dc=class extends Ap{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},gl=class extends hl{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(ID(e.name),this.startImplementation(r).bind(this));return this.allRules.set(e.name,n),e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,o){this.before(n),this.wrapper.wrapSubrule(e,r,o),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},lG={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new dc},Dx=class extends el{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},lG),{lookaheadStrategy:n?new bo({maxLookahead:r.maxLookahead}):new ol}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};function Ip(t,e,r){return dG({parser:e,tokens:r,ruleNames:new Map},t),e}function dG(t,e){let r=Nu(e,!1),n=xe(e.rules).filter(ft).filter(o=>r.has(o));for(let o of n){let i=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});t.parser.rule(o,rs(i,o.definition))}}function rs(t,e,r=!1){let n;if(Gt(e))n=vG(t,e);else if(_n(e))n=fG(t,e);else if(or(e))n=rs(t,e.terminal);else if(kn(e))n=$D(t,e);else if(kr(e))n=pG(t,e);else if(da(e))n=mG(t,e);else if(fa(e))n=gG(t,e);else if(tn(e))n=yG(t,e);else if(py(e)){let o=t.consume++;n=()=>t.parser.consume(o,Yr,e)}else throw new Ni(e.$cstNode,`Unexpected element type: ${e.$type}`);return MD(t,r?void 0:Op(e),n,e.cardinality)}function fG(t,e){let r=ji(e);return()=>t.parser.action(r,e)}function pG(t,e){let r=e.rule.ref;if(ft(r)){let n=t.subrule++,o=e.arguments.length>0?hG(r,e.arguments):()=>({});return i=>t.parser.subrule(n,LD(t,r),e,o(i))}else if(vr(r)){let n=t.consume++,o=Px(t,r.name);return()=>t.parser.consume(n,o,e)}else if(r)Ao(r);else throw new Ni(e.$cstNode,`Undefined rule type: ${e.$type}`)}function hG(t,e){let r=e.map(n=>To(n.value));return n=>{let o={};for(let i=0;i<r.length;i++){let s=t.parameters[i],a=r[i];o[s.name]=a(n)}return o}}function To(t){if(sy(t)){let e=To(t.left),r=To(t.right);return n=>e(n)||r(n)}else if(iy(t)){let e=To(t.left),r=To(t.right);return n=>e(n)&&r(n)}else if(ay(t)){let e=To(t.value);return r=>!e(r)}else if(cy(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(oy(t)){let e=!!t.true;return()=>e}Ao(t)}function mG(t,e){if(e.elements.length===1)return rs(t,e.elements[0]);{let r=[];for(let o of e.elements){let i={ALT:rs(t,o,!0)},s=Op(o);s&&(i.GATE=To(s)),r.push(i)}let n=t.or++;return o=>t.parser.alternatives(n,r.map(i=>{let s={ALT:()=>i.ALT(o)},a=i.GATE;return a&&(s.GATE=()=>a(o)),s}))}}function gG(t,e){if(e.elements.length===1)return rs(t,e.elements[0]);let r=[];for(let a of e.elements){let c={ALT:rs(t,a,!0)},u=Op(a);u&&(c.GATE=To(u)),r.push(c)}let n=t.or++,o=(a,c)=>{let u=c.getRuleStack().join("-");return`uGroup_${a}_${u}`},i=a=>t.parser.alternatives(n,r.map((c,u)=>{let d={ALT:()=>!0},h=t.parser;d.ALT=()=>{if(c.ALT(a),!h.isRecording()){let m=o(n,h);h.unorderedGroups.get(m)||h.unorderedGroups.set(m,[]);let b=h.unorderedGroups.get(m);typeof b?.[u]>"u"&&(b[u]=!0)}};let g=c.GATE;return g?d.GATE=()=>g(a):d.GATE=()=>{let m=h.unorderedGroups.get(o(n,h));return!m?.[u]},d})),s=MD(t,Op(e),i,"*");return a=>{s(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(o(n,t.parser))}}function yG(t,e){let r=e.elements.map(n=>rs(t,n));return n=>r.forEach(o=>o(n))}function Op(t){if(tn(t))return t.guardCondition}function $D(t,e,r=e.terminal){if(r)if(kr(r)&&ft(r.rule.ref)){let n=t.subrule++;return o=>t.parser.subrule(n,LD(t,r.rule.ref),e,o)}else if(kr(r)&&vr(r.rule.ref)){let n=t.consume++,o=Px(t,r.rule.ref.name);return()=>t.parser.consume(n,o,e)}else if(Gt(r)){let n=t.consume++,o=Px(t,r.value);return()=>t.parser.consume(n,o,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=af(e.type.ref),o=n?.terminal;if(!o)throw new Error("Could not find name assignment for type: "+ji(e.type.ref));return $D(t,e,o)}}function vG(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function MD(t,e,r,n){let o=e&&To(e);if(!n)if(o){let i=t.or++;return s=>t.parser.alternatives(i,[{ALT:()=>r(s),GATE:()=>o(s)},{ALT:xp(),GATE:()=>!o(s)}])}else return r;if(n==="*"){let i=t.many++;return s=>t.parser.many(i,{DEF:()=>r(s),GATE:o?()=>o(s):void 0})}else if(n==="+"){let i=t.many++;if(o){let s=t.or++;return a=>t.parser.alternatives(s,[{ALT:()=>t.parser.atLeastOne(i,{DEF:()=>r(a)}),GATE:()=>o(a)},{ALT:xp(),GATE:()=>!o(a)}])}else return s=>t.parser.atLeastOne(i,{DEF:()=>r(s)})}else if(n==="?"){let i=t.optional++;return s=>t.parser.optional(i,{DEF:()=>r(s),GATE:o?()=>o(s):void 0})}else Ao(n)}function LD(t,e){let r=xG(t,e),n=t.parser.getRule(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function xG(t,e){if(ft(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,o=e.$type;for(;!ft(n);)(tn(n)||da(n)||fa(n))&&(o=n.elements.indexOf(r).toString()+":"+o),r=n,n=n.$container;return o=n.name+":"+o,t.ruleNames.set(e,o),o}}function Px(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function Nx(t){let e=t.Grammar,r=t.parser.Lexer,n=new gl(t);return Ip(e,n,r.definition),n.finalize(),n}function Ax(t){let e=qD(t);return e.finalize(),e}function qD(t){let e=t.Grammar,r=t.parser.Lexer,n=new ml(t);return Ip(e,n,r.definition)}var yl=class{buildTokens(e,r){let n=xe(Nu(e,!1)),o=this.buildTerminalTokens(n),i=this.buildKeywordTokens(n,o,r);return o.forEach(s=>{let a=s.PATTERN;typeof a=="object"&&a&&"test"in a&&ma(a)?i.unshift(s):i.push(s)}),i}buildTerminalTokens(e){return e.filter(vr).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=Io(e),n=this.requiresCustomPattern(r)?this.regexPatternFunction(r):r,o={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(o.GROUP=ma(r)?ht.SKIPPED:"hidden"),o}requiresCustomPattern(e){return e.flags.includes("u")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,o)=>(r.lastIndex=o,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(ft).flatMap(o=>Sr(o).filter(Gt)).distinct(o=>o.value).toArray().sort((o,i)=>i.value.length-o.value.length).map(o=>this.buildKeywordToken(o,r,!!n?.caseInsensitive))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp(Cy(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,o)=>{let i=o?.PATTERN;return i?.source&&Ey("^"+i.source+"$",e.value)&&n.push(o),n},[])}};var vl=class{convert(e,r){let n=r.grammarSource;if(kn(n)&&(n=Au(n)),kr(n)){let o=n.rule.ref;if(!o)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(o,e,r)}return e}runConverter(e,r,n){var o;switch(e.name.toUpperCase()){case"INT":return Xn.convertInt(r);case"STRING":return Xn.convertString(r);case"ID":return Xn.convertID(r)}switch((o=My(e))===null||o===void 0?void 0:o.toLowerCase()){case"number":return Xn.convertNumber(r);case"boolean":return Xn.convertBoolean(r);case"bigint":return Xn.convertBigint(r);case"date":return Xn.convertDate(r);default:return r}}},Xn;(function(t){function e(u){let d="";for(let h=1;h<u.length-1;h++){let g=u.charAt(h);if(g==="\\"){let m=u.charAt(++h);d+=r(m)}else d+=g}return d}t.convertString=e;function r(u){switch(u){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return u}}function n(u){return u.charAt(0)==="^"?u.substring(1):u}t.convertID=n;function o(u){return parseInt(u)}t.convertInt=o;function i(u){return BigInt(u)}t.convertBigint=i;function s(u){return new Date(u)}t.convertDate=s;function a(u){return Number(u)}t.convertNumber=a;function c(u){return u.toLowerCase()==="true"}t.convertBoolean=c})(Xn||(Xn={}));var B={};_e(B,nr(xl(),1));function Kx(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}var Fx=0,UD=10;function WD(){return Fx=Date.now(),new B.CancellationTokenSource}function HD(t){UD=t}var Jn=Symbol("OperationCancelled");function sn(t){return t===Jn}async function ut(t){if(t===B.CancellationToken.None)return;let e=Date.now();if(e-Fx>=UD&&(Fx=e,await Kx()),t.isCancellationRequested)throw Jn}var _r=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};var qp=class t{constructor(e,r,n,o){this._uri=e,this._languageId=r,this._version=n,this._content=o,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let o=GD(n.range),i=this.offsetAt(o.start),s=this.offsetAt(o.end);this._content=this._content.substring(0,i)+n.text+this._content.substring(s,this._content.length);let a=Math.max(o.start.line,0),c=Math.max(o.end.line,0),u=this._lineOffsets,d=BD(n.text,!1,i);if(c-a===d.length)for(let g=0,m=d.length;g<m;g++)u[g+a+1]=d[g];else d.length<1e4?u.splice(a+1,c-a,...d):this._lineOffsets=u=u.slice(0,a+1).concat(d,u.slice(c+1));let h=n.text.length-(s-i);if(h!==0)for(let g=a+1+d.length,m=u.length;g<m;g++)u[g]=u[g]+h}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=BD(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,o=r.length;if(o===0)return{line:0,character:e};for(;n<o;){let s=Math.floor((n+o)/2);r[s]>e?o=s:n=s+1}let i=n-1;return e=this.ensureBeforeEOL(e,r[i]),{line:i,character:e-r[i]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line];if(e.character<=0)return n;let o=e.line+1<r.length?r[e.line+1]:this._content.length,i=Math.min(n+e.character,o);return this.ensureBeforeEOL(i,n)}ensureBeforeEOL(e,r){for(;e>r&&zD(this._content.charCodeAt(e-1));)e--;return e}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},Zo;(function(t){function e(o,i,s,a){return new qp(o,i,s,a)}t.create=e;function r(o,i,s){if(o instanceof qp)return o.update(i,s),o;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(o,i){let s=o.getText(),a=jx(i.map(DG),(d,h)=>{let g=d.range.start.line-h.range.start.line;return g===0?d.range.start.character-h.range.start.character:g}),c=0,u=[];for(let d of a){let h=o.offsetAt(d.range.start);if(h<c)throw new Error("Overlapping edit");h>c&&u.push(s.substring(c,h)),d.newText.length&&u.push(d.newText),c=o.offsetAt(d.range.end)}return u.push(s.substr(c)),u.join("")}t.applyEdits=n})(Zo||(Zo={}));function jx(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),o=t.slice(r);jx(n,e),jx(o,e);let i=0,s=0,a=0;for(;i<n.length&&s<o.length;)e(n[i],o[s])<=0?t[a++]=n[i++]:t[a++]=o[s++];for(;i<n.length;)t[a++]=n[i++];for(;s<o.length;)t[a++]=o[s++];return t}function BD(t,e,r=0){let n=e?[r]:[];for(let o=0;o<t.length;o++){let i=t.charCodeAt(o);zD(i)&&(i===13&&o+1<t.length&&t.charCodeAt(o+1)===10&&o++,n.push(r+o+1))}return n}function zD(t){return t===13||t===10}function GD(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function DG(t){let e=GD(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var VD;(()=>{"use strict";var t={470:o=>{function i(c){if(typeof c!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(c))}function s(c,u){for(var d,h="",g=0,m=-1,b=0,T=0;T<=c.length;++T){if(T<c.length)d=c.charCodeAt(T);else{if(d===47)break;d=47}if(d===47){if(!(m===T-1||b===1))if(m!==T-1&&b===2){if(h.length<2||g!==2||h.charCodeAt(h.length-1)!==46||h.charCodeAt(h.length-2)!==46){if(h.length>2){var C=h.lastIndexOf("/");if(C!==h.length-1){C===-1?(h="",g=0):g=(h=h.slice(0,C)).length-1-h.lastIndexOf("/"),m=T,b=0;continue}}else if(h.length===2||h.length===1){h="",g=0,m=T,b=0;continue}}u&&(h.length>0?h+="/..":h="..",g=2)}else h.length>0?h+="/"+c.slice(m+1,T):h=c.slice(m+1,T),g=T-m-1;m=T,b=0}else d===46&&b!==-1?++b:b=-1}return h}var a={resolve:function(){for(var c,u="",d=!1,h=arguments.length-1;h>=-1&&!d;h--){var g;h>=0?g=arguments[h]:(c===void 0&&(c=process.cwd()),g=c),i(g),g.length!==0&&(u=g+"/"+u,d=g.charCodeAt(0)===47)}return u=s(u,!d),d?u.length>0?"/"+u:"/":u.length>0?u:"."},normalize:function(c){if(i(c),c.length===0)return".";var u=c.charCodeAt(0)===47,d=c.charCodeAt(c.length-1)===47;return(c=s(c,!u)).length!==0||u||(c="."),c.length>0&&d&&(c+="/"),u?"/"+c:c},isAbsolute:function(c){return i(c),c.length>0&&c.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var c,u=0;u<arguments.length;++u){var d=arguments[u];i(d),d.length>0&&(c===void 0?c=d:c+="/"+d)}return c===void 0?".":a.normalize(c)},relative:function(c,u){if(i(c),i(u),c===u||(c=a.resolve(c))===(u=a.resolve(u)))return"";for(var d=1;d<c.length&&c.charCodeAt(d)===47;++d);for(var h=c.length,g=h-d,m=1;m<u.length&&u.charCodeAt(m)===47;++m);for(var b=u.length-m,T=g<b?g:b,C=-1,R=0;R<=T;++R){if(R===T){if(b>T){if(u.charCodeAt(m+R)===47)return u.slice(m+R+1);if(R===0)return u.slice(m+R)}else g>T&&(c.charCodeAt(d+R)===47?C=R:R===0&&(C=0));break}var p=c.charCodeAt(d+R);if(p!==u.charCodeAt(m+R))break;p===47&&(C=R)}var f="";for(R=d+C+1;R<=h;++R)R!==h&&c.charCodeAt(R)!==47||(f.length===0?f+="..":f+="/..");return f.length>0?f+u.slice(m+C):(m+=C,u.charCodeAt(m)===47&&++m,u.slice(m))},_makeLong:function(c){return c},dirname:function(c){if(i(c),c.length===0)return".";for(var u=c.charCodeAt(0),d=u===47,h=-1,g=!0,m=c.length-1;m>=1;--m)if((u=c.charCodeAt(m))===47){if(!g){h=m;break}}else g=!1;return h===-1?d?"/":".":d&&h===1?"//":c.slice(0,h)},basename:function(c,u){if(u!==void 0&&typeof u!="string")throw new TypeError('"ext" argument must be a string');i(c);var d,h=0,g=-1,m=!0;if(u!==void 0&&u.length>0&&u.length<=c.length){if(u.length===c.length&&u===c)return"";var b=u.length-1,T=-1;for(d=c.length-1;d>=0;--d){var C=c.charCodeAt(d);if(C===47){if(!m){h=d+1;break}}else T===-1&&(m=!1,T=d+1),b>=0&&(C===u.charCodeAt(b)?--b==-1&&(g=d):(b=-1,g=T))}return h===g?g=T:g===-1&&(g=c.length),c.slice(h,g)}for(d=c.length-1;d>=0;--d)if(c.charCodeAt(d)===47){if(!m){h=d+1;break}}else g===-1&&(m=!1,g=d+1);return g===-1?"":c.slice(h,g)},extname:function(c){i(c);for(var u=-1,d=0,h=-1,g=!0,m=0,b=c.length-1;b>=0;--b){var T=c.charCodeAt(b);if(T!==47)h===-1&&(g=!1,h=b+1),T===46?u===-1?u=b:m!==1&&(m=1):u!==-1&&(m=-1);else if(!g){d=b+1;break}}return u===-1||h===-1||m===0||m===1&&u===h-1&&u===d+1?"":c.slice(u,h)},format:function(c){if(c===null||typeof c!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof c);return function(u,d){var h=d.dir||d.root,g=d.base||(d.name||"")+(d.ext||"");return h?h===d.root?h+g:h+"/"+g:g}(0,c)},parse:function(c){i(c);var u={root:"",dir:"",base:"",ext:"",name:""};if(c.length===0)return u;var d,h=c.charCodeAt(0),g=h===47;g?(u.root="/",d=1):d=0;for(var m=-1,b=0,T=-1,C=!0,R=c.length-1,p=0;R>=d;--R)if((h=c.charCodeAt(R))!==47)T===-1&&(C=!1,T=R+1),h===46?m===-1?m=R:p!==1&&(p=1):m!==-1&&(p=-1);else if(!C){b=R+1;break}return m===-1||T===-1||p===0||p===1&&m===T-1&&m===b+1?T!==-1&&(u.base=u.name=b===0&&g?c.slice(1,T):c.slice(b,T)):(b===0&&g?(u.name=c.slice(1,m),u.base=c.slice(1,T)):(u.name=c.slice(b,m),u.base=c.slice(b,T)),u.ext=c.slice(m,T)),b>0?u.dir=c.slice(0,b-1):g&&(u.dir="/"),u},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,o.exports=a}},e={};function r(o){var i=e[o];if(i!==void 0)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,r),s.exports}r.d=(o,i)=>{for(var s in i)r.o(i,s)&&!r.o(o,s)&&Object.defineProperty(o,s,{enumerable:!0,get:i[s]})},r.o=(o,i)=>Object.prototype.hasOwnProperty.call(o,i),r.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var n={};(()=>{let o;r.r(n),r.d(n,{URI:()=>g,Utils:()=>Wt}),typeof process=="object"?o=process.platform==="win32":typeof navigator=="object"&&(o=navigator.userAgent.indexOf("Windows")>=0);let i=/^\w[\w\d+.-]*$/,s=/^\//,a=/^\/\//;function c(q,D){if(!q.scheme&&D)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${q.authority}", path: "${q.path}", query: "${q.query}", fragment: "${q.fragment}"}`);if(q.scheme&&!i.test(q.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(q.path){if(q.authority){if(!s.test(q.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(q.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let u="",d="/",h=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class g{static isUri(D){return D instanceof g||!!D&&typeof D.authority=="string"&&typeof D.fragment=="string"&&typeof D.path=="string"&&typeof D.query=="string"&&typeof D.scheme=="string"&&typeof D.fsPath=="string"&&typeof D.with=="function"&&typeof D.toString=="function"}scheme;authority;path;query;fragment;constructor(D,V,U,we,te,oe=!1){typeof D=="object"?(this.scheme=D.scheme||u,this.authority=D.authority||u,this.path=D.path||u,this.query=D.query||u,this.fragment=D.fragment||u):(this.scheme=function(W,I){return W||I?W:"file"}(D,oe),this.authority=V||u,this.path=function(W,I){switch(W){case"https":case"http":case"file":I?I[0]!==d&&(I=d+I):I=d}return I}(this.scheme,U||u),this.query=we||u,this.fragment=te||u,c(this,oe))}get fsPath(){return p(this,!1)}with(D){if(!D)return this;let{scheme:V,authority:U,path:we,query:te,fragment:oe}=D;return V===void 0?V=this.scheme:V===null&&(V=u),U===void 0?U=this.authority:U===null&&(U=u),we===void 0?we=this.path:we===null&&(we=u),te===void 0?te=this.query:te===null&&(te=u),oe===void 0?oe=this.fragment:oe===null&&(oe=u),V===this.scheme&&U===this.authority&&we===this.path&&te===this.query&&oe===this.fragment?this:new b(V,U,we,te,oe)}static parse(D,V=!1){let U=h.exec(D);return U?new b(U[2]||u,G(U[4]||u),G(U[5]||u),G(U[7]||u),G(U[9]||u),V):new b(u,u,u,u,u)}static file(D){let V=u;if(o&&(D=D.replace(/\\/g,d)),D[0]===d&&D[1]===d){let U=D.indexOf(d,2);U===-1?(V=D.substring(2),D=d):(V=D.substring(2,U),D=D.substring(U)||d)}return new b("file",V,D,u,u)}static from(D){let V=new b(D.scheme,D.authority,D.path,D.query,D.fragment);return c(V,!0),V}toString(D=!1){return f(this,D)}toJSON(){return this}static revive(D){if(D){if(D instanceof g)return D;{let V=new b(D);return V._formatted=D.external,V._fsPath=D._sep===m?D.fsPath:null,V}}return D}}let m=o?1:void 0;class b extends g{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=p(this,!1)),this._fsPath}toString(D=!1){return D?f(this,!0):(this._formatted||(this._formatted=f(this,!1)),this._formatted)}toJSON(){let D={$mid:1};return this._fsPath&&(D.fsPath=this._fsPath,D._sep=m),this._formatted&&(D.external=this._formatted),this.path&&(D.path=this.path),this.scheme&&(D.scheme=this.scheme),this.authority&&(D.authority=this.authority),this.query&&(D.query=this.query),this.fragment&&(D.fragment=this.fragment),D}}let T={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function C(q,D,V){let U,we=-1;for(let te=0;te<q.length;te++){let oe=q.charCodeAt(te);if(oe>=97&&oe<=122||oe>=65&&oe<=90||oe>=48&&oe<=57||oe===45||oe===46||oe===95||oe===126||D&&oe===47||V&&oe===91||V&&oe===93||V&&oe===58)we!==-1&&(U+=encodeURIComponent(q.substring(we,te)),we=-1),U!==void 0&&(U+=q.charAt(te));else{U===void 0&&(U=q.substr(0,te));let W=T[oe];W!==void 0?(we!==-1&&(U+=encodeURIComponent(q.substring(we,te)),we=-1),U+=W):we===-1&&(we=te)}}return we!==-1&&(U+=encodeURIComponent(q.substring(we))),U!==void 0?U:q}function R(q){let D;for(let V=0;V<q.length;V++){let U=q.charCodeAt(V);U===35||U===63?(D===void 0&&(D=q.substr(0,V)),D+=T[U]):D!==void 0&&(D+=q[V])}return D!==void 0?D:q}function p(q,D){let V;return V=q.authority&&q.path.length>1&&q.scheme==="file"?`//${q.authority}${q.path}`:q.path.charCodeAt(0)===47&&(q.path.charCodeAt(1)>=65&&q.path.charCodeAt(1)<=90||q.path.charCodeAt(1)>=97&&q.path.charCodeAt(1)<=122)&&q.path.charCodeAt(2)===58?D?q.path.substr(1):q.path[1].toLowerCase()+q.path.substr(2):q.path,o&&(V=V.replace(/\//g,"\\")),V}function f(q,D){let V=D?R:C,U="",{scheme:we,authority:te,path:oe,query:W,fragment:I}=q;if(we&&(U+=we,U+=":"),(te||we==="file")&&(U+=d,U+=d),te){let re=te.indexOf("@");if(re!==-1){let jr=te.substr(0,re);te=te.substr(re+1),re=jr.lastIndexOf(":"),re===-1?U+=V(jr,!1,!1):(U+=V(jr.substr(0,re),!1,!1),U+=":",U+=V(jr.substr(re+1),!1,!0)),U+="@"}te=te.toLowerCase(),re=te.lastIndexOf(":"),re===-1?U+=V(te,!1,!0):(U+=V(te.substr(0,re),!1,!0),U+=te.substr(re))}if(oe){if(oe.length>=3&&oe.charCodeAt(0)===47&&oe.charCodeAt(2)===58){let re=oe.charCodeAt(1);re>=65&&re<=90&&(oe=`/${String.fromCharCode(re+32)}:${oe.substr(3)}`)}else if(oe.length>=2&&oe.charCodeAt(1)===58){let re=oe.charCodeAt(0);re>=65&&re<=90&&(oe=`${String.fromCharCode(re+32)}:${oe.substr(2)}`)}U+=V(oe,!0,!1)}return W&&(U+="?",U+=V(W,!1,!1)),I&&(U+="#",U+=D?I:C(I,!1,!1)),U}function w(q){try{return decodeURIComponent(q)}catch{return q.length>3?q.substr(0,3)+w(q.substr(3)):q}}let O=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function G(q){return q.match(O)?q.replace(O,D=>w(D)):q}var it=r(470);let Qe=it.posix||it,tr="/";var Wt;(function(q){q.joinPath=function(D,...V){return D.with({path:Qe.join(D.path,...V)})},q.resolvePath=function(D,...V){let U=D.path,we=!1;U[0]!==tr&&(U=tr+U,we=!0);let te=Qe.resolve(U,...V);return we&&te[0]===tr&&!D.authority&&(te=te.substring(1)),D.with({path:te})},q.dirname=function(D){if(D.path.length===0||D.path===tr)return D;let V=Qe.dirname(D.path);return V.length===1&&V.charCodeAt(0)===46&&(V=""),D.with({path:V})},q.basename=function(D){return Qe.basename(D.path)},q.extname=function(D){return Qe.extname(D.path)}})(Wt||(Wt={}))})(),VD=n})();var{URI:He,Utils:mc}=VD;var Jt;(function(t){t.basename=mc.basename,t.dirname=mc.dirname,t.extname=mc.extname,t.joinPath=mc.joinPath,t.resolvePath=mc.resolvePath;function e(n,o){return n?.toString()===o?.toString()}t.equals=e;function r(n,o){let i=typeof n=="string"?n:n.path,s=typeof o=="string"?o:o.path,a=i.split("/").filter(g=>g.length>0),c=s.split("/").filter(g=>g.length>0),u=0;for(;u<a.length&&a[u]===c[u];u++);let d="../".repeat(a.length-u),h=c.slice(u).join("/");return d+h}t.relative=r})(Jt||(Jt={}));var J;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(J||(J={}));var wl=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,r=B.CancellationToken.None){let n=await this.fileSystemProvider.readFile(e);return this.createAsync(e,n,r)}fromTextDocument(e,r,n){return r=r??He.parse(e.uri),B.CancellationToken.is(n)?this.createAsync(r,e,n):this.create(r,e,n)}fromString(e,r,n){return B.CancellationToken.is(n)?this.createAsync(r,e,n):this.create(r,e,n)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r,n){if(typeof r=="string"){let o=this.parse(e,r,n);return this.createLangiumDocument(o,e,void 0,r)}else if("$model"in r){let o={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(o,e)}else{let o=this.parse(e,r.getText(),n);return this.createLangiumDocument(o,e,r)}}async createAsync(e,r,n){if(typeof r=="string"){let o=await this.parseAsync(e,r,n);return this.createLangiumDocument(o,e,void 0,r)}else{let o=await this.parseAsync(e,r.getText(),n);return this.createLangiumDocument(o,e,r)}}createLangiumDocument(e,r,n,o){let i;if(n)i={parseResult:e,uri:r,state:J.Parsed,references:[],textDocument:n};else{let s=this.createTextDocumentGetter(r,o);i={parseResult:e,uri:r,state:J.Parsed,references:[],get textDocument(){return s()}}}return e.value.$document=i,i}async update(e,r){var n,o;let i=(n=e.parseResult.value.$cstNode)===null||n===void 0?void 0:n.root.fullText,s=(o=this.textDocuments)===null||o===void 0?void 0:o.get(e.uri.toString()),a=s?s.getText():await this.fileSystemProvider.readFile(e.uri);if(s)Object.defineProperty(e,"textDocument",{value:s});else{let c=this.createTextDocumentGetter(e.uri,a);Object.defineProperty(e,"textDocument",{get:c})}return i!==a&&(e.parseResult=await this.parseAsync(e.uri,a,r),e.parseResult.value.$document=e),e.state=J.Parsed,e}parse(e,r,n){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r,n)}parseAsync(e,r,n){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r,n)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,o;return()=>o??(o=Zo.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r??""))}},bl=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.serviceRegistry=e.ServiceRegistry}get all(){return xe(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getDocument(e){let r=e.toString();return this.documentMap.get(r)}async getOrCreateDocument(e,r){let n=this.getDocument(e);return n||(n=await this.langiumDocumentFactory.fromUri(e,r),this.addDocument(n),n)}createDocument(e,r,n){if(n)return this.langiumDocumentFactory.fromString(r,e,n).then(o=>(this.addDocument(o),o));{let o=this.langiumDocumentFactory.fromString(r,e);return this.addDocument(o),o}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(this.serviceRegistry.getServices(e).references.Linker.unlink(n),n.state=J.Changed,n.precomputedScopes=void 0,n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=J.Changed,this.documentMap.delete(r)),n}};var Rl=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=B.CancellationToken.None){for(let n of Cr(e.parseResult.value))await ut(r),pa(n).forEach(o=>this.doLink(o,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0){try{let o=this.getCandidate(e);if(Ei(o))n._ref=o;else if(n._nodeDescription=o,this.langiumDocuments().hasDocument(o.documentUri)){let i=this.loadAstNode(o);n._ref=i??this.createLinkingError(e,o)}}catch(o){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${o}`})}r.references.push(n)}}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,o){let i=this,s={$refNode:n,$refText:o,get ref(){var a;if(Ge(this._ref))return this._ref;if(Xg(this._nodeDescription)){let c=i.loadAstNode(this._nodeDescription);this._ref=c??i.createLinkingError({reference:s,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let c=i.getLinkedNode({reference:s,container:e,property:r});if(c.error&&Ze(e).state<J.ComputedScopes)return;this._ref=(a=c.node)!==null&&a!==void 0?a:c.error,this._nodeDescription=c.descr,Ze(e).references.push(this)}return Ge(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return Ei(this._ref)?this._ref:void 0}};return s}getLinkedNode(e){try{let r=this.getCandidate(e);if(Ei(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getDocument(e.documentUri);if(r)return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=Ze(e.container);n.state<J.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let o=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${o} named '${e.reference.$refText}'.`,targetDescription:r})}};function Fp(t){return typeof t.name=="string"}var Tl=class{getName(e){if(Fp(e))return e.name}getNameNode(e){return Oo(e.$cstNode,"name")}};var _l=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=Iy(e),n=e.astNode;if(r&&n){let o=n[r.feature];if(zt(o))return o.ref;if(Array.isArray(o)){for(let i of o)if(zt(i)&&i.$refNode&&i.$refNode.offset<=e.offset&&i.$refNode.end>=e.end)return i.ref}}if(n){let o=this.nameProvider.getNameNode(n);if(o&&(o===e||Zg(e,o)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n??r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let i=this.getReferenceToSelf(e);i&&n.push(i)}let o=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(o=o.filter(i=>Jt.equals(i.sourceUri,r.documentUri))),n.push(...o),xe(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=Ze(e),o=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:o,targetUri:n.uri,targetPath:o,segment:Pi(r),local:!0}}}};var En=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return _s.sum(xe(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let o=n.indexOf(r);if(o>=0)return n.length===1?this.map.delete(e):n.splice(o,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(o=>e(o,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return xe(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return xe(this.map.keys())}values(){return xe(this.map.values()).flat()}entriesGroupedByKey(){return xe(this.map.entries())}},os=class{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(let[r,n]of e)this.set(r,n)}clear(){this.map.clear(),this.inverse.clear()}set(e,r){return this.map.set(e,r),this.inverse.set(r,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){let r=this.map.get(e);return r!==void 0?(this.map.delete(e),this.inverse.delete(r),!0):!1}};var kl=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=B.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=$i,o=B.CancellationToken.None){let i=[];this.exportNode(e,i,r);for(let s of n(e))await ut(o),this.exportNode(s,i,r);return i}exportNode(e,r,n){let o=this.nameProvider.getName(e);o&&r.push(this.descriptions.createDescription(e,o,n))}async computeLocalScopes(e,r=B.CancellationToken.None){let n=e.parseResult.value,o=new En;for(let i of Sr(n))await ut(r),this.processNode(i,e,o);return o}processNode(e,r,n){let o=e.$container;if(o){let i=this.nameProvider.getName(e);i&&n.add(o,this.descriptions.createDescription(e,i,r))}}};var gc=class{constructor(e,r,n){var o;this.elements=e,this.outerScope=r,this.caseInsensitive=(o=n?.caseInsensitive)!==null&&o!==void 0?o:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},Sl=class{constructor(e,r,n){var o;this.elements=new Map,this.caseInsensitive=(o=n?.caseInsensitive)!==null&&o!==void 0?o:!1;for(let i of e){let s=this.caseInsensitive?i.name.toLowerCase():i.name;this.elements.set(s,i)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=xe(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},PG={getElement(){},getAllElements(){return No}};var yc=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},Cl=class extends yc{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},is=class extends yc{constructor(e){super(),this.cache=new Map,this.converter=e??(r=>r)}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let o=this.cacheForContext(e);if(o.has(r))return o.get(r);if(n){let i=n();return o.set(r,i),i}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}},Kp=class extends is{constructor(e){super(r=>r.toString()),this.onDispose(e.workspace.DocumentBuilder.onUpdate((r,n)=>{let o=r.concat(n);for(let i of o)this.clear(i)}))}},vc=class extends Cl{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var El=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new vc(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),o=Ze(e.container).precomputedScopes;if(o){let s=e.container;do{let a=o.get(s);a.length>0&&r.push(xe(a).filter(c=>this.reflection.isSubtype(c.type,n))),s=s.$container}while(s)}let i=this.getGlobalScope(n,e);for(let s=r.length-1;s>=0;s--)i=this.createScope(r[s],i);return i}createScope(e,r,n){return new gc(xe(e),r,n)}createScopeForNodes(e,r,n){let o=xe(e).map(i=>{let s=this.nameProvider.getName(i);if(s)return this.descriptions.createDescription(i,s)}).nonNullable();return new gc(o,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new Sl(this.indexManager.allElements(e)))}};function Ux(t){return typeof t.$comment=="string"}function YD(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var Dl=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r={}){let n=r?.replacer,o=(s,a)=>this.replacer(s,a,r),i=n?(s,a)=>n(s,a,o):o;try{return this.currentDocument=Ze(e),JSON.stringify(e,i,r?.space)}finally{this.currentDocument=void 0}}deserialize(e,r={}){let n=JSON.parse(e);return this.linkNode(n,n,r),n}replacer(e,r,{refText:n,sourceText:o,textRegions:i,comments:s,uriConverter:a}){var c,u,d,h;if(!this.ignoreProperties.has(e))if(zt(r)){let g=r.ref,m=n?r.$refText:void 0;if(g){let b=Ze(g),T="";this.currentDocument&&this.currentDocument!==b&&(a?T=a(b.uri,r):T=b.uri.toString());let C=this.astNodeLocator.getAstNodePath(g);return{$ref:`${T}#${C}`,$refText:m}}else return{$error:(u=(c=r.error)===null||c===void 0?void 0:c.message)!==null&&u!==void 0?u:"Could not resolve reference",$refText:m}}else if(Ge(r)){let g;if(i&&(g=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&g?.$textRegion&&(g.$textRegion.documentURI=(d=this.currentDocument)===null||d===void 0?void 0:d.uri.toString())),o&&!e&&(g??(g=Object.assign({},r)),g.$sourceText=(h=r.$cstNode)===null||h===void 0?void 0:h.text),s){g??(g=Object.assign({},r));let m=this.commentProvider.getComment(r);m&&(g.$comment=m.replace(/\r/g,""))}return g??r}else return r}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),o=n.assignments={};return Object.keys(e).filter(i=>!i.startsWith("$")).forEach(i=>{let s=ga(e.$cstNode,i).map(r);s.length!==0&&(o[i]=s)}),e}}linkNode(e,r,n,o,i,s){for(let[c,u]of Object.entries(e))if(Array.isArray(u))for(let d=0;d<u.length;d++){let h=u[d];YD(h)?u[d]=this.reviveReference(e,c,r,h,n):Ge(h)&&this.linkNode(h,r,n,e,c,d)}else YD(u)?e[c]=this.reviveReference(e,c,r,u,n):Ge(u)&&this.linkNode(u,r,n,e,c);let a=e;a.$container=o,a.$containerProperty=i,a.$containerIndex=s}reviveReference(e,r,n,o,i){let s=o.$refText,a=o.$error;if(o.$ref){let c=this.getRefNode(n,o.$ref,i.uriConverter);if(Ge(c))return s||(s=this.nameProvider.getName(c)),{$refText:s??"",ref:c};a=c}if(a){let c={$refText:s??""};return c.error={container:e,property:r,message:a,reference:c},c}else return}getRefNode(e,r,n){try{let o=r.indexOf("#");if(o===0){let c=this.astNodeLocator.getAstNode(e,r.substring(1));return c||"Could not resolve path: "+r}if(o<0){let c=n?n(r):He.parse(r),u=this.langiumDocuments.getDocument(c);return u?u.parseResult.value:"Could not find document for URI: "+r}let i=n?n(r.substring(0,o)):He.parse(r.substring(0,o)),s=this.langiumDocuments.getDocument(i);if(!s)return"Could not find document for URI: "+r;if(o===r.length-1)return s.parseResult.value;let a=this.astNodeLocator.getAstNode(s.parseResult.value,r.substring(o+1));return a||"Could not resolve URI: "+r}catch(o){return String(o)}}};var Pl=class{get map(){return this.fileExtensionMap}constructor(e){this.languageIdMap=new Map,this.fileExtensionMap=new Map,this.textDocuments=e?.workspace.TextDocuments}register(e){let r=e.LanguageMetaData;for(let n of r.fileExtensions)this.fileExtensionMap.has(n)&&console.warn(`The file extension ${n} is used by multiple languages. It is now assigned to '${r.languageId}'.`),this.fileExtensionMap.set(n,e);this.languageIdMap.set(r.languageId,e),this.languageIdMap.size===1?this.singleton=e:this.singleton=void 0}getServices(e){var r,n;if(this.singleton!==void 0)return this.singleton;if(this.languageIdMap.size===0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let o=(n=(r=this.textDocuments)===null||r===void 0?void 0:r.get(e.toString()))===null||n===void 0?void 0:n.languageId;if(o!==void 0){let a=this.languageIdMap.get(o);if(a)return a}let i=Jt.extname(e),s=this.fileExtensionMap.get(i);if(!s)throw o?new Error(`The service registry contains no services for the extension '${i}' for language '${o}'.`):new Error(`The service registry contains no services for the extension '${i}'.`);return s}hasServices(e){try{return this.getServices(e),!0}catch{return!1}}get all(){return Array.from(this.languageIdMap.values())}};function jp(t){return{code:t}}var xc;(function(t){t.all=["fast","slow","built-in"]})(xc||(xc={}));var Nl=class{constructor(e){this.entries=new En,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[o,i]of Object.entries(e)){let s=i;if(Array.isArray(s))for(let a of s){let c={check:this.wrapValidationException(a,r),category:n};this.addEntry(o,c)}else if(typeof s=="function"){let a={check:this.wrapValidationException(s,r),category:n};this.addEntry(o,a)}}}wrapValidationException(e,r){return async(n,o,i)=>{try{await e.call(r,n,o,i)}catch(s){if(sn(s))throw s;console.error("An error occurred during validation:",s);let a=s instanceof Error?s.message:String(s);s instanceof Error&&s.stack&&console.error(s.stack),o("error","An error occurred during validation: "+a,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=xe(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(o=>r.includes(o.category))),n.map(o=>o.check)}};var Al=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=B.CancellationToken.None){let o=e.parseResult,i=[];if(await ut(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(o,i,r),r.stopAfterLexingErrors&&i.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===_o.LexingError})||(this.processParsingErrors(o,i,r),r.stopAfterParsingErrors&&i.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===_o.ParsingError}))||(this.processLinkingErrors(e,i,r),r.stopAfterLinkingErrors&&i.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===_o.LinkingError}))))return i;try{i.push(...await this.validateAst(o.value,r,n))}catch(s){if(sn(s))throw s;console.error("An error occurred during validation:",s)}return await ut(n),i}processLexingErrors(e,r,n){for(let o of e.lexerErrors){let i={severity:Up("error"),range:{start:{line:o.line-1,character:o.column-1},end:{line:o.line-1,character:o.column+o.length-1}},message:o.message,data:jp(_o.LexingError),source:this.getSource()};r.push(i)}}processParsingErrors(e,r,n){for(let o of e.parserErrors){let i;if(isNaN(o.token.startOffset)){if("previousToken"in o){let s=o.previousToken;if(isNaN(s.startOffset)){let a={line:0,character:0};i={start:a,end:a}}else{let a={line:s.endLine-1,character:s.endColumn};i={start:a,end:a}}}}else i=ks(o.token);if(i){let s={severity:Up("error"),range:i,message:o.message,data:jp(_o.ParsingError),source:this.getSource()};r.push(s)}}}processLinkingErrors(e,r,n){for(let o of e.references){let i=o.error;if(i){let s={node:i.container,property:i.property,index:i.index,data:{code:_o.LinkingError,containerType:i.container.$type,property:i.property,refText:i.reference.$refText}};r.push(this.toDiagnostic("error",i.message,s))}}}async validateAst(e,r,n=B.CancellationToken.None){let o=[],i=(s,a,c)=>{o.push(this.toDiagnostic(s,a,c))};return await Promise.all(Cr(e).map(async s=>{await ut(n);let a=this.validationRegistry.getChecks(s.$type,r.categories);for(let c of a)await c(s,i,n)})),o}toDiagnostic(e,r,n){return{message:r,range:XD(n),severity:Up(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function XD(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=Oo(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=ya(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function Up(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}var _o;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(_o||(_o={}));var Ol=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=Ze(e)){r??(r=this.nameProvider.getName(e));let o=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${o} has no name.`);let i,s=()=>{var a;return i??(i=Pi((a=this.nameProvider.getNameNode(e))!==null&&a!==void 0?a:e.$cstNode))};return{node:e,name:r,get nameSegment(){return s()},selectionSegment:Pi(e.$cstNode),type:e.$type,documentUri:n.uri,path:o}}},Il=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=B.CancellationToken.None){let n=[],o=e.parseResult.value;for(let i of Cr(o))await ut(r),pa(i).filter(s=>!Ei(s)).forEach(s=>{let a=this.createDescription(s);a&&n.push(a)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let o=Ze(e.container).uri;return{sourceUri:o,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:Pi(n),local:Jt.equals(r.documentUri,o)}}};var $l=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((o,i)=>{if(!o||i.length===0)return o;let s=i.indexOf(this.indexSeparator);if(s>0){let a=i.substring(0,s),c=parseInt(i.substring(s+1)),u=o[a];return u?.[c]}return o[i]},e)}};var Ye={};_e(Ye,nr(ns(),1));var Ml=class{constructor(e){this._ready=new _r,this.settings={},this.workspaceConfig=!1,this.onConfigurationSectionUpdateEmitter=new Ye.Emitter,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var r,n;this.workspaceConfig=(n=(r=e.capabilities.workspace)===null||r===void 0?void 0:r.configuration)!==null&&n!==void 0?n:!1}async initialized(e){if(this.workspaceConfig){if(e.register){let r=this.serviceRegistry.all;e.register({section:r.map(n=>this.toSectionName(n.LanguageMetaData.languageId))})}if(e.fetchConfiguration){let r=this.serviceRegistry.all.map(o=>({section:this.toSectionName(o.LanguageMetaData.languageId)})),n=await e.fetchConfiguration(r);r.forEach((o,i)=>{this.updateSectionConfiguration(o.section,n[i])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{let n=e.settings[r];this.updateSectionConfiguration(r,n),this.onConfigurationSectionUpdateEmitter.fire({section:r,configuration:n})})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){await this.ready;let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}get onConfigurationSectionUpdate(){return this.onConfigurationSectionUpdateEmitter.event}};var ei;(function(t){function e(r){return{dispose:async()=>await r()}}t.create=e})(ei||(ei={}));var Ll=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new En,this.documentPhaseListeners=new En,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=J.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.textDocuments=e.workspace.TextDocuments,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=B.CancellationToken.None){var o,i;for(let s of e){let a=s.uri.toString();if(s.state===J.Validated){if(typeof r.validation=="boolean"&&r.validation)s.state=J.IndexedReferences,s.diagnostics=void 0,this.buildState.delete(a);else if(typeof r.validation=="object"){let c=this.buildState.get(a),u=(o=c?.result)===null||o===void 0?void 0:o.validationChecks;if(u){let h=((i=r.validation.categories)!==null&&i!==void 0?i:xc.all).filter(g=>!u.includes(g));h.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:h})},result:c.result}),s.state=J.IndexedReferences)}}}else this.buildState.delete(a)}this.currentState=J.Changed,await this.emitUpdate(e.map(s=>s.uri),[]),await this.buildDocuments(e,r,n)}async update(e,r,n=B.CancellationToken.None){this.currentState=J.Changed;for(let s of r)this.langiumDocuments.deleteDocument(s),this.buildState.delete(s.toString()),this.indexManager.remove(s);for(let s of e){if(!this.langiumDocuments.invalidateDocument(s)){let c=this.langiumDocumentFactory.fromModel({$type:"INVALID"},s);c.state=J.Changed,this.langiumDocuments.addDocument(c)}this.buildState.delete(s.toString())}let o=xe(e).concat(r).map(s=>s.toString()).toSet();this.langiumDocuments.all.filter(s=>!o.has(s.uri.toString())&&this.shouldRelink(s,o)).forEach(s=>{this.serviceRegistry.getServices(s.uri).references.Linker.unlink(s),s.state=Math.min(s.state,J.ComputedScopes),s.diagnostics=void 0}),await this.emitUpdate(e,r),await ut(n);let i=this.sortDocuments(this.langiumDocuments.all.filter(s=>{var a;return s.state<J.Linked||!(!((a=this.buildState.get(s.uri.toString()))===null||a===void 0)&&a.completed)}).toArray());await this.buildDocuments(i,this.updateBuildOptions,n)}async emitUpdate(e,r){await Promise.all(this.updateListeners.map(n=>n(e,r)))}sortDocuments(e){var r;let n=new Map;for(let o of e)n.set(o,!!(!((r=this.textDocuments)===null||r===void 0)&&r.get(o.uri.toString())));return e.sort((o,i)=>{let s=n.get(o),a=n.get(i);return s&&!a?-1:!s&&a?1:0})}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),ei.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,J.Parsed,n,i=>this.langiumDocumentFactory.update(i,n)),await this.runCancelable(e,J.IndexedContent,n,i=>this.indexManager.updateContent(i,n)),await this.runCancelable(e,J.ComputedScopes,n,async i=>{let s=this.serviceRegistry.getServices(i.uri).references.ScopeComputation;i.precomputedScopes=await s.computeLocalScopes(i,n)}),await this.runCancelable(e,J.Linked,n,i=>this.serviceRegistry.getServices(i.uri).references.Linker.link(i,n)),await this.runCancelable(e,J.IndexedReferences,n,i=>this.indexManager.updateReferences(i,n));let o=e.filter(i=>this.shouldValidate(i));await this.runCancelable(o,J.Validated,n,i=>this.validate(i,n));for(let i of e){let s=this.buildState.get(i.uri.toString());s&&(s.completed=!0)}}prepareBuild(e,r){for(let n of e){let o=n.uri.toString(),i=this.buildState.get(o);(!i||i.completed)&&this.buildState.set(o,{completed:!1,options:r,result:i?.result})}}async runCancelable(e,r,n,o){let i=e.filter(a=>a.state<r);for(let a of i)await ut(n),await o(a),a.state=r,await this.notifyDocumentPhase(a,r,n);let s=e.filter(a=>a.state===r);await this.notifyBuildPhase(s,r,n),this.currentState=r}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),ei.create(()=>{this.buildPhaseListeners.delete(e,r)})}onDocumentPhase(e,r){return this.documentPhaseListeners.add(e,r),ei.create(()=>{this.documentPhaseListeners.delete(e,r)})}waitUntil(e,r,n){let o;if(r&&"path"in r?o=r:n=r,n??(n=B.CancellationToken.None),o){let i=this.langiumDocuments.getDocument(o);if(i&&i.state>e)return Promise.resolve(o)}return this.currentState>=e?Promise.resolve(void 0):n.isCancellationRequested?Promise.reject(Jn):new Promise((i,s)=>{let a=this.onBuildPhase(e,()=>{if(a.dispose(),c.dispose(),o){let u=this.langiumDocuments.getDocument(o);i(u?.uri)}else i(void 0)}),c=n.onCancellationRequested(()=>{a.dispose(),c.dispose(),s(Jn)})})}async notifyDocumentPhase(e,r,n){let o=this.documentPhaseListeners.get(r);for(let i of o)try{await i(e,n)}catch(s){if(!sn(s))throw s}}async notifyBuildPhase(e,r,n){if(e.length===0)return;let o=this.buildPhaseListeners.get(r);for(let i of o)await ut(n),await i(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,o;let i=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,s=this.getBuildOptions(e).validation,a=typeof s=="object"?s:void 0,c=await i.validateDocument(e,a,r);e.diagnostics?e.diagnostics.push(...c):e.diagnostics=c;let u=this.buildState.get(e.uri.toString());if(u){(n=u.result)!==null&&n!==void 0||(u.result={});let d=(o=a?.categories)!==null&&o!==void 0?o:xc.all;u.result.validationChecks?u.result.validationChecks.push(...d):u.result.validationChecks=[...d]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var ql=class{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new is,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=Ze(e).uri,o=[];return this.referenceIndex.forEach(i=>{i.forEach(s=>{Jt.equals(s.targetUri,n)&&s.targetPath===r&&o.push(s)})}),xe(o)}allElements(e,r){let n=xe(this.symbolIndex.keys());return r&&(n=n.filter(o=>!r||r.has(o))),n.map(o=>this.getFileDescriptions(o,e)).flat()}getFileDescriptions(e,r){var n;return r?this.symbolByTypeIndex.get(e,r,()=>{var i;return((i=this.symbolIndex.get(e))!==null&&i!==void 0?i:[]).filter(a=>this.astReflection.isSubtype(a.type,r))}):(n=this.symbolIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){let r=e.toString();this.symbolIndex.delete(r),this.symbolByTypeIndex.clear(r),this.referenceIndex.delete(r)}async updateContent(e,r=B.CancellationToken.None){let o=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r),i=e.uri.toString();this.symbolIndex.set(i,o),this.symbolByTypeIndex.clear(i)}async updateReferences(e,r=B.CancellationToken.None){let o=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),o)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(o=>!o.local&&r.has(o.targetUri.toString())):!1}};var Fl=class{constructor(e){this.initialBuildOptions={},this._ready=new _r,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}initialize(e){var r;this.folders=(r=e.workspaceFolders)!==null&&r!==void 0?r:void 0}initialized(e){return this.mutex.write(r=>{var n;return this.initializeWorkspace((n=this.folders)!==null&&n!==void 0?n:[],r)})}async initializeWorkspace(e,r=B.CancellationToken.None){let n=await this.performStartup(e);await ut(r),await this.documentBuilder.build(n,this.initialBuildOptions,r)}async performStartup(e){let r=this.serviceRegistry.all.flatMap(i=>i.LanguageMetaData.fileExtensions),n=[],o=i=>{n.push(i),this.langiumDocuments.hasDocument(i.uri)||this.langiumDocuments.addDocument(i)};return await this.loadAdditionalDocuments(e,o),await Promise.all(e.map(i=>[i,this.getRootFolder(i)]).map(async i=>this.traverseFolder(...i,r,o))),this._ready.resolve(),n}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return He.parse(e.uri)}async traverseFolder(e,r,n,o){let i=await this.fileSystemProvider.readDirectory(r);await Promise.all(i.map(async s=>{if(this.includeEntry(e,s,n)){if(s.isDirectory)await this.traverseFolder(e,s.uri,n,o);else if(s.isFile){let a=await this.langiumDocuments.getOrCreateDocument(s.uri);o(a)}}}))}includeEntry(e,r,n){let o=Jt.basename(r.uri);if(o.startsWith("."))return!1;if(r.isDirectory)return o!=="node_modules"&&o!=="out";if(r.isFile){let i=Jt.extname(r.uri);return n.includes(i)}return!1}};var Kl=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=Wx(r)?Object.values(r):r;this.chevrotainLexer=new ht(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(Wx(e))return e;let r=Hx(e)?Object.values(e.modes).flat():e,n={};return r.forEach(o=>n[o.name]=o),n}};function JD(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function Hx(t){return t&&"modes"in t&&"defaultMode"in t}function Wx(t){return!JD(t)&&!Hx(t)}Zi();function Gx(t,e,r){let n,o;typeof t=="string"?(o=e,n=r):(o=t.range.start,n=e),o||(o=ke.create(0,0));let i=eP(t),s=Yx(n),a=AG({lines:i,position:o,options:s});return LG({index:0,tokens:a,position:o})}function Vx(t,e){let r=Yx(e),n=eP(t);if(n.length===0)return!1;let o=n[0],i=n[n.length-1],s=r.start,a=r.end;return!!s?.exec(o)&&!!a?.exec(i)}function eP(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(ky)}var QD=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,NG=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function AG(t){var e,r,n;let o=[],i=t.position.line,s=t.position.character;for(let a=0;a<t.lines.length;a++){let c=a===0,u=a===t.lines.length-1,d=t.lines[a],h=0;if(c&&t.options.start){let m=(e=t.options.start)===null||e===void 0?void 0:e.exec(d);m&&(h=m.index+m[0].length)}else{let m=(r=t.options.line)===null||r===void 0?void 0:r.exec(d);m&&(h=m.index+m[0].length)}if(u){let m=(n=t.options.end)===null||n===void 0?void 0:n.exec(d);m&&(d=d.substring(0,m.index))}if(d=d.substring(0,MG(d)),zx(d,h)>=d.length){if(o.length>0){let m=ke.create(i,s);o.push({type:"break",content:"",range:be.create(m,m)})}}else{QD.lastIndex=h;let m=QD.exec(d);if(m){let b=m[0],T=m[1],C=ke.create(i,s+h),R=ke.create(i,s+h+b.length);o.push({type:"tag",content:T,range:be.create(C,R)}),h+=b.length,h=zx(d,h)}if(h<d.length){let b=d.substring(h),T=Array.from(b.matchAll(NG));o.push(...OG(T,b,i,s+h))}}i++,s=0}return o.length>0&&o[o.length-1].type==="break"?o.slice(0,-1):o}function OG(t,e,r,n){let o=[];if(t.length===0){let i=ke.create(r,n),s=ke.create(r,n+e.length);o.push({type:"text",content:e,range:be.create(i,s)})}else{let i=0;for(let a of t){let c=a.index,u=e.substring(i,c);u.length>0&&o.push({type:"text",content:e.substring(i,c),range:be.create(ke.create(r,i+n),ke.create(r,c+n))});let d=u.length+1,h=a[1];if(o.push({type:"inline-tag",content:h,range:be.create(ke.create(r,i+d+n),ke.create(r,i+d+h.length+n))}),d+=h.length,a.length===4){d+=a[2].length;let g=a[3];o.push({type:"text",content:g,range:be.create(ke.create(r,i+d+n),ke.create(r,i+d+g.length+n))})}else o.push({type:"text",content:"",range:be.create(ke.create(r,i+d+n),ke.create(r,i+d+n))});i=c+a[0].length}let s=e.substring(i);s.length>0&&o.push({type:"text",content:s,range:be.create(ke.create(r,i+n),ke.create(r,i+n+s.length))})}return o}var IG=/\S/,$G=/\s*$/;function zx(t,e){let r=t.substring(e).match(IG);return r?e+r.index:t.length}function MG(t){let e=t.match($G);if(e&&typeof e.index=="number")return e.index}function LG(t){var e,r,n,o;let i=ke.create(t.position.line,t.position.character);if(t.tokens.length===0)return new Wp([],be.create(i,i));let s=[];for(;t.index<t.tokens.length;){let u=qG(t,s[s.length-1]);u&&s.push(u)}let a=(r=(e=s[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:i,c=(o=(n=s[s.length-1])===null||n===void 0?void 0:n.range.end)!==null&&o!==void 0?o:i;return new Wp(s,be.create(a,c))}function qG(t,e){let r=t.tokens[t.index];if(r.type==="tag")return rP(t,!1);if(r.type==="text"||r.type==="inline-tag")return tP(t);FG(r,e),t.index++}function FG(t,e){if(e){let r=new Hp("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function tP(t){let e=t.tokens[t.index],r=e,n=e,o=[];for(;e&&e.type!=="break"&&e.type!=="tag";)o.push(KG(t)),n=e,e=t.tokens[t.index];return new Ul(o,be.create(r.range.start,n.range.end))}function KG(t){return t.tokens[t.index].type==="inline-tag"?rP(t,!0):nP(t)}function rP(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),o=t.tokens[t.index];if(o?.type==="text")if(e){let i=nP(t);return new jl(n,new Ul([i],i.range),e,be.create(r.range.start,i.range.end))}else{let i=tP(t);return new jl(n,i,e,be.create(r.range.start,i.range.end))}else{let i=r.range;return new jl(n,new Ul([],i),e,i)}}function nP(t){let e=t.tokens[t.index++];return new Hp(e.content,e.range)}function Yx(t){if(!t)return Yx({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:Bx(e,!0),end:Bx(r,!1),line:Bx(n,!0)}}function Bx(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?Fi(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var Wp=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=ZD(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let o=n.toMarkdown(e);r+=ZD(r)+o}return r.trim()}},jl=class{constructor(e,r,n,o){this.name=e,this.content=r,this.inline=n,this.range=o}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){var r,n;return(n=(r=e?.renderTag)===null||r===void 0?void 0:r.call(e,this))!==null&&n!==void 0?n:this.toMarkdownDefault(e)}toMarkdownDefault(e){let r=this.content.toMarkdown(e);if(this.inline){let i=jG(this.name,r,e??{});if(typeof i=="string")return i}let n="";e?.tag==="italic"||e?.tag===void 0?n="*":e?.tag==="bold"?n="**":e?.tag==="bold-italic"&&(n="***");let o=`${n}@${this.name}${n}`;return this.content.inlines.length===1?o=`${o} \u2014 ${r}`:this.content.inlines.length>1&&(o=`${o}
${r}`),this.inline?`{${o}}`:o}};function jG(t,e,r){var n,o;if(t==="linkplain"||t==="linkcode"||t==="link"){let i=e.indexOf(" "),s=e;if(i>0){let c=zx(e,i);s=e.substring(c),e=e.substring(0,i)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(s=`\`${s}\``),(o=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,s))!==null&&o!==void 0?o:UG(e,s)}}function UG(t,e){try{return He.parse(t,!0),`[${e}](${t})`}catch{return t}}var Ul=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],o=this.inlines[r+1];e+=n.toString(),o&&o.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let o=this.inlines[n],i=this.inlines[n+1];r+=o.toMarkdown(e),i&&i.range.start.line>o.range.start.line&&(r+=`
`)}return r}},Hp=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function ZD(t){return t.endsWith(`
`)?`
`:`

`}var Wl=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&Vx(r))return Gx(r).toMarkdown({renderLink:(o,i)=>this.documentationLinkRenderer(e,o,i),renderTag:o=>this.documentationTagRenderer(e,o)})}documentationLinkRenderer(e,r,n){var o;let i=(o=this.findNameInPrecomputedScopes(e,r))!==null&&o!==void 0?o:this.findNameInGlobalScope(e,r);if(i&&i.nameSegment){let s=i.nameSegment.range.start.line+1,a=i.nameSegment.range.start.character+1,c=i.documentUri.with({fragment:`L${s},${a}`});return`[${n}](${c.toString()})`}else return}documentationTagRenderer(e,r){}findNameInPrecomputedScopes(e,r){let o=Ze(e).precomputedScopes;if(!o)return;let i=e;do{let a=o.get(i).find(c=>c.name===r);if(a)return a;i=i.$container}while(i)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(o=>o.name===r)}};var Hl=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return Ux(e)?e.$comment:(r=ey(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};var Bl=class{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e){return Promise.resolve(this.syncParser.parse(e))}},Xx=class{constructor(e){this.threadCount=8,this.terminationDelay=200,this.workerPool=[],this.queue=[],this.hydrator=e.serializer.Hydrator}initializeWorkers(){for(;this.workerPool.length<this.threadCount;){let e=this.createWorker();e.onReady(()=>{if(this.queue.length>0){let r=this.queue.shift();r&&(e.lock(),r.resolve(e))}}),this.workerPool.push(e)}}async parse(e,r){let n=await this.acquireParserWorker(r),o=new _r,i,s=r.onCancellationRequested(()=>{i=setTimeout(()=>{this.terminateWorker(n)},this.terminationDelay)});return n.parse(e).then(a=>{let c=this.hydrator.hydrate(a);o.resolve(c)}).catch(a=>{o.reject(a)}).finally(()=>{s.dispose(),clearTimeout(i)}),o.promise}terminateWorker(e){e.terminate();let r=this.workerPool.indexOf(e);r>=0&&this.workerPool.splice(r,1)}async acquireParserWorker(e){this.initializeWorkers();for(let n of this.workerPool)if(n.ready)return n.lock(),n;let r=new _r;return e.onCancellationRequested(()=>{let n=this.queue.indexOf(r);n>=0&&this.queue.splice(n,1),r.reject(Jn)}),this.queue.push(r),r.promise}},Jx=class{get ready(){return this._ready}get onReady(){return this.onReadyEmitter.event}constructor(e,r,n,o){this.onReadyEmitter=new Ye.Emitter,this.deferred=new _r,this._ready=!0,this._parsing=!1,this.sendMessage=e,this._terminate=o,r(i=>{let s=i;this.deferred.resolve(s),this.unlock()}),n(i=>{this.deferred.reject(i),this.unlock()})}terminate(){this.deferred.reject(Jn),this._terminate()}lock(){this._ready=!1}unlock(){this._parsing=!1,this._ready=!0,this.onReadyEmitter.fire()}parse(e){if(this._parsing)throw new Error("Parser worker is busy");return this._parsing=!0,this.deferred=new _r,this.sendMessage(e),this.deferred.promise}};var zl=class{constructor(){this.previousTokenSource=new B.CancellationTokenSource,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();let r=new B.CancellationTokenSource;return this.previousTokenSource=r,this.enqueue(this.writeQueue,e,r.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,r,n){let o=new _r,i={action:r,deferred:o,cancellationToken:n??B.CancellationToken.None};return e.push(i),this.performNextOperation(),o.promise}async performNextOperation(){if(!this.done)return;let e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:r,deferred:n,cancellationToken:o})=>{try{let i=await Promise.resolve().then(()=>r(o));n.resolve(i)}catch(i){sn(i)?n.resolve(void 0):n.reject(i)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}};var Gl=class{constructor(e){this.grammarElementIdMap=new os,this.tokenTypeIdMap=new os,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors.map(r=>Object.assign(Object.assign({},r),{message:r.message})),parserErrors:e.parserErrors.map(r=>Object.assign(Object.assign({},r),{message:r.message})),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}createDehyrationContext(e){let r=new Map,n=new Map;for(let o of Cr(e))r.set(o,{});if(e.$cstNode)for(let o of Di(e.$cstNode))n.set(o,{});return{astNodes:r,cstNodes:n}}dehydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(n.$cstNode=this.dehydrateCstNode(e.$cstNode,r));for(let[o,i]of Object.entries(e))if(!o.startsWith("$"))if(Array.isArray(i)){let s=[];n[o]=s;for(let a of i)Ge(a)?s.push(this.dehydrateAstNode(a,r)):zt(a)?s.push(this.dehydrateReference(a,r)):s.push(a)}else Ge(i)?n[o]=this.dehydrateAstNode(i,r):zt(i)?n[o]=this.dehydrateReference(i,r):i!==void 0&&(n[o]=i);return n}dehydrateReference(e,r){let n={};return n.$refText=e.$refText,e.$refNode&&(n.$refNode=r.cstNodes.get(e.$refNode)),n}dehydrateCstNode(e,r){let n=r.cstNodes.get(e);return yu(e)?n.fullText=e.fullText:n.grammarSource=this.getGrammarElementId(e.grammarSource),n.hidden=e.hidden,n.astNode=r.astNodes.get(e.astNode),gr(e)?n.content=e.content.map(o=>this.dehydrateCstNode(o,r)):Tn(e)&&(n.tokenType=e.tokenType.name,n.offset=e.offset,n.length=e.length,n.startLine=e.range.start.line,n.startColumn=e.range.start.character,n.endLine=e.range.end.line,n.endColumn=e.range.end.character),n}hydrate(e){let r=e.value,n=this.createHydrationContext(r);return"$cstNode"in r&&this.hydrateCstNode(r.$cstNode,n),{lexerErrors:e.lexerErrors,parserErrors:e.parserErrors,value:this.hydrateAstNode(r,n)}}createHydrationContext(e){let r=new Map,n=new Map;for(let i of Cr(e))r.set(i,{});let o;if(e.$cstNode)for(let i of Di(e.$cstNode)){let s;"fullText"in i?(s=new lc(i.fullText),o=s):"content"in i?s=new ts:"tokenType"in i&&(s=this.hydrateCstLeafNode(i)),s&&(n.set(i,s),s.root=o)}return{astNodes:r,cstNodes:n}}hydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode&&(n.$cstNode=r.cstNodes.get(e.$cstNode));for(let[o,i]of Object.entries(e))if(!o.startsWith("$"))if(Array.isArray(i)){let s=[];n[o]=s;for(let a of i)Ge(a)?s.push(this.setParent(this.hydrateAstNode(a,r),n)):zt(a)?s.push(this.hydrateReference(a,n,o,r)):s.push(a)}else Ge(i)?n[o]=this.setParent(this.hydrateAstNode(i,r),n):zt(i)?n[o]=this.hydrateReference(i,n,o,r):i!==void 0&&(n[o]=i);return n}setParent(e,r){return e.$container=r,e}hydrateReference(e,r,n,o){return this.linker.buildReference(r,n,o.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,r,n=0){let o=r.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(o.grammarSource=this.getGrammarElement(e.grammarSource)),o.astNode=r.astNodes.get(e.astNode),gr(o))for(let i of e.content){let s=this.hydrateCstNode(i,r,n++);o.content.push(s)}return o}hydrateCstLeafNode(e){let r=this.getTokenType(e.tokenType),n=e.offset,o=e.length,i=e.startLine,s=e.startColumn,a=e.endLine,c=e.endColumn,u=e.hidden;return new es(n,o,{start:{line:i,character:s},end:{line:a,character:c}},r,u)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap();let r=this.grammarElementIdMap.getKey(e);if(r)return r;throw new Error("Invalid grammar element id: "+e)}createGrammarElementIdMap(){let e=0;for(let r of Cr(this.grammar))Oi(r)&&this.grammarElementIdMap.set(r,e++)}};function Vl(t){return{documentation:{CommentProvider:e=>new Hl(e),DocumentationProvider:e=>new Wl(e)},parser:{AsyncParser:e=>new Bl(e),GrammarConfig:e=>qy(e),LangiumParser:e=>Ax(e),CompletionParser:e=>Nx(e),ValueConverter:()=>new vl,TokenBuilder:()=>new yl,Lexer:e=>new Kl(e),ParserErrorMessageProvider:()=>new dc},workspace:{AstNodeLocator:()=>new $l,AstNodeDescriptionProvider:e=>new Ol(e),ReferenceDescriptionProvider:e=>new Il(e)},references:{Linker:e=>new Rl(e),NameProvider:()=>new Tl,ScopeProvider:e=>new El(e),ScopeComputation:e=>new kl(e),References:e=>new _l(e)},serializer:{Hydrator:e=>new Gl(e),JsonSerializer:e=>new Dl(e)},validation:{DocumentValidator:e=>new Al(e),ValidationRegistry:e=>new Nl(e)},shared:()=>t.shared}}function Yl(t){return{ServiceRegistry:e=>new Pl(e),workspace:{LangiumDocuments:e=>new bl(e),LangiumDocumentFactory:e=>new wl(e),DocumentBuilder:e=>new Ll(e),IndexManager:e=>new ql(e),WorkspaceManager:e=>new Fl(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new zl,ConfigurationProvider:e=>new Ml(e)}}}var wc;(function(t){t.merge=(e,r)=>Bp(Bp({},e),r)})(wc||(wc={}));function ss(t,e,r,n,o,i,s,a,c){let u=[t,e,r,n,o,i,s,a,c].reduce(Bp,{});return sP(u)}var Qx=Symbol("isProxy");function Xl(t){if(t&&t[Qx])for(let e of Object.values(t))Xl(e);return t}function sP(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,o)=>iP(n,o,t,e||r),getOwnPropertyDescriptor:(n,o)=>(iP(n,o,t,e||r),Object.getOwnPropertyDescriptor(n,o)),has:(n,o)=>o in t,ownKeys:()=>[...Reflect.ownKeys(t),Qx]});return r[Qx]=!0,r}var oP=Symbol();function iP(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===oP)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let o=r[e];t[e]=oP;try{t[e]=typeof o=="function"?o(n):sP(o,n)}catch(i){throw t[e]=i instanceof Error?i:void 0,i}return t[e]}else return}function Bp(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let o=t[r];o!==null&&n!==null&&typeof o=="object"&&typeof n=="object"?t[r]=Bp(o,n):t[r]=n}}return t}var Se={};uo(Se,{AstUtils:()=>tf,BiMap:()=>os,Cancellation:()=>B,ContextCache:()=>is,CstUtils:()=>Vd,DONE_RESULT:()=>$t,Deferred:()=>_r,Disposable:()=>ei,DisposableCache:()=>yc,DocumentCache:()=>Kp,EMPTY_STREAM:()=>No,ErrorWithLocation:()=>Ni,GrammarUtils:()=>cf,MultiMap:()=>En,OperationCancelled:()=>Jn,Reduction:()=>_s,RegExpUtils:()=>of,SimpleCache:()=>Cl,StreamImpl:()=>yr,TreeStreamImpl:()=>en,URI:()=>He,UriUtils:()=>Jt,WorkspaceCache:()=>vc,assertUnreachable:()=>Ao,delayNextTick:()=>Kx,interruptAndCheck:()=>ut,isOperationCancelled:()=>sn,loadGrammarFromJson:()=>Gp,setInterruptionPeriod:()=>HD,startCancelableOperation:()=>WD,stream:()=>xe});_e(Se,Ye);var zp=class{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}},Jl={fileSystemProvider:()=>new zp};var WG={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},HG={AstReflection:()=>new la};function BG(){let t=ss(Yl(Jl),HG),e=ss(Vl({shared:t}),WG);return t.ServiceRegistry.register(e),e}function Gp(t){var e;let r=BG(),n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,He.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}_e(Et,Se);var Fc=nr(fn(),1);function Lb(t,e){let r={stacks:t,tokens:e};return MV(r),r.stacks.flat().forEach(o=>{o.property=void 0}),x0(r.stacks).map(o=>o[o.length-1])}function qb(t){let{next:e,cardinalities:r,visited:n,plus:o}=t,i=[],s=e.feature;if(n.has(s))return[];n.add(s);let a,c=s;for(;c.$container;)if(tn(c.$container)){a=c.$container;break}else if(Oi(c.$container))c=c.$container;else break;if($y(c.cardinality)){let u=qc({next:{feature:c,type:e.type},cardinalities:r,visited:n,plus:o});for(let d of u)o.add(d.feature);i.push(...u)}if(a){let u=a.elements.indexOf(c);u!==void 0&&u<a.elements.length-1&&i.push(...v0({feature:a,type:e.type},u+1,r,n,o)),i.every(d=>Ki(d.feature.cardinality,d.feature)||Ki(r.get(d.feature))||o.has(d.feature))&&i.push(...qb({next:{feature:a,type:e.type},cardinalities:r,visited:n,plus:o}))}return i}function em(t){return Ge(t)&&(t={feature:t}),qc({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function qc(t){var e,r,n;let{next:o,cardinalities:i,visited:s,plus:a}=t;if(o===void 0)return[];let{feature:c,type:u}=o;if(tn(c)){if(s.has(c))return[];s.add(c)}if(tn(c))return v0(o,0,i,s,a).map(d=>Zh(d,c.cardinality,i));if(da(c)||fa(c))return c.elements.flatMap(d=>qc({next:{feature:d,type:u,property:o.property},cardinalities:i,visited:s,plus:a})).map(d=>Zh(d,c.cardinality,i));if(or(c)){let d={feature:c.terminal,type:u,property:(e=o.property)!==null&&e!==void 0?e:c.feature};return qc({next:d,cardinalities:i,visited:s,plus:a}).map(h=>Zh(h,c.cardinality,i))}else{if(_n(c))return qb({next:{feature:c,type:ji(c),property:(r=o.property)!==null&&r!==void 0?r:c.feature},cardinalities:i,visited:s,plus:a});if(kr(c)&&ft(c.rule.ref)){let d=c.rule.ref,h={feature:d.definition,type:d.fragment||d.dataType?void 0:(n=Ln(d))!==null&&n!==void 0?n:d.name,property:o.property};return qc({next:h,cardinalities:i,visited:s,plus:a}).map(g=>Zh(g,c.cardinality,i))}else return[o]}}function Zh(t,e,r){return r.set(t.feature,e),t}function v0(t,e,r,n,o){var i;let s=[],a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},s.push(...qc({next:a,cardinalities:r,visited:n,plus:o})),!!Ki((i=a.feature.cardinality)!==null&&i!==void 0?i:r.get(a.feature),a.feature)););return s}function MV(t){for(let e of t.tokens){let r=x0(t.stacks,e);t.stacks=r}}function x0(t,e){let r=[];for(let n of t)r.push(...LV(n,e));return r}function LV(t,e){let r=new Map,n=new Set(t.map(i=>i.feature).filter(qV)),o=[];for(;t.length>0;){let i=t.pop(),s=qb({next:i,cardinalities:r,plus:n,visited:new Set}).filter(a=>e?Fb(a.feature,e):!0);for(let a of s)o.push([...t,a]);if(!s.every(a=>Ki(a.feature.cardinality,a.feature)||Ki(r.get(a.feature))))break}return o}function qV(t){if(t.cardinality==="+")return!0;let e=Gr(t,or);return!!(e&&e.cardinality==="+")}function Fb(t,e){if(Gt(t))return t.value===e.image;if(kr(t))return FV(t.rule.ref,e);if(kn(t)){let r=Au(t);if(r)return Fb(r,e)}return!1}function FV(t,e){return ft(t)?em(t.definition).some(n=>Fb(n.feature,e)):vr(t)?Io(t).test(e.image):!1}function w0(t){let e=Array.from(new Set(t.flatMap(n=>{var o;return(o=n?.triggerCharacters)!==null&&o!==void 0?o:[]}))),r=Array.from(new Set(t.flatMap(n=>{var o;return(o=n?.allCommitCharacters)!==null&&o!==void 0?o:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var tm=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection,this.documentationProvider=e.documentation.DocumentationProvider}async getCompletion(e,r){let n=[],o=this.buildContexts(e,r.position),i=(c,u)=>{let d=this.fillCompletionItem(c,u);d&&n.push(d)},s=c=>Gt(c.feature)?c.feature.value:c.feature,a=[];for(let c of o)if(await Promise.all(xe(c.features).distinct(s).exclude(a).map(u=>this.completionFor(c,u,i))),a.push(...c.features),!this.continueCompletion(n))break;return Fc.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return xe(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:Fc.Position.create(0,0),end:e.positionAt(r)}),o=this.completionParser.parse(n),i=o.tokens;if(o.tokenIndex===0){let c=Pu(this.grammar),u=em({feature:c.definition,type:Ln(c)});return i.length>0?(i.shift(),Lb(u.map(d=>[d]),i)):u}let s=[...i].splice(o.tokenIndex);return Lb([o.elementStack.map(c=>({feature:c}))],s)}*buildContexts(e,r){var n,o;let i=e.parseResult.value.$cstNode;if(!i)return;let s=e.textDocument,a=s.getText(),c=s.offsetAt(r),u={document:e,textDocument:s,offset:c,position:r},d=this.findDataTypeRuleStart(i,c);if(d){let[p,f]=d,w=(n=vu(i,p))===null||n===void 0?void 0:n.astNode;yield Object.assign(Object.assign({},u),{node:w,tokenOffset:p,tokenEndOffset:f,features:this.findFeaturesAt(s,p)})}let{nextTokenStart:h,nextTokenEnd:g,previousTokenStart:m,previousTokenEnd:b}=this.backtrackToAnyToken(a,c),T=h;c<=h&&m!==void 0&&(T=m);let C=(o=vu(i,T))===null||o===void 0?void 0:o.astNode,R=!0;if(m!==void 0&&b!==void 0&&b===c&&(yield Object.assign(Object.assign({},u),{node:C,tokenOffset:m,tokenEndOffset:b,features:this.findFeaturesAt(s,m)}),R=this.performNextTokenCompletion(e,a.substring(m,b),m,b),R&&(yield Object.assign(Object.assign({},u),{node:C,tokenOffset:b,tokenEndOffset:b,features:this.findFeaturesAt(s,b)}))),C)R&&(yield Object.assign(Object.assign({},u),{node:C,tokenOffset:h,tokenEndOffset:g,features:this.findFeaturesAt(s,h)}));else{let p=Pu(this.grammar);if(!p)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},u),{tokenOffset:h,tokenEndOffset:g,features:em(p.definition)})}}performNextTokenCompletion(e,r,n,o){return/\P{L}$/u.test(r)}findDataTypeRuleStart(e,r){var n,o;let i=Mt(e,r,this.grammarConfig.nameRegexp),s=!!(!((n=Gr(i?.grammarSource,ft))===null||n===void 0)&&n.dataType);if(s){for(;s;)i=i?.container,s=!!(!((o=Gr(i?.grammarSource,ft))===null||o===void 0)&&o.dataType);if(i)return[i.offset,i.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let o;for(let i of n){if(i.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:o?o.startOffset:void 0,previousTokenEnd:o?o.endOffset+1:void 0};if(i.endOffset>=r)return{nextTokenStart:i.startOffset,nextTokenEnd:i.endOffset+1,previousTokenStart:o?o.startOffset:void 0,previousTokenEnd:o?o.endOffset+1:void 0};o=i}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:o?o.startOffset:void 0,previousTokenEnd:o?o.endOffset+1:void 0}}completionFor(e,r,n){if(Gt(r.feature))return this.completionForKeyword(e,r.feature,n);if(kn(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let o=Gr(r.feature,or),i=e.node;if(o&&i){r.type&&(i={$type:r.type,$container:i,$containerProperty:r.property},Su(this.astReflection,i));let s={reference:{$refText:""},container:i,property:o.feature};try{for(let a of this.getReferenceCandidates(s,e))n(e,this.createReferenceCompletionItem(a))}catch(a){console.error(a)}}}getReferenceCandidates(e,r){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){let r=this.nodeKindProvider.getCompletionItemKind(e),n=this.getReferenceDocumentation(e);return{nodeDescription:e,kind:r,documentation:n,detail:e.type,sortText:"0"}}getReferenceDocumentation(e){if(!e.node)return;let r=this.documentationProvider.getDocumentation(e.node);if(r)return{kind:"markdown",value:r}}completionForKeyword(e,r,n){this.filterKeyword(e,r)&&n(e,{label:r.value,kind:this.getKeywordCompletionItemKind(r),detail:"Keyword",sortText:"1"})}getKeywordCompletionItemKind(e){return Fc.CompletionItemKind.Keyword}filterKeyword(e,r){return/\p{L}/u.test(r.value)}fillCompletionItem(e,r){var n,o;let i;if(typeof r.label=="string")i=r.label;else if("node"in r){let u=this.nameProvider.getName(r.node);if(!u)return;i=u}else if("nodeDescription"in r)i=r.nodeDescription.name;else return;let s;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?s=r.textEdit.newText:typeof r.insertText=="string"?s=r.insertText:s=i;let a=(o=r.textEdit)!==null&&o!==void 0?o:this.buildCompletionTextEdit(e,i,s);return a?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:a,label:i}:void 0}buildCompletionTextEdit(e,r,n){let i=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(i,r)){let s=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:n,range:{start:s,end:a}}}else return}};var KV=nr(fn(),1);var b0=nr(fn(),1);var rm=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let o=n.$cstNode,i=Mt(o,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(i)return this.collectLocationLinks(i,r)}}collectLocationLinks(e,r){var n;let o=this.findLink(e);if(o)return[b0.LocationLink.create(o.targetDocument.textDocument.uri,((n=o.target.astNode.$cstNode)!==null&&n!==void 0?n:o.target).range,o.target.range,o.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.astNode){let n=Ze(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var A0=nr(fn(),1);var R0=nr(fn(),1);var nm=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let o=Mt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!o)return;let i=this.references.findDeclaration(o);if(i){let s=Jt.equals(Ze(i).uri,e.uri),a={documentUri:e.uri,includeDeclaration:s};return this.references.findReferences(i,a).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return R0.DocumentHighlight.create(e.segment.range)}};var om=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,o=this.nameProvider.getNameNode(r);if(o&&n){let i=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:i||o.text,range:n.range,selectionRange:o.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let o of $i(r)){let i=this.getSymbol(e,o);n.push(...i)}if(n.length>0)return n}};var fd=nr(fn(),1);var im=class{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock,this.serviceRegistry=e.ServiceRegistry;let r=!1;e.lsp.LanguageServer.onInitialize(n=>{var o,i;r=!!(!((i=(o=n.capabilities.workspace)===null||o===void 0?void 0:o.didChangeWatchedFiles)===null||i===void 0)&&i.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(n=>{r&&this.registerFileWatcher(e)})}registerFileWatcher(e){let r=xe(e.ServiceRegistry.all).flatMap(n=>n.LanguageMetaData.fileExtensions).map(n=>n.startsWith(".")?n.substring(1):n).distinct().toArray();if(r.length>0){let n=e.lsp.Connection,o={watchers:[{globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`}]};n?.client.register(fd.DidChangeWatchedFilesNotification.type,o)}}fireDocumentUpdate(e,r){e=e.filter(n=>this.serviceRegistry.hasServices(n)),this.workspaceManager.ready.then(()=>{this.workspaceLock.write(n=>this.documentBuilder.update(e,r,n))}).catch(n=>{console.error("Workspace initialization failed. Could not perform document update.",n)})}didChangeContent(e){this.fireDocumentUpdate([He.parse(e.document.uri)],[])}didChangeWatchedFiles(e){let r=xe(e.changes).filter(o=>o.type!==fd.FileChangeType.Deleted).distinct(o=>o.uri).map(o=>He.parse(o.uri)).toArray(),n=xe(e.changes).filter(o=>o.type===fd.FileChangeType.Deleted).distinct(o=>o.uri).map(o=>He.parse(o.uri)).toArray();this.fireDocumentUpdate(r,n)}};var pd=nr(fn(),1);var sm=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=o=>r.push(o);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let o=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(o){if(this.shouldProcessContent(o)){let i=Sr(o).iterator(),s;do if(s=i.next(),!s.done){let a=s.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,r),this.shouldProcessContent(a)||i.prune()}while(!s.done)}this.collectCommentFolding(e,o,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let o=r.$cstNode;if(o){let i=this.toFoldingRange(e,o);i&&n(i)}}collectCommentFolding(e,r,n){let o=r.$cstNode;if(o){for(let i of Qg(o))if(this.commentNames.includes(i.tokenType.name)){let s=this.toFoldingRange(e,i,pd.FoldingRangeKind.Comment);s&&n(s)}}}toFoldingRange(e,r,n){let o=r.range,i=o.start,s=o.end;if(!(s.line-i.line<2))return this.includeLastFoldingLine(r,n)||(s=e.textDocument.positionAt(e.textDocument.offsetAt({line:s.line,character:0})-1)),pd.FoldingRange.create(i.line,s.line,i.character,s.character,n)}includeLastFoldingLine(e,r){if(r===pd.FoldingRangeKind.Comment)return!1;let n=e.text,o=n.charAt(n.length-1);return!(o==="}"||o===")"||o==="]")}};var am=class{match(e,r){if(e.length===0)return!0;let n=!1,o,i=0,s=r.length;for(let a=0;a<s;a++){let c=r.charCodeAt(a),u=e.charCodeAt(i);if((c===u||this.toUpperCharCode(c)===this.toUpperCharCode(u))&&(n||(n=o===void 0||this.isWordTransition(o,c)),n&&i++,i===e.length))return!0;o=c}return!1}isWordTransition(e,r){return T0<=e&&e<=_0&&jV<=r&&r<=UV||e===k0&&r!==k0}toUpperCharCode(e){return T0<=e&&e<=_0?e-32:e}},T0=97,_0=122,jV=65,UV=90,k0=95;var hd=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,o;let i=(o=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||o===void 0?void 0:o.$cstNode;if(i){let s=e.textDocument.offsetAt(r.position),a=Mt(i,s,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>s){let c=this.references.findDeclaration(a);if(c)return this.getAstNodeHoverContent(c)}}}},cm=class extends hd{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var pn=nr(gt(),1);var Re=nr(fn(),1);var C0={[Re.SemanticTokenTypes.class]:0,[Re.SemanticTokenTypes.comment]:1,[Re.SemanticTokenTypes.enum]:2,[Re.SemanticTokenTypes.enumMember]:3,[Re.SemanticTokenTypes.event]:4,[Re.SemanticTokenTypes.function]:5,[Re.SemanticTokenTypes.interface]:6,[Re.SemanticTokenTypes.keyword]:7,[Re.SemanticTokenTypes.macro]:8,[Re.SemanticTokenTypes.method]:9,[Re.SemanticTokenTypes.modifier]:10,[Re.SemanticTokenTypes.namespace]:11,[Re.SemanticTokenTypes.number]:12,[Re.SemanticTokenTypes.operator]:13,[Re.SemanticTokenTypes.parameter]:14,[Re.SemanticTokenTypes.property]:15,[Re.SemanticTokenTypes.regexp]:16,[Re.SemanticTokenTypes.string]:17,[Re.SemanticTokenTypes.struct]:18,[Re.SemanticTokenTypes.type]:19,[Re.SemanticTokenTypes.typeParameter]:20,[Re.SemanticTokenTypes.variable]:21,[Re.SemanticTokenTypes.decorator]:22},WV={[Re.SemanticTokenModifiers.abstract]:1,[Re.SemanticTokenModifiers.async]:2,[Re.SemanticTokenModifiers.declaration]:4,[Re.SemanticTokenModifiers.defaultLibrary]:8,[Re.SemanticTokenModifiers.definition]:16,[Re.SemanticTokenModifiers.deprecated]:32,[Re.SemanticTokenModifiers.documentation]:64,[Re.SemanticTokenModifiers.modification]:128,[Re.SemanticTokenModifiers.readonly]:256,[Re.SemanticTokenModifiers.static]:512},E0={legend:{tokenTypes:Object.keys(C0),tokenModifiers:Object.keys(WV)},full:{delta:!0},range:!0};var S0;(function(t){function e(n,o){let i=new Map;Object.entries(C0).forEach(([c,u])=>i.set(u,c));let s=0,a=0;return r(n.data,5).map(c=>{s+=c[0],c[0]!==0&&(a=0),a+=c[1];let u=c[2];return{offset:o.textDocument.offsetAt({line:s,character:a}),tokenType:i.get(c[3]),tokenModifiers:c[4],text:o.textDocument.getText({start:{line:s,character:a},end:{line:s,character:a+u}})}})}t.decode=e;function r(n,o){let i=[];for(let s=0;s<n.length;s+=o){let a=n.slice(s,s+o);i.push(a)}return i}})(S0||(S0={}));function D0(t){let e=[],r=[];t.forEach(o=>{o?.triggerCharacters&&e.push(...o.triggerCharacters),o?.retriggerCharacters&&r.push(...o.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var um=class{constructor(e){this.onInitializeEmitter=new pn.Emitter,this.onInitializedEmitter=new pn.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){Xl(this.services),this.services.ServiceRegistry.all.forEach(e=>Xl(e))}hasService(e){return this.services.ServiceRegistry.all.some(n=>e(n)!==void 0)}buildInitializeResult(e){var r,n,o,i;let s=this.services.lsp.DocumentUpdateHandler,a=(r=this.services.lsp.FileOperationHandler)===null||r===void 0?void 0:r.fileOperationOptions,c=this.services.ServiceRegistry.all,u=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.Formatter}),d=c.map(W=>{var I,re;return(re=(I=W.lsp)===null||I===void 0?void 0:I.Formatter)===null||re===void 0?void 0:re.formatOnTypeOptions}).find(W=>!!W),h=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.CodeActionProvider}),g=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.SemanticTokenProvider}),m=(o=(n=this.services.lsp)===null||n===void 0?void 0:n.ExecuteCommandHandler)===null||o===void 0?void 0:o.commands,b=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.DocumentLinkProvider}),T=D0(c.map(W=>{var I,re;return(re=(I=W.lsp)===null||I===void 0?void 0:I.SignatureHelp)===null||re===void 0?void 0:re.signatureHelpOptions})),C=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.TypeProvider}),R=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.ImplementationProvider}),p=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.CompletionProvider}),f=w0(c.map(W=>{var I,re;return(re=(I=W.lsp)===null||I===void 0?void 0:I.CompletionProvider)===null||re===void 0?void 0:re.completionOptions})),w=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.ReferencesProvider}),O=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.DocumentSymbolProvider}),G=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.DefinitionProvider}),it=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.DocumentHighlightProvider}),Qe=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.FoldingRangeProvider}),tr=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.HoverProvider}),Wt=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.RenameProvider}),q=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.CallHierarchyProvider}),D=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.TypeHierarchyProvider}),V=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.CodeLensProvider}),U=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.DeclarationProvider}),we=this.hasService(W=>{var I;return(I=W.lsp)===null||I===void 0?void 0:I.InlayHintProvider}),te=(i=this.services.lsp)===null||i===void 0?void 0:i.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:a},executeCommandProvider:m&&{commands:m},textDocumentSync:{change:pn.TextDocumentSyncKind.Incremental,openClose:!0,save:!!s.didSaveDocument,willSave:!!s.willSaveDocument,willSaveWaitUntil:!!s.willSaveDocumentWaitUntil},completionProvider:p?f:void 0,referencesProvider:w,documentSymbolProvider:O,definitionProvider:G,typeDefinitionProvider:C,documentHighlightProvider:it,codeActionProvider:h,documentFormattingProvider:u,documentRangeFormattingProvider:u,documentOnTypeFormattingProvider:d,foldingRangeProvider:Qe,hoverProvider:tr,renameProvider:Wt?{prepareProvider:!0}:void 0,semanticTokensProvider:g?E0:void 0,signatureHelpProvider:T,implementationProvider:R,callHierarchyProvider:q?{}:void 0,typeHierarchyProvider:D?{}:void 0,documentLinkProvider:b?{resolveProvider:!1}:void 0,codeLensProvider:V?{resolveProvider:!1}:void 0,declarationProvider:U,inlayHintProvider:we?{resolveProvider:!1}:void 0,workspaceSymbolProvider:te?{resolveProvider:!!te.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){let r=this.services.lsp.Connection,n=r?Object.assign(Object.assign({},e),{register:o=>r.client.register(pn.DidChangeConfigurationNotification.type,o),fetchConfiguration:o=>r.workspace.getConfiguration(o)}):e;this.services.workspace.ConfigurationProvider.initialized(n).catch(o=>console.error("Error in ConfigurationProvider initialization:",o)),this.services.workspace.WorkspaceManager.initialized(e).catch(o=>console.error("Error in WorkspaceManager initialization:",o))}};function P0(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");HV(e,t),BV(e,t),zV(e,t),GV(e,t),VV(e,t),XV(e,t),JV(e,t),QV(e,t),ZV(e,t),t3(e,t),n3(e,t),o3(e,t),YV(e,t),i3(e,t),r3(e,t),s3(e,t),a3(e,t),u3(e,t),d3(e,t),h3(e,t),m3(e,t),f3(e,t),l3(e,t),c3(e,t),e3(e,t),p3(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>{t.lsp.LanguageServer.initialized(n)}),t.workspace.TextDocuments.listen(e),e.listen()}function HV(t,e){let r=e.lsp.DocumentUpdateHandler,n=e.workspace.TextDocuments;r.didOpenDocument&&n.onDidOpen(o=>r.didOpenDocument(o)),r.didChangeContent&&n.onDidChangeContent(o=>r.didChangeContent(o)),r.didCloseDocument&&n.onDidClose(o=>r.didCloseDocument(o)),r.didSaveDocument&&n.onDidSave(o=>r.didSaveDocument(o)),r.willSaveDocument&&n.onWillSave(o=>r.willSaveDocument(o)),r.willSaveDocumentWaitUntil&&n.onWillSaveWaitUntil(o=>r.willSaveDocumentWaitUntil(o)),r.didChangeWatchedFiles&&t.onDidChangeWatchedFiles(o=>r.didChangeWatchedFiles(o))}function BV(t,e){let r=e.lsp.FileOperationHandler;r&&(r.didCreateFiles&&t.workspace.onDidCreateFiles(n=>r.didCreateFiles(n)),r.didRenameFiles&&t.workspace.onDidRenameFiles(n=>r.didRenameFiles(n)),r.didDeleteFiles&&t.workspace.onDidDeleteFiles(n=>r.didDeleteFiles(n)),r.willCreateFiles&&t.workspace.onWillCreateFiles(n=>r.willCreateFiles(n)),r.willRenameFiles&&t.workspace.onWillRenameFiles(n=>r.willRenameFiles(n)),r.willDeleteFiles&&t.workspace.onWillDeleteFiles(n=>r.willDeleteFiles(n)))}function zV(t,e){let r=e.workspace.DocumentBuilder;r.onUpdate(async(n,o)=>{for(let i of o)t.sendDiagnostics({uri:i.toString(),diagnostics:[]})}),r.onDocumentPhase(J.Validated,async n=>{n.diagnostics&&t.sendDiagnostics({uri:n.uri.toString(),diagnostics:n.diagnostics})})}function GV(t,e){t.onCompletion(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(n,o,i)},e,J.IndexedReferences))}function VV(t,e){t.onReferences(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(n,o,i)},e,J.IndexedReferences))}function YV(t,e){t.onCodeAction(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(n,o,i)},e,J.Validated))}function XV(t,e){t.onDocumentSymbol(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(n,o,i)},e,J.Parsed))}function JV(t,e){t.onDefinition(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(n,o,i)},e,J.IndexedReferences))}function QV(t,e){t.onTypeDefinition(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(n,o,i)},e,J.IndexedReferences))}function ZV(t,e){t.onImplementation(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(n,o,i)},e,J.IndexedReferences))}function e3(t,e){t.onDeclaration(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(n,o,i)},e,J.IndexedReferences))}function t3(t,e){t.onDocumentHighlight(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(n,o,i)},e,J.IndexedReferences))}function r3(t,e){t.onHover(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(n,o,i)},e,J.IndexedReferences))}function n3(t,e){t.onFoldingRanges(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(n,o,i)},e,J.Parsed))}function o3(t,e){t.onDocumentFormatting(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocument(n,o,i)},e,J.Parsed)),t.onDocumentRangeFormatting(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(n,o,i)},e,J.Parsed)),t.onDocumentOnTypeFormatting(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(n,o,i)},e,J.Parsed))}function i3(t,e){t.onRenameRequest(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.rename(n,o,i)},e,J.IndexedReferences)),t.onPrepareRename(dr((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.RenameProvider)===null||a===void 0?void 0:a.prepareRename(n,o,i)},e,J.IndexedReferences))}function s3(t,e){t.languages.inlayHint.on(So((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.InlayHintProvider)===null||a===void 0?void 0:a.getInlayHints(n,o,i)},e,J.IndexedReferences))}function a3(t,e){let r={data:[]};t.languages.semanticTokens.on(So((n,o,i,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(o,i,s):r},e,J.IndexedReferences)),t.languages.semanticTokens.onDelta(So((n,o,i,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(o,i,s):r},e,J.IndexedReferences)),t.languages.semanticTokens.onRange(So((n,o,i,s)=>{var a;return!((a=n.lsp)===null||a===void 0)&&a.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(o,i,s):r},e,J.IndexedReferences))}function c3(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function u3(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,o)=>{var i;try{return await r.executeCommand(n.command,(i=n.arguments)!==null&&i!==void 0?i:[],o)}catch(s){return Co(s)}})}function l3(t,e){t.onDocumentLinks(So((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.DocumentLinkProvider)===null||a===void 0?void 0:a.getDocumentLinks(n,o,i)},e,J.Parsed))}function d3(t,e){t.onSignatureHelp(So((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(n,o,i)},e,J.IndexedReferences))}function f3(t,e){t.onCodeLens(So((r,n,o,i)=>{var s,a;return(a=(s=r.lsp)===null||s===void 0?void 0:s.CodeLensProvider)===null||a===void 0?void 0:a.provideCodeLens(n,o,i)},e,J.IndexedReferences))}function p3(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){let o=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(s,a)=>{try{return await o.waitUntil(J.IndexedContent,a),await n.getSymbols(s,a)}catch(c){return Co(c)}});let i=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);i&&t.onWorkspaceSymbolResolve(async(s,a)=>{try{return await o.waitUntil(J.IndexedContent,a),await i(s,a)}catch(c){return Co(c)}})}}function h3(t,e){t.languages.callHierarchy.onPrepare(So(async(r,n,o,i)=>{var s;if(!((s=r.lsp)===null||s===void 0)&&s.CallHierarchyProvider){let a=await r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,o,i);return a??null}return null},e,J.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(lm(async(r,n,o)=>{var i;if(!((i=r.lsp)===null||i===void 0)&&i.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.incomingCalls(n,o);return s??null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(lm(async(r,n,o)=>{var i;if(!((i=r.lsp)===null||i===void 0)&&i.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.outgoingCalls(n,o);return s??null}return null},e))}function m3(t,e){e.ServiceRegistry.all.some(r=>{var n;return(n=r.lsp)===null||n===void 0?void 0:n.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(So(async(r,n,o,i)=>{var s,a;let c=await((a=(s=r.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||a===void 0?void 0:a.prepareTypeHierarchy(n,o,i));return c??null},e,J.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(lm(async(r,n,o)=>{var i,s;let a=await((s=(i=r.lsp)===null||i===void 0?void 0:i.TypeHierarchyProvider)===null||s===void 0?void 0:s.supertypes(n,o));return a??null},e)),t.languages.typeHierarchy.onSubtypes(lm(async(r,n,o)=>{var i,s;let a=await((s=(i=r.lsp)===null||i===void 0?void 0:i.TypeHierarchyProvider)===null||s===void 0?void 0:s.subtypes(n,o));return a??null},e)))}function lm(t,e){let r=e.ServiceRegistry;return async(n,o)=>{let i=He.parse(n.item.uri),s=await Kb(e,o,i,J.IndexedReferences);if(s)return s;if(!r.hasServices(i)){let c=`Could not find service instance for uri: '${i}'`;return console.debug(c),Co(new Error(c))}let a=r.getServices(i);try{return await t(a,n,o)}catch(c){return Co(c)}}}function So(t,e,r){let n=e.workspace.LangiumDocuments,o=e.ServiceRegistry;return async(i,s)=>{let a=He.parse(i.textDocument.uri),c=await Kb(e,s,a,r);if(c)return c;if(!o.hasServices(a)){let d=`Could not find service instance for uri: '${a}'`;return console.debug(d),Co(new Error(d))}let u=o.getServices(a);try{let d=await n.getOrCreateDocument(a);return await t(u,d,i,s)}catch(d){return Co(d)}}}function dr(t,e,r){let n=e.workspace.LangiumDocuments,o=e.ServiceRegistry;return async(i,s)=>{let a=He.parse(i.textDocument.uri),c=await Kb(e,s,a,r);if(c)return c;if(!o.hasServices(a))return console.debug(`Could not find service instance for uri: '${a.toString()}'`),null;let u=o.getServices(a);try{let d=await n.getOrCreateDocument(a);return await t(u,d,i,s)}catch(d){return Co(d)}}}async function Kb(t,e,r,n){if(n!==void 0){let o=t.workspace.DocumentBuilder;try{await o.waitUntil(n,r,e)}catch(i){return Co(i)}}}function Co(t){if(sn(t))return new pn.ResponseError(pn.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof pn.ResponseError)return t;throw t}var fm=nr(fn(),1),dm=class{getSymbolKind(e){return fm.SymbolKind.Field}getCompletionItemKind(e){return fm.CompletionItemKind.Reference}};var N0=nr(fn(),1);var pm=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let o=Mt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return o?this.getReferences(o,r,e):[]}getReferences(e,r,n){let o=[],i=this.references.findDeclaration(e);if(i){let s={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(i,s).forEach(a=>{o.push(N0.Location.create(a.sourceUri.toString(),a.segment.range))})}return o}};Zi();var Kc=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},o=e.parseResult.value.$cstNode;if(!o)return;let i=e.textDocument.offsetAt(r.position),s=Mt(o,i,this.grammarConfig.nameRegexp);if(!s)return;let a=this.references.findDeclaration(s);if(!a)return;let c={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(a,c).forEach(d=>{let h=on.replace(d.segment.range,r.newName),g=d.sourceUri.toString();n[g]?n[g].push(h):n[g]=[h]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,o=e.textDocument.offsetAt(r);if(n&&o){let i=Mt(n,o,this.grammarConfig.nameRegexp);if(!i)return;if(this.references.findDeclaration(i)||this.isNameNode(i))return i.range}}isNameNode(e){return e?.astNode&&Fp(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var hm=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=B.CancellationToken.None){let n=[],o=e.query.toLowerCase();for(let i of this.indexManager.allElements())if(await ut(r),this.fuzzyMatcher.match(o,i.name)){let s=this.getWorkspaceSymbol(i);s&&n.push(s)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};function O0(t){return wc.merge(Vl(t),g3(t))}function g3(t){return{lsp:{CompletionProvider:e=>new tm(e),DocumentSymbolProvider:e=>new om(e),HoverProvider:e=>new cm(e),FoldingRangeProvider:e=>new sm(e),ReferencesProvider:e=>new pm(e),DefinitionProvider:e=>new rm(e),DocumentHighlightProvider:e=>new nm(e),RenameProvider:e=>new Kc(e)},shared:()=>t.shared}}function I0(t){return wc.merge(Yl(t),y3(t))}function y3(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new um(e),DocumentUpdateHandler:e=>new im(e),WorkspaceSymbolProvider:e=>new hm(e),NodeKindProvider:()=>new dm,FuzzyMatcher:()=>new am},workspace:{TextDocuments:()=>new A0.TextDocuments(Zo)}}}var mm=class{get commands(){return Array.from(this.registeredCommands.keys())}constructor(){this.registeredCommands=new Map,this.registerCommands(this.createCommandAcceptor())}async executeCommand(e,r,n=B.CancellationToken.None){let o=this.registeredCommands.get(e);if(o)return o(r,n)}createCommandAcceptor(){return(e,r)=>this.registeredCommands.set(e,r)}};var gm=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new jb(e,this.collector)}formatDocument(e,r){let n=e.parseResult;return n.lexerErrors.length===0&&n.parserErrors.length===0?this.doDocumentFormat(e,r.options):[]}isFormatRangeErrorFree(e,r){let n=e.parseResult;return n.lexerErrors.length||n.parserErrors.length?Math.min(...n.lexerErrors.map(i=>{var s;return(s=i.line)!==null&&s!==void 0?s:Number.MAX_VALUE}),...n.parserErrors.map(i=>{var s;return(s=i.token.startLine)!==null&&s!==void 0?s:Number.MAX_VALUE}))>r.end.line:!0}formatDocumentRange(e,r){return this.isFormatRangeErrorFree(e,r.range)?this.doDocumentFormat(e,r.options,r.range):[]}formatDocumentOnType(e,r){let n={start:{character:0,line:r.position.line},end:r.position};return this.isFormatRangeErrorFree(e,n)?this.doDocumentFormat(e,r.options,n):[]}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let o=new Map,i=(a,c,u)=>{var d,h;let g=this.nodeModeToKey(a,c),m=o.get(g),b=(d=u.options.priority)!==null&&d!==void 0?d:0,T=(h=m?.options.priority)!==null&&h!==void 0?h:0;(!m||T<=b)&&o.set(g,u)};this.collector=i,this.iterateAstFormatting(e,n);let s=this.iterateCstFormatting(e,o,r,n);return this.avoidOverlappingEdits(e.textDocument,s)}avoidOverlappingEdits(e,r){let n=[];for(let o of r){let i=n[n.length-1];if(i){let s=e.offsetAt(o.range.start),a=e.offsetAt(i.range.end);s<a&&n.pop()}n.push(o)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let o=Sr(n).iterator(),i;do if(i=o.next(),!i.done){let s=i.value;this.insideRange(s.$cstNode.range,r)?this.format(s):o.prune()}while(!i.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return!0}iterateCstFormatting(e,r,n,o){let i={indentation:0,options:n,document:e.textDocument},s=[],c=this.iterateCstTree(e,i).iterator(),u,d;do if(d=c.next(),!d.done){let h=d.value,g=Tn(h),m=this.nodeModeToKey(h,"prepend"),b=r.get(m);if(r.delete(m),b){let R=this.createTextEdit(u,h,b,i);for(let p of R)p&&this.insideRange(p.range,o)&&s.push(p)}let T=this.nodeModeToKey(h,"append"),C=r.get(T);if(r.delete(T),C){let R=ty(h);if(R){let p=this.createTextEdit(h,R,C,i);for(let f of p)f&&this.insideRange(f.range,o)&&s.push(f)}}if(!b&&h.hidden){let R=this.createHiddenTextEdits(u,h,void 0,i);for(let p of R)p&&this.insideRange(p.range,o)&&s.push(p)}g&&(u=h)}while(!d.done);return s}createHiddenTextEdits(e,r,n,o){var i;let s=r.range.start.line;if(e&&e.range.end.line===s)return[];let a=[],c={start:{character:0,line:s},end:r.range.start},u=o.document.getText(c),d=this.findFittingMove(c,(i=n?.moves)!==null&&i!==void 0?i:[],o),h=this.getExistingIndentationCharacterCount(u,o),m=this.getIndentationCharacterCount(o,d)-h;if(m===0)return[];let b="";m>0&&(b=(o.options.insertSpaces?" ":"	").repeat(m));let T=r.text.split(`
`);T[0]=u+T[0];for(let C=0;C<T.length;C++){let R=s+C,p={character:0,line:R};if(m>0)a.push({newText:b,range:{start:p,end:p}});else{let f=T[C],w=0;for(;w<f.length;w++){let O=f.charAt(w);if(O!==" "&&O!=="	")break}a.push({newText:"",range:{start:p,end:{line:R,character:Math.min(w,Math.abs(m))}}})}}return a}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,o){var i;if(r.hidden)return this.createHiddenTextEdits(e,r,n,o);let s={start:(i=e?.range.end)!==null&&i!==void 0?i:{character:0,line:0},end:r.range.start},a=this.findFittingMove(s,n.moves,o);if(!a)return[];let c=a.characters,u=a.lines,d=a.tabs,h=o.indentation;o.indentation+=d??0;let g=[];return c!==void 0?g.push(this.createSpaceTextEdit(s,c,n.options)):u!==void 0?g.push(this.createLineTextEdit(s,u,o,n.options)):d!==void 0&&g.push(this.createTabTextEdit(s,!!e,o)),Tn(r)&&(o.indentation=h),g}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let i=e.end.character-e.start.character;r=this.fitIntoOptions(r,i,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,o){let i=e.end.line-e.start.line;r=this.fitIntoOptions(r,i,o);let a=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${a}`,range:e}}createTabTextEdit(e,r,n){let i=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),s=r?1:0,a=Math.max(e.end.line-e.start.line,s);return{newText:`${`
`.repeat(a)}${i}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let o=e.end.line-e.start.line;for(let i of r){if(i.lines!==void 0&&o<=i.lines)return i;if(i.lines===void 0&&o===0)return i}return r[r.length-1]}iterateCstTree(e,r){let o=e.parseResult.value.$cstNode;return o?new en(o,i=>this.iterateCst(i,r)):No}iterateCst(e,r){if(!gr(e))return No;let n=r.indentation;return new yr(()=>({index:0}),o=>o.index<e.content.length?{done:!1,value:e.content[o.index++]}:(r.indentation=n,$t))}},jb=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new Nn(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new Nn(r,this.collector)}property(e,r){let n=Oo(this.astNode.$cstNode,e,r);return new Nn(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let o=ga(this.astNode.$cstNode,n);r.push(...o)}return new Nn(r,this.collector)}keyword(e,r){let n=ya(this.astNode.$cstNode,e,r);return new Nn(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let o=sf(this.astNode.$cstNode,n);r.push(...o)}return new Nn(r,this.collector)}cst(e){return new Nn([...e],this.collector)}interior(e,r){let n=e.nodes,o=r.nodes;if(n.length!==1||o.length!==1)return new Nn([],this.collector);let i=n[0],s=o[0];if(i.offset>s.offset){let a=i;i=s,s=a}return new Nn(ry(i,s),this.collector)}},Nn=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}},fs;(function(t){function e(...d){return{options:{},moves:d.flatMap(h=>h.moves).sort(u)}}t.fit=e;function r(d){return o(0,d)}t.noSpace=r;function n(d){return o(1,d)}t.oneSpace=n;function o(d,h){return{options:h??{},moves:[{characters:d}]}}t.spaces=o;function i(d){return s(1,d)}t.newLine=i;function s(d,h){return{options:h??{},moves:[{lines:d}]}}t.newLines=s;function a(d){return{options:d??{},moves:[{tabs:1,lines:1}]}}t.indent=a;function c(d){return{options:d??{},moves:[{tabs:0}]}}t.noIndent=c;function u(d,h){var g,m,b,T,C,R;let p=(g=d.lines)!==null&&g!==void 0?g:0,f=(m=h.lines)!==null&&m!==void 0?m:0,w=(b=d.tabs)!==null&&b!==void 0?b:0,O=(T=h.tabs)!==null&&T!==void 0?T:0,G=(C=d.characters)!==null&&C!==void 0?C:0,it=(R=h.characters)!==null&&R!==void 0?R:0;return p<f?-1:p>f?1:w<O?-1:w>O?1:G<it?-1:G>it?1:0}})(fs||(fs={}));var v3=nr(fn(),1);var _i=nr(XL(),1);var $_="Annotation";var M_="ApplicationConfig";var L_="ArrowStyle";var Mg="Atom";var q_="Box";var F_="Device";var K_="Edge";var Md="Entity";function Fg(t){return QL.isInstance(t,Md)}var j_="Enum";var U_="EnumRow";var W_="Field";var Lg="Icon";var H_="MaxValidation";var B_="MinValidation";var Ld="Molecule";function JL(t){return QL.isInstance(t,Ld)}var qg="Organism";var z_="Page";var G_="Pagination";var V_="Position";var Y_="Relationship";var X_="RelationshipRow";var J_="Style";var Q_="YadlModel";var qd=class extends Ci{getAllTypes(){return[$_,M_,L_,Mg,q_,F_,K_,Md,j_,U_,W_,Lg,H_,B_,Ld,qg,z_,G_,V_,Y_,X_,J_,Q_]}computeIsSubtype(e,r){switch(e){default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"ApplicationConfig:entities":case"Entity:superType":case"Pagination:entity":case"RelationshipRow:destination":case"RelationshipRow:source":return Md;case"Edge:destination":case"Edge:source":return Lg;case"Molecule:atom":return Mg;case"Organism:atom":return Ld;case"Page:atom":return qg;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case $_:return{name:$_,properties:[{name:"arrowStyle"},{name:"label"},{name:"position"}]};case M_:return{name:M_,properties:[{name:"applicationType"},{name:"authenticationType"},{name:"baseName"},{name:"clientFramework"},{name:"databaseType"},{name:"entities",defaultValue:[]},{name:"name"}]};case L_:return{name:L_,properties:[{name:"bottom"},{name:"left"},{name:"right"},{name:"top"},{name:"transform"}]};case Mg:return{name:Mg,properties:[{name:"name"}]};case q_:return{name:q_,properties:[{name:"boxes",defaultValue:[]},{name:"icon"},{name:"label"},{name:"position"},{name:"style"}]};case F_:return{name:F_,properties:[{name:"position"},{name:"type"}]};case K_:return{name:K_,properties:[{name:"destination"},{name:"source"}]};case Md:return{name:Md,properties:[{name:"fields",defaultValue:[]},{name:"name"},{name:"position"},{name:"superType"}]};case j_:return{name:j_,properties:[{name:"name"},{name:"values",defaultValue:[]}]};case U_:return{name:U_,properties:[{name:"name"},{name:"value"}]};case W_:return{name:W_,properties:[{name:"isRequired",defaultValue:!1},{name:"many",defaultValue:!1},{name:"max"},{name:"min"},{name:"name"},{name:"unique",defaultValue:!1}]};case Lg:return{name:Lg,properties:[{name:"icon"},{name:"name"},{name:"position"}]};case H_:return{name:H_,properties:[{name:"value"}]};case B_:return{name:B_,properties:[{name:"value"}]};case Ld:return{name:Ld,properties:[{name:"atom"},{name:"name"}]};case qg:return{name:qg,properties:[{name:"atom"},{name:"name"}]};case z_:return{name:z_,properties:[{name:"atom"},{name:"name"}]};case G_:return{name:G_,properties:[{name:"entity"},{name:"paginateType"}]};case V_:return{name:V_,properties:[{name:"isNegativeX",defaultValue:!1},{name:"isNegativeY",defaultValue:!1},{name:"x"},{name:"y"}]};case Y_:return{name:Y_,properties:[{name:"relationships",defaultValue:[]},{name:"relationshipType"}]};case X_:return{name:X_,properties:[{name:"destination"},{name:"source"}]};case J_:return{name:J_,properties:[{name:"background"},{name:"color"},{name:"height"},{name:"width"}]};case Q_:return{name:Q_,properties:[{name:"annotations",defaultValue:[]},{name:"boxes",defaultValue:[]},{name:"devices",defaultValue:[]},{name:"edges",defaultValue:[]},{name:"icons",defaultValue:[]}]};default:return{name:e,properties:[]}}}},QL=new qd;var Kg,ZL=()=>Kg??(Kg=Gp(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "Yadl",
  "imports": [],
  "rules": [
    {
      "$type": "ParserRule",
      "name": "YadlModel",
      "entry": true,
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "icons",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@40"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "boxes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@30"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "annotations",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@31"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "devices",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "edges",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@36"
              },
              "arguments": []
            }
          }
        ],
        "cardinality": "*"
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Position",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "position"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Keyword",
            "value": "x:"
          },
          {
            "$type": "Assignment",
            "feature": "isNegativeX",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "-"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "x",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "y:"
          },
          {
            "$type": "Assignment",
            "feature": "isNegativeY",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "-"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "y",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "QualifiedName",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@5"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "NUMBER",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+(\\\\.[0-9]*)?/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\s+/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[_a-zA-Z][\\\\w_]*/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\"(\\\\\\\\.|[^\\"\\\\\\\\])*\\"|'(\\\\\\\\.|[^'\\\\\\\\])*'/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\/[^\\\\n\\\\r]*/"
      },
      "fragment": false
    },
    {
      "$type": "ParserRule",
      "name": "Atom",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "atom"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Molecule",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "molecule"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "atom",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@10"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Organism",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "organism"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "atom",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@11"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Page",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "page"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "atom",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@12"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Entity",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "entity"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "extends"
              },
              {
                "$type": "Assignment",
                "feature": "superType",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@14"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@2"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "fields",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@15"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "Assignment",
            "feature": "position",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Field",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "many",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "many"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "unique",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "unique"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "isRequired",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "required"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "min",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@23"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "max",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@24"
              },
              "arguments": []
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ApplicationConfig",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "appConfig"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "baseName"
              },
              {
                "$type": "Keyword",
                "value": ":"
              },
              {
                "$type": "Assignment",
                "feature": "baseName",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@7"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "applicationType"
              },
              {
                "$type": "Keyword",
                "value": ":"
              },
              {
                "$type": "Assignment",
                "feature": "applicationType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@26"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "authenticationType"
              },
              {
                "$type": "Keyword",
                "value": ":"
              },
              {
                "$type": "Assignment",
                "feature": "authenticationType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@25"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "databaseType"
              },
              {
                "$type": "Keyword",
                "value": ":"
              },
              {
                "$type": "Assignment",
                "feature": "databaseType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@28"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "clientFramework"
              },
              {
                "$type": "Keyword",
                "value": ":"
              },
              {
                "$type": "Assignment",
                "feature": "clientFramework",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@27"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "entities"
              },
              {
                "$type": "Keyword",
                "value": ":"
              },
              {
                "$type": "Assignment",
                "feature": "entities",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@14"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@5"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              }
            ],
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Pagination",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "paginate"
          },
          {
            "$type": "Assignment",
            "feature": "entity",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@14"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Keyword",
            "value": "with"
          },
          {
            "$type": "Assignment",
            "feature": "paginateType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@29"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Enum",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "enum"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "values",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@21"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Relationship",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "relationship"
          },
          {
            "$type": "Assignment",
            "feature": "relationshipType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "relationships",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@20"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RelationshipRow",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "source",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@14"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Keyword",
            "value": "to"
          },
          {
            "$type": "Assignment",
            "feature": "destination",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@14"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EnumRow",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "("
              },
              {
                "$type": "Assignment",
                "feature": "value",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@5"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RelationshipType",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "OneToOne"
          },
          {
            "$type": "Keyword",
            "value": "OneToMany"
          },
          {
            "$type": "Keyword",
            "value": "ManyToOne"
          },
          {
            "$type": "Keyword",
            "value": "ManyToMany"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MinValidation",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "min"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MaxValidation",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "max"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthenticationType",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "jwt"
          },
          {
            "$type": "Keyword",
            "value": "session"
          },
          {
            "$type": "Keyword",
            "value": "oauth2"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ApplicationType",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "monolith"
          },
          {
            "$type": "Keyword",
            "value": "microservice"
          },
          {
            "$type": "Keyword",
            "value": "gateway"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ClientFramework",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "anular"
          },
          {
            "$type": "Keyword",
            "value": "react"
          },
          {
            "$type": "Keyword",
            "value": "vue"
          },
          {
            "$type": "Keyword",
            "value": "svelte"
          },
          {
            "$type": "Keyword",
            "value": "no"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DatabaseType",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "mysql"
          },
          {
            "$type": "Keyword",
            "value": "mongodb"
          },
          {
            "$type": "Keyword",
            "value": "cassandra"
          },
          {
            "$type": "Keyword",
            "value": "couchbase"
          },
          {
            "$type": "Keyword",
            "value": "no"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PaginationType",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "infinite-scroll"
          },
          {
            "$type": "Keyword",
            "value": "pagination"
          },
          {
            "$type": "Keyword",
            "value": "pager"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Box",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "box"
          },
          {
            "$type": "Assignment",
            "feature": "label",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "["
              },
              {
                "$type": "Keyword",
                "value": "icon:"
              },
              {
                "$type": "Assignment",
                "feature": "icon",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@37"
                      },
                      "arguments": []
                    },
                    {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@38"
                      },
                      "arguments": []
                    },
                    {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@39"
                      },
                      "arguments": []
                    }
                  ]
                }
              },
              {
                "$type": "Keyword",
                "value": "]"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "style",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@33"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "boxes",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@30"
                  },
                  "arguments": []
                },
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Annotation",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "annotation"
          },
          {
            "$type": "Assignment",
            "feature": "label",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "arrowStyle",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@32"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ArrowStyle",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "arrowStyle"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "left:"
              },
              {
                "$type": "Assignment",
                "feature": "left",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "right:"
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "top:"
              },
              {
                "$type": "Assignment",
                "feature": "top",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "bottom:"
              },
              {
                "$type": "Assignment",
                "feature": "bottom",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "transform:"
              },
              {
                "$type": "Assignment",
                "feature": "transform",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@7"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Style",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "style"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "width:"
              },
              {
                "$type": "Assignment",
                "feature": "width",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "height:"
              },
              {
                "$type": "Assignment",
                "feature": "height",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "color:"
              },
              {
                "$type": "Assignment",
                "feature": "color",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "background:"
              },
              {
                "$type": "Assignment",
                "feature": "background",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@7"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DeviceType",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "apple-watch-series8"
          },
          {
            "$type": "Keyword",
            "value": "apple-watch-ultra"
          },
          {
            "$type": "Keyword",
            "value": "google-pixel6-pro"
          },
          {
            "$type": "Keyword",
            "value": "i-mac"
          },
          {
            "$type": "Keyword",
            "value": "i-pad-pro"
          },
          {
            "$type": "Keyword",
            "value": "i-phone14"
          },
          {
            "$type": "Keyword",
            "value": "i-phone14-pro"
          },
          {
            "$type": "Keyword",
            "value": "macbook-pro"
          },
          {
            "$type": "Keyword",
            "value": "pro-display-xdr"
          },
          {
            "$type": "Keyword",
            "value": "surface-book"
          },
          {
            "$type": "Keyword",
            "value": "surface-pro"
          },
          {
            "$type": "Keyword",
            "value": "surface-studio"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Device",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "device"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Edge",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "edge"
          },
          {
            "$type": "Assignment",
            "feature": "source",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@40"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Keyword",
            "value": "=>"
          },
          {
            "$type": "Assignment",
            "feature": "destination",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@40"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IconType0",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "athena"
          },
          {
            "$type": "Keyword",
            "value": "clean-rooms"
          },
          {
            "$type": "Keyword",
            "value": "cloud-search"
          },
          {
            "$type": "Keyword",
            "value": "data-exchange"
          },
          {
            "$type": "Keyword",
            "value": "data-pipeline"
          },
          {
            "$type": "Keyword",
            "value": "data-zone"
          },
          {
            "$type": "Keyword",
            "value": "emr"
          },
          {
            "$type": "Keyword",
            "value": "fin-space"
          },
          {
            "$type": "Keyword",
            "value": "glue-data-brew"
          },
          {
            "$type": "Keyword",
            "value": "glue-elastic-views"
          },
          {
            "$type": "Keyword",
            "value": "glue"
          },
          {
            "$type": "Keyword",
            "value": "kinesis-data-analytics"
          },
          {
            "$type": "Keyword",
            "value": "kinesis-data-streams"
          },
          {
            "$type": "Keyword",
            "value": "kinesis-firehose"
          },
          {
            "$type": "Keyword",
            "value": "kinesis-video-streams"
          },
          {
            "$type": "Keyword",
            "value": "kinesis"
          },
          {
            "$type": "Keyword",
            "value": "lake-formation"
          },
          {
            "$type": "Keyword",
            "value": "managed-streaming-for-apache-kafka"
          },
          {
            "$type": "Keyword",
            "value": "open-search-service"
          },
          {
            "$type": "Keyword",
            "value": "quick-sight"
          },
          {
            "$type": "Keyword",
            "value": "redshift"
          },
          {
            "$type": "Keyword",
            "value": "api-gateway"
          },
          {
            "$type": "Keyword",
            "value": "app-flow"
          },
          {
            "$type": "Keyword",
            "value": "app-sync"
          },
          {
            "$type": "Keyword",
            "value": "console-mobile-application"
          },
          {
            "$type": "Keyword",
            "value": "event-bridge"
          },
          {
            "$type": "Keyword",
            "value": "express-workflows"
          },
          {
            "$type": "Keyword",
            "value": "mq"
          },
          {
            "$type": "Keyword",
            "value": "managed-workflows-for-apache-airflow"
          },
          {
            "$type": "Keyword",
            "value": "simple-notification-service"
          },
          {
            "$type": "Keyword",
            "value": "simple-queue-service"
          },
          {
            "$type": "Keyword",
            "value": "step-functions"
          },
          {
            "$type": "Keyword",
            "value": "managed-blockchain"
          },
          {
            "$type": "Keyword",
            "value": "quantum-ledger-database"
          },
          {
            "$type": "Keyword",
            "value": "alexa-for-business"
          },
          {
            "$type": "Keyword",
            "value": "chime-sdk"
          },
          {
            "$type": "Keyword",
            "value": "chime-voice-connector"
          },
          {
            "$type": "Keyword",
            "value": "chime"
          },
          {
            "$type": "Keyword",
            "value": "connect"
          },
          {
            "$type": "Keyword",
            "value": "honeycode"
          },
          {
            "$type": "Keyword",
            "value": "pinpoint-apis"
          },
          {
            "$type": "Keyword",
            "value": "pinpoint"
          },
          {
            "$type": "Keyword",
            "value": "simple-email-service"
          },
          {
            "$type": "Keyword",
            "value": "supply-chain"
          },
          {
            "$type": "Keyword",
            "value": "wickr"
          },
          {
            "$type": "Keyword",
            "value": "work-docs-sdk"
          },
          {
            "$type": "Keyword",
            "value": "work-docs"
          },
          {
            "$type": "Keyword",
            "value": "work-mail"
          },
          {
            "$type": "Keyword",
            "value": "application-cost-profiler"
          },
          {
            "$type": "Keyword",
            "value": "billing-conductor"
          },
          {
            "$type": "Keyword",
            "value": "budgets"
          },
          {
            "$type": "Keyword",
            "value": "cost-explorer"
          },
          {
            "$type": "Keyword",
            "value": "cost-and-usage-report"
          },
          {
            "$type": "Keyword",
            "value": "reserved-instance-reporting"
          },
          {
            "$type": "Keyword",
            "value": "savings-plans"
          },
          {
            "$type": "Keyword",
            "value": "app-runner"
          },
          {
            "$type": "Keyword",
            "value": "application-auto-scaling"
          },
          {
            "$type": "Keyword",
            "value": "batch"
          },
          {
            "$type": "Keyword",
            "value": "bottlerocket"
          },
          {
            "$type": "Keyword",
            "value": "compute-optimizer"
          },
          {
            "$type": "Keyword",
            "value": "ec2-auto-scaling"
          },
          {
            "$type": "Keyword",
            "value": "ec2-image-builder"
          },
          {
            "$type": "Keyword",
            "value": "ec2"
          },
          {
            "$type": "Keyword",
            "value": "elastic-beanstalk"
          },
          {
            "$type": "Keyword",
            "value": "elastic-fabric-adapter"
          },
          {
            "$type": "Keyword",
            "value": "fargate"
          },
          {
            "$type": "Keyword",
            "value": "genomics-cli"
          },
          {
            "$type": "Keyword",
            "value": "lambda"
          },
          {
            "$type": "Keyword",
            "value": "lightsail"
          },
          {
            "$type": "Keyword",
            "value": "local-zones"
          },
          {
            "$type": "Keyword",
            "value": "nice-dcv"
          },
          {
            "$type": "Keyword",
            "value": "nice-engin-frame"
          },
          {
            "$type": "Keyword",
            "value": "nitro-enclaves"
          },
          {
            "$type": "Keyword",
            "value": "outposts-family"
          },
          {
            "$type": "Keyword",
            "value": "outposts-rack"
          },
          {
            "$type": "Keyword",
            "value": "outposts-servers"
          },
          {
            "$type": "Keyword",
            "value": "parallel-cluster"
          },
          {
            "$type": "Keyword",
            "value": "serverless-application-repository"
          },
          {
            "$type": "Keyword",
            "value": "sim-space-weaver"
          },
          {
            "$type": "Keyword",
            "value": "thinkbox-deadline"
          },
          {
            "$type": "Keyword",
            "value": "thinkbox-frost"
          },
          {
            "$type": "Keyword",
            "value": "thinkbox-krakatoa"
          },
          {
            "$type": "Keyword",
            "value": "thinkbox-sequoia"
          },
          {
            "$type": "Keyword",
            "value": "thinkbox-stoke"
          },
          {
            "$type": "Keyword",
            "value": "thinkbox-xmesh"
          },
          {
            "$type": "Keyword",
            "value": "vmware-cloud-on-aws"
          },
          {
            "$type": "Keyword",
            "value": "wavelength"
          },
          {
            "$type": "Keyword",
            "value": "ecs-anywhere"
          },
          {
            "$type": "Keyword",
            "value": "eks-anywhere"
          },
          {
            "$type": "Keyword",
            "value": "eks-cloud"
          },
          {
            "$type": "Keyword",
            "value": "eks-distro"
          },
          {
            "$type": "Keyword",
            "value": "elastic-container-registry"
          },
          {
            "$type": "Keyword",
            "value": "elastic-container-service"
          },
          {
            "$type": "Keyword",
            "value": "elastic-kubernetes-service"
          },
          {
            "$type": "Keyword",
            "value": "red-hat-open-shift-service-on-aws"
          },
          {
            "$type": "Keyword",
            "value": "activate"
          },
          {
            "$type": "Keyword",
            "value": "iq"
          },
          {
            "$type": "Keyword",
            "value": "managed-services"
          },
          {
            "$type": "Keyword",
            "value": "professional-services"
          },
          {
            "$type": "Keyword",
            "value": "support"
          },
          {
            "$type": "Keyword",
            "value": "training-certification"
          },
          {
            "$type": "Keyword",
            "value": "re-post"
          },
          {
            "$type": "Keyword",
            "value": "aurora"
          },
          {
            "$type": "Keyword",
            "value": "database-migration-service"
          },
          {
            "$type": "Keyword",
            "value": "document-db"
          },
          {
            "$type": "Keyword",
            "value": "dynamo-db"
          },
          {
            "$type": "Keyword",
            "value": "elasti-cache"
          },
          {
            "$type": "Keyword",
            "value": "keyspaces"
          },
          {
            "$type": "Keyword",
            "value": "memory-db-for-redis"
          },
          {
            "$type": "Keyword",
            "value": "neptune"
          },
          {
            "$type": "Keyword",
            "value": "rds-on-vmware"
          },
          {
            "$type": "Keyword",
            "value": "rds"
          },
          {
            "$type": "Keyword",
            "value": "timestream"
          },
          {
            "$type": "Keyword",
            "value": "application-composer"
          },
          {
            "$type": "Keyword",
            "value": "cloud-control-api"
          },
          {
            "$type": "Keyword",
            "value": "cloud-development-kit"
          },
          {
            "$type": "Keyword",
            "value": "cloud9"
          },
          {
            "$type": "Keyword",
            "value": "cloud-shell"
          },
          {
            "$type": "Keyword",
            "value": "code-artifact"
          },
          {
            "$type": "Keyword",
            "value": "code-build"
          },
          {
            "$type": "Keyword",
            "value": "code-catalyst"
          },
          {
            "$type": "Keyword",
            "value": "code-commit"
          },
          {
            "$type": "Keyword",
            "value": "code-deploy"
          },
          {
            "$type": "Keyword",
            "value": "code-pipeline"
          },
          {
            "$type": "Keyword",
            "value": "code-star"
          },
          {
            "$type": "Keyword",
            "value": "command-line-interface"
          },
          {
            "$type": "Keyword",
            "value": "corretto"
          },
          {
            "$type": "Keyword",
            "value": "tools-and-sdks"
          },
          {
            "$type": "Keyword",
            "value": "x-ray"
          },
          {
            "$type": "Keyword",
            "value": "app-stream"
          },
          {
            "$type": "Keyword",
            "value": "work-link"
          },
          {
            "$type": "Keyword",
            "value": "work-spaces-family"
          },
          {
            "$type": "Keyword",
            "value": "amplify"
          },
          {
            "$type": "Keyword",
            "value": "device-farm"
          },
          {
            "$type": "Keyword",
            "value": "location-service"
          },
          {
            "$type": "Keyword",
            "value": "game-kit"
          },
          {
            "$type": "Keyword",
            "value": "game-lift"
          },
          {
            "$type": "Keyword",
            "value": "game-sparks"
          },
          {
            "$type": "Keyword",
            "value": "lumberyard"
          },
          {
            "$type": "Keyword",
            "value": "open3-d-engine"
          },
          {
            "$type": "Keyword",
            "value": "marketplace-dark"
          },
          {
            "$type": "Keyword",
            "value": "marketplace-light"
          },
          {
            "$type": "Keyword",
            "value": "free-rtos"
          },
          {
            "$type": "Keyword",
            "value": "io-t-1-click"
          },
          {
            "$type": "Keyword",
            "value": "io-t-analytics"
          },
          {
            "$type": "Keyword",
            "value": "io-t-button"
          },
          {
            "$type": "Keyword",
            "value": "io-t-core"
          },
          {
            "$type": "Keyword",
            "value": "io-t-device-defender"
          },
          {
            "$type": "Keyword",
            "value": "io-t-device-management"
          },
          {
            "$type": "Keyword",
            "value": "io-t-edu-kit"
          },
          {
            "$type": "Keyword",
            "value": "io-t-events"
          },
          {
            "$type": "Keyword",
            "value": "io-t-express-link"
          },
          {
            "$type": "Keyword",
            "value": "io-t-fleet-wise"
          },
          {
            "$type": "Keyword",
            "value": "io-t-greengrass"
          },
          {
            "$type": "Keyword",
            "value": "io-t-robo-runner"
          },
          {
            "$type": "Keyword",
            "value": "io-t-site-wise"
          },
          {
            "$type": "Keyword",
            "value": "io-t-things-graph"
          },
          {
            "$type": "Keyword",
            "value": "io-t-twin-maker"
          },
          {
            "$type": "Keyword",
            "value": "apache-mxnet-on-aws"
          },
          {
            "$type": "Keyword",
            "value": "augmented-ai-a-2-i"
          },
          {
            "$type": "Keyword",
            "value": "code-guru"
          },
          {
            "$type": "Keyword",
            "value": "code-whisperer"
          },
          {
            "$type": "Keyword",
            "value": "comprehend-medical"
          },
          {
            "$type": "Keyword",
            "value": "comprehend"
          },
          {
            "$type": "Keyword",
            "value": "deep-learning-amis"
          },
          {
            "$type": "Keyword",
            "value": "deep-learning-containers"
          },
          {
            "$type": "Keyword",
            "value": "deep-composer"
          },
          {
            "$type": "Keyword",
            "value": "deep-lens"
          },
          {
            "$type": "Keyword",
            "value": "deep-racer"
          },
          {
            "$type": "Keyword",
            "value": "dev-ops-guru"
          },
          {
            "$type": "Keyword",
            "value": "elastic-inference"
          },
          {
            "$type": "Keyword",
            "value": "forecast"
          },
          {
            "$type": "Keyword",
            "value": "fraud-detector"
          },
          {
            "$type": "Keyword",
            "value": "health-lake"
          },
          {
            "$type": "Keyword",
            "value": "kendra"
          },
          {
            "$type": "Keyword",
            "value": "lex"
          },
          {
            "$type": "Keyword",
            "value": "lookout-for-equipment"
          },
          {
            "$type": "Keyword",
            "value": "lookout-for-metrics"
          },
          {
            "$type": "Keyword",
            "value": "lookout-for-vision"
          },
          {
            "$type": "Keyword",
            "value": "monitron"
          },
          {
            "$type": "Keyword",
            "value": "neuron"
          },
          {
            "$type": "Keyword",
            "value": "omics"
          },
          {
            "$type": "Keyword",
            "value": "panorama"
          },
          {
            "$type": "Keyword",
            "value": "personalize"
          },
          {
            "$type": "Keyword",
            "value": "polly"
          },
          {
            "$type": "Keyword",
            "value": "rekognition"
          },
          {
            "$type": "Keyword",
            "value": "sage-maker-ground-truth"
          },
          {
            "$type": "Keyword",
            "value": "sage-maker-studio-lab"
          },
          {
            "$type": "Keyword",
            "value": "sage-maker"
          },
          {
            "$type": "Keyword",
            "value": "tensor-flow-on-aws"
          },
          {
            "$type": "Keyword",
            "value": "textract"
          },
          {
            "$type": "Keyword",
            "value": "torch-serve"
          },
          {
            "$type": "Keyword",
            "value": "transcribe"
          },
          {
            "$type": "Keyword",
            "value": "translate"
          },
          {
            "$type": "Keyword",
            "value": "app-config"
          },
          {
            "$type": "Keyword",
            "value": "auto-scaling"
          },
          {
            "$type": "Keyword",
            "value": "backint-agent"
          },
          {
            "$type": "Keyword",
            "value": "chatbot"
          },
          {
            "$type": "Keyword",
            "value": "cloud-formation"
          },
          {
            "$type": "Keyword",
            "value": "cloud-trail"
          },
          {
            "$type": "Keyword",
            "value": "cloud-watch"
          },
          {
            "$type": "Keyword",
            "value": "config"
          },
          {
            "$type": "Keyword",
            "value": "control-tower"
          },
          {
            "$type": "Keyword",
            "value": "distro-for-open-telemetry"
          },
          {
            "$type": "Keyword",
            "value": "fault-injection-simulator"
          },
          {
            "$type": "Keyword",
            "value": "launch-wizard"
          },
          {
            "$type": "Keyword",
            "value": "license-manager"
          },
          {
            "$type": "Keyword",
            "value": "managed-grafana"
          },
          {
            "$type": "Keyword",
            "value": "managed-service-for-prometheus"
          },
          {
            "$type": "Keyword",
            "value": "management-console"
          },
          {
            "$type": "Keyword",
            "value": "ops-works"
          },
          {
            "$type": "Keyword",
            "value": "organizations"
          },
          {
            "$type": "Keyword",
            "value": "personal-health-dashboard"
          },
          {
            "$type": "Keyword",
            "value": "proton"
          },
          {
            "$type": "Keyword",
            "value": "resilience-hub"
          },
          {
            "$type": "Keyword",
            "value": "resource-explorer"
          },
          {
            "$type": "Keyword",
            "value": "service-catalog"
          },
          {
            "$type": "Keyword",
            "value": "service-management-connector"
          },
          {
            "$type": "Keyword",
            "value": "systems-manager"
          },
          {
            "$type": "Keyword",
            "value": "trusted-advisor"
          },
          {
            "$type": "Keyword",
            "value": "well-architected-tool"
          },
          {
            "$type": "Keyword",
            "value": "elastic-transcoder"
          },
          {
            "$type": "Keyword",
            "value": "elemental-appliances-software"
          },
          {
            "$type": "Keyword",
            "value": "elemental-conductor"
          },
          {
            "$type": "Keyword",
            "value": "elemental-delta"
          },
          {
            "$type": "Keyword",
            "value": "elemental-link"
          },
          {
            "$type": "Keyword",
            "value": "elemental-live"
          },
          {
            "$type": "Keyword",
            "value": "elemental-media-connect"
          },
          {
            "$type": "Keyword",
            "value": "elemental-media-convert"
          },
          {
            "$type": "Keyword",
            "value": "elemental-media-live"
          },
          {
            "$type": "Keyword",
            "value": "elemental-media-package"
          },
          {
            "$type": "Keyword",
            "value": "elemental-media-store"
          },
          {
            "$type": "Keyword",
            "value": "elemental-media-tailor"
          },
          {
            "$type": "Keyword",
            "value": "elemental-server"
          },
          {
            "$type": "Keyword",
            "value": "interactive-video-service"
          },
          {
            "$type": "Keyword",
            "value": "nimble-studio"
          },
          {
            "$type": "Keyword",
            "value": "application-discovery-service"
          },
          {
            "$type": "Keyword",
            "value": "application-migration-service"
          },
          {
            "$type": "Keyword",
            "value": "data-sync"
          },
          {
            "$type": "Keyword",
            "value": "mainframe-modernization"
          },
          {
            "$type": "Keyword",
            "value": "migration-evaluator"
          },
          {
            "$type": "Keyword",
            "value": "migration-hub"
          },
          {
            "$type": "Keyword",
            "value": "server-migration-service"
          },
          {
            "$type": "Keyword",
            "value": "transfer-family"
          },
          {
            "$type": "Keyword",
            "value": "app-mesh"
          },
          {
            "$type": "Keyword",
            "value": "client-vpn"
          },
          {
            "$type": "Keyword",
            "value": "cloud-directory"
          },
          {
            "$type": "Keyword",
            "value": "cloud-map"
          },
          {
            "$type": "Keyword",
            "value": "cloud-wan"
          },
          {
            "$type": "Keyword",
            "value": "cloud-front"
          },
          {
            "$type": "Keyword",
            "value": "direct-connect"
          },
          {
            "$type": "Keyword",
            "value": "elastic-load-balancing"
          },
          {
            "$type": "Keyword",
            "value": "global-accelerator"
          },
          {
            "$type": "Keyword",
            "value": "private5-g"
          },
          {
            "$type": "Keyword",
            "value": "private-link"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IconType1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "route53"
          },
          {
            "$type": "Keyword",
            "value": "site-to-site-vpn"
          },
          {
            "$type": "Keyword",
            "value": "transit-gateway"
          },
          {
            "$type": "Keyword",
            "value": "vpc-lattice"
          },
          {
            "$type": "Keyword",
            "value": "verified-access"
          },
          {
            "$type": "Keyword",
            "value": "virtual-private-cloud"
          },
          {
            "$type": "Keyword",
            "value": "braket"
          },
          {
            "$type": "Keyword",
            "value": "robo-maker"
          },
          {
            "$type": "Keyword",
            "value": "ground-station"
          },
          {
            "$type": "Keyword",
            "value": "artifact"
          },
          {
            "$type": "Keyword",
            "value": "audit-manager"
          },
          {
            "$type": "Keyword",
            "value": "certificate-manager"
          },
          {
            "$type": "Keyword",
            "value": "cloud-hsm"
          },
          {
            "$type": "Keyword",
            "value": "cognito"
          },
          {
            "$type": "Keyword",
            "value": "detective"
          },
          {
            "$type": "Keyword",
            "value": "directory-service"
          },
          {
            "$type": "Keyword",
            "value": "firewall-manager"
          },
          {
            "$type": "Keyword",
            "value": "guard-duty"
          },
          {
            "$type": "Keyword",
            "value": "iam-identity-center"
          },
          {
            "$type": "Keyword",
            "value": "identity-and-access-management"
          },
          {
            "$type": "Keyword",
            "value": "inspector"
          },
          {
            "$type": "Keyword",
            "value": "key-management-service"
          },
          {
            "$type": "Keyword",
            "value": "macie"
          },
          {
            "$type": "Keyword",
            "value": "network-firewall"
          },
          {
            "$type": "Keyword",
            "value": "private-certificate-authority"
          },
          {
            "$type": "Keyword",
            "value": "resource-access-manager"
          },
          {
            "$type": "Keyword",
            "value": "secrets-manager"
          },
          {
            "$type": "Keyword",
            "value": "security-hub"
          },
          {
            "$type": "Keyword",
            "value": "security-lake"
          },
          {
            "$type": "Keyword",
            "value": "shield"
          },
          {
            "$type": "Keyword",
            "value": "signer"
          },
          {
            "$type": "Keyword",
            "value": "verified-permissions"
          },
          {
            "$type": "Keyword",
            "value": "waf"
          },
          {
            "$type": "Keyword",
            "value": "backup"
          },
          {
            "$type": "Keyword",
            "value": "efs"
          },
          {
            "$type": "Keyword",
            "value": "elastic-block-store"
          },
          {
            "$type": "Keyword",
            "value": "elastic-disaster-recovery"
          },
          {
            "$type": "Keyword",
            "value": "fsx-for-lustre"
          },
          {
            "$type": "Keyword",
            "value": "fsx-for-net-app-ontap"
          },
          {
            "$type": "Keyword",
            "value": "fsx-for-open-zfs"
          },
          {
            "$type": "Keyword",
            "value": "fsx-for-wfs"
          },
          {
            "$type": "Keyword",
            "value": "fsx"
          },
          {
            "$type": "Keyword",
            "value": "file-cache"
          },
          {
            "$type": "Keyword",
            "value": "s-3-on-outposts"
          },
          {
            "$type": "Keyword",
            "value": "simple-storage-service-glacier"
          },
          {
            "$type": "Keyword",
            "value": "simple-storage-service"
          },
          {
            "$type": "Keyword",
            "value": "snowball-edge"
          },
          {
            "$type": "Keyword",
            "value": "snowball"
          },
          {
            "$type": "Keyword",
            "value": "snowcone"
          },
          {
            "$type": "Keyword",
            "value": "snowmobile"
          },
          {
            "$type": "Keyword",
            "value": "storage-gateway"
          },
          {
            "$type": "Keyword",
            "value": "sumerian"
          },
          {
            "$type": "Keyword",
            "value": "aws-dark"
          },
          {
            "$type": "Keyword",
            "value": "aws-light"
          },
          {
            "$type": "Keyword",
            "value": "ableton-dark"
          },
          {
            "$type": "Keyword",
            "value": "ableton-light"
          },
          {
            "$type": "Keyword",
            "value": "activity-pub-dark"
          },
          {
            "$type": "Keyword",
            "value": "activity-pub-light"
          },
          {
            "$type": "Keyword",
            "value": "actix-dark"
          },
          {
            "$type": "Keyword",
            "value": "actix-light"
          },
          {
            "$type": "Keyword",
            "value": "adonis"
          },
          {
            "$type": "Keyword",
            "value": "after-effects"
          },
          {
            "$type": "Keyword",
            "value": "ai-script-dark"
          },
          {
            "$type": "Keyword",
            "value": "ai-script-light"
          },
          {
            "$type": "Keyword",
            "value": "alpine-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "alpine-js-light"
          },
          {
            "$type": "Keyword",
            "value": "anaconda-dark"
          },
          {
            "$type": "Keyword",
            "value": "anaconda-light"
          },
          {
            "$type": "Keyword",
            "value": "android-studio-dark"
          },
          {
            "$type": "Keyword",
            "value": "android-studio-light"
          },
          {
            "$type": "Keyword",
            "value": "angular-dark"
          },
          {
            "$type": "Keyword",
            "value": "angular-light"
          },
          {
            "$type": "Keyword",
            "value": "ansible"
          },
          {
            "$type": "Keyword",
            "value": "apollo"
          },
          {
            "$type": "Keyword",
            "value": "apple-dark"
          },
          {
            "$type": "Keyword",
            "value": "apple-light"
          },
          {
            "$type": "Keyword",
            "value": "appwrite"
          },
          {
            "$type": "Keyword",
            "value": "arch-dark"
          },
          {
            "$type": "Keyword",
            "value": "arch-light"
          },
          {
            "$type": "Keyword",
            "value": "arduino"
          },
          {
            "$type": "Keyword",
            "value": "astro"
          },
          {
            "$type": "Keyword",
            "value": "atom"
          },
          {
            "$type": "Keyword",
            "value": "audition"
          },
          {
            "$type": "Keyword",
            "value": "auto-cad-dark"
          },
          {
            "$type": "Keyword",
            "value": "auto-cad-light"
          },
          {
            "$type": "Keyword",
            "value": "azul"
          },
          {
            "$type": "Keyword",
            "value": "azure-dark"
          },
          {
            "$type": "Keyword",
            "value": "azure-light"
          },
          {
            "$type": "Keyword",
            "value": "bsd-dark"
          },
          {
            "$type": "Keyword",
            "value": "bsd-light"
          },
          {
            "$type": "Keyword",
            "value": "babel"
          },
          {
            "$type": "Keyword",
            "value": "bash-dark"
          },
          {
            "$type": "Keyword",
            "value": "bash-light"
          },
          {
            "$type": "Keyword",
            "value": "bevy-dark"
          },
          {
            "$type": "Keyword",
            "value": "bevy-light"
          },
          {
            "$type": "Keyword",
            "value": "bit-bucket-dark"
          },
          {
            "$type": "Keyword",
            "value": "bit-bucket-light"
          },
          {
            "$type": "Keyword",
            "value": "blender-dark"
          },
          {
            "$type": "Keyword",
            "value": "blender-light"
          },
          {
            "$type": "Keyword",
            "value": "bootstrap"
          },
          {
            "$type": "Keyword",
            "value": "bun-dark"
          },
          {
            "$type": "Keyword",
            "value": "bun-light"
          },
          {
            "$type": "Keyword",
            "value": "c"
          },
          {
            "$type": "Keyword",
            "value": "clion-dark"
          },
          {
            "$type": "Keyword",
            "value": "clion-light"
          },
          {
            "$type": "Keyword",
            "value": "cmake-dark"
          },
          {
            "$type": "Keyword",
            "value": "cmake-light"
          },
          {
            "$type": "Keyword",
            "value": "cpp"
          },
          {
            "$type": "Keyword",
            "value": "cs"
          },
          {
            "$type": "Keyword",
            "value": "css"
          },
          {
            "$type": "Keyword",
            "value": "cassandra-dark"
          },
          {
            "$type": "Keyword",
            "value": "cassandra-light"
          },
          {
            "$type": "Keyword",
            "value": "clojure-dark"
          },
          {
            "$type": "Keyword",
            "value": "clojure-light"
          },
          {
            "$type": "Keyword",
            "value": "cloudflare-dark"
          },
          {
            "$type": "Keyword",
            "value": "cloudflare-light"
          },
          {
            "$type": "Keyword",
            "value": "code-pen-dark"
          },
          {
            "$type": "Keyword",
            "value": "code-pen-light"
          },
          {
            "$type": "Keyword",
            "value": "coffee-script-dark"
          },
          {
            "$type": "Keyword",
            "value": "coffee-script-light"
          },
          {
            "$type": "Keyword",
            "value": "crystal-dark"
          },
          {
            "$type": "Keyword",
            "value": "crystal-light"
          },
          {
            "$type": "Keyword",
            "value": "cypress-dark"
          },
          {
            "$type": "Keyword",
            "value": "cypress-light"
          },
          {
            "$type": "Keyword",
            "value": "d-3-dark"
          },
          {
            "$type": "Keyword",
            "value": "d-3-light"
          },
          {
            "$type": "Keyword",
            "value": "deno-dark"
          },
          {
            "$type": "Keyword",
            "value": "deno-light"
          },
          {
            "$type": "Keyword",
            "value": "dart-dark"
          },
          {
            "$type": "Keyword",
            "value": "dart-light"
          },
          {
            "$type": "Keyword",
            "value": "debian-dark"
          },
          {
            "$type": "Keyword",
            "value": "debian-light"
          },
          {
            "$type": "Keyword",
            "value": "dev-to-dark"
          },
          {
            "$type": "Keyword",
            "value": "dev-to-light"
          },
          {
            "$type": "Keyword",
            "value": "discord"
          },
          {
            "$type": "Keyword",
            "value": "discord-bots"
          },
          {
            "$type": "Keyword",
            "value": "discord-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "discord-js-light"
          },
          {
            "$type": "Keyword",
            "value": "django"
          },
          {
            "$type": "Keyword",
            "value": "docker"
          },
          {
            "$type": "Keyword",
            "value": "dot-net"
          },
          {
            "$type": "Keyword",
            "value": "dynamo-db-dark"
          },
          {
            "$type": "Keyword",
            "value": "dynamo-db-light"
          },
          {
            "$type": "Keyword",
            "value": "eclipse-dark"
          },
          {
            "$type": "Keyword",
            "value": "eclipse-light"
          },
          {
            "$type": "Keyword",
            "value": "elasticsearch-dark"
          },
          {
            "$type": "Keyword",
            "value": "elasticsearch-light"
          },
          {
            "$type": "Keyword",
            "value": "electron"
          },
          {
            "$type": "Keyword",
            "value": "elixir-dark"
          },
          {
            "$type": "Keyword",
            "value": "elixir-light"
          },
          {
            "$type": "Keyword",
            "value": "elysia-dark"
          },
          {
            "$type": "Keyword",
            "value": "elysia-light"
          },
          {
            "$type": "Keyword",
            "value": "emacs"
          },
          {
            "$type": "Keyword",
            "value": "ember"
          },
          {
            "$type": "Keyword",
            "value": "emotion-dark"
          },
          {
            "$type": "Keyword",
            "value": "emotion-light"
          },
          {
            "$type": "Keyword",
            "value": "express-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "express-js-light"
          },
          {
            "$type": "Keyword",
            "value": "fast-api"
          },
          {
            "$type": "Keyword",
            "value": "fediverse-dark"
          },
          {
            "$type": "Keyword",
            "value": "fediverse-light"
          },
          {
            "$type": "Keyword",
            "value": "figma-dark"
          },
          {
            "$type": "Keyword",
            "value": "figma-light"
          },
          {
            "$type": "Keyword",
            "value": "firebase-dark"
          },
          {
            "$type": "Keyword",
            "value": "firebase-light"
          },
          {
            "$type": "Keyword",
            "value": "flask-dark"
          },
          {
            "$type": "Keyword",
            "value": "flask-light"
          },
          {
            "$type": "Keyword",
            "value": "flutter-dark"
          },
          {
            "$type": "Keyword",
            "value": "flutter-light"
          },
          {
            "$type": "Keyword",
            "value": "forth"
          },
          {
            "$type": "Keyword",
            "value": "fortran"
          },
          {
            "$type": "Keyword",
            "value": "gcp-dark"
          },
          {
            "$type": "Keyword",
            "value": "gcp-light"
          },
          {
            "$type": "Keyword",
            "value": "gtk-dark"
          },
          {
            "$type": "Keyword",
            "value": "gtk-light"
          },
          {
            "$type": "Keyword",
            "value": "game-maker-studio"
          },
          {
            "$type": "Keyword",
            "value": "gatsby"
          },
          {
            "$type": "Keyword",
            "value": "gherkin-dark"
          },
          {
            "$type": "Keyword",
            "value": "gherkin-light"
          },
          {
            "$type": "Keyword",
            "value": "git"
          },
          {
            "$type": "Keyword",
            "value": "git-lab-dark"
          },
          {
            "$type": "Keyword",
            "value": "git-lab-light"
          },
          {
            "$type": "Keyword",
            "value": "github-dark"
          },
          {
            "$type": "Keyword",
            "value": "github-light"
          },
          {
            "$type": "Keyword",
            "value": "github-actions-dark"
          },
          {
            "$type": "Keyword",
            "value": "github-actions-light"
          },
          {
            "$type": "Keyword",
            "value": "gmail-dark"
          },
          {
            "$type": "Keyword",
            "value": "gmail-light"
          },
          {
            "$type": "Keyword",
            "value": "go-lang"
          },
          {
            "$type": "Keyword",
            "value": "godot-dark"
          },
          {
            "$type": "Keyword",
            "value": "godot-light"
          },
          {
            "$type": "Keyword",
            "value": "gradle-dark"
          },
          {
            "$type": "Keyword",
            "value": "gradle-light"
          },
          {
            "$type": "Keyword",
            "value": "grafana-dark"
          },
          {
            "$type": "Keyword",
            "value": "grafana-light"
          },
          {
            "$type": "Keyword",
            "value": "graph-ql-dark"
          },
          {
            "$type": "Keyword",
            "value": "graph-ql-light"
          },
          {
            "$type": "Keyword",
            "value": "gulp"
          },
          {
            "$type": "Keyword",
            "value": "html"
          },
          {
            "$type": "Keyword",
            "value": "haskell-dark"
          },
          {
            "$type": "Keyword",
            "value": "haskell-light"
          },
          {
            "$type": "Keyword",
            "value": "haxe-dark"
          },
          {
            "$type": "Keyword",
            "value": "haxe-light"
          },
          {
            "$type": "Keyword",
            "value": "haxe-flixel-dark"
          },
          {
            "$type": "Keyword",
            "value": "haxe-flixel-light"
          },
          {
            "$type": "Keyword",
            "value": "heroku"
          },
          {
            "$type": "Keyword",
            "value": "hibernate-dark"
          },
          {
            "$type": "Keyword",
            "value": "hibernate-light"
          },
          {
            "$type": "Keyword",
            "value": "htmx-dark"
          },
          {
            "$type": "Keyword",
            "value": "htmx-light"
          },
          {
            "$type": "Keyword",
            "value": "ipfs-dark"
          },
          {
            "$type": "Keyword",
            "value": "ipfs-light"
          },
          {
            "$type": "Keyword",
            "value": "idea-dark"
          },
          {
            "$type": "Keyword",
            "value": "idea-light"
          },
          {
            "$type": "Keyword",
            "value": "illustrator"
          },
          {
            "$type": "Keyword",
            "value": "instagram"
          },
          {
            "$type": "Keyword",
            "value": "jquery"
          },
          {
            "$type": "Keyword",
            "value": "java-dark"
          },
          {
            "$type": "Keyword",
            "value": "java-light"
          },
          {
            "$type": "Keyword",
            "value": "java-script"
          },
          {
            "$type": "Keyword",
            "value": "jenkins-dark"
          },
          {
            "$type": "Keyword",
            "value": "jenkins-light"
          },
          {
            "$type": "Keyword",
            "value": "jest"
          },
          {
            "$type": "Keyword",
            "value": "julia-dark"
          },
          {
            "$type": "Keyword",
            "value": "julia-light"
          },
          {
            "$type": "Keyword",
            "value": "kafka"
          },
          {
            "$type": "Keyword",
            "value": "kali-dark"
          },
          {
            "$type": "Keyword",
            "value": "kali-light"
          },
          {
            "$type": "Keyword",
            "value": "kotlin-dark"
          },
          {
            "$type": "Keyword",
            "value": "kotlin-light"
          },
          {
            "$type": "Keyword",
            "value": "ktor-dark"
          },
          {
            "$type": "Keyword",
            "value": "ktor-light"
          },
          {
            "$type": "Keyword",
            "value": "kubernetes"
          },
          {
            "$type": "Keyword",
            "value": "la-te-x-dark"
          },
          {
            "$type": "Keyword",
            "value": "la-te-x-light"
          },
          {
            "$type": "Keyword",
            "value": "laravel-dark"
          },
          {
            "$type": "Keyword",
            "value": "laravel-light"
          },
          {
            "$type": "Keyword",
            "value": "less-dark"
          },
          {
            "$type": "Keyword",
            "value": "less-light"
          },
          {
            "$type": "Keyword",
            "value": "linked-in"
          },
          {
            "$type": "Keyword",
            "value": "linux-dark"
          },
          {
            "$type": "Keyword",
            "value": "linux-light"
          },
          {
            "$type": "Keyword",
            "value": "lit-dark"
          },
          {
            "$type": "Keyword",
            "value": "lit-light"
          },
          {
            "$type": "Keyword",
            "value": "lua-dark"
          },
          {
            "$type": "Keyword",
            "value": "lua-light"
          },
          {
            "$type": "Keyword",
            "value": "markdown-dark"
          },
          {
            "$type": "Keyword",
            "value": "markdown-light"
          },
          {
            "$type": "Keyword",
            "value": "mastodon-dark"
          },
          {
            "$type": "Keyword",
            "value": "mastodon-light"
          },
          {
            "$type": "Keyword",
            "value": "material-ui-dark"
          },
          {
            "$type": "Keyword",
            "value": "material-ui-light"
          },
          {
            "$type": "Keyword",
            "value": "matlab-dark"
          },
          {
            "$type": "Keyword",
            "value": "matlab-light"
          },
          {
            "$type": "Keyword",
            "value": "maven-dark"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IconType2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "maven-light"
          },
          {
            "$type": "Keyword",
            "value": "mint-dark"
          },
          {
            "$type": "Keyword",
            "value": "mint-light"
          },
          {
            "$type": "Keyword",
            "value": "misskey-dark"
          },
          {
            "$type": "Keyword",
            "value": "misskey-light"
          },
          {
            "$type": "Keyword",
            "value": "mongo-db"
          },
          {
            "$type": "Keyword",
            "value": "my-sql-dark"
          },
          {
            "$type": "Keyword",
            "value": "my-sql-light"
          },
          {
            "$type": "Keyword",
            "value": "neo-vim-dark"
          },
          {
            "$type": "Keyword",
            "value": "neo-vim-light"
          },
          {
            "$type": "Keyword",
            "value": "nest-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "nest-js-light"
          },
          {
            "$type": "Keyword",
            "value": "netlify-dark"
          },
          {
            "$type": "Keyword",
            "value": "netlify-light"
          },
          {
            "$type": "Keyword",
            "value": "next-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "next-js-light"
          },
          {
            "$type": "Keyword",
            "value": "nginx"
          },
          {
            "$type": "Keyword",
            "value": "nim-dark"
          },
          {
            "$type": "Keyword",
            "value": "nim-light"
          },
          {
            "$type": "Keyword",
            "value": "nix-dark"
          },
          {
            "$type": "Keyword",
            "value": "nix-light"
          },
          {
            "$type": "Keyword",
            "value": "node-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "node-js-light"
          },
          {
            "$type": "Keyword",
            "value": "notion-dark"
          },
          {
            "$type": "Keyword",
            "value": "notion-light"
          },
          {
            "$type": "Keyword",
            "value": "npm-dark"
          },
          {
            "$type": "Keyword",
            "value": "npm-light"
          },
          {
            "$type": "Keyword",
            "value": "nuxt-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "nuxt-js-light"
          },
          {
            "$type": "Keyword",
            "value": "ocaml"
          },
          {
            "$type": "Keyword",
            "value": "obsidian-dark"
          },
          {
            "$type": "Keyword",
            "value": "obsidian-light"
          },
          {
            "$type": "Keyword",
            "value": "octave-dark"
          },
          {
            "$type": "Keyword",
            "value": "octave-light"
          },
          {
            "$type": "Keyword",
            "value": "open-cv-dark"
          },
          {
            "$type": "Keyword",
            "value": "open-cv-light"
          },
          {
            "$type": "Keyword",
            "value": "open-shift"
          },
          {
            "$type": "Keyword",
            "value": "open-stack-dark"
          },
          {
            "$type": "Keyword",
            "value": "open-stack-light"
          },
          {
            "$type": "Keyword",
            "value": "php-dark"
          },
          {
            "$type": "Keyword",
            "value": "php-light"
          },
          {
            "$type": "Keyword",
            "value": "perl"
          },
          {
            "$type": "Keyword",
            "value": "photoshop"
          },
          {
            "$type": "Keyword",
            "value": "php-storm-dark"
          },
          {
            "$type": "Keyword",
            "value": "php-storm-light"
          },
          {
            "$type": "Keyword",
            "value": "pinia-dark"
          },
          {
            "$type": "Keyword",
            "value": "pinia-light"
          },
          {
            "$type": "Keyword",
            "value": "pkl-dark"
          },
          {
            "$type": "Keyword",
            "value": "pkl-light"
          },
          {
            "$type": "Keyword",
            "value": "plan9-dark"
          },
          {
            "$type": "Keyword",
            "value": "plan9-light"
          },
          {
            "$type": "Keyword",
            "value": "planet-scale-dark"
          },
          {
            "$type": "Keyword",
            "value": "planet-scale-light"
          },
          {
            "$type": "Keyword",
            "value": "pnpm-dark"
          },
          {
            "$type": "Keyword",
            "value": "pnpm-light"
          },
          {
            "$type": "Keyword",
            "value": "postgre-sql-dark"
          },
          {
            "$type": "Keyword",
            "value": "postgre-sql-light"
          },
          {
            "$type": "Keyword",
            "value": "postman"
          },
          {
            "$type": "Keyword",
            "value": "powershell-dark"
          },
          {
            "$type": "Keyword",
            "value": "powershell-light"
          },
          {
            "$type": "Keyword",
            "value": "premiere"
          },
          {
            "$type": "Keyword",
            "value": "prisma"
          },
          {
            "$type": "Keyword",
            "value": "processing-dark"
          },
          {
            "$type": "Keyword",
            "value": "processing-light"
          },
          {
            "$type": "Keyword",
            "value": "prometheus"
          },
          {
            "$type": "Keyword",
            "value": "pug-dark"
          },
          {
            "$type": "Keyword",
            "value": "pug-light"
          },
          {
            "$type": "Keyword",
            "value": "py-charm-dark"
          },
          {
            "$type": "Keyword",
            "value": "py-charm-light"
          },
          {
            "$type": "Keyword",
            "value": "py-torch-dark"
          },
          {
            "$type": "Keyword",
            "value": "py-torch-light"
          },
          {
            "$type": "Keyword",
            "value": "python-dark"
          },
          {
            "$type": "Keyword",
            "value": "python-light"
          },
          {
            "$type": "Keyword",
            "value": "qt-dark"
          },
          {
            "$type": "Keyword",
            "value": "qt-light"
          },
          {
            "$type": "Keyword",
            "value": "r-dark"
          },
          {
            "$type": "Keyword",
            "value": "r-light"
          },
          {
            "$type": "Keyword",
            "value": "ros-dark"
          },
          {
            "$type": "Keyword",
            "value": "ros-light"
          },
          {
            "$type": "Keyword",
            "value": "rabbit-mq-dark"
          },
          {
            "$type": "Keyword",
            "value": "rabbit-mq-light"
          },
          {
            "$type": "Keyword",
            "value": "rails"
          },
          {
            "$type": "Keyword",
            "value": "raspberry-pi-dark"
          },
          {
            "$type": "Keyword",
            "value": "raspberry-pi-light"
          },
          {
            "$type": "Keyword",
            "value": "react-dark"
          },
          {
            "$type": "Keyword",
            "value": "react-light"
          },
          {
            "$type": "Keyword",
            "value": "reactive-x-dark"
          },
          {
            "$type": "Keyword",
            "value": "reactive-x-light"
          },
          {
            "$type": "Keyword",
            "value": "red-hat-dark"
          },
          {
            "$type": "Keyword",
            "value": "red-hat-light"
          },
          {
            "$type": "Keyword",
            "value": "redis-dark"
          },
          {
            "$type": "Keyword",
            "value": "redis-light"
          },
          {
            "$type": "Keyword",
            "value": "redux"
          },
          {
            "$type": "Keyword",
            "value": "regex-dark"
          },
          {
            "$type": "Keyword",
            "value": "regex-light"
          },
          {
            "$type": "Keyword",
            "value": "remix-dark"
          },
          {
            "$type": "Keyword",
            "value": "remix-light"
          },
          {
            "$type": "Keyword",
            "value": "replit-dark"
          },
          {
            "$type": "Keyword",
            "value": "replit-light"
          },
          {
            "$type": "Keyword",
            "value": "rider-dark"
          },
          {
            "$type": "Keyword",
            "value": "rider-light"
          },
          {
            "$type": "Keyword",
            "value": "roblox-studio"
          },
          {
            "$type": "Keyword",
            "value": "rocket"
          },
          {
            "$type": "Keyword",
            "value": "rollup-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "rollup-js-light"
          },
          {
            "$type": "Keyword",
            "value": "ruby"
          },
          {
            "$type": "Keyword",
            "value": "rust"
          },
          {
            "$type": "Keyword",
            "value": "sqlite"
          },
          {
            "$type": "Keyword",
            "value": "svg-dark"
          },
          {
            "$type": "Keyword",
            "value": "svg-light"
          },
          {
            "$type": "Keyword",
            "value": "sass"
          },
          {
            "$type": "Keyword",
            "value": "scala-dark"
          },
          {
            "$type": "Keyword",
            "value": "scala-light"
          },
          {
            "$type": "Keyword",
            "value": "sci-kit-learn-light"
          },
          {
            "$type": "Keyword",
            "value": "scikit-learn-dark"
          },
          {
            "$type": "Keyword",
            "value": "selenium"
          },
          {
            "$type": "Keyword",
            "value": "sentry"
          },
          {
            "$type": "Keyword",
            "value": "sequelize-dark"
          },
          {
            "$type": "Keyword",
            "value": "sequelize-light"
          },
          {
            "$type": "Keyword",
            "value": "sketchup-dark"
          },
          {
            "$type": "Keyword",
            "value": "sketchup-light"
          },
          {
            "$type": "Keyword",
            "value": "solid-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "solid-js-light"
          },
          {
            "$type": "Keyword",
            "value": "solidity"
          },
          {
            "$type": "Keyword",
            "value": "spring-dark"
          },
          {
            "$type": "Keyword",
            "value": "spring-light"
          },
          {
            "$type": "Keyword",
            "value": "stack-overflow-dark"
          },
          {
            "$type": "Keyword",
            "value": "stack-overflow-light"
          },
          {
            "$type": "Keyword",
            "value": "styled-components"
          },
          {
            "$type": "Keyword",
            "value": "sublime-dark"
          },
          {
            "$type": "Keyword",
            "value": "sublime-light"
          },
          {
            "$type": "Keyword",
            "value": "supabase-dark"
          },
          {
            "$type": "Keyword",
            "value": "supabase-light"
          },
          {
            "$type": "Keyword",
            "value": "svelte"
          },
          {
            "$type": "Keyword",
            "value": "swift"
          },
          {
            "$type": "Keyword",
            "value": "symfony-dark"
          },
          {
            "$type": "Keyword",
            "value": "symfony-light"
          },
          {
            "$type": "Keyword",
            "value": "tailwind-css-dark"
          },
          {
            "$type": "Keyword",
            "value": "tailwind-css-light"
          },
          {
            "$type": "Keyword",
            "value": "tauri-dark"
          },
          {
            "$type": "Keyword",
            "value": "tauri-light"
          },
          {
            "$type": "Keyword",
            "value": "tensor-flow-dark"
          },
          {
            "$type": "Keyword",
            "value": "tensor-flow-light"
          },
          {
            "$type": "Keyword",
            "value": "terraform-dark"
          },
          {
            "$type": "Keyword",
            "value": "terraform-light"
          },
          {
            "$type": "Keyword",
            "value": "three-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "three-js-light"
          },
          {
            "$type": "Keyword",
            "value": "twitter"
          },
          {
            "$type": "Keyword",
            "value": "type-script"
          },
          {
            "$type": "Keyword",
            "value": "ubuntu-dark"
          },
          {
            "$type": "Keyword",
            "value": "ubuntu-light"
          },
          {
            "$type": "Keyword",
            "value": "unity-dark"
          },
          {
            "$type": "Keyword",
            "value": "unity-light"
          },
          {
            "$type": "Keyword",
            "value": "unreal-engine"
          },
          {
            "$type": "Keyword",
            "value": "v-dark"
          },
          {
            "$type": "Keyword",
            "value": "v-light"
          },
          {
            "$type": "Keyword",
            "value": "vim-dark"
          },
          {
            "$type": "Keyword",
            "value": "vim-light"
          },
          {
            "$type": "Keyword",
            "value": "vscode-dark"
          },
          {
            "$type": "Keyword",
            "value": "vscode-light"
          },
          {
            "$type": "Keyword",
            "value": "vscodium-dark"
          },
          {
            "$type": "Keyword",
            "value": "vscodium-light"
          },
          {
            "$type": "Keyword",
            "value": "vala"
          },
          {
            "$type": "Keyword",
            "value": "vercel-dark"
          },
          {
            "$type": "Keyword",
            "value": "vercel-light"
          },
          {
            "$type": "Keyword",
            "value": "visual-studio-dark"
          },
          {
            "$type": "Keyword",
            "value": "visual-studio-light"
          },
          {
            "$type": "Keyword",
            "value": "vite-dark"
          },
          {
            "$type": "Keyword",
            "value": "vite-light"
          },
          {
            "$type": "Keyword",
            "value": "vitest-dark"
          },
          {
            "$type": "Keyword",
            "value": "vitest-light"
          },
          {
            "$type": "Keyword",
            "value": "vue-js-dark"
          },
          {
            "$type": "Keyword",
            "value": "vue-js-light"
          },
          {
            "$type": "Keyword",
            "value": "vuetify-dark"
          },
          {
            "$type": "Keyword",
            "value": "vuetify-light"
          },
          {
            "$type": "Keyword",
            "value": "web-assembly"
          },
          {
            "$type": "Keyword",
            "value": "web-storm-dark"
          },
          {
            "$type": "Keyword",
            "value": "web-storm-light"
          },
          {
            "$type": "Keyword",
            "value": "webflow"
          },
          {
            "$type": "Keyword",
            "value": "webpack-dark"
          },
          {
            "$type": "Keyword",
            "value": "webpack-light"
          },
          {
            "$type": "Keyword",
            "value": "windi-css-dark"
          },
          {
            "$type": "Keyword",
            "value": "windi-css-light"
          },
          {
            "$type": "Keyword",
            "value": "windows-dark"
          },
          {
            "$type": "Keyword",
            "value": "windows-light"
          },
          {
            "$type": "Keyword",
            "value": "wordpress"
          },
          {
            "$type": "Keyword",
            "value": "workers-dark"
          },
          {
            "$type": "Keyword",
            "value": "workers-light"
          },
          {
            "$type": "Keyword",
            "value": "xd"
          },
          {
            "$type": "Keyword",
            "value": "yarn-dark"
          },
          {
            "$type": "Keyword",
            "value": "yarn-light"
          },
          {
            "$type": "Keyword",
            "value": "yew-dark"
          },
          {
            "$type": "Keyword",
            "value": "yew-light"
          },
          {
            "$type": "Keyword",
            "value": "zig-dark"
          },
          {
            "$type": "Keyword",
            "value": "zig-light"
          },
          {
            "$type": "Keyword",
            "value": "p-5-js"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Icon",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@37"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@38"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@39"
                  },
                  "arguments": []
                }
              ]
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`));var w8={languageId:"yadl",fileExtensions:[".yadl"],caseInsensitive:!1},eq={AstReflection:()=>new qd},tq={Grammar:()=>ZL(),LanguageMetaData:()=>w8,parser:{}};function rq(t){let e=t.validation.ValidationRegistry,r=t.validation.YadlValidator,n={YadlModel:[]};e.register(n,r)}var jg=class{};var Ug=class extends gm{format(e){if(Fg(e)){let r=this.getNodeFormatter(e),n=r.keyword("{"),o=r.keyword("}");r.interior(n,o).prepend(fs.indent()),o.prepend(fs.newLine())}else if(JL(e)){let r=this.getNodeFormatter(e),n=r.keyword("{"),o=r.keyword("}");r.interior(n,o).prepend(fs.indent()),o.prepend(fs.newLine())}}};var Wg=class extends hd{getAstNodeHoverContent(e){if(Fg(e))return{contents:{kind:"markdown",language:"yadl",value:`class ${e.name} from hover`}}}};var jd=nr(I_(),1);var Fd;(function(t){function e(){return{successful:!0,modified:!0}}t.successful=e;function r(){return{successful:!0,modified:!1}}t.unmodified=r;function n(i){return{successful:!1,failureReason:Hg.VALIDATION,failureMessage:i}}t.failedValidation=n;function o(i){return{successful:!1,failureReason:Hg.TEXT_EDIT,failureMessage:i}}t.failedTextEdit=o})(Fd||(Fd={}));var Hg;(function(t){t.VALIDATION="Validation",t.TEXT_EDIT="TextEdit"})(Hg||(Hg={}));var Bg=class{constructor(e){this.references=e.references.References,this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.connection=e.shared.lsp.Connection,e.shared.lsp.Connection.onNotification("browser/sagar-from-client",()=>{this.addAtom().then(r=>r).then(r=>{e.shared.lsp.Connection.sendNotification("browser/sagar-from-webworker",{message:"Result 2",result:r})})})}computeAstNodeRename(e,r,n){let o=this.references.findReferences(e,{includeDeclaration:n,onlyLocal:!1});if(o.isEmpty())return new Kd;let i=this.getNewNameDefiner(e,r),s=new Kd;return o.forEach(a=>{let c=i.getNameForReference(a),u=jd.TextEdit.replace(a.segment.range,c),d=a.sourceUri;s.add(d,u)}),s}async addAtom(){let e=await this.langiumDocuments.createDocument(He.file("inmemory://model/1"),`

 datatype INT`);this.connection.sendNotification("browser/sagar-from-webworker",{message:"LMS Doc",result:e.textDocument});let r=this.computeTaskCreation(e);this.connection.sendNotification("browser/sagar-from-webworker",{message:"TextEdit Operation",result:r});let n=Kd.ofSingleEdit(e.uri,r);return n.add(e.uri,r),this.applySourceEdit(n,"add atom")}getNewNameDefiner(e,r){return{getNameForReference:n=>r,targetName:r}}computeTaskCreation(e){let r=`
`,n=`
`,o={line:0,character:0};return jd.TextEdit.insert(o,r+'task NEW_TASK_NAME "NEW_TASK_CONTENT"'+n)}applySourceEdit(e,r){this.connection.sendNotification("browser/sagar-from-webworker",{message:`SourceEdit=${JSON.stringify(e)}`,result:e});let n={newName:"sagar",position:{character:0,line:0}};return this.connection.sendRequest("textDocument.rename",n),this.connection.sendRequest(jd.ApplyWorkspaceEditRequest.type,{label:r,edit:e.toWorkspaceEdit()}).then(o=>o.applied?Fd.successful():Fd.failedTextEdit(o.failureReason)).then(o=>(o.successful&&(console.debug(r),this.connection.sendNotification("browser/sagar-from-webworker",{message:`Success=${r}`,result:r})),o),o=>(this.connection.sendNotification("browser/sagar-from-webworker",{message:`Failure=${r}`,result:r}),o))}},Kd=class t{constructor(){this.changes=new Map}static ofSingleEdit(e,r){let n=new t;return n.add(e,r),n}static of(e,r){let n=new t;return n.addAll(e,r),n}get size(){return this.changes.size}add(e,r){let n=this.changes.get(e);n?n.push(r):this.changes.set(e,[r])}addAll(e,r){let n=this.changes.get(e);n?n.push(...r):this.changes.set(e,r)}apply(e){e.changes.forEach((r,n)=>this.addAll(n,r))}toWorkspaceEdit(){let e={};return this.changes.forEach((r,n)=>{e[n.toString()]=r}),{changes:e}}getAffectedURIs(){return this.changes.keys()}};var b8={validation:{YadlValidator:()=>new jg},lsp:{Formatter:()=>new Ug,HoverProvider:t=>new Wg(t),RenameProvider:t=>new Kc(t)},lms:{TextEditService:t=>new Bg(t)}},Z_=class extends mm{registerCommands(e){e("parseAndGenerate",r=>{})}};function nq(t){let e=ss(I0(t),eq),r=ss(O0({shared:e}),tq,b8);return e.lsp.ExecuteCommandHandler=new Z_,e.ServiceRegistry.register(r),rq(r),t.connection||e.workspace.ConfigurationProvider.initialized({}),{shared:e,Yadl:r}}var R8=new _i.BrowserMessageReader(self),T8=new _i.BrowserMessageWriter(self),oq=(0,_i.createConnection)(R8,T8),{shared:iq,Yadl:_8}=nq(Object.assign({connection:oq},Jl));P0(iq);var k8=new _i.NotificationType("browser/DocumentChange"),S8=_8.serializer.JsonSerializer;iq.workspace.DocumentBuilder.onBuildPhase(J.Validated,t=>{var e;for(let r of t){let n=S8.serialize(r.parseResult.value,{sourceText:!0,textRegions:!0});oq.sendNotification(k8,{uri:r.uri.toString(),content:n,diagnostics:(e=r.diagnostics)!==null&&e!==void 0?e:[]})}});})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
