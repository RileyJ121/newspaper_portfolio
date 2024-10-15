import TextBox from './components/TextBox.jsx';
import ImageBox from './components/ImageBox.jsx';

function navItem(name, link) {
  return <li class="duration-300 hover:translate-y-[-2px] text-center">{name}</li>
}

function sectionTitle(name, page, hasLineAbove) {
  if (hasLineAbove) {
    return <div class="flex flex-row justify-between px-4 font-semibold text-lg text-zinc-400 border-t-2 border-zinc-400"><p>{name}</p><p>Pg. {page}</p></div>
  } else {
    return <div class="flex flex-row justify-between px-4 font-semibold text-lg text-zinc-400"><p>{name}</p><p>Pg. {page}</p></div>
  }
}



function App() {
  const paperName = ["Times", "Journal", "Post", "Tribune", "Globe"]

  return (
    <div class="bg-white w-[calc(100%-2rem)] max-w-4xl mx-auto my-4 border-8 border-white shadow-pixel">
      <header class="w-fit h-48 flex flex-col justify-between mx-auto items-center my-2">
        <div class="w-full max-w-xl hidden sm:grid grid-cols-3"><p class="text-left">Oct 14, AM Edition</p><p class="text-center">rileycjson.com</p><p class="text-right">Vol. MCCXV, No. 1125 </p></div>
        <div class="m-auto font-['Chomsky'] text-center">
          <p class="text-7xl hidden md:inline">The Riley Johnson {paperName[Math.floor(Math.random() * paperName.length)]}</p>
          <p class="text-8xl md:hidden">Riley Johnson</p>
        </div>
        <div class="hidden sm:inline text-center"><p>A computer science student studying computer science and more at UT Dallas</p></div>
      </header>
      <nav class="p-0.5 border-y-2 border-black">
        <ul class="grid grid-cols-3 md:grid-cols-6">
          {navItem("News")}
          {navItem("Sports")}
          {navItem("Lifestyle")}
          {navItem("Business")}
          {navItem("Contact")}
          {navItem("25¢")}
        </ul>
      </nav>
      <body class="">
        <div class="mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-64 md:max-w-lg lg:max-w-3xl gap-4">
          <ImageBox wide="True"/>
          <TextBox title="About Me" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <TextBox title="&nbsp;" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
        </div>
        {sectionTitle("Sports", "2", true)}
        <div class="mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-64 md:max-w-lg lg:max-w-3xl gap-4">
          <ImageBox />
          <TextBox title="Ultimate Frisbee" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <ImageBox wide="True"/>
        </div>
        <div class="mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-64 md:max-w-lg lg:max-w-3xl gap-4">
        <ImageBox wide="True"/>
          <TextBox title="Rock Climbing" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <ImageBox />
        </div>
        {sectionTitle("Lifestyle", "3", true)}
        <div class="mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-64 md:max-w-lg lg:max-w-3xl gap-4">
          <ImageBox />
          <TextBox title="Keyboards" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <TextBox title="Cards" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <TextBox title="Video Games" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
        </div>
        <div class="mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-64 md:max-w-lg lg:max-w-3xl gap-4">
          <TextBox title="Music (Songs)" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <TextBox title="Music (Artists)" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <TextBox title="Film" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <ImageBox />
        </div>
        <div class="p-0.5 border-y-2 border-black flex justify-center"><p>Fun Fact: Giraffes are 30 times more likely to get hit by lightning than people.</p></div>
        {sectionTitle("Business", "4", false)}
        <div class="mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-64 md:max-w-lg lg:max-w-3xl gap-4">
          <ImageBox />
          <TextBox title="High School" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <ImageBox />
          <TextBox title="College" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
        </div>
        <div class="mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-64 md:max-w-lg lg:max-w-3xl gap-4">
          <TextBox title="Experience" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <ImageBox />
          <TextBox title="&nbsp;" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <ImageBox />
        </div>
        <div class="mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-64 md:max-w-lg lg:max-w-3xl gap-4">
          <TextBox title="Discord Bots" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <TextBox title="MEA Union" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <TextBox title="This Website" text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
          <TextBox title="Plans " text="Nunc quis aliquam enim. Curabitur iaculis, tortor eget placerat interdum, diam sapien porta arcu, sit amet sagittis nibh velit quis tellus. Suspendisse porta odio ut vestibulum malesuada. Aenean eu lobortis leo. Quisque elementum vitae odio sed lobortis. In et purus sed nisl luctus congue. Cras finibus semper mi. Cras efficitur dolor quis tempor suscipit." />
        </div>
        {sectionTitle("Contact", "5", true)}
        <div class="mx-auto my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-64 md:max-w-lg lg:max-w-3xl gap-4">
          <TextBox title="Add" text="Nunc quis aliquam enim." />
          <TextBox title="Some" text="Nunc quis aliquam enim." />
          <TextBox title="Contacts" text="Nunc quis aliquam enim." />
          <TextBox title="Here" text="Nunc quis aliquam enim." />
        </div>
        <div class="p-0.5 border-y-2 border-black flex justify-center"><p>Thanks for Reading!</p></div>
      </body>
    </div>
  )
}

export default App
