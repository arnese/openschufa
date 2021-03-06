import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {FormattedMessage} from 'react-intl';
import logo from '../../images/logo.png';
/*
import {MenuItem} from 'material-ui/Menu';
import MenuList from "material-ui/Menu/MenuList";
*/
import FileUpload from '@material-ui/icons/FileUpload';
import classNames from 'classnames';
import {Link} from "react-router-dom";
import styles from "./LandingPage.css";
import {STEP_USAGE} from "../../constants";


const inlineStyles = theme => ({
  header: {
    height: '4em',
    backgroundImage: `url(${logo})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginBottom: '1rem',
    width: '100%'
  },
  item: {
    width: '100%',
    textAlign: 'center'
  },
  secondToLastItem: {
    flex: '1 1 auto'
  },
  lastItem: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  languageContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  languageMenuList: {
    width: '3rem',
    paddingTop: 0
  },
  languageMenuItem: {
    textAlign: 'end',
    paddingTop: 0,
    paddingBottom: 6,
    paddingRight: 0,
    display: 'block',
    fontSize: '1rem',
    lineHeight: '1rem',
    height: 'UNSET'
  },
  button: {
    width: '10rem'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  leftButton: {
    paddingLeft: 0
  },
  rightButton: {
    paddingRight: 0
  },
  callToAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5rem',
    backgroundColor: theme.palette.primary.main,
    marginBottom: 10
  },
  callToActionTitle: {
    fontSize: '1.2rem'
  }
});

/*
const languages = [
  {locale: 'de', name: 'DE'},
  {locale: 'en', name: 'EN'},
];
*/


class Index extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object,
  };

  componentDidMount() {
    this.props.resetForm()
  }

  handleModalOpen = id => {
    const {openModal} = this.props;
    openModal(id);
  };

  handleLanguageClick = language => {
    const {switchLanguage} = this.props;
    switchLanguage(language)
  };

  handleUploadClick = () => {
    const { setActiveStep, resetForm, resetFinished } = this.props;
    setActiveStep(STEP_USAGE);
    resetForm();
    resetFinished();
  };

  render() {

    // const {classes, currentLanguage} = this.props;
    const { classes } = this.props;

    return (
      <div className={styles.root}>
        <div className={classes.header}>
          {/*<div className={classes.languageContainer}>
              <MenuList className={classes.languageMenuList}>
                {
                  languages
                    .filter(lang => lang.locale !== currentLanguage)
                    .map((lang, i) => {
                      return (
                        <MenuItem
                          key={i}
                          className={classes.languageMenuItem}
                          value={lang.locale}
                          onClick={() => this.handleLanguageClick(lang.locale)}
                        >
                          {lang.name}
                        </MenuItem>
                      );
                    })
                }
              </MenuList>
          </div>*/}
        </div>
        <div className={classes.callToAction}>
          <Typography className={classes.callToActionTitle} variant="title" noWrap={true}>
            <FormattedMessage
              id="LandingPage.calltoaction"
              defaultMessage="Help us to crack the SCHUFA!"
            />
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="subheading" gutterBottom>
            <FormattedMessage
              id="LandingPage.welcome"
              defaultMessage="Welcome to OpenSCHUFA!"
            />
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            <FormattedMessage
              id="LandingPage.upload.description"
              defaultMessage="You already have a SCHUFA-information that you wish to pass on to us?"
            />
          </Typography>
        </div>
        <div className={classes.item}>
          <Link to='/steps'>
            <Button
              color='primary'
              variant='raised'
              className={classes.button}
              onClick={this.handleUploadClick}
            >
              <FileUpload className={classNames(classes.leftIcon, classes.iconSmall)}/>
              <FormattedMessage
                id="LandingPage.upload.buttontext"
                defaultMessage="Upload"
              />
            </Button>
          </Link>
        </div>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            <FormattedMessage
              id="LandingPage.requestinfo.description"
              defaultMessage="You still have to apply for your SCHUFA-information?"
            />
          </Typography>
        </div>
        <div className={classes.item}>
          <Button
            color='default'
            variant='raised'
            className={classes.button}
            href="https://selbstauskunft.net/schufa/"
            target="_blank"
          >
            <FormattedMessage
              id="LandingPage.requestinfo.buttontext"
              defaultMessage="Apply"
            />
          </Button>
        </div>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            <FormattedMessage
              id="LandingPage.openschufa.description"
              defaultMessage="You want to know more about the project and those who participate?"
            />
          </Typography>
        </div>
        <div className={classNames(classes.item)}>
          <Button
            color='default'
            variant='raised'
            className={classes.button}
            onClick={() => this.handleModalOpen('openschufa')}
          >
            <FormattedMessage
              id="LandingPage.openschufa.buttontext"
              defaultMessage="Get information"
            />
          </Button>
        </div>
        <div className={classes.item}>
          <Typography variant="body1" gutterBottom>
            <FormattedMessage
              id="LandingPage.faq.description"
              defaultMessage="Frequently asked questions"
            />
          </Typography>
        </div>
        <div className={classNames(classes.item, classes.secondToLastItem)}>
          <Button
            color='default'
            variant='raised'
            className={classes.button}
            onClick={() => this.handleModalOpen('faq')}
          >
            <FormattedMessage
              id="LandingPage.faq.buttontext"
              defaultMessage="FAQ"
            />
          </Button>
        </div>
        <div className={classes.lastItem}>
          <Button className={classes.leftButton}
                  size='small'
                  onClick={() => this.handleModalOpen('imprint')}
          >
            <FormattedMessage
              id="LandingPage.impressum"
              defaultMessage="Imprint"
            />
          </Button>
          <Button className={classes.rightButton}
                  size='small'
                  onClick={() => this.handleModalOpen('dataprivacy')}
          >
            <FormattedMessage
              id="LandingPage.dataprivacy"
              defaultMessage="Data privacy statement"
            />
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(inlineStyles)(Index);
