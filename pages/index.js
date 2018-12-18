import { withRouter } from 'next/router'

import KeyListener from '../components/KeyListener'
import KeyTable from '../components/KeyTable'
import KeyElementCard from '../components/KeyElementCard';

const Index = () => (

    <KeyListener>
      <KeyTable />
      <KeyElementCard />
    </KeyListener>

)

export default withRouter(Index)