import { actions } from 'data'
import { BlockchainLoader } from 'blockchain-info-components'
import { connect } from 'react-redux'
import { getData } from './selectors'
import DataError from 'components/DataError'
import IdentityVerification from './IdentityVerification'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
`
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
`

const Loading = () => (
  <LoadingWrapper>
    <BlockchainLoader />
  </LoadingWrapper>
)

export const Profile = ({ data, fetchUser }) =>
  data.cata({
    Success: ({ userData, userTiers }) => (
      <Wrapper>
        <Container>
          <IdentityVerification userData={userData} userTiers={userTiers} />
        </Container>
      </Wrapper>
    ),
    NotAsked: () => <Loading />,
    Loading: () => <Loading />,
    Failure: () => <DataError onClick={fetchUser} />
  })

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(actions.modules.profile.fetchUser())
})

export default connect(
  getData,
  mapDispatchToProps
)(Profile)
