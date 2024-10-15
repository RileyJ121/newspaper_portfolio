export default function ImageBox(props) {
    if (props.wide == "True") {
        return (
            <div class="col-span-1 max-h-64 lg:max-h-full md:col-span-2 h-full w-full object-cover">
                <img class="h-full w-full object-cover" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="W3Schools.com" />
            </div>

        )
    } else {
        return (
            <div class="h-full w-full object-cover">
                <img class="h-full w-full object-cover" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="W3Schools.com" />
            </div>
        )
    }
} 