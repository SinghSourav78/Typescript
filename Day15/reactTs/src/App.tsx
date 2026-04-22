import './App.css'
import { ChaiCard } from './components/chaicard.tsx'
import { Counter } from './components/Counter.tsx'

import type { Chai } from './types.ts'
import { ChaiList } from './components/ChaiList.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import { Card } from './components/Card.tsx'

const menu: Chai[] = [
  {
    id: 1,
    name: "Masala Chai",
    price: 30
  },
  {
    id: 2,
    name: "Adrak Chai",
    price: 25
  },
  {
    id: 3,
    name: "Elaichi Chai",
    price: 50
  }
]

function App() {

  return (
    <> 
      <div>
        <h1>React with TypeScript</h1>
        <ChaiCard 
          name="Masala Chai" 
          price={20} 
          isSpecial={true} 
          />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed: ", order.name, order.cups)
          }} 
         />
      </div>
      <div>
          <Card
            title='Chai aur Code'
            footer={<button>Order Now</button>} 
          />
      </div>
    </>
  )
}

export default App
