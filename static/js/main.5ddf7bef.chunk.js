(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},15:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=(n(15),n(9)),i=n(5),l=n(1),u=n(2),m=n(3),h=n(4),b=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleIncreament=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("habit: ".concat(this.props.habit.name," mounted"))}},{key:"componentWillUnmount",value:function(){console.log("habit: ".concat(this.props.habit.name," will unmount"))}},{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return r.a.createElement("li",{className:"habit"},r.a.createElement("span",{className:"habit-name"},t),r.a.createElement("span",{className:"habit-count"},n),r.a.createElement("button",{className:"habit-button habit-increase",onClick:this.handleIncreament},r.a.createElement("i",{className:"fas fa-plus-square"})),r.a.createElement("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement},r.a.createElement("i",{className:"fas fa-minus-square"})),r.a.createElement("button",{className:"habit-button habit-delete",onClick:this.handleDelete},r.a.createElement("i",{className:"fas fa-trash"})))}}]),n}(a.PureComponent),p=Object(a.memo)((function(e){var t=r.a.createRef(),n=r.a.createRef();return r.a.createElement("form",{ref:t,className:"add-form",onSubmit:function(a){a.preventDefault();var r=n.current.value;r&&e.onAdd(r),t.current.reset()}},r.a.createElement("input",{ref:n,type:"text",className:"add-input",placeholder:"Habit"}),r.a.createElement("button",{className:"add-button"},"Add"))})),d=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{onAdd:this.props.onAdd}),r.a.createElement("ul",null,this.props.habits.map((function(t){return r.a.createElement(b,{key:t.id,habit:t,onIncrement:e.props.onIncrement,onDecrement:e.props.onDecrement,onDelete:e.props.onDelete})}))),r.a.createElement("button",{className:"habits-reset",onClick:this.props.onReset},"Reset All"))}}]),n}(a.Component),f=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:"navbar"},r.a.createElement("i",{className:"navbar-logo fas fa-leaf"}),r.a.createElement("span",{className:""},"Habit Tracker"),r.a.createElement("span",{className:"navbar-count"},this.props.totalCount))}}]),n}(a.PureComponent),v=(n(16),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncreament=function(t){var n=e.state.habits.map((function(e){return e.id===t.id?Object(i.a)({},t,{count:t.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){var n=e.state.habits.map((function(e){if(e.id===t.id){var n=t.count-1;return Object(i.a)({},t,{count:n<0?0:t.count-1})}return e}));e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(s.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return 0!==e.count?Object(i.a)({},e,{count:0}):e}));e.setState({habits:t})},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),r.a.createElement(d,{habits:this.state.habits,onIncrement:this.handleIncreament,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset}))}}]),n}(a.Component));n(17);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.5ddf7bef.chunk.js.map