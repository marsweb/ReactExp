var MyUl=React.createClass({
	render:function(){
		var createUl=function(item){
			return <li>{item}</li>;
		};
		return <ul>{this.props.items.map(createUl)}</ul>
	}
});
var MyComp=React.createClass({
	getInitialState:function(){
		return {items:["打扫卫生","洗衣服"],inputText:""};
	},
	onChange:function(e){
		this.setState({inputText:e.target.value});
	},
	onClick:function(){
		this.setState({items:this.state.items.concat(this.state.inputText),inputText:""});
	},
	render:function(){
		return (
			<div>
				<MyUl items={this.state.items}></MyUl>
				<input onChange={this.onChange} value={this.state.inputText}/>
				<button onClick={this.onClick}>添加</button>
			</div>
		);
	}
});
React.render(<MyComp />, document.querySelector(".content"));