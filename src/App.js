import logo from './logo.svg';
import './App.css';
import Home from'./Home.js';
import Product from './Product.js';
import Color from './Color.js';
import Welcome from './Welcome.js';
import Car from './Car.js';
import Garage from './Car.js';
import Cars from './Cars.js';
import Clock from './Clock.js';
import Clock2 from './Clock2.js';
import Clock3 from './Clock3.js';

import Task  from './Task.js';
import FunctionClick from './FunctionClick.js';
import ClassClick  from './ClassClick.js';
import EventBind from './EventBind.js'
import EventBind2 from './EventBind2.js';
import EventBind3 from './EventBind3.js';
import EventBind4 from './EventBind4.js';
import ConditionalRendering from './ConditionalRendering';
import ConditionalRendering2 from './ConditionalRendering2';
import ConditionalRendering3 from './ConditionalRendering3';
import ConditionalRendering4 from './ConditionalRendering4';
// import ConditionalExample from './ConditionalExample';
import ListRendering from './ListRendering';
import ListRendering2 from './ListRendering2.js';
import NameList from './NameList';
import ListRenderingExample from './ListRenderingExample';
import Task2 from './Task2.js';
import ListandKeys from './ListandKeys';
import Form from './Form';


import Forms from './Forms.js';
import Forms2 from './Forms2';
import LiftingStateup2 from './LiftingStateup2';
import Composition1 from './Composition1';
import ParentComponent from './ParentComponent';
import ProptypesExample from './ProptypesExample';
import ProptypesExample1 from './ProptypesExample1';
import Composition2 from './Composition2';
import ProptypesExample2 from './ProptypesExample2';


import RefsDemo from './RefsDemo';
import CallBackRefs from './CallBackRefs.js'
import ForwardRefParent from './ForwardRefParent';
import ProptypesExample3 from './ProptypesExample3';
import ProptypesExample4 from './ProptypesExample4';
import ComponentC from './ComponentC';
import { UserProvider } from './UserContext';
import CodeSplittng from './CodeSplitting';
import RefClassParent from './RefClassParent';
import Fragments from './Fragment';
import Fragment from './Fragment';
import Fragment2 from './Fragment2';
import ErrorBoundaryExample from './ErrorBoundaryExample';
import ErrorBoundary from './ErrorBoundary';
import Table from './Table';
import HOC from './HOC';
import PortalDemo from './PortalDemo';
import LifecycleMountA from './LifecycleMountA';
import LifecycleUpdateA from './LifecycleUpdateA';
import Nameslist from './Nameslist';
import NamesList1 from './NamesList1';
import NamesList2 from './NamesList2';
import NameList3 from './NamesList3';
import Names from './Names';

import ClassState from './Hooks/ClassState';
import StateHook from './Hooks/StateHook';
import HookCounter from './Hooks/StateHookCounter';
import StateHookObject from './Hooks/StateHookObject';
import StateHookArray from './Hooks/StateHookArray';
import StateColor from './Hooks/StateColor';



// import Demo from './Demo.js';

function App() {
  return (
    <div className="App">
     <h1> Welcome to ReactJS </h1>

     {/* <Home name="Janu" position="HR"> I am beginner </Home>
     <Home name="Geethu" position="HR"> I am beginner </Home>
     <Home name="Seethu" position="HR">  </Home>
     <Home name="Monu" position="">  </Home>
     <Product name="Android" price="50K"/> */}
     {/* <Color/><hr/> */}
     {/* <Demo/> */}

    {/* <Welcome name="Sara"/> */}
    {/* <Welcome name="Thara"/>      */}
    {/* composing component */}
  

     {/* <Cars brand="Ford"/> */}
     {/* <Clock date={new Date()}/> */}
     {/* <Clock2 date={new Date()}/> */}
     {/* <Clock3/> */}

<Task/> <br/><hr/>

<FunctionClick/>  <br/>
<ClassClick/> <br/> <br/> <hr/>

<EventBind/>  <br/> <br/>
<EventBind2/>  <br/> <br/>
<EventBind3/>  <br/> <br/>
<EventBind4/> <br/> <br/><hr/>

<ConditionalRendering/> <br/> <br/>
<ConditionalRendering2/> <br/> <br/>
<ConditionalRendering3/> <br/> <br/>
<ConditionalRendering4/> <br/> <br/><hr/>
{/* <ConditionalExample/> <br/> <br/> */}

<ListRendering/> <br/> <br/> 
<ListRendering2/> <br/> <br/> 
{/* <NameList/> <br/> <br/>  */}
<ListRenderingExample/> <br/> <br/> <hr/>

<Task2/> <br/> <br/> <hr/>
{/* <ListandKeys/> <br/> <br/>  */}

{/* <Form/> */}
<Forms/><hr/>
<Forms2/><br/><hr/>

<LiftingStateup2/><br/><hr/>

<Composition2/> <br/><hr/>
<ParentComponent/> <br/><hr/>

{/* <ProptypesExample name={123}/>   throws warning because number given instead of string*/}
<ProptypesExample name='ABC' age={25}/>  
<ProptypesExample1 name="Aspire"/>  <br/>

<ProptypesExample2><div>child,sss</div></ProptypesExample2>  <br/>  

<ProptypesExample3/> <br/>
<ProptypesExample4/><br/><hr/>               

<RefsDemo/> 
<CallBackRefs/><br/><hr/>
<RefClassParent/>

<ForwardRefParent/> <br/><hr/>

<UserProvider value={[{a:"abc",b:'40'}]}>
<ComponentC/>
</UserProvider>

<CodeSplittng/> <br/><hr/>
<Fragment/> 
<Fragment2/> 
<Table/> <br/><hr/>

<ErrorBoundary>
<ErrorBoundaryExample name='Aspire'/>
</ErrorBoundary>

<ErrorBoundary>
<ErrorBoundaryExample name='System'/>
</ErrorBoundary>

<ErrorBoundary>
{/* <ErrorBoundaryExample name='abc'/>   */}
</ErrorBoundary><br/><hr/> 


{/* <HOC/>  <br/><hr/>  */}

<PortalDemo/>
{/* <LifecycleMountA/> */}
{/* <LifecycleUpdateA/> */}

{/* <Nameslist/> <br/><hr/>
<NamesList1/> <br/><hr/>
<NamesList2/> <br/><hr/>
<NameList3/>
<Names/> */}

{/* <ClassState/> */}
<StateHook/> <br/><hr/>
<HookCounter/> <br/><hr/>
<StateHookObject/> <br/><hr/>
<StateHookArray/> <br/><hr/>
<StateColor/> <br/><hr/>

    </div>
  );
}

export default App;
