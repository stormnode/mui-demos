import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit
  }
});

class App extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>Word of the Day</Typography>
                <Typography type="headline" component="h2">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography className={classes.pos}>adjective</Typography>
                <Typography component="p">
                  ne scribentur definitiones delicatissimi pro, atqui appareat democritum ei eum, omnis invidunt evertitur eu qui.

                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>Word of the Day</Typography>
                <Typography type="headline" component="h2">
                  Lorem ipsum dolor sit amet
              </Typography>
                <Typography className={classes.pos}>adjective</Typography>
                <Typography component="p">
                  ne scribentur definitiones delicatissimi pro, atqui appareat democritum ei eum, omnis invidunt evertitur eu qui.

              </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>Word of the Day</Typography>
                <Typography type="headline" component="h2">
                  Lorem ipsum dolor sit amet
              </Typography>
                <Typography className={classes.pos}>adjective</Typography>
                <Typography component="p">
                  ne scribentur definitiones delicatissimi pro, atqui appareat democritum ei eum, omnis invidunt evertitur eu qui.

              </Typography>
                <Typography>
                  At per melius epicuri. Ad latine iuvaret mea, errem soluta adipisci ne quo, labore recteque ea vel. Sea ei libris nostrum maiestatis, graeco diceret concludaturque te pri, ius dolorem eleifend interesset et. Per copiosae inciderint dissentiunt no.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>Word of the Day</Typography>
                <Typography type="headline" component="h2">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography className={classes.pos}>adjective</Typography>
                <Typography component="p">
                  ne scribentur definitiones delicatissimi pro, atqui appareat democritum ei eum, omnis invidunt evertitur eu qui.
                </Typography>
                <Typography>
                  At per melius epicuri. Ad latine iuvaret mea, errem soluta adipisci ne quo, labore recteque ea vel. Sea ei libris nostrum maiestatis, graeco diceret concludaturque te pri, ius dolorem eleifend interesset et. Per copiosae inciderint dissentiunt no.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>Word of the Day</Typography>
                <Typography type="headline" component="h2">
                  Lorem ipsum dolor sit amet
              </Typography>
                <Typography className={classes.pos}>adjective</Typography>
                <Typography component="p">
                  ne scribentur definitiones delicatissimi pro, atqui appareat democritum ei eum, omnis invidunt evertitur eu qui.

                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title}>Word of the Day</Typography>
                <Typography type="headline" component="h2">
                  Lorem ipsum dolor sit amet
              </Typography>
                <Typography className={classes.pos}>adjective</Typography>
                <Typography component="p">
                  ne scribentur definitiones delicatissimi pro, atqui appareat democritum ei eum, omnis invidunt evertitur eu qui.

                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
App.displayName = 'App';
App.propTypes = {
  classes: PropTypes.any.isRequired
};
export default withStyles(styles)(App);
