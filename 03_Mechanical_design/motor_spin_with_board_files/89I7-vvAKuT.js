if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("LSTaskExists",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(e){return b.seq([function(d){return b.db.table(2).fetch([[[a[0]]]]).next().then(function(a,b){b=a.done;a=a.value;return b?c[0]=!1:(a.item,c[0]=!0)})},function(a){return d[0]=c[0]}])},function(a){return b.resolve(d)}])}e.exports=a}),null);