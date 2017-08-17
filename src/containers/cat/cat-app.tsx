import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store'
import CatApp, { OwnProps } from 'components/cat/cat-app'
import Cat from 'types/cat'
import { deleteCat } from 'reducers/actions'

export interface StateProps {
  cats: Cat[],
}

interface AntiStateProps {
  cats? : Cat[],
  store? : any,
}

export interface DispatchProps {
  unregister: (id: string) => void,
}

const mapStateToProps = (state: RootState): StateProps => {
  return ({
    cats: state.cats.data,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => {
  return ({
    unregister: (id: string) => dispatch(deleteCat(id)),
  })
}

const CatAppContainer = connect<StateProps, DispatchProps, OwnProps|AntiStateProps|DispatchProps>(mapStateToProps, mapDispatchToProps)(CatApp)

export default CatAppContainer
