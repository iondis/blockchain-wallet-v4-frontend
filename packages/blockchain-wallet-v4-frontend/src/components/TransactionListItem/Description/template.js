import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Icon, Text } from 'blockchain-info-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`
const PencilIcon = styled(Icon)`
  padding-left: 10px;
`

const EditDescription = props => {
  const { handleChange, value } = props

  return (
    <Wrapper onClick={handleChange}>
      {value ? (
        <DisplayContainer>
          <Text
            size='14px'
            weight={400}
            data-e2e='transactionListItemDescription'
          >
            {value}
          </Text>
          <PencilIcon name='pencil' color='received' size='14px' cursor />
        </DisplayContainer>
      ) : (
        <DisplayContainer data-e2e='transactionListItemAddDescription'>
          <Text
            size='14px'
            weight={400}
            cursor='pointer'
            data-e2e='editTransactionDescriptionLink'
          >
            <FormattedMessage
              id='components.editdescription.add'
              defaultMessage='Add a description'
            />
          </Text>
          <PencilIcon name='pencil' color='received' size='14px' cursor />
        </DisplayContainer>
      )}
    </Wrapper>
  )
}

EditDescription.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default EditDescription
