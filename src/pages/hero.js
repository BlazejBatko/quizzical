import InitialPage from "../components/initialPage";


export default function HeroPage(props) {
    return(
        <InitialPage handleChange={props.handleChange} formData={props.formData} />
    )
}