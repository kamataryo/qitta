import { connect } from 'react-redux'
import { RootState } from 'store'
import CatApp, { OwnProps } from 'components/cat/cat-app'
import Cat from 'types/cat'

export interface StateProps {
  cats: Cat[],
}

interface AntiStateProps {
  cats? : Cat[],
  store? : any,
}

const mapStateToProps = (state: RootState): StateProps => {
  return ({
    cats: state.cat.data,
  })
}

const CatAppContainer = connect<StateProps, {}, OwnProps|AntiStateProps>(mapStateToProps, {})(CatApp)

export default CatAppContainer
