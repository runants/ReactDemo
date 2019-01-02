import React from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      comments: []
  }

    //this.delete = this.delete.bind(this)
  }

  // 在此方法中启动定时器/绑定监听/发送ajax请求
  componentDidMount () {
    //模拟异步获取数据
    setTimeout(() => {
      const comments = [
        {
          username: "小明",
          content: "ReactJS好难啊！!",
          //id: Date.now()
        },
        {
          username: "老王",
          content: "ReactJS还不错!",
         // id: Date.now() + 1
        }
      ]
      this.setState({
        comments
      })
    }, 1000)
  }

  add = (comment) => {
    let comments = this.state.comments
    comments.unshift(comment)
    this.setState({ comments })
  }

  delete =(index) =>{
    let comments = this.state.comments
      /*splice做删除，删除1条*/
    comments.splice(index, 1)
    this.setState({ comments })
  }


    render () {
        return (
            <div>
                <header style={{background:'#828a99'}} className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1 style={{color:'#fff'}}>对ReactDemo的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">

                    <CommentAdd add={this.add}/>

                    <CommentList comments={this.state.comments} delete={this.delete}/>
                </div>
            </div>
        )
    }

}



export default App