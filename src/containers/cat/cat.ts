import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store'
import Cat, { PureOwnProps } from 'components/cat/cat'
import { deleteCat } from 'reducers/actions/async/cat/delete'

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

type AllProps = PureOwnProps|AntiStateProps|AntiDispatchProps
type MapStateToProps = (State: RootState) => StateProps
type MapDispatchToProps = (Dispatch: Dispatch<{}>, Props?: PureOwnProps) => DispatchProps

const mapStateToProps: MapStateToProps = state => {
  return ({
    username : state.profile.data.username,
  })
}

const mapDispatchToProps: MapDispatchToProps = dispatch => {
  return ({
    unregister: (id: string, owner: string) => dispatch(deleteCat(id, owner)),
  })
}

const CatContainer = connect<StateProps, DispatchProps, AllProps>(mapStateToProps, mapDispatchToProps)(Cat)

export default CatContainer
