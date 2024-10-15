export default function TextBox(props) {
    return (
        <div class="text-justify text-sm leading-6">
            <h1 class="font-extrabold text-lg font-sans font-bold">{props.title}</h1>
            <p class="indent-4 font-serif font-light">{props.text}</p>
        </div>
    )
}