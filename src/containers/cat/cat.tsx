import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store'
import Cat, { PureOwnProps } from 'components/cat/cat'
import { deleteCat } from 'reducers/actions'

interface StateProps {
  username : string,
}

interface AntiStateProps {
  username? : string,
  store?    : any,
}

interface DispatchProps {
  unregister: (id: string, owner: string) => void,
}

interface AntiDispatchProps {
  unregister?: (id: string, owner: string) => void,
}

const mapStateToProps = (state: RootState): StateProps => {
  return ({
    username : state.profile.data.username,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => {
  return ({
    unregister: (id: string, owner: string) => dispatch(deleteCat(id, owner)),
  })
}

const CatContainer = connect<StateProps, DispatchProps, PureOwnProps|AntiStateProps|AntiDispatchProps>(mapStateToProps, mapDispatchToProps)(Cat)

export default CatContainer
