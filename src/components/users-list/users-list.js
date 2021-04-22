import { useEffect } from "react";
import { connect } from "react-redux";
import { userListActions } from "../../actions";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid lightgray",
    marginTop: "10px"
  },
  list: {
    border: "1px solid #ccc",
    padding: "12px 15px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },
  info: {
    padding: "10px 0px",
    fontSize: "1.5rem",
    fontFamily: "Helvetica",
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: "0em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px"
    }
  },
  actions: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "25px"
  },
  detailBtn: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px"
    }
  }
}));

function UserList(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container component="main">
      <div className={classes.title}>Users List</div>
      {props.users.map((element, i) => {
        return (
          <div key={i} className={classes.list}>
            <div className={classes.info}>{element.name}</div>

            <div className={classes.actions}>
              <Button
                variant="contained"
                className={classes.detailBtn}
                size="small"
                color="primary"
                onClick={() => {
                  props.history.push("/details/" + element.id);
                }}>
                View Details
              </Button>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

function mapState(state) {
  const users = state.userListReducer.users;

  return { users };
}

UserList.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func,
  history: PropTypes.object
};

const actionCreators = { getUsers: userListActions.getUsers };

const connectedUserListPage = connect(mapState, actionCreators)(UserList);
export { connectedUserListPage as UserList };
