import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <p>
        { text }
      </p>
      <p>has { votes } votes</p>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: this.props.getVotes()
    }
  }

  render() {
    const randomize = () => {
      while (true) {
        const randomized = Math.floor((Math.random() * this.props.anecdotes.length))
        if (randomized !== this.state.selected) {
          this.setState({
            selected: randomized
          })
          break;
        }
      }
    }

    const vote = () => {
      const votesCopy = { ...this.state.votes }
      votesCopy[this.state.selected] += 1
      this.setState({ votes: votesCopy })
    }

    const mostVotes = () => {
      const most = this.state.votes[0]
      let mostIndex = 0;
      for (let i = 1; i < this.state.votes.length; i++) {
        if (this.state.votes[i] > most) {
          mostIndex = i
        }
      }
      return mostIndex
    }

    const selectedAnecdote = this.props.anecdotes[this.state.selected]
    const selectedVotes = this.state.votes[this.state.selected]
    const topAnecdote = this.props.anecdotes[mostVotes()]
    const topVotes = this.state.votes[mostVotes()]
    
    return (
      <div>
        <Anecdote text={ selectedAnecdote } votes={ selectedVotes } />
        <button onClick={ vote }>vote</button>        
        <button onClick={ randomize }>next anecdote</button>
        <h3>anecdote with most votes:</h3>
        <Anecdote text={ topAnecdote } votes={ topVotes } />
      </div>
    )
  }
}

const getVotes = () => {
  const votes = []
  for (let i = 0; i < anecdotes.length; i++) {
    votes[i] = 0
  }
  return votes
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={ anecdotes } getVotes={ getVotes } />,
  document.getElementById('root')
)