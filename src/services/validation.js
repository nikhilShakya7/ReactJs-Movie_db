import * as yup from "yup"
const currentYear = new Date().getFullYear();

const schema= yup.object().shape({
    name:yup.string().required("Name is required"),
    year:yup.number().required("Year is required").typeError("Must be a number").min(1878,"Thats earlier than the first motion picture").max(new Date().getFullYear(),"You cannot be in the future").required("Date is required"),
    genere:yup.string().required("Genre is required"),
    rating:yup.number().typeError("Invalid rating").min(0,"Minimum Rating is 0").max(100,"Maximum rating is 100"),
    poster:yup.string().required("Poster URL is required"),
});
export default schema           