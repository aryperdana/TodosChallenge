import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { ButtonComp, InputComp } from "./Comp";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { update } from "./features/userSlice";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formInitialValues = { name: "" };

  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required("Masukan nama terlebih dahulu"),
  });

  const formSubmitHandler = (value) => {
    dispatch(update({ name: value?.name }));
    navigate("/home");
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <Formik
          initialValues={formInitialValues}
          validationSchema={formValidationSchema}
          onSubmit={formSubmitHandler}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {console.log(errors)}
              <InputComp
                id="name"
                label="Name"
                name="name"
                size="md"
                onChange={handleChange}
                value={values?.name}
                error={errors.name && touched.name && true}
                errorText={errors.name}
              />
              <ButtonComp
                variant="success"
                size="sm"
                type="submit"
                className="px-3"
              >
                Next <IoArrowForwardOutline />
              </ButtonComp>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
