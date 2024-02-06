
// React component
// function HeaderComponentExample() {
//   return (
//     <h2>I'm learning React!</h2>
//   )
// }

// ReactDOM.render(
//   <div>
//     <h1>Hi, my name is Adam!</h1>
//     <HeaderComponentExample />
//   </div>,
//   document.getElementById("root")
// )


const navbar = (
  <nav>
    <h1>Adam's Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
