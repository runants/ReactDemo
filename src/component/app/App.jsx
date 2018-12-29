import React,{Component} from 'react'
//import logo from '../../logo.svg'
import ComponentList from '../component-add/component-add'
import ComponentAdd from '../componet-list/componet-list'
class App extends Component{

    constructor(props){
        super(props)

        this.state={

        }
    }

    render(){
        return(
            <div>
                <header className="site-header jumbotron"  style={{background:'#5d7886'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1 style={{color:'#ffffff'}}>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>


                <div className="container">
                    <ComponentList />
                    <ComponentAdd />
                </div>
            </div>



        )
    }
}

export default App