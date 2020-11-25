import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const SaveEncounterButton = (props) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state
  const {nameEncounter, saveEncounter} = props

  const handleClick = () => {
    console.log('Submitting encounter!')
    saveEncounter()
    dispatch({ type: 'close' })
  }

  return (
    <>
      <Button positive onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
        Create Encounter
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Create Encounter</Modal.Header>
        <Modal.Content>
          <label>
              <strong>Name Encounter: </strong>
              <input name='name' placeholder='Forest Fight' onChange={(e) => nameEncounter(e.target.value)} />
          </label>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            Go Back
          </Button>
          <Button positive onClick={() => handleClick()}>
            Save Encounter
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default SaveEncounterButton