import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from './styles'
import { useSelector } from "react-redux";
import Post from '../Post/Post'


export default function Posts() {
  const classes = useStyles();
  const posts = useSelector(state => state.posts)
    // console.log(posts)

  return (
    <Grid container className={classes.root} spacing={2} >
      <Grid item xs={12} >
        <Grid container justifyContent="center" spacing={3}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} md={3} lg={3} spacing={3}>
              <Paper className={classes.paper} >
                <Post post={post}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>      
    </Grid>
  );
}
