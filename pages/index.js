import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Food App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <main>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </main>

      <footer>

      </footer>

      <style jsx>{`
       
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
