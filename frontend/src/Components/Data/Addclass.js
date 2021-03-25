import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import "./Data.css";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: '270px',
        height: '290px',
        margin: 'auto',
        padding: '20px',
        margin: '12px',
        cursor: 'pointer'
    },
    statsItem: {
        alignItems: "center",
        display: "flex",
    },
    statsIcon: {
        marginRight: theme.spacing(1),
        color: "#ea6a67"
    },
}));

const Addclass = ({ className, product, addClasson, ...rest }) => {
    const classes = useStyles();

    return (
        <div className="card">
            <Card className="card__inner" {...rest} onClick={addClasson}>
                <CardContent style={{ paddingBottom: '16px' }}>
                    <div class="plus radius" style={{ textAlign: "center", marginTop: "30px" }}>
                    </div>
                    <Typography
                        align="center"
                        color="textPrimary"
                        gutterBottom
                        variant="h4"
                        style={{ marginTop: "30px" }}
                    >
                        Add Class
                </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

Addclass.propTypes = {
    className: PropTypes.string,
};

export default Addclass;
