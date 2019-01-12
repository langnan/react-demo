import React,{ Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments:[]
    }

    render(){
        console.log(this.props)
        return (
            <div>
                {
                    this.props.comments.map( (comment,i) => <Comment comment={comment} key={i}/>)
                }
            </div>
        )
    }
}

export default CommentList