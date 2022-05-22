import PropTypes from 'prop-types';

import { AppBar, Button, Toolbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './options-bar.module.scss';
import { Image } from '@dark-rush-photography/website/types';
import { downloadImage } from '@dark-rush-photography/best-of/util';

interface Props {
  image: Image;
  isCloseButtonDisplayed: boolean;
  closeModalDialog?(): void;
}

OptionsBar.propTypes = {
  image: PropTypes.object.isRequired,
  isCloseButtonDisplayed: PropTypes.bool.isRequired,
  closeModalDialog: PropTypes.func,
};

export default function OptionsBar({
  image,
  isCloseButtonDisplayed,
  closeModalDialog,
}: Props): JSX.Element {
  const renderCloseButton = () => {
    if (!isCloseButtonDisplayed) return;

    return (
      <Button
        className={styles['closeButton']}
        onClick={() => {
          if (closeModalDialog) closeModalDialog();
        }}
      >
        <FontAwesomeIcon
          className={styles['icon']}
          icon="window-close"
          size="lg"
        />
      </Button>
    );
  };

  /*
  <FacebookShareButton
            style={{ display: 'inline' }}
            url={`https://www.darkrushphotography.com/api/facebook-image${location.pathname}/${image.fileNameWithoutExtension}`}
          >
            <Button className={classes.button}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={{
                  prefix: 'fab',
                  iconName: 'facebook-f',
                }}
                size="lg"
              />
              <span className={classes.buttonText}>SHARE</span>
            </Button>
          </FacebookShareButton>
           */
  return (
    <div className={styles['optionsBar']}>
      <AppBar position="static" className={styles['appBar']}>
        <Toolbar className={styles['container']}>
          <Button
            className={styles['button']}
            onClick={() => {
              downloadImage(image.large, image.fileName);
            }}
          >
            <FontAwesomeIcon
              className={styles['icon']}
              icon={{ prefix: 'fas', iconName: 'arrow-alt-down' }}
              size="lg"
            />
            <span className={styles['buttonText']}>DOWNLOAD</span>
          </Button>
          {renderCloseButton()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
