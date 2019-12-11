import chai from 'chai'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'
import createChaiJestDiff from 'chai-jest-diff'
import Adapter from 'enzyme-adapter-react-16'
import { configure as configureEnzyme } from 'enzyme'
import createChaiEnzyme from 'chai-enzyme'

chai
.use(dirtyChai)
.use(sinonChai)
.use(createChaiJestDiff())
.use(createChaiEnzyme())

configureEnzyme({ adapter: new Adapter() })