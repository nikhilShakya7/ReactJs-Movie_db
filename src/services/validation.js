import * as yup from "yup";
const schema=yup.object.shape({
    name:yup.string().required("Name is required"),
    year:yup.number()
    .typeError("Year must be a number")
    .min(1878,"Thats earlier than the first motion picture!")
    .max(new Date().getFullYear(),"Year cant be in future")
    .required("Year is required"),
    genere:yup.string().
    required("Genre is required"),
    rating:yup.number()
    .typeError("Rating must be a number")
    .max(100,"Maximum rating is 100")
    .required("Rating is required"),
    poster:yup.string()
    .url("Invalid Link")
    .required("Poster URL is required"),
})