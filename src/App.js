// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Homepage from './components/Homepage/Homepage';
// // import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

// const App = () => {
//   return (
//     <>
//       <Homepage />

//       <Switch>
//         <Route exact path="/" component={Home} />
//         {/* <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} /> */}
//       </Switch>
//     </>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

const App = () => {
  <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
  return (
    <>
      < Homepage/>
      
        </>
  );
};

export default App;

