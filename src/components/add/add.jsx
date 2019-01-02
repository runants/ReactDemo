/*
添加评论组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Add extends Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  state = {
    username:'',
      content:''
  }

    handleSubmit =  () =>{
        // 根据输入的数据创建评论对象
        const comment =this.state
        // 添加到comments中, 更新state
        this.props.addComment(comment)
        // 清除输入的数据
        this.setState({
            username: '',
            content: ''
        })
    }


    changeUsername =(event)=> {
        this.setState({
            username: event.target.value
        })
    }

    changeContent= (event)=> {
        this.setState({
            content: event.target.value
        })
    }

  render () {
      let {username,content} = this.state
    return (

      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            {/*<input type="text" className="form-control" placeholder="用户名" ref='username'/>*/}
            <input type="text" className="form-control" placeholder="用户名"  value={username}
                   onChange={this.changeUsername}/>

          </div>
          <div className="form-group">
            <label>评论内容</label>
            {/*<textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>*/}
            <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.changeContent}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}