function navItem(name, link) {
  return (<li class="duration-300 hover:translate-y-[-2px] text-center">{name}</li>)
}

function App() {
  const paperName = ["Times", "Journal", "Post", "Tribune", "Globe"]

  return (
    <div class="bg-white w-[calc(100%-2rem)] max-w-4xl mx-auto my-4 border-8 border-white shadow-pixel">
      <header class="flex flex-col md:flex-row justify-between m-2">
        <div class="text-left hidden sm:flex flex-row md:flex-col justify-around md:justify-normal"><p>Welcome to rileycjson.com</p><p>Sept 18th, AM Edition</p><p>Volume I... No 1</p></div>
        <div class="w-fit mx-auto font-['Chomsky'] text-center">
            <p class="text-4xl translate-y-[0.5rem]">The</p>
            <p class="text-6xl">Riley Johnson</p>
            <p class="text-4xl translate-y-[-0.5rem]">{paperName[Math.floor(Math.random() * paperName.length)]}</p>
        </div>
        <div class="text-right hidden sm:flex flex-row md:flex-col justify-center md:justify-normal"><p>A computer science student</p><p>&nbsp;studying computer science</p><p>&nbsp;and more at UT Dallas</p></div>
      </header>
      <nav class="border-y-2 border-black">
        <ul class="grid grid-cols-3 md:grid-cols-6 my-0.5 justify-between">
          {navItem("Home")}
          {navItem("Sports")}
          {navItem("Lifestyle")}
          {navItem("Business")}
          {navItem("Contact")}
          {navItem("25¢")}
        </ul>
      </nav>
      <body class="">Body</body>
    </div>
  )
}

export default App
