import { actions } from 'data'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getData } from './selectors'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import AdvancedSecurity from './AdvancedSecurity'
import BasicSecurity from './BasicSecurity'
import Menu from './Menu'
import React from 'react'
import SecurityCenter from './template'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
`

class SecurityCenterContainer extends React.PureComponent {
  componentWillUnmount () {
    this.props.settingsActions.removeRecoveryPhrase()
  }

  render () {
    return (
      <Wrapper>
        <Menu location={this.props.location} />
        {this.props.data.cata({
          Success: progress => (
            <SecurityCenter progress={progress} {...this.props}>
              <Switch>
                <Route
                  path='/security-center/basic'
                  component={BasicSecurity}
                />
                <Route
                  path='/security-center/advanced'
                  component={AdvancedSecurity}
                />
                <Redirect from='/security-center' to='/security-center/basic' />
              </Switch>
            </SecurityCenter>
          ),
          Failure: () => <div />,
          Loading: () => <div />,
          NotAsked: () => <div />
        })}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  data: getData(state)
})

const mapDispatchToProps = dispatch => ({
  settingsActions: bindActionCreators(actions.modules.settings, dispatch)
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SecurityCenterContainer)
)
