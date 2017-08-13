import { connect } from 'react-redux'
import { RootState } from '../store'
import ActiveLink, { OwnProps } from '../components/ActiveLink'

export interface StateProps {
  pathname: string,
}
interface AntiStateProps {
  pathname? : string,
  store?    : any,
}

const mapStateToProps = (state: RootState): StateProps => {
  const location = state.routing.location
  return ({
    pathname: location ? location.pathname : '',
  })
}

// `OwnProps|AntiStateProps` intended to remove StateProps required value from OwnProps
const ActiveLinkContainer = connect<StateProps, {}, OwnProps|AntiStateProps>(mapStateToProps, {})(ActiveLink)

export default ActiveLinkContainer
