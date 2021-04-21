import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userListActions } from "../../actions";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  userFields: {
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "8px",
    paddingBottom: "8px",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    fontSize: "20px"
  },
  backButton: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px"
  },
  msg: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "25px"
  }
}));

function UserDetails(props) {
  const classes = useStyles();
  let { id } = useParams();
  const [msg, setMsg] = useState("Please wait...");

  useEffect(() => {
    props.getUserDetailByID(id, () => {
      setMsg("User with id " + id + " not found");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container component="main">
      <div className={classes.title}>User Details</div>
      {props.currentUserDetails !== undefined ? (
        <>
          <Paper elevation={3}>
            {Object.keys(props.currentUserDetails).map((key, i) => (
              <div className={classes.userFields} key={i}>
                {detail(key, props.currentUserDetails)}
              </div>
            ))}
          </Paper>
        </>
      ) : (
        <div className={classes.msg}>{msg}</div>
      )}
      <div className={classes.backButton}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            props.history.push("/list");
          }}>
          Go Back
        </Button>
      </div>
    </Container>
  );
}

let detail = (key, data) => {
  if (key === "address") {
    return (
      <div>
        {capitalizeFirstLetter(key)}
        <div>Street: {data[key].street}</div>
        <div>Suite: {data[key].suite}</div>
        <div>City: {data[key].city}</div>
        <div>Zipcode: {data[key].zipcode}</div>
        <div>Latitude: {data[key].geo.lat}</div>
        <div>Longitude: {data[key].geo.lng}</div>
      </div>
    );
  } else if (key === "company") {
    return (
      <div>
        {capitalizeFirstLetter(key)}
        <div>Name: {data[key].name}</div>
        <div>CatchPhrase: {data[key].catchPhrase}</div>
        <div>BS: {data[key].bs}</div>
      </div>
    );
  } else {
    return (
      <div>
        {capitalizeFirstLetter(key)}: {data[key]}
      </div>
    );
  }
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function mapState(state) {
  const currentUserDetails = state.userListReducer.currentUserDetails;

  return { currentUserDetails };
}

const actionCreators = { getUserDetailByID: userListActions.getUserDetailByID };

const connectedUserDetailsPage = connect(mapState, actionCreators)(UserDetails);
export { connectedUserDetailsPage as UserDetails };
