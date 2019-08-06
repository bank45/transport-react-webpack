import React, { Component } from 'react';

import Header from '../header';
import FlightList from '../flight-list';

class App extends Component {

  componentDidUpdate(){
    console.log('App componentDidUpdate()...')
}

  render() {
    console.log('App render: ...')
    return (
      <main role="main" className="container">
        <Header />
        <FlightList />
      </main>
    );
  }

};

export default App;






















// const HeadingItem = (props) => {
//     const Heading = props.headingTagType
//     return <Heading>{props.headingText}</Heading>

// }

// const DescriptionItem = (props) => {
//     const Desc = props.tagType
//     return <Desc>{props.descriptionText}</Desc>
// }

// class SectionItem extends React.Component {
//     render() {
//         return (
//             <section>
//                 <HeadingItem
//                     headingText={props.headingText}
//                     headingTagType={props.headingTagType}
//                 />
//                 < DescriptionItem
//                     descriptionText={props.descriptionText}
//                     tagType={props.descriptionTagType}
//                 />
//             </section>

//         )
//     }
// }


// export default class App extends React.Component {
//     render(){
//         return (
//             <div className='wrapper'>
//                 <h1>Transport</h1>
//                 <SectionItem
//                     headingText='HTML'
//                     headingTagType='h1'
//                     descriptionText='Transforms into the DOM'
//                     descriptionTagType='p'
//                 />
//                 <SectionItem
//                     headingText='CSS'
//                     headingTagType='h1'
//                     descriptionText='Style into the DOM'
//                     descriptionTagType='p'
//                 />
//                 <SectionItem
//                     headingText='JS'
//                     headingTagType='h1'
//                     descriptionText='Transforms into the DOM'
//                     descriptionTagType='div'
//                 />
//             </div>
//         )

//     }
// }



