(this["webpackJsonptoko-komputer-customer"]=this["webpackJsonptoko-komputer-customer"]||[]).push([[0],{38:function(t,e,a){},64:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a(1),s=a.n(n),r=a(31),o=a.n(r),i=(a(38),a(4)),l=a(5),d=a(7),j=a(6),m=a(2),u=a(12),h=a.n(u),b="http://168.138.182.251:8080/store/api/v1",p=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).Login=function(e){e.preventDefault();var a={username:t.state.username,password:t.state.password};h.a.post("http://168.138.182.251:8080/store/api/v1/customer/auth",a).then((function(e){if(t.setState({logged:e.data.logged}),t.state.logged){var a=e.data.data,c=e.data.token;localStorage.setItem("customer",JSON.stringify(a)),localStorage.setItem("token",c),t.props.history.push("/")}else t.setState({message:e.data.message})})).catch((function(t){return console.log(t)}))},t.state={username:"",password:"",message:"",logged:!0},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{className:"container d-flex h-100 justify-content-center align-items-center",children:Object(c.jsxs)("div",{className:"col-sm-6 card my-5",children:[Object(c.jsxs)("div",{className:"card-header bg-success text-white text-center",children:[Object(c.jsx)("h4",{children:"Computer Store"}),Object(c.jsx)("strong",{className:"text-warning",children:"Customer Sign In"})]}),Object(c.jsxs)("div",{className:"card-body",children:[this.state.logged?null:Object(c.jsx)("div",{className:"alert alert-danger mt-1",children:this.state.message}),Object(c.jsxs)("form",{onSubmit:function(e){return t.Login(e)},children:[Object(c.jsx)("input",{type:"text",className:"form-control mb-1",value:this.state.username,onChange:function(e){return t.setState({username:e.target.value})}}),Object(c.jsx)("input",{type:"password",className:"form-control mb-1",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})},autoComplete:"false"}),Object(c.jsx)("button",{className:"btn btn-block btn-primary mb-1",type:"submit",children:"Sign In"})]})]})]})})}}]),a}(s.a.Component),O=a(16),g=a(13),x=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).Logout=function(){localStorage.removeItem("token"),localStorage.removeItem("customer"),window.location="/login"},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"navbar navbar-expand-lg bg-dark navbar-dark",children:[Object(c.jsx)("a",{className:"navbar-brand",children:"Moklet Computer Store"}),Object(c.jsx)("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#menu",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{id:"menu",className:"navbar-collapse collpase",children:Object(c.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(g.b,{to:"/",className:"nav-link",children:"Product"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(g.b,{to:"/cart",className:"nav-link",children:"Cart"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(g.b,{to:"/transaction",className:"nav-link",children:"Transactions"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(g.b,{className:"nav-link",onClick:function(){return t.Logout()},children:"Logout"})})]})})]})}}]),a}(s.a.Component),v=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"col-lg-6 col-sm-12 p-2",children:Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)("div",{className:"card-body row",children:[Object(c.jsx)("div",{className:"col-5",children:Object(c.jsx)("img",{src:this.props.image,className:"img",height:"200",width:"200",alt:this.props.name})}),Object(c.jsxs)("div",{className:"col-7",children:[Object(c.jsx)("h5",{className:"text-info",children:this.props.name}),Object(c.jsxs)("h6",{className:"text-danger",children:["Price: ",this.props.price]}),Object(c.jsxs)("h6",{className:"text-dark",children:["Stock: ",this.props.stock]}),Object(c.jsx)("button",{className:"btn btn-sm btn-success m-1",onClick:this.props.onCart,children:"Tambahkan ke keranjang belanja"})]})]})})})}}]),a}(s.a.Component),f=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).headerConfig=function(){return{headers:{Authorization:"Bearer ".concat(t.state.token)}}},t.getProduct=function(){h.a.get("http://168.138.182.251:8080/store/api/v1/product",t.headerConfig()).then((function(e){t.setState({products:e.data})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.addToCart=function(t){var e=[];if(null!==localStorage.getItem("cart")&&(e=JSON.parse(localStorage.getItem("cart"))),e.find((function(e){return e.product_id===t.product_id})))window.alert("Anda telah memilih ".concat(t.name));else{var a=window.prompt("Masukkan jumlah ".concat(t.name," yang beli"),"");null!==a&&""!==a&&(t.qty=a,e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}},t.state={products:[],token:""},localStorage.getItem("token")?t.state.token=localStorage.getItem("token"):window.location="/login",t.headerConfig.bind(Object(O.a)(t)),t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getProduct()}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"text-bold text-info mt-2",children:"Product List"}),Object(c.jsx)("div",{className:"row",children:this.state.products.map((function(e){return Object(c.jsx)(v,{name:e.name,price:e.price,stock:e.stock,image:"http://168.138.182.251:8080/product_image//"+e.image,onCart:function(){return t.addToCart(e)}},e.product_id)}))})]})]})}}]),a}(s.a.Component),N=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).getAmount=function(t){var e=0;return t.map((function(t){e+=Number(t.price)*Number(t.qty)})),e},t.convertTime=function(t){var e=new Date(t);return"".concat(e.getDate(),"/").concat(Number(e.getMonth())+1,"/").concat(e.getFullYear())},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"card col-sm-12 my-1",children:Object(c.jsxs)("div",{className:"card-body row",children:[Object(c.jsxs)("div",{className:"col-lg-4 col-sm-12",children:[Object(c.jsx)("small",{className:"text-info",children:"Customer"}),Object(c.jsx)("h6",{children:this.props.customer_name})]}),Object(c.jsxs)("div",{className:"col-lg-4 col-sm-12",children:[Object(c.jsx)("small",{className:"text-info",children:"Address"}),Object(c.jsx)("h6",{children:this.props.customer_address})]}),Object(c.jsxs)("div",{className:"col-lg-2 col-sm-12",children:[Object(c.jsx)("small",{className:"text-info",children:"Total Amount"}),Object(c.jsxs)("h6",{className:"text-danger",children:["Rp ",this.getAmount(this.props.products)]})]}),Object(c.jsxs)("div",{className:"col-lg-2 col-sm-12",children:[Object(c.jsxs)("small",{className:"text-bold text-info",children:["Time: ",this.convertTime(this.props.time)]}),Object(c.jsx)("button",{className:"btn btn-sm btn-block btn-success","data-toggle":"modal","data-target":"#modalDetail".concat(this.props.transaction_id),children:"Details"})]})]})}),Object(c.jsx)("div",{className:"modal fade",id:"modalDetail".concat(this.props.transaction_id),children:Object(c.jsx)("div",{className:"modal-dialog modal-lg",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("div",{className:"modal-header bg-success text-white",children:Object(c.jsx)("h5",{children:"Detail of Transaction"})}),Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsxs)("h5",{children:["Customer: ",this.props.customer_name]}),Object(c.jsxs)("h6",{children:["Time: ",this.convertTime(this.props.time)]}),Object(c.jsxs)("table",{className:"table table-bordered",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"Product"}),Object(c.jsx)("th",{children:"Price"}),Object(c.jsx)("th",{children:"Qty"}),Object(c.jsx)("th",{children:"Total"})]})}),Object(c.jsxs)("tbody",{children:[this.props.products.map((function(t,e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"".concat(e+1)}),Object(c.jsx)("td",{children:t.product.name}),Object(c.jsxs)("td",{children:["Rp ",t.price]}),Object(c.jsx)("td",{children:t.qty}),Object(c.jsxs)("td",{className:"text-right",children:["Rp ",t.price*t.qty]})]},t.product_id)})),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{colSpan:"4",className:"text-danger text-bold",children:Object(c.jsx)("h4",{children:"Total"})}),Object(c.jsx)("td",{className:"text-right text-danger text-bold",children:Object(c.jsxs)("h4",{children:["Rp ",this.getAmount(this.props.products)]})})]})]})]})]})]})})})]})}}]),a}(s.a.Component),k=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).headerConfig=function(){return{headers:{Authorization:"Bearer ".concat(t.state.token)}}},t.getTransaction=function(){var e=b+"/transaksi/"+t.state.customer.customer_id;h.a.get(e,t.headerConfig()).then((function(e){t.setState({transaction:e.data})})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.state={token:"",customer:null,transaction:[]},localStorage.getItem("token")&&localStorage.getItem("customer")?(t.state.token=localStorage.getItem("token"),t.state.customer=JSON.parse(localStorage.getItem("customer"))):window.location="/login",t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getTransaction()}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"text-bold text-info mt-2",children:"Transactions List"}),this.state.transaction.map((function(t){return Object(c.jsx)(N,{transaction_id:t.transaksi_id,customer_name:t.customer.name,customer_address:t.customer.address,time:t.waktu,products:t.detail_transaksi},t.transaksi_id)}))]})]})}}]),a}(s.a.Component),y=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).headerConfig=function(){return{headers:{Authorization:"Bearer ".concat(t.state.token)}}},t.initCart=function(){var e=[];if(null!==localStorage.getItem("cart")&&(e=JSON.parse(localStorage.getItem("cart"))),null!==localStorage.getItem("customer")){var a=JSON.parse(localStorage.getItem("customer"));t.setState({customerID:a.customer_id,customerName:a.name})}var c=0;e.map((function(t){c+=t.price*t.qty})),t.setState({cart:e,total:c})},t.editItem=function(e){var a=[];null!==localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart")));var c=a.findIndex((function(t){return t.product_id===e.product_id})),n=window.prompt("Masukkan jumlah ".concat(e.name," yang beli"),e.qty);a[c].qty=n,localStorage.setItem("cart",JSON.stringify(a)),t.initCart()},t.dropItem=function(e){if(window.confirm("Apakah anda yakin menghapus ".concat(e.name," dari cart?"))){var a=[];null!==localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart")));var c=a.findIndex((function(t){return t.product_id===e.product_id}));a.splice(c,1),localStorage.setItem("cart",JSON.stringify(a)),t.initCart()}},t.checkOut=function(){var e=[];null!==localStorage.getItem("cart")&&(e=JSON.parse(localStorage.getItem("cart")));var a={customer_id:t.state.customerID,detail_transaksi:e};h.a.post("http://168.138.182.251:8080/store/api/v1/transaksi",a,t.headerConfig()).then((function(t){window.alert(t.data.message),localStorage.removeItem("cart"),window.location="/transaction"})).catch((function(e){e.response?e.response.status&&(window.alert(e.response.data.message),t.props.history.push("/login")):console.log(e)}))},t.state={token:"",customerID:"",customerName:"",cart:[],total:0},localStorage.getItem("token")?t.state.token=localStorage.getItem("token"):window.location="/login",t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.initCart()}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"card col-12 mt-2",children:[Object(c.jsx)("div",{className:"card-header bg-primary text-white",children:Object(c.jsx)("h4",{children:"Cart List"})}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsxs)("h5",{className:"text-primary",children:["Customer: ",this.state.customerName]}),Object(c.jsxs)("table",{className:"table table-bordered",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Product"}),Object(c.jsx)("th",{children:"Price"}),Object(c.jsx)("th",{children:"Qty"}),Object(c.jsx)("th",{children:"Total"}),Object(c.jsx)("th",{children:"Option"})]})}),Object(c.jsxs)("tbody",{children:[this.state.cart.map((function(e,a){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsxs)("td",{children:["Rp ",e.price]}),Object(c.jsx)("td",{children:e.qty}),Object(c.jsxs)("td",{className:"text-right",children:["Rp ",e.price*e.qty]}),Object(c.jsxs)("td",{children:[Object(c.jsx)("button",{className:"btn btn-sm btn-info m-1",onClick:function(){return t.editItem(e)},children:"Edit"}),Object(c.jsx)("button",{className:"btn btn-sm btn-danger m-1",onClick:function(){return t.dropItem(e)},children:"Hapus"})]})]},a)})),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{colSpan:"3",children:"Total"}),Object(c.jsxs)("td",{className:"text-right",children:["Rp ",this.state.total]}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"btn btn-sm btn-success btn-block m-1",onClick:function(){return t.checkOut()},disabled:0===this.state.cart.length,children:"Checkout"})})]})]})]})]})]})})]})}}]),a}(s.a.Component),S=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{exact:!0,path:"/",component:f}),Object(c.jsx)(m.a,{path:"/login",component:p}),Object(c.jsx)(m.a,{path:"/transaction",component:k}),Object(c.jsx)(m.a,{path:"/cart",component:y})]})}}]),a}(s.a.Component),w=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),s(t),r(t)}))};a(61),a(62);o.a.render(Object(c.jsx)(g.a,{basename:"/customer-toko-komputer",children:Object(c.jsx)(S,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);
//# sourceMappingURL=main.d4abff6b.chunk.js.map